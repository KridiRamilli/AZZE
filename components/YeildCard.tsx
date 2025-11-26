"use client";

import { ReactElement } from "react";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

export type YeildProps = {
  percentage: number;
  token: string;
  icon: string;
};
interface icons {
  azze: ReactElement;
  ethereum: ReactElement;
  bitcoin: ReactElement;
}

const iconObj: icons = {
  azze: <VscAzure className='text-3xl text-fuchsia-600 max-md:text-2xl' />,
  ethereum: (
    <FaEthereum className='text-3xl text-fuchsia-600 max-md:text-2xl' />
  ),
  bitcoin: <FaBitcoin className='text-3xl text-fuchsia-600 max-md:text-2xl' />,
};

const YeildCard = (props: YeildProps) => {
  const { token, percentage, icon } = props;
  return (
    <div className='bg-white flex flex-col items-left justify-center rounded-2xl shadow-sm border border-white w-1/3 pl-3 m-2  max-md:pl-1 max-md:w-full max-md:pt-1'>
      <div className='flex flex-row ml-4 max-md:ml-3'>
        {iconObj[icon as keyof icons]}
        {"  "}
        <span className='text-2xl ml-1 max-lg:text-lg max-sm:text-md'>
          {token}
        </span>
      </div>
      <div className='text-3xl mt-2 ml-4 max-md:text-xl max-md:ml-3 max-sm:text-md max-lg:text-xl'>
        {percentage}%{" "}
        <span className='text-2xl max-lg:text-lg max-sm:text-sm'>APY</span>
      </div>
    </div>
  );
};

export default YeildCard;
