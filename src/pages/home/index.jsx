import React from "react";
import FilterBar from "./FilterBar";
import TabBar from "./TabBar";
import HomeAddressCards from "./HomeAddressCards";
import HomePagination from "./HomePagination";

function Home() {
  return (
    <div className=" w-full">
      <div className=" p-[25px] rounded-20 pb-[139px]  bg-gray-light w-full">
        <div className="w-full flex items-center justify-between">
          <TabBar />
          <FilterBar />
        </div>
        <HomeAddressCards />
      </div>
      <HomePagination/>
    </div>
  );
}

export default Home;
