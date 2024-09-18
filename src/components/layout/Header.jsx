import React from "react";
import blockIcon from "@assets/icons/block.svg";
import messageIcon from "@assets/icons/message.svg";
import ruFlag from "@assets/icons/ruFlag.svg";
import avatar from "@assets/images/avatar.svg";
import menu from "@assets/icons/menu.svg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full rounded-20 p-5 flex items-center justify-between bg-white">
      <div className="flex gap-x-[25px] items-center">
        <Link to={"/"} className="text-black-dark text-[35px] ml-5 font-light">
          plovme.<span className="font-medium">invest</span>
        </Link>
        <div className=" flex h-[60px] items-center ps-6 gap-2.5 border-white-border border-s-2">
          <h2 className="text-black-dark font-medium text-xl">Баланс</h2>
          <span className="text-orange-hover text-[22px] font-bold">
            100 831 сум
          </span>
          <Button className="bg-transparent border border-orange-hover text-orange-hover  text-xs font-medium ml-2 h-[42px] w-[147px] px-[42px] hover:bg-orange-hover hover:text-white duration-200 shadow-none py-3">
            пополнить
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-[25px]">
        <div className="flex items-center gap-x-2.5">
          <div className="bg-green h-2.5 w-2.5 rounded-full"></div>
          <h2 className="text-black-dark font-medium text-xl">Прямой эфир</h2>
        </div>
        <div className="flex items-center gap-x-2.5">
          <Button className="bg-gray-light rounded-15 h-[60px] w-[60px] shadow-none">
            <img src={blockIcon} alt="block icon" />
          </Button>
          <Button className="bg-gray-light rounded-15 h-[60px] shadow-none w-[60px]">
            <img src={messageIcon} alt="message icon" />
          </Button>
        </div>
        <div className="flex items-center gap-x-2.5">
          <img src={avatar} alt="avatar" />
          <h2 className="text-black-dark font-medium text-xl">Артем Королев</h2>
        </div>
        <Button className="bg-transparent flex items-center gap-x-2.5 shadow-none">
          <img src={ruFlag} alt="russian flag" />
          <span className="font-medium text-base text-black-light">RU</span>
        </Button>
        <Button className="bg-gray-light rounded-15 h-[60px] shadow-none w-[60px]">
          <img src={menu} alt="menu" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
