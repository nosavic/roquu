import React, { useState } from "react";
import Logo from "../assets/svg/Logo";
import Person from "../assets/profile.svg";
import Image from "next/image";
import ArrowR from "@/assets/svg/ArrowR";
import Globe from "@/assets/svg/Globe";
import Logout from "@/assets/svg/Logout";
import Menu from "@/assets/svg/Menu";

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center justify-between px-[30px]">
        <div className="flex items-center text-center gap-[40px] ">
          <div>
            <Logo />
          </div>
          <div className="w-[1px] tablet2:hidden h-[40px] bg-[#A7B1BC20]" />
          <div className="sreg flex tablet2:hidden  items-center justify-between w-[276px] whitespace-nowrap">
            <p>Exchange</p>
            <p>Wallets</p>
            <p>Roqqu Hub</p>
          </div>
        </div>
        <div className="flex tablet2:hidden items-center gap-[20px]">
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
        <div className="hidden relative tablet2:block ">
          <div onClick={() => setMenu(!menu)}>
            <Menu />
          </div>
          <div className="absolute top-[30px] right-0 ">{menu && <Comp />}</div>
        </div>
      </div>
    </>
  );
}

export function Comp() {
  return (
    <div>
      <div
        style={{ zIndex: 50000000 }}
        className="flex flex-col items-center py-[20px] rounded-[8px]  bg-[#12171D] justify-between "
      >
        <div className="flex flex-col items-center text-center gap-[40px] ">
          <div className="sreg flex flex-col gap-[10px] items-center justify-between w-[276px] whitespace-nowrap">
            <p>Exchange</p>
            <p>Wallets</p>
            <p>Roqqu Hub</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[20px]">
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
    </div>
  );
}
