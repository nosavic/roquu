import ArrowD from "@/assets/svg/ArrowD";
import CandleChart from "@/assets/svg/CandleChart";
import Expand from "@/assets/svg/Expand";
import Redo from "@/assets/svg/Redo";
import Undo from "@/assets/svg/Undo";
import React, { useState } from "react";
import ApexCharts from "apexcharts";
import CandlestickChart from "../Tools/CandlestickChart";

export default function TradingView() {
  const [time, setTime] = useState<number>(1);

  return (
    <main>
      <div className="flex items-center justify-between px-[15px] py-[25px]   ">
        <div className="flex items-center">
          <div className="flex cursor-pointer gap-[15px] ">
            {TimeTray.map((value) => (
              <div
                onClick={() => {
                  setTime(value.key);
                }}
                className={`h-[28px] w-[40px] py-[6px] px-[12px] rounded-[100px] ${
                  time === value.key && "bg-[#555C63]"
                }   items-center justify-center flex `}
                key={value.key}
              >
                {value.time}
              </div>
            ))}
          </div>
          <div className="flex gap-[1rem] items-center">
            <div>
              <ArrowD />
            </div>
            <div className="w-[1px] h-[25px] items-start bg-[#A7B1BC20]" />
            <CandleChart />
            <div className="w-[1px] h-[25px] items-start bg-[#A7B1BC20]" />
            <div>Fx Indicators</div>
            <div className="w-[1px] h-[25px] items-start bg-[#A7B1BC20]" />
            <Undo />
            <Redo />
            <div className="w-[1px] h-[25px] items-start bg-[#A7B1BC20]" />
          </div>
        </div>
        <Expand />
      </div>
      <div className="bg-[#32383F95] h-[1px] w-[100%] mt-[5x] mb-[10px]" />
      <div>
        <CandlestickChart />
      </div>
    </main>
  );
}

const TimeTray = [
  { key: 0, time: "Time" },
  { key: 1, time: "1H" },
  { key: 2, time: "2H" },
  { key: 3, time: "4H" },
  { key: 4, time: "1D" },
  { key: 5, time: "1W" },
  { key: 6, time: "1M" },
];
