import React from "react";
import TradingView from "./TradingView";
import RecentTrades from "./Section2";
import History from "./History";
import BuySell from "./BuySell";
import Section2 from "./Section2";

export default function Sections() {
  return (
    <>
      <main className="w-[100%] flex wall2:flex-wrap gap-[8px] ">
        <div className="flex wall2:w-[100%] w-[90%] flex-col gap-[8px]">
          <div className="flex wall:flex-wrap justify-between gap-[8px]">
            <div className="bg-[#20252B] border border-[#262932] w-[80%] wall:w-[100%] h-[661px] rounded-[8px]">
              <TradingView />
            </div>
            <div className="bg-[#20252B] border border-[#262932] wall:w-[100%] w-[25%] h-[661px] rounded-[8px]">
              <Section2 />
            </div>
          </div>
          <div className="bg-[#20252B]  h-[561px] rounded-[8px] border border-[#262932]">
            <History />
          </div>
        </div>
        <div className="bg-[#20252B] border border-[#262932] wall2:w-[100%] w-[20%] h-[716px] rounded-[8px]">
          <BuySell />
        </div>
      </main>
    </>
  );
}
