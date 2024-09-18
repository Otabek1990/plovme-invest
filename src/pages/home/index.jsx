import React from "react";
import FilterBar from "./FilterBar";
import TabBar from "./TabBar";
import HomeAddressCards from "./HomeAddressCards";

function Home() {
  return (
    <div className="h-[1286px]  w-full">
      <div className="h-full p-[25px] rounded-20  bg-gray-light w-full">
        <div className="w-full flex items-center justify-between">
          <TabBar />
          <FilterBar />
        </div>
        <HomeAddressCards/>
      </div>
    </div>
  );
}

export default Home;
