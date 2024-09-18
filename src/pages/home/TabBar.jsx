import { Button } from "@components/ui/button";

function TabBar() {
  return (
    <div>
      <Button className="rounded-r-none h-12 py-3 px-[18px] text-base font-medium tracking-[0.08px] bg-black-dark text-white shadow-none">Dark Kitchen</Button>
      <Button className="rounded-l-none h-12 py-3 px-[18px] text-base font-medium tracking-[0.08px] bg-white border-s-0 text-green-light border border-gray-tabs shadow-none">Offline Kitchen</Button>
    </div>
  );
}
export default TabBar;
