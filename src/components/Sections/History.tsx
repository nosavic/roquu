import React, { useState } from "react";

export default function History() {
  const [history, setHistory] = useState<number>(1);

  return (
    <div className="h-[100%]">
      <div className="">
        <div className="bg-[#00000016] whitespace-nowrap overflow-x-scroll no-scrollbar tablet2:gap-[10px] cursor-pointer h-[40px]  rounded-[8px] flex items-center sl text-[14px] leading-[16px] font-medium justify-around m-[20px]">
          {HistoryTray.map((value) => (
            <div
              onClick={() => setHistory(value.key)}
              className={` ${
                history === value.key && "bg-[#21262C]"
              }  flex items-center justify-center w-[155px] h-[36px] rounded-[8px] `}
              key={value.key}
            >
              {value.label}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center flex flex-col items-center">
        <div className="text-[24px] mb-[5px]">No Open Orders</div>
        <p className="text-[15px] max-w-[378px] text-[#A7B1BC] leading-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
          nullam sit imperdiet pulvinar.
        </p>
      </div>
    </div>
  );
}

const HistoryTray = [
  { key: 1, label: "Open Orders" },
  { key: 2, label: "Positions" },
  { key: 3, label: "Order History" },
  { key: 4, label: "Trade History" },
];
