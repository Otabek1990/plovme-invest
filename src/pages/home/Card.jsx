import React from "react";
import RangeOfInvest from "./RangeOfInvest";
import { Button } from "@components/ui/button";
import { homeCardStatusses } from "@constants/homeCardStatusses";

function Card({
  image,
  address,
  doxodnostPercent,
  srokViplata,
  rangeMoney,
  sborPercent,
  status,
  id,
}) {
  const bgColor = homeCardStatusses[status].bgColor;
  const color = homeCardStatusses[status].color;
  return (
    <section className="w-full relative pb-[30px] bg-white  rounded-20 shadow-sm">
      <div
        style={{ backgroundColor: bgColor, color: color,top:status==="ended" ? "52.2px":"14.5px" }}
        className={`py-1 px-[14.5px] w-fit flex items-center justify-center rounded-full absolute h-[33.5px]  left-[14.5px]  text-sm font-medium`}
      >
        {homeCardStatusses[status].titleRu}
      </div>
      <img
        className="h-56 object-cover rounded-20 w-full"
        src={image}
        alt={address}
      />
      <div className="px-[25px] pt-[15px]">
        <h2 className="text-black-dark h-10 text-xl font-medium w-72 leading-[22px]">
          Точка в {address}
        </h2>
        <div className="w-full mt-5 mb-[30px] flex flex-col items-start gap-y-[5px">
          <div className="w-full flex items-center justify-between">
            <span className="text-green-bold text-base font-normal">
              Доходность:
            </span>
            <b className="text-black-normal text-base font-medium">
              {doxodnostPercent}%
            </b>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-green-bold text-base font-normal">
              Срок выплаты: :
            </span>
            <b className="text-black-normal text-base font-medium">
              {srokViplata} месяца
            </b>
          </div>
        </div>
        <RangeOfInvest rangeMoney={rangeMoney} sborPercent={sborPercent} />
        <Button className="text-base mt-5 mb-[15px] bg-violet-hover shadow-none rounded-lg h-12 px-[18px] py-3 w-full flex items-center justify-center font-medium tracking-[0.08px] text-white leading-[23.771px]">
          Инвестировать
        </Button>
        <Button className="text-sm  bg-transparent shadow-none rounded-lg px-[18px] py-3 w-full flex items-center justify-center font-medium tracking-[0.07px] text-green-dark">
          Узнать больше
        </Button>
      </div>
    </section>
  );
}

export default Card;
