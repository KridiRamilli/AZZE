"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className='footer w-full h-130 bg-gray-900 relative flex flex-col items-center justify-center overflow-hidden pb-0'>
      <p className='text-amber-50'>
        Optimized yield. Automated intelligence. Real results.
      </p>
      <span className='text-[48rem] text-amber-50 p-0 m-0 block opacity-5'>
        AZZE
      </span>
      <div className='bg-linear-to-t from-gray-950 to-transparent w-full h-90 absolute bottom-0'>
        <span className='text-gray-300 absolute bottom-5 left-20'>
          ©2025 AZZE. ALL RIGHTS RESERVED.
        </span>
      </div>
      <div className='contentContainer flex flex-row  px-10 border-red-50 w-[80%] h-90 absolute top'>
        <p className='w-1/3 bg-transparent text-amber-50 text-[3rem]'>
          Optimized yield. Automated intelligence. <br /> Real results.
        </p>
        <div className='socials w-1/3 bg-transparent'>
          <p className=' text-amber-50 text-2xl text-center'>
            Let&apos;s Connect!
          </p>
          <div className='socials text-amber-50 flex flex-row text-4xl justify-around mt-20'>
            <Link href={""}>
              <FaGithub />
            </Link>
            <Link href={""}>
              <BsTwitterX />
            </Link>
            <Link href={""}>
              <FaDiscord />
            </Link>
            <Link href={""}>
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className='contact w-1/3 bg-transparent pl-20 flex flex-col items-left'>
          <p className='text-2xl text-amber-50'>Contact Us</p>
          <div className='contactElement flex justify-baseline text-amber-50 mt-10'>
            <FaLocationDot className='text-2xl text-fuchsia-500' />
            <p className='ml-5'>Sheshi Taulantia Nr.1, Durrës, Albania</p>
          </div>
          <div className='contactElement flex text-amber-50 mt-10'>
            <FaWhatsapp className='text-2xl text-fuchsia-500' />
            <p className='ml-5'>+35569 20 82 408</p>
          </div>
          <div className='contactElement flex text-amber-50 mt-10'>
            <IoIosMail className='text-2xl text-fuchsia-500' />
            <p className='ml-5'>info@azze.app</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
