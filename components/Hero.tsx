"use client";

import { motion } from "motion/react";
import HeroAnimation from "./HeroAnimation";
import YeildCard from "./YeildCard";

import { YeildProps } from "./YeildCard";

const standardTokenObj = {
  azze: {
    percentage: 14.7,
    token: "$azze",
    icon: "azze",
  },
  ethereum: {
    percentage: 28.5,
    token: "$azETH",
    icon: "ethereum",
  },
  bitcoin: {
    percentage: 22.1,
    token: "$azBTC",
    icon: "bitcoin",
  },
};
const boostedTokenObj = {
  azzex: {
    percentage: 18.2,
    token: "$azzeX",
    icon: "azze",
  },
  ethereumx: {
    percentage: 32.5,
    token: "$azETHX",
    icon: "ethereum",
  },
  bitcoinx: {
    percentage: 26.3,
    token: "$azBTCX",
    icon: "bitcoin",
  },
};

const generateYeildCard = (props: { [key: string]: YeildProps }) => {
  {
    return Object.entries(props).map(([, val], idx) => {
      const { percentage, token, icon } = val;
      return (
        <YeildCard
          key={idx}
          percentage={percentage}
          icon={icon}
          token={token}
        />
      );
    });
  }
};

const Hero = () => {
  return (
    <div className='w-full relative isolate px-6 lg:px-8 max-md:px-0'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className='relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75'
        />
      </div>
      <div className='heroContainer w-full'>
        <div className='w-full relative isolate px-6 lg:px-8 max-md:px-0'>
          <div className='flex md:flex-row sm:flex-col'>
            <div className='mx-auto max-w-4xl max-md:max-w-full sm:pt-22 lg:pt-32 flex-4'>
              <div className='text-center'>
                <h1 className='text-5xl max-md:text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl'>
                  Welcome to the{" "}
                  <span className='text-fuchsia-500'> future</span> of Finance
                </h1>
                <p className='mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
                  Smarter DeFi. Higher Yields. Zero Complexity.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  scale: { type: "spring", visualDuration: 0.7, bounce: 0.1 },
                }}
              >
                <div className='tokenStats flex flex-col w-full h-72 px-6 lg:px-8 mt-4 max-md:px-2 max-md:flex-row max-md:justify-around max-md:h-80'>
                  <div className='tokenStabel flex flex-row justify-around h-1/2 py-3 max-md:flex-col max-md:h-full'>
                    {generateYeildCard(standardTokenObj)}
                  </div>
                  <div className='tokenCrypto flex flex-row justify-around h-1/2 py-3 max-md:flex-col max-md:h-full'>
                    {generateYeildCard(boostedTokenObj)}
                  </div>
                </div>
              </motion.div>
            </div>
            <HeroAnimation />
          </div>
        </div>
      </div>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-[calc(100%-16rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className='relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75'
        />
      </div>
    </div>
  );
};

export default Hero;
