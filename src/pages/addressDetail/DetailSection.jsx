import { Button } from "@components/ui/button";
import React from "react";
import back from "@assets/icons/backIcon.svg";
import videoRasm from "@assets/images/detailPageVid.png";

function DetailSection() {
  return (
    <div className="bg-white p-[25px] flex-1 rounded-20 min-h-screen">
      <Button className="bg-violet-hover py-[11.88px] px-[16.64px] h-12 flex items-center gap-x-2.5 rounded-lg">
        <img src={back} alt="back icon" />
        <span className="text-white text-xl leading-[1] font-medium">
          Вернуться назад
        </span>
      </Button>
      <secction className="mt-16 pl-[35px] flex flex-col gap-y-12">
        <h1 className="text-black-dark text-center text-[45px] font-bold">
          Точка в Юнус Абадском районе
        </h1>
        <div className="h-fit w-full">
          <img src={videoRasm} className="w-full" alt="video" />
        </div>
        <div className="w-full flex flex-col gap-y-5">
          <p className="text-justify text-xl font-normal leading-[26px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. 
          </p>
          <p className="text-justify text-xl font-normal leading-[26px]">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </div>
      </secction>
    </div>
  );
}

export default DetailSection;
