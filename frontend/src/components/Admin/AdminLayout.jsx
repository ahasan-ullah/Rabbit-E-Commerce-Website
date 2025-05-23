import { useState } from "react";
import { FaBars } from "react-icons/fa";

const AdminLayout = () => {
  const [isSidebaropen,setIsSidebarOpen]=useState(false);
  const toggleSidebar=()=>{
    setIsSidebarOpen(!isSidebaropen);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* mobile toggle button */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar}>
          <FaBars size={24}></FaBars>
        </button>
        <h1 className="ml-4 text-xl font-medium">
          Admin Dashboard
        </h1>
      </div>
      {/* overlay mobile side bar */}
      {
        isSidebaropen && (
          <div className="fixed inset-0 bg-gray-950/10 md:hidden" onClick={toggleSidebar}></div>
        )
      }
      {/* sidebar */}
      <div className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${isSidebaropen?"translate-0":"-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
        {/* sidebar components */}
      </div>
    </div>
  )
}

export default AdminLayout