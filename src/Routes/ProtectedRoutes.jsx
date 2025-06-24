import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/admin_components/AdminSidebar";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import { MdMenuOpen, MdClose } from "react-icons/md";
import { Navigate, useLocation } from "react-router-dom";
import Dashboardsidebar from "../components/dashboard_components/Dashboardsidebar";

const ProtectedRoutes = ({ component: Component }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
const [headerVisible, setheaderVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const title = useSelector((state) => state.auth.title);
  const location = useLocation();
 const roleId=1;
  // Close mobile sidebar when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);
 
  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarVisible(false);
      } else {
        setSidebarVisible(true);
      }
    };
 
    // Set initial state
    handleResize();
   
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  const handleSidebarToggle = () => {
    if (window.innerWidth < 768) {
      setMobileOpen(!mobileOpen);
    } else {
      setSidebarVisible(!sidebarVisible);
    }
  };

  // Redirect to login if not authenticated
 
 
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
 
      {/* Sidebar for desktop */}
      <div
        className={`fixed z-40 h-full transition-all duration-300 ease-in-out bg-[#222b6c] hidden md:block ${
          sidebarVisible ? "w-56" : "w-20"
        }`}
      >
        {roleId === 1 ? (
        <AdminSidebar sidebarVisible={sidebarVisible} />
        ) : ( <Dashboardsidebar sidebarVisible={sidebarVisible} />
        )}
      </div>
 
      {/* Mobile sidebar */}
      <div
        className={`fixed z-40 h-full transition-all duration-300 ease-in-out bg-[#222b6c] md:hidden ${
          mobileOpen ? "left-0" : "-left-full"
        } w-56`}
      >
        <div className="absolute top-0 right-0 p-4">
          <button
            className="text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close sidebar"
          >
            <MdClose size={24} />
          </button>
        </div>
        <AdminSidebar sidebarVisible={true} />
      </div>
 
      {/* Main content with responsive margin */}
      <div
        className={`flex flex-col flex-grow min-h-screen transition-all duration-300 ease-in-out ${
          sidebarVisible && window.innerWidth >= 768 ? "md:ml-64" : "md:ml-20"
        }`}
      >
        {/* Header with toggle button and title */}
        {/* <div className="sticky top-0 z-20 bg-white shadow-md px-4 py-2 flex items-center">
          <button
            className="p-2 rounded-md text-[#222b6c] hover:bg-gray-100 transition-colors"
            onClick={handleSidebarToggle}
            aria-label="Toggle sidebar"
          >
            {mobileOpen || (sidebarVisible && window.innerWidth >= 768) ?
              <MdMenuOpen size={24} /> : <IoMenu size={24} />}
          </button>
          <h1 className="ml-3 text-lg font-semibold text-[#222b6c] truncate">
            {title}
          </h1>
        </div> */}
 
        {/* Navbar component */}
        {/* <Navbar sidebarVisible={sidebarVisible} handleSidebarToggle={handleSidebarToggle} /> */}
       
        {/* Content area with scrolling */}
        <div className="w-[100vw] md:w-auto flex-grow p-4 md:p-6 overflow-y-auto sidebar-scrollMain">
          <Component />
        </div>
      </div>
    </div>
  );
};
 
export default ProtectedRoutes;
 