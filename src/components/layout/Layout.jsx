import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className=" px-16 py-5 min-h-screen bg-gray-low">
      <Header />
      <div className="flex gap-x-5 mt-5">
        <Sidebar />
        <main className="flex-1 bg-gray-light min-h-screen">{children}</main>
      </div>
    </div>
  );
}
export default Layout;
