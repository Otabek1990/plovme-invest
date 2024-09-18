import { Button } from '@components/ui/button'
import React from 'react'
import filterIcon from "@assets/icons/filter.svg"

function FilterBar() {
  return (
    <>
    <Button className="bg-white border border-gray-tabs flex items-center gap-[9.51px] py-3 shadow-none px-4 h-12">
      <img src={filterIcon} alt="filter icon" />
      <span className='text-base font-medium text-gray-filter'>Фильтр</span>
    </Button>
    </>
  )
}

export default FilterBar