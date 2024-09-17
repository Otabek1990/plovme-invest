import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className=" px-16 py-10 h-screen">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default Layout;
