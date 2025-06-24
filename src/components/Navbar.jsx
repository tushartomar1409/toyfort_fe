import React, { useState, useRef, useEffect, useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineReceiptLong } from "react-icons/md";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// import Marquee from "react-fast-marquee";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Books", path: "/books" },
  { label: "Infants", path: "/infants" },
  { label: "Toys", path: "/toys" },
  { label: "Sports", path: "/sports" },
  { label: "School Items", path: "/school-items" },
  { label: "Electronics", path: "/electronics" },
  { label: "Contact Us", path: "/contact-us" },
  { label: "Wishlist", path: "/wishlist" },
  { label: "Contact", path: "/contact" },
  { label: "Blog", path: "/blog" },
  { label: "Login", path: "/login" },
  { label: "Register", path: "/register" },
];

const socialIcons = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/toyfort/" },
  { icon: <FaTwitter />, url: "https://x.com/toy_fort?mx=2" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/toyfort/?hl=en" },
  {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/channel/UCsgoufKQ-zDSZwpkEAcV-Ng",
  },
  { icon: <FaPinterestP />, url: "https://in.pinterest.com/toyfort/_saved/" },
  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/toyfort/" },
  {
    icon: <FaWhatsapp />,
    url: "https://api.whatsapp.com/send?phone=918744055175",
  },
  { icon: <BsThreads />, url: "https://www.threads.net/@toyfort/" },
];

function Navbar({ openLoginModal }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navbarRef = useRef(null);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const { profile, setProfile, user, setUser } = useContext(AppContext);

  const dropdownRef = useRef();

  // Dynamically calculate navbar height using ResizeObserver

  useEffect(() => {
    // Handle navbar height
    let observer;
    if (navbarRef.current) {
      observer = new ResizeObserver(([entry]) => {
        setNavHeight(entry.contentRect.height);
      });
      observer.observe(navbarRef.current);
    }

    // Handle outside click to close dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfile(false);
      }
    };

    if (profile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (observer) observer.disconnect();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profile]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser("Sign In");
    setProfile(false);
  };

  return (
    <>
      {/* Fixed Navbar */}
      {!sidebarOpen && (
        <div
          ref={navbarRef}
          className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
        >
          {/* Social Bar (Desktop Only) */}
          <div className="hidden md:flex items-center justify-between px-2 lg:px-4 bg-red-600 text-white h-7 md:h-8 text-xs md:text-sm font-semibold">
  <div className="flex items-center space-x-2 md:space-x-3">
    {socialIcons.map(({ icon, url }, i) => (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-200"
      >
        {icon}
      </a>
    ))}
  </div>

  {/* 🔁 Replace this block with Marquee */}
  <div className="w-full ml-2 md:ml-4 px-6">
    <Marquee pauseOnHover={true} gradient={false} speed={50}>
      CALL US AT 8744055175 FOR BULK ORDERS OR ANY OTHER ASSISTANCE
    </Marquee>
  </div>
</div>


          {/* Main Header */}
          <header className="flex items-center px-2 sm:px-4 py-1 sm:py-2 bg-white w-full">
            {/* Hamburger (left on mobile only) */}
            <div className="flex md:hidden flex-1">
              <button
                className="text-2xl sm:text-3xl text-gray-800"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
              >
                <FiMenu />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center md:justify-start">
              <img
                src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp"
                alt="Toy Fort Logo"
                className="h-8 sm:h-10 cursor-pointer"
                onClick={() => navigate("/")}
                style={{ maxWidth: "130px", width: "auto" }}
              />
            </div>

            {/* Desktop search box (centered) */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="w-1/2 max-w-lg">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for Toys"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Icons (right) */}
            <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
              <AiOutlineShoppingCart
                className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 cursor-pointer"
                onClick={() => navigate("/cart")}
              />
              <AiOutlineHeart
                className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 cursor-pointer"
                onClick={() => navigate("/wishlist")}
              />

              {user?.name ? (
                <div className="relative flex items-center gap-1">
                  <span
                    onClick={() => setProfile(!profile)}
                    className="cursor-pointer text-[#606060] text-md font-normal flex items-center gap-1"
                  >
                    <AccountCircleIcon className="text-[#606060] w-8 h-8" />
                    {user.name}
                    <ExpandMoreIcon className="text-[#606060]" />
                  </span>
                  <div ref={dropdownRef}>
                    {profile && (
                      <div className="absolute right-0 top-full bg-white border rounded-lg shadow-lg z-50">
                        <div className="flex flex-col py-2">
                          <Link
                            to={`/`}
                            className="px-4 py-2 flex items-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
                          >
                            <PersonOutlineIcon fontSize="small" />
                            Profile
                          </Link>
                          <Link
                            to="/order"
                            className="px-4 py-2 flex items-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
                          >
                            <MdOutlineReceiptLong size={24} />
                            Orders
                          </Link>
                          <Link
                            to="/refund-requests"
                            className="px-4 py-2 flex items-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
                          >
                            <FiShoppingBag size={20} />
                            Refund
                          </Link>
                          <Link
                            to="/settings/edit-profile"
                            className="px-4 py-2 relative flex items-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
                          >
                            <SettingsIcon
                              fontSize="small"
                              className="text-base"
                            />
                            Settings
                            <span className="absolute left-4 bottom-0 w-[50%] h-[2px] tracking-widest bg-[#bfbdbd]"></span>
                          </Link>
                          <Link
                            onClick={handleLogout}
                            className="px-4 py-2 flex items-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
                          >
                            <LogoutIcon fontSize="small" />
                            Logout
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <AiOutlineUser
                  className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 cursor-pointer"
                  onClick={openLoginModal}
                />
              )}
            </div>
          </header>

          {/* Mobile search box (only on small screens) */}
          <div className="block md:hidden w-full px-4 pb-2 bg-white">
            <div className="relative flex">
              <input
                type="text"
                placeholder="Search for Toys"
                className="w-full border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none text-sm"
              />
              <button className="bg-red-600 px-4 py-2 rounded-r-md text-white flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontal Menu */}
          <nav className="hidden md:flex justify-center space-x-2 lg:space-x-4 py-2 md:py-3 bg-white border-b-4 border-gray-100">
            {menuItems.slice(0, 8).map((item) => (
              <button
                key={item.label}
                className="bg-red-600 text-white px-4 lg:px-7 py-1 lg:py-2 rounded-full font-semibold text-xs lg:text-base hover:bg-red-700 transition"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Spacer div that dynamically matches navbar height */}
      {!sidebarOpen && <div style={{ height: `${navHeight}px` }} />}

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black bg-opacity-20 z-50" />
          <aside
            ref={sidebarRef}
            className="fixed top-0 left-0 h-screen w-64 sm:w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <img
                src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp"
                alt="Toy Fort Logo"
                className="h-8"
              />
              <button
                className="text-2xl text-gray-600"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto">
              <ul className="py-2">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <button
                      className="w-full flex justify-between items-center px-6 py-3 text-left text-gray-800 hover:bg-gray-100 focus:outline-none"
                      onClick={() => {
                        if (item.label === "Login" && openLoginModal) {
                          openLoginModal();
                        } else {
                          navigate(item.path);
                        }
                        setSidebarOpen(false);
                      }}
                    >
                      <span>{item.label}</span>
                      <IoIosArrowForward className="text-gray-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

export default Navbar;
