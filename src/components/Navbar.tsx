import React from "react";
import Logo from "../assets/svg/Logo";
import Person from "../assets/profile.svg";
import Image from "next/image";
import ArrowR from "@/assets/svg/ArrowR";
import Globe from "@/assets/svg/Globe";
import Logout from "@/assets/svg/Logout";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center text-center gap-[40px] ">
          <div>
            <Logo />
          </div>
          <div className="w-[1px] h-[40px] bg-[#A7B1BC20]" />
          <div className="sreg flex items-center justify-between w-[276px] whitespace-nowrap">
            <p>Exchange</p>
            <p>Wallets</p>
            <p>Roqqu Hub</p>
          </div>
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="w-[181px] px-[10px] h-[48px] gap-[5px]  bg-[#12171D] rounded-[8px] flex items-center ">
            <Image className="" src={Person} alt="profile"></Image>
            <p className="text-ellipsis overflow-hidden text-nowrap">
              Olakunle Temiloluwa
            </p>
            <div>
              <ArrowR />
            </div>
          </div>
          <Globe />
          <Logout />
        </div>
      </div>
    </>
  );
}
