"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";

// Perlin noise for organic movement
function generateNoise() {
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const n = Math.floor(Math.random() * (i + 1));
    const tmp = p[i];
    p[i] = p[n];
    p[n] = tmp;
  }
  return (x, y, z) => {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const zf = z - Math.floor(z);

    const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (a, b, t) => a + t * (b - a);

    const grad = (hash, x, y, z) => {
      const h = hash & 15;
      const u = h < 8 ? x : y;
      const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
      return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    };

    const A = p[X] + Y;
    const B = p[X + 1] + Y;
    const AA = p[A] + Z;
    const AB = p[A + 1] + Z;
    const BA = p[B] + Z;
    const BB = p[B + 1] + Z;

    return lerp(
      lerp(
        lerp(grad(p[AA], xf, yf, zf), grad(p[BA], xf - 1, yf, zf), fade(xf)),
        lerp(
          grad(p[AB], xf, yf - 1, zf),
          grad(p[BB], xf - 1, yf - 1, zf),
          fade(xf)
        ),
        fade(yf)
      ),
      lerp(
        lerp(
          grad(p[AA + 1], xf, yf, zf - 1),
          grad(p[BA + 1], xf - 1, yf, zf - 1),
          fade(xf)
        ),
        lerp(
          grad(p[AB + 1], xf, yf - 1, zf - 1),
          grad(p[BB + 1], xf - 1, yf - 1, zf - 1),
          fade(xf)
        ),
        fade(yf)
      ),
      fade(zf)
    );
  };
}

export default function ParticleSphere() {
  const mountRef = useRef(null);

  useEffect(() => {
    const noise3D = generateNoise();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const PARTICLES = 8000;
    const positions = new Float32Array(PARTICLES * 3);
    const finalPositions = [];

    const geometry = new THREE.BufferGeometry();
    const radius = 1.5;

    // Generate outer shell only (perfect circle)
    for (let i = 0; i < PARTICLES; i++) {
      const phi = Math.random() * Math.PI * 2;
      const costheta = Math.random() * 2 - 1;
      const theta = Math.acos(costheta);

      const r = radius * (0.95 + Math.random() * 0.05); // outer shell

      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);

      finalPositions.push([x, y, z]);

      // Start far away randomly
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: "#9dd6ff",
      size: 0.015,
      transparent: true,
      opacity: 0.9,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const speed = 0.08; // base speed toward sphere

    const animate = () => {
      requestAnimationFrame(animate);

      let allReached = true;

      for (let i = 0; i < PARTICLES; i++) {
        const idx = i * 3;
        const [fx, fy, fz] = finalPositions[i];

        const dx = fx - positions[idx];
        const dy = fy - positions[idx + 1];
        const dz = fz - positions[idx + 2];

        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist > 0.001) {
          allReached = false;
          // Move toward target with easing (fast → slow near target)
          const move = speed * Math.pow(dist, 0.7);
          positions[idx] += dx * move;
          positions[idx + 1] += dy * move;
          positions[idx + 2] += dz * move;
        }
      }

      // Organic floating after formation
      if (allReached) {
        const time = performance.now() * 0.0005;
        for (let i = 0; i < PARTICLES; i++) {
          const [fx, fy, fz] = finalPositions[i];
          const nX = noise3D(fx + time, fy, fz);
          const nY = noise3D(fx, fy + time, fz);
          const nZ = noise3D(fx, fy, fz + time);

          positions[i * 3] = fx + nX * 0.12;
          positions[i * 3 + 1] = fy + nY * 0.12;
          positions[i * 3 + 2] = fz + nZ * 0.12;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className='w-full h-screen bg-black' />;
}
