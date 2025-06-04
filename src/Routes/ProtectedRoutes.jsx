import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import { useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ component: Component }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedName, setSelectedName] = useState("");
  const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };



  return (
    <div className="overflow-hidden">
      <div className="flex h-[100vh]">
        <button
          className="p-2 toggleSidebar ease-in-out text-[#222b6c]"
          onClick={handleSidebarToggle}
          style={
            sidebarVisible ? { marginLeft: "270px" } : { marginLeft: "110px" }
          }
        >
          {sidebarVisible ? (
            <MdMenuOpen className="mt-1" />
          ) : (
            <IoMenu className="mt-1" />
          )}
        </button>
        <div
          className={`transition-transform ease-in-out duration-300 ${
            sidebarVisible ? "block" : "hidden md:block"
          } bg-gray-200`}
          style={{ width: sidebarVisible ? "250px" : "90px" }}
        >
          <Sidebar sidebarVisible={sidebarVisible} />
        </div>
        <div className={`flex-grow transition-all duration-300 relative `}>
          <Navbar selectedName={selectedName} sidebarVisible={sidebarVisible} />
          <div className="h-[88vh] overflow-y-scroll p-6  relative sidebar-scrollMain">
            <Component />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoutes;
