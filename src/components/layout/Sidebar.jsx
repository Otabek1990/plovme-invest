import { sidebarItems } from "@constants/sidebarItems";
import { useState } from "react";
import { Button } from "../ui/button";
import sidebarAdsImage from "@assets/images/sidebarAds.jpg";
import avatar from "@assets/images/avatar.svg";
import ExitIcon from "../icons/ExitIcon";

function Sidebar() {
  const [active, setActive] = useState(1);
  return (
    <aside className="h-[939px] w-[294px]">
      <div className="bg-white flex flex-col gap-y-2.5 items-center rounded-20  p-5 pb-[30px]">
        {sidebarItems.map((item) => (
          <Button
            className={`${
              active === item.id
                ? "bg-orange-hover text-white"
                : "bg-gray-light text-black-bold"
            } w-full  h-auto py-2.5 text-lg  px-[15px] flex rounded-lg shadow-none items-center justify-start gap-x-4`}
            onClick={() => setActive(item.id)}
            key={item.id}
          >
            <item.icon iconColor={active === item.id ? "white" : ""} />
            <h2>{item.title}</h2>
          </Button>
        ))}
        <img className="mt-8" src={sidebarAdsImage} alt="sidebar ads image" />
      </div>
      <Button className="bg-purple flex rounded-[20px] h-auto items-center justify-between p-4 w-full mt-5">
        <div className="flex items-center gap-[25px]">
          <ExitIcon />
          <span className="text-white text-xl font-medium">Выйти</span>
        </div>
        <img className="h-10 w-10 object-cover" src={avatar} alt="avatar" />
      </Button>
    </aside>
  );
}

export default Sidebar;
