import React from "react";

import { Button } from "@components/ui/button";
import chevronLeft from "@assets/icons/chevronleft.svg";

function HomePagination() {
  return (
    <div className=" w-full px-7 py-4 flex items-center justify-between bg-white">
      <article className="text-gray-normal text-lg font-medium leading-[23.771px]">
        Показано 1-8 из 100
      </article>
      <div className="flex items-center gap-x-2.5">
        <Button className="rounded-lg text-base font-bold leading-[23.771px] bg-gray-thin text-gray-normal h-[38px] w-[38px] ">
          &lt;
        </Button>
        <Button className="rounded-lg text-base font-bold leading-[23.771px] bg-orange-hover text-white h-[38px] w-[38px] ">
          1
        </Button>
        <Button className="rounded-lg text-base font-bold leading-[23.771px] bg-gray-thin text-gray-normal h-[38px] w-[38px] ">
          2
        </Button>
        <Button className="rounded-lg text-base font-bold leading-[23.771px] bg-gray-thin text-gray-normal h-[38px] w-[38px] ">
          3
        </Button>
        <Button className="rounded-lg text-base font-bold leading-[23.771px] bg-gray-thin text-gray-normal h-[38px] w-[38px] ">
          4
        </Button>
        <Button className="rounded-lg text-base font-bold leading-[23.771px] bg-gray-thin text-gray-normal h-[38px] w-[38px] ">
          5
        </Button>
        <Button className="rounded-lg text-base font-bold leading-[23.771px] bg-gray-thin text-gray-normal h-[38px] w-[38px] ">
          ...
        </Button>
        <Button className="rounded-lg text-base font-bold leading-[23.771px] bg-gray-thin text-gray-normal h-[38px] w-[38px] ">
          &gt;
        </Button>
      </div>
    </div>
  );
}

export default HomePagination;
