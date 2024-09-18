import Card from "./Card";
import { homeAddressCardDatas } from "@constants/homeAddressCardDatas";
import React from "react";

function HomeAddressCards() {
  return (
    <div className="w-full  mt-[53px] px-[35px] grid grid-cols-3 gap-x-5 gap-y-10">
      {homeAddressCardDatas.map((addressData) => (
        <Card key={addressData.id} {...addressData} />
      ))}
    </div>
  );
}

export default HomeAddressCards;
