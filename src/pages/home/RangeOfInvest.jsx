import React from "react";
import { Progress } from "@components/ui/progress";
import { formatNumber } from "@lib/formatNumber";

function RangeOfInvest({ rangeMoney, sborPercent }) {
  const money = formatNumber(rangeMoney);
  return (
    <div className="w-full flex flex-col items-start gap-y-[5px]">
      <div className="w-full flex items-center text-gray-normal justify-between">
        <span className=" text-sm font-medium">0</span>
        <span className=" text-sm font-medium">$ {money}</span>
      </div>
      <div className="w-full bg-white-aqua h-2.5 rounded-full">
        <div
          style={{ width: sborPercent + "%" }}
          className={`h-full bg-orange-hover rounded-full`}
        ></div>
      </div>
      <div className="flex items-center w-full justify-between ">
        <span className="text-black-medium text-xs font-medium ">
          Сбор до 21.09.24
        </span>
        <b className="text-black-md text-base font-bold">{sborPercent}%</b>
      </div>
    </div>
  );
}

export default RangeOfInvest;
