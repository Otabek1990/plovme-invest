import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  // const location = useLocation();
  // const showSidebar = location.pathname.startsWith("/address-detail");
 
  return (
    <div className="w-full max-w-[1728px] mx-auto px-16 py-5 min-h-screen ">
      <Header />
      <div className="flex gap-x-5 mt-5">
        <Sidebar /> 
        <main className="flex-1 rounded-20  min-h-screen">{children}</main>
      </div>
    </div>
  );
}
export default Layout;
