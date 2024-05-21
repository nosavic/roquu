import React from "react";
import TradingView from "./TradingView";
import RecentTrades from "./RecentTrades";
import History from "./History";
import BuySell from "./BuySell";

export default function Sections() {
  return (
    <>
      <main className="w-[100%] flex gap-[8px] ">
        <div className="flex w-[80%] flex-col gap-[8px]">
          <div className="flex justify-between gap-[8px]">
            <div className="bg-[#20252B] border border-[#262932] w-[80%] h-[516px] rounded-[8px]">
              <TradingView />
            </div>
            <div className="bg-[#20252B] border border-[#262932] w-[30%] h-[516px] rounded-[8px]">
              <RecentTrades />
            </div>
          </div>
          <div className="bg-[#20252B]  h-[516px] rounded-[8px] border border-[#262932]">
            <History />
          </div>
        </div>
        <div className="bg-[#20252B] border border-[#262932] w-[20%] h-[716px] rounded-[8px]">
          <BuySell />
        </div>
      </main>
    </>
  );
}
