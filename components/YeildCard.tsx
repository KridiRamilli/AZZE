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
  azze: <VscAzure className='text-3xl text-fuchsia-600' />,
  ethereum: <FaEthereum className='text-3xl text-fuchsia-600' />,
  bitcoin: <FaBitcoin className='text-3xl text-fuchsia-600' />,
};

const YeildCard = (props: YeildProps) => {
  const { token, percentage, icon } = props;
  return (
    <div className='bg-white flex flex-col items-left justify-center rounded-2xl shadow-sm border border-white w-1/3 pl-3 m-2  '>
      <div className='flex flex-row ml-4'>
        {iconObj[icon as keyof icons]}
        {"  "}
        <span className='text-2xl ml-1'>{token}</span>
      </div>
      <div className='text-3xl mt-2 ml-4'>
        {percentage}% <span className='text-2xl'>APY</span>
      </div>
    </div>
  );
};

export default YeildCard;
