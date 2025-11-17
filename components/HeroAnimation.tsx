"use client";

import animationData from "./Azze.json";
import { useLottie } from "lottie-react";

const HeroAnimation = () => {
  const defaultOptions = {
    animationData,
    loop: true,
    style: {
      height: "75%",
      width: "75%",
      margin: "auto",
    },
  };
  const Lottie = useLottie(defaultOptions);
  Lottie.setSpeed(0.5);
  const { View } = Lottie;

  return <div className='max-lg:hidden lg:flex flex-2'>{View}</div>;
};

export default HeroAnimation;
