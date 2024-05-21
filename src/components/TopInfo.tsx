import Image from "next/image";
import React from "react";
import Coins from "../assets/coins.svg";
import ArrowD from "@/assets/svg/ArrowD";
import Clock from "../assets/svg/Clock";
import UpA from "../assets/svg/UpA";
import DownA from "../assets/svg/DownA";
import Chart from "../assets/svg/Chart";

export default function TopInfo() {
  return (
    <>
      <div className="flex items-center gap-[20px] h-[80px] sreg bg-[#20252B] border border-[#262932] rounded-[8px] px-[20px]">
        <Image src={Coins} alt="coins"></Image>
        <p className="text-[24px] sm">BTC/USDT</p>
        <ArrowD />
        <p className="text-[18px] text-[#00C076] sreg">$20,634</p>
        {InfoTray.map((info) => (
          <div key={info.key}>
            <div className="flex gap-[30px] items-center">
              <div className="w-[1px] h-[48px] items-start bg-[#A7B1BC20]" />
              <div className=" items-start flex flex-col gap-[5px] mr-[40px] ">
                <div className="flex items-center gap-[3px] text-center">
                  <div>{info.icon}</div>
                  <div className="text-[12px] text-[#A7B1BC] leading-[20px]">
                    {info.time}
                  </div>
                </div>
                <div
                  className={`text-[14px] leading-[24px] ${
                    info.key === 1 ? "text-[#00C076]" : ""
                  } `}
                >
                  {info.value}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const InfoTray = [
  { key: 1, icon: <Clock />, time: "24h change", value: "520.80 +1.25%" },
  { key: 2, icon: <UpA />, time: "24h high", value: "520.80 +1.25%" },
  { key: 3, icon: <DownA />, time: "24h low", value: "520.80 +1.25%" },
  { key: 4, icon: <Chart />, time: "24h volume", value: "75.655.26" },
];
