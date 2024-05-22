import React from "react";
import TradingView from "./TradingView";
import RecentTrades from "./Section2";
import History from "./History";
import BuySell from "./BuySell";
import Section2 from "./Section2";

export default function Sections() {
  return (
    <>
      <main className="w-[100%] flex gap-[8px] ">
        <div className="flex w-[90%] flex-col gap-[8px]">
          <div className="flex justify-between gap-[8px]">
            <div className="bg-[#20252B] border border-[#262932] w-[90%] h-[661px] rounded-[8px]">
              <TradingView />
            </div>
            <div className="bg-[#20252B] border border-[#262932] w-[25%] h-[661px] rounded-[8px]">
              <Section2 />
            </div>
          </div>
          <div className="bg-[#20252B]  h-[561px] rounded-[8px] border border-[#262932]">
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
