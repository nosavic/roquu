import ArrowD from "@/assets/svg/ArrowD";
import { Hamburger1, Hamburger2, Hamburger3 } from "@/assets/svg/Hamburger";
import React, { useState } from "react";

export default function RecentTrades() {
  const [trade, setTrade] = useState<number>(1);
  const [ham, setHam] = useState<number>(1);

  return (
    <div className="w-[100%] ">
      <div className="flex justify-center">
        <div className="bg-[#00000016] rounded-[8px] cursor-pointer flex w-[90%] mt-[14px] justify-between">
          {TradesTray.map((value) => (
            <div
              onClick={() => setTrade(value.key)}
              className={` ${
                trade === value.key && "bg-[#21262C]"
              }  flex items-center justify-center w-[50%] h-[40px] m-[3px] rounded-[8px] `}
              key={value.key}
            >
              {value.label}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center p-[10px] ">
        <div className="flex">
          {HamburgerIconTray.map((value) => (
            <div
              onClick={() => setHam(value.key)}
              className={` ${
                ham === value.key && "bg-[#353945]"
              } w-[32px] h-[32px] rounded-[4px] `}
              key={value.key}
            >
              {value.icon}
            </div>
          ))}
        </div>
        <div className="w-[63px] h-[32px] bg-[#353945] rounded-[8px] flex items-center justify-around ">
          <p>10</p>
          <ArrowD />
        </div>
      </div>
    </div>
  );
}

const TradesTray = [
  { key: 1, label: "Order Book" },
  { key: 2, label: "Recent trades" },
];

const HamburgerIconTray = [
  { key: 1, icon: <Hamburger1 /> },
  { key: 2, icon: <Hamburger2 /> },
  { key: 3, icon: <Hamburger3 /> },
];
