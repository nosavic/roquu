import ArrowD from "@/assets/svg/ArrowD";
import { Hamburger1, Hamburger2, Hamburger3 } from "@/assets/svg/Hamburger";
import React, { Component, useState } from "react";

export default function Section2() {
  const [trade, setTrade] = useState<number>(1);

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
      {trade === 1 ? <OrderBook /> : <RecentTrades />}
    </div>
  );
}

export function OrderBook() {
  const [ham, setHam] = useState<number>(1);
  return (
    <>
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
        <div className="w-[63px] h-[32px]  rounded-[8px] flex items-center justify-around ">
          <p>10</p>
          <ArrowD />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full  text-white">
          <thead className="text-[14px] sl text-[#A7B1BC] leading-[16px]">
            <tr>
              <th className="px-4 py-2 text-left">Price (USDT)</th>
              <th className="px-4 py-2 text-left">Amounts (BTC)</th>
              <th className="px-4 py-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {Tabledata.map((row, index) => (
              <tr key={index} className=" even:bg-[#FF683815]">
                <td className="px-4 py-2 text-orange-600">{row.price}</td>
                <td className="px-4 py-2">{row.amount}</td>
                <td className="px-4 py-2">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function RecentTrades() {
  return (
    <div>
      <div></div>
    </div>
  );
}

const TradesTray = [
  { key: 1, label: "Order Book", component: <OrderBook /> },
  { key: 2, label: "Recent trades", component: <RecentTrades /> },
];

const HamburgerIconTray = [
  { key: 1, icon: <Hamburger1 /> },
  { key: 2, icon: <Hamburger2 /> },
  { key: 3, icon: <Hamburger3 /> },
];

const Tabledata = [
  { price: "36920.12", amount: "0.758965", total: "28,020.98" },
  { price: "36920.12", amount: "0.758965", total: "28,020.98" },
  { price: "36920.12", amount: "0.758965", total: "28,020.98" },
  { price: "36920.12", amount: "0.758965", total: "28,020.98" },
  { price: "36920.12", amount: "0.758965", total: "28,020.98" },
];
