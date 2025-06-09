// import "@fontsource/open-sans";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
//   faThreads,
//   faPinterest,
//   faLinkedin,
//   faWhatsapp,
// } from "@fortawesome/free-brands-svg-icons";
// import LoginModal from "./LoginModal";
// import { FiShoppingBag } from "react-icons/fi";
// import { MdOutlineReceiptLong } from "react-icons/md";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import SettingsIcon from "@mui/icons-material/Settings";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import { useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const styles = `
//   @keyframes marquee {
//     0% {
//       transform: translateX(100%);
//     }
//     100% {
//       transform: translateX(-100%);
//     }
//   }

//   .animate-marquee {
//     animation: marquee 20s linear infinite;
//     position: absolute;
//     white-space: nowrap;
//     left: 0;
//     top: 0;
//   }

//   .animate-marquee2 {
//     animation: marquee 20s linear infinite;
//     animation-delay: 20s;
//     position: absolute;
//     white-space: nowrap;
//     left: 0;const [values, setValues] = useState
//     top: 0;
//     opacity: 0;
//   }
// `;

// const styleSheet = document.createElement("style");
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);

// function Navbar() {
//   const [loginOpen, setLoginOpen] = useState(false); 
//   //const [passwordVisible, setPasswordVisible] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const dropdownRef = useRef();

//   const { user, setUser, profile, setProfile, fetchSubCategoryProduct } =
//     useContext(AppContext);

//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const slug = storedUser?.slug;

//   console.log("slug", slug);

//   const id = storedUser?.uniqueId;

//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setProfile(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleChanges = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   const handleSidebar = (category) => {
//     setActiveCategory(category);
//     navigate(`/category/${category}`);
//   };
//   const handleSidebarCategory = (cat, category) => {
//     // console.log("Selected:", parent, subcategory);
//     fetchSubCategoryProduct(cat, category);
//     navigate(`/category/${cat}/${category}`);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/login",
//         values
//       );

//       if (response.status === 201 && response.data.user) {
//         localStorage.setItem("token", response.data.token);

//         let userData = response.data.user;

//         if (!userData.uniqueId) {
//           const uniqueId = uuidv4().split("-")[0];
//           userData = { ...userData, uniqueId };
//         }

//         localStorage.setItem("user", JSON.stringify(userData));
//         setUser(userData);

//         setProfile(false);
//         setShowLoginForm(!showLoginForm);
//       }
//     } catch (err) {
//       console.log(
//         "Login error:",
//         err.response ? err.response.data : err.message
//       );
//     }
//   };
// // ─── NEW callback after a successful login ───
//      const handleLoginSuccess = (newUser, newToken) => {
//      localStorage.setItem("token", newToken);
//      localStorage.setItem("user", JSON.stringify(newUser));
//      setUser(newUser);
//      setProfile(false);
//  };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser("Sign In");
//     setProfile(false);
//   };

//   return (
//     <div className="border-b-4 fixed top-0 w-full bg-white shadow-md z-50 transition-all duration-300">
//       <div className="" style={{ fontFamily: "Open Sans" }}>
//         <div className="bg-red-500 h-8 flex flex-row space-x-4 p-1 text-white font-semibold text-base">
//           <a className="" href="https://www.facebook.com/toyfort/">
//             <FontAwesomeIcon icon={faFacebook} />
//           </a>
//           <a className="" href="https://x.com/toy_fort?mx=2">
//             <FontAwesomeIcon icon={faTwitter} />
//           </a>
//           <a className="" href="https://www.instagram.com/toyfort/?hl=en">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a
//             className=""
//             href="https://www.youtube.com/channel/UCsgoufKQ-zDSZwpkEAcV-Ng"
//           >
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//           <a className="" href="https://www.linkedin.com/company/toyfort/">
//             <FontAwesomeIcon icon={faLinkedin} />
//           </a>
//           <a className="" href="https://in.pinterest.com/toyfort/_saved/">
//             <FontAwesomeIcon icon={faPinterest} />
//           </a>
//           <a
//             className=""
//             href="https://api.whatsapp.com/send?phone=918744055175"
//           >
//             <FontAwesomeIcon icon={faWhatsapp} />
//           </a>
//           <a className="" href="https://www.facebook.com/toyfort/">
//             <FontAwesomeIcon icon={faPinterest} />
//           </a>
//           <a className="" href="https://www.threads.net/@toyfort/">
//             <FontAwesomeIcon icon={faThreads} />
//           </a>

//           <div className="overflow-hidden whitespace-nowrap relative w-full h-6">
//             <div className="animate-marquee">
//               CALL US AT 8744055175 FOR BULK ORDERS OR ANY OTHER ASSISTANCE
//             </div>
//             <div className="animate-marquee2">
//               CALL US AT 8744055175 FOR BULK ORDERS OR ANY OTHER ASSISTANCE
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row gap-72 w-30 py-2">
//           <img
//             className="w-32 p-2"
//             src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp"
//           />

//           <div className="relative w-1/3 m-2">
//             <input
//               className="w-full border bg-gray-50 border-gray-400 rounded-md p-1.5 pr-10"
//               type="text"
//               placeholder="Search for Toys"
//             />

//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//               />
//             </svg>
//           </div>

//           <div className="flex items-center gap-2 font-semibold text-lg">
//             <ShoppingCartIcon
//               className="w-9 h-9 text-gray-500 cursor-pointer"
//               onClick={() => navigate("/cart")}
//             />
//             {/* Wishlist icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-8 h-8 text-gray-500"
//               onClick={() => navigate(`/wishlist/${slug}-${id}`)}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//               />
//             </svg>

//             {user?.first_name ? (
//               <div className="relative flex items-center gap-1">
//                 <span
//                   onClick={() => setProfile(!profile)}
//                   className="cursor-pointer text-[#606060] text-md font-normal flex items-center gap-1"
//                 >
//                   <AccountCircleIcon className="text-[#606060] w-8 h-8" />
//                   {user.first_name}
//                   <ExpandMoreIcon className="text-[#606060]" />
//                 </span>

//                 <div ref={dropdownRef}>
//                   {profile && (
//                     <div className="absolute right-0 top-full bg-white border rounded-lg shadow-lg z-50">
//                       <div className="flex flex-col py-2">
//                         <Link
//                           to={`/wishlist/${slug}-${id}`}
//                           className="px-4 py-2 flex text-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
//                         >
//                           <PersonOutlineIcon fontSize="small" />
//                           Profile
//                         </Link>
//                         <Link
//                           to="/order"
//                           className="px-4 py-2 flex text-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
//                         >
//                           <MdOutlineReceiptLong size={24} />
//                           Orders
//                         </Link>
//                         <Link
//                           to="/refund-requests"
//                           className="px-4 py-2 flex text-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
//                         >
//                           <FiShoppingBag size={20} />
//                           Refund
//                         </Link>
//                         <Link
//                           to="/settings/edit-profile"
//                           className="px-4 py-2 flex text-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
//                         >
//                           <SettingsIcon
//                             fontSize="small"
//                             className="text-base"
//                           />
//                           Settings
//                           <span className="absolute left-4 bottom-0 w-[50%] h-[2px] tracking-widest bg-[#bfbdbd]"></span>
//                         </Link>
//                         <Link
//                           onClick={handleLogout}
//                           className="px-4 py-2 flex text-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
//                         >
//                           <LogoutIcon fontSize="small" />
//                           Logout
//                         </Link>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ) : (
//               <div className="flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-8 h-8 text-gray-500 text-center"
//                   onClick={() => setLoginOpen(true)}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
//                   />
//                 </svg>
//                 <button
//                     onClick={() => setLoginOpen(true)}
//                   className="text-[#606060] text-sm font-normal cursor-pointer"
//                 >
//                   {user}
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex justify-center gap-14 border-b-4 pb-3 border-gray-100 p-4">
//           <div className="relative group">
//             <p
//               className="bg-red-600 text-white px-8 py-2 rounded-full cursor-pointer "
//               onClick={() => navigate("/")}
//             >
//               Home
//             </p>
//           </div>

//           <div className="relative group">
//             {/* Menu Button */}
//             <p
//               onClick={() => handleSidebar("infants")}
//               className="bg-red-600 text-white px-6 py-2 rounded-full cursor-pointer"
//             >
//               Infants
//             </p>

//             {/* Dropdown Content */}
//             <div className="absolute right-1 left-0 w-[1100px] bg-white shadow-md rounded-md hidden group-hover:block z-10 p-5">
//               <div className="flex">
//                 {/* Left Side  */}
//                 <div className="w-2/3 grid grid-cols-3 gap-2">
//                   <div className="space-y-2">
//                     <p className="font-semibold text-black">Baby Gear</p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("baby-gear", "baby-carrier")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Baby Carrier
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("baby-gear", "baby-walker")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Baby Walkers
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory(
//                           "baby-gear",
//                           "bouncers-rockers-swings"
//                         )
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Bouncers, Rockers & Swings
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("baby-gear", "cribs-cradles")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Cribs & Cradles
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("baby-gear", "high-chair")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       High Chair
//                     </p>

//                     <p className="font-semibold cursor-pointer">Show All</p>
//                   </div>

//                   <div className="space-y-2">
//                     <p className="font-semibold text-black">Kids Furniture</p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("kids-furniture", "kids-bed")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Kids Bed
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory(
//                           "kids-furniture",
//                           "kids-table-and-chair"
//                         )
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Kids Table & Chair
//                     </p>
//                   </div>

//                   <div className="space-y-2">
//                     <p className="font-semibold text-black">Infant / Toddler</p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory(
//                           "infants-toddlers",
//                           "learning-toys"
//                         )
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Learning Toys
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("infants-toddlers", "ball-pool")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Ball Pool
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("infants-toddlers", "gift-set")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Gift Set
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory(
//                           "infants-toddlers",
//                           "musical-toys"
//                         )
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Musical Toys
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory(
//                           "infants-toddlers",
//                           "play-gym-playmats"
//                         )
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Play Gym & Playmats
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory(
//                           "infants-toddlers",
//                           "push-pull-along-toys"
//                         )
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Push & Pull Along Toys
//                     </p>

//                     <p className="text-gray-600 hover:text-gray-900 cursor-pointer">
//                       Show All
//                     </p>
//                   </div>

//                   <div className="space-y-2">
//                     <p className="font-semibold text-black">
//                       Feeding & Nursing
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory(
//                           "feeding-nursing",
//                           "baby-bottle-sterilizer"
//                         )
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Baby Bottle Sterilizer
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("feeding-nursing", "breast-pump")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Breast Pump
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory(
//                           "feeding-nursing",
//                           "feed-bottle-essentials"
//                         )
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Feed Bottle & Essentials
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("feeding-nursing", "baby-soother")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Baby Soother
//                     </p>

//                     <p className="cursor-pointer">Show All</p>
//                   </div>

//                   <div className="space-y-2">
//                     <p className="font-semibold text-black">Infant Utilites</p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("baby-bath", "baby-monitor")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Baby Monitor
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("baby-bath", "baby-bath-bed-tub")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Baby Bath Bed / Tub
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("baby-bath", "baby-diaper")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Baby Diaper
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("baby-bath", "bath-skin-care")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Bath & Skin Care
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("baby-bath", "food-container")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Food Container
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("baby-bath", "food-processor")
//                       }
//                       className="text-gray-600 hover:text-gray-900 cursor-pointer"
//                     >
//                       Food Processor
//                     </p>

//                     <p className="cursor-pointer">Show All</p>
//                   </div>
//                 </div>

//                 {/* Right Side */}
//                 <div className="w-1/3 grid grid-cols-2 gap-2">
//                   <div className="relative">
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64e7521580ee51-27478711-55016525.webp"
//                       alt="Pram & Stroller"
//                       className="w-40 h-28"
//                     />
//                     <p className="absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
//                       Pram & Stroller
//                     </p>
//                   </div>

//                   <div className="relative">
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f86d5e1735a0-77038825-21768230.webp"
//                       alt="Bath & Skin Care"
//                       className="w-40 h-28"
//                     />
//                     <p className="absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
//                       Bath & Skin Care
//                     </p>
//                   </div>

//                   <div className="relative">
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f8612b0507a0-81849579-16369615.webp"
//                       alt="Musical Toys"
//                       className="w-44 h-28"
//                     />
//                     <p className=" absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
//                       Musical Toys
//                     </p>
//                   </div>

//                   <div className="relative">
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64eda5751c0a73-90527865-14506973.webp"
//                       alt="Play Gym & Playmats"
//                       className="w-40 h-28 object-cover"
//                     />
//                     <p className=" absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
//                       Play Gym & Playmats
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative group">
//             {/* Menu Button */}
//             <p
//               onClick={() => handleSidebar("books")}
//               className="bg-red-600 text-white px-6 py-2 rounded-full cursor-pointer"
//               href="/books">
//               Books
//             </p>

//             {/* Dropdown Content */}
//             <div className="absolute left-[-10] w-[1100px] bg-white shadow-md rounded-md hidden group-hover:block z-10 p-5">
//               <div className="flex">
//                 {/* Left Side  */}
//                 <div className="w-2/3 grid grid-cols-2 gap-4">
//                   <p href="/books/colouring-books">
//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("books", "colouring-books")}
//                       className="font-semibold text-black cursor-pointer"
//                     >
//                       Colouring Books
//                     </p>
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("books", "sticker-books")
//                     }
//                     className="font-semibold text-black cursor-pointer"
//                   >
//                     Sticker Books
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("books", "activity-books")
//                     }
//                     className="font-semibold text-black cursor-pointer"
//                   >
//                     Activity Books
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("books", "musical-books")
//                     }
//                     className="font-semibold text-black cursor-pointer"
//                   >
//                     Musical Books
//                   </p>
//                 </div>

//                 {/* Right Side */}
//                 <div className="w-1/3 grid grid-cols-2 gap-2">
//                   <div className="relative">
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64e7521580ee51-27478711-55016525.webp"
//                       alt="Pram & Stroller"
//                       className="w-40 h-28"
//                     />
//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("books", "coloring-books")
//                       }
//                       className="absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center cursor-pointer"
//                     >
//                       Colouring Book
//                     </p>
//                   </div>

//                   <div className="relative">
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f86d5e1735a0-77038825-21768230.webp"
//                       alt="Bath & Skin Care"
//                       className="w-40 h-28"
//                     />
//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("books", "activity-books")
//                       }
//                       className="absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center cursor-pointer"
//                     >
//                       Activity Book
//                     </p>
//                   </div>

//                   <div className="relative">
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f8612b0507a0-81849579-16369615.webp"
//                       alt="Musical Toys"
//                       className="w-44 h-28"
//                     />
//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("books", "sticker-books")
//                       }
//                       className=" absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center cursor-pointer"
//                     >
//                       Sticker Book
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative group">
//             <p
//               onClick={() => handleSidebar("toys")}
//               className="bg-red-600 text-white px-8 py-2 rounded-full cursor-pointer"
//             >
//               Toys
//             </p>

//             <div className="absolute -left-1/3 right-1 w-[900px] bg-white shadow-md rounded-md hidden group-hover:block z-10 p-4">
//               <div className="grid grid-cols-5 gap-6">
//                 <div className="space-y-1">
//                   <p className="font-semibold text-black px-4 py-2">
//                     Art & Craft
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("art-crafts", "colors-markers")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Color & Markers
//                   </p>

//                   <p
//                     onClick={() => handleSidebarCategory("art-crafts", "easel")}
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Easel
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("art-crafts", "mandala-art")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Mandala Art
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("art-crafts", "play-dough")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Play Dough
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("art-crafts", "quilling")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Quilling
//                   </p>

//                   <p
//                     onClick={() => handleSidebarCategory("art-crafts", "slime")}
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Slime
//                   </p>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="font-semibold text-black px-4 py-2">
//                     Doll & Doll Houses
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("doll-doll-houses", "doll-houses")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Doll House
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("doll-doll-houses", "dolls")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Dolls
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "doll-doll-houses",
//                         "doll-accessories"
//                       )
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Doll Accessories
//                   </p>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="font-semibold text-black px-4 py-2">
//                     Pretend Play
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("pretend-play", "kitchen-set")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Kitchen Sets
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("pretend-play", "tent-house")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Tent House
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("pretend-play", "beauty-set")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Beauty Set
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("pretend-play", "medical-sets")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Medical Sets
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("pretend-play", "sand-toys")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Sand Toys
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("pretend-play", "tool-sets")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Tool Sets
//                   </p>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="font-semibold text-black px-4 py-2">
//                     Musical Instruments
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "musical-instruments",
//                         "karaoke-mic"
//                       )
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Karaoke Mic
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("musical-instruments", "drum-sets")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Drum Sets
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("musical-instruments", "piano")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Piano
//                   </p>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="font-bold text-black px-4 py-2">Games</p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("games", "educational-games")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Educational Game
//                   </p>
//                   <p
//                     onClick={() => handleSidebarCategory("games", "puzzle")}
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Puzzle
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("games", "board-games")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Board Games
//                   </p>
//                   <p
//                     onClick={() => handleSidebarCategory("games", "card-games")}
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Card Games
//                   </p>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="font-semibold text-black px-4 py-2">
//                     Remote Control Toys
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "remote-control-toys",
//                         "planes-drones"
//                       )
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Planes & Drones
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "remote-control-toys",
//                         "bike-car-trucks"
//                       )
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Bike, Car & Trucks
//                   </p>

//                   <p
//                     onClick={() => handleSidebarCategory("toys", "soft-toys")}
//                     className="font-bold text-black px-4 py-2 cursor-pointer hover:border-b-2 border-black"
//                   >
//                     Soft Toys
//                   </p>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="font-semibold text-black px-4 py-2">
//                     Toys Organiser
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "toys-organizer",
//                         "toys-organizer-box"
//                       )
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Toys Organiser Book
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "toys-organizer",
//                         "toys-organizer-shelf"
//                       )
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Toys Organiser Shelf
//                   </p>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="font-semibold text-black px-4 py-2">
//                     Figure & Play Sets
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "figures-play-sets",
//                         "car-play-sets"
//                       )
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Car Play Sets
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "figures-play-sets",
//                         "action-figures"
//                       )
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Action Figures
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "figures-play-sets",
//                         "die-cast-models"
//                       )
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Die Cast Models
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "figures-play-sets",
//                         "train-play-set"
//                       )
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Train Play Set
//                   </p>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="font-bold text-black px-4 py-2">Outdoor Play</p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("outdoor-play", "play-house")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Play House
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "outdoor-play",
//                         "slides-swings-rockers"
//                       )
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Slides, Swings & Rockers
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("outdoor-play", "battery-car-bikes")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Battery , Car & Bikes
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("outdoor-play", "sand-water-table")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Sand & Water Table
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "outdoor-play",
//                         "ride-one-tricycles"
//                       )
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Ride on Tricycles
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("outdoor-play", "trampoline")
//                     }
//                     className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                   >
//                     Trampoline
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-6 mt-4"></div>
//             </div>
//           </div>

//           <div className="relative group">
//             <p
//               onClick={() => handleSidebar("sports")}
//               className="bg-red-600 text-white px-8 py-2 rounded-full cursor-pointer"
//             >
//               Sports
//             </p>

//             <div className="absolute -left-96 w-[1100px] bg-white shadow-md rounded-md hidden group-hover:block z-10 p-2">
//               <div className="flex">
//                 <div className="grid grid-cols-3">
//                   <p
//                     onClick={() => handleSidebarCategory("sports", "badminton")}
//                     className="font-semibold text-black py-2 cursor-pointer"
//                   >
//                     Badminton
//                   </p>

//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("sports", "bow-and-arrow")
//                     }
//                     className="font-semibold text-black  py-2 cursor-pointer"
//                   >
//                     Bow & arrow
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("sports", "dart-board")
//                     }
//                     className="font-semibold text-black  py-2 cursor-pointer"
//                   >
//                     Dart Board
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("sports", "carrom-board")
//                     }
//                     className="font-semibold text-black  py-2 cursor-pointer"
//                   >
//                     Carrom Board
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("sports", "boxing-kit")
//                     }
//                     className="font-semibold text-black  py-2 cursor-pointer"
//                   >
//                     Boxing Kit
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("sports", "volley-ball")
//                     }
//                     className="font-semibold text-black  py-2 cursor-pointer"
//                   >
//                     Volley Ball
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "sports",
//                         "fitness-equipment-accessories"
//                       )
//                     }
//                     className="font-semibold text-black mr-3  py-2 cursor-pointer"
//                   >
//                     Fitness Equipment & Accessories
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("sports", "lawn-tennis")
//                     }
//                     className="font-semibold text-black  py-2 cursor-pointer"
//                   >
//                     Lawn Tennis
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("sports", "stakeboard")
//                     }
//                     className="font-semibold text-black  py-2 "
//                   >
//                     Stakeboard
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("sports", "roller-skates")
//                     }
//                     className="font-semibold text-black  py-2 cursor-pointer"
//                   >
//                     Roller Stakes
//                   </p>
//                   <p
//                     onClick={() => handleSidebarCategory("sports", "football")}
//                     className="font-semibold text-black  py-2 cursor-pointer"
//                   >
//                     FootBall
//                   </p>
//                   <p
//                     onClick={() => handleSidebarCategory("sports", "cricket")}
//                     className="font-semibold text-black  py-2 cursor-pointer"
//                   >
//                     Cricket
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("sports", "basket-ball")
//                     }
//                     className="font-semibold text-black  py-2 cursor-pointer"
//                   >
//                     Basket Ball
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("sports", "table-tennis")
//                     }
//                     className="font-semibold text-black  py-2 cursor-pointer"
//                   >
//                     Table Tennis
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("sports", "air-hockey")
//                     }
//                     className="font-semibold text-black  py-2 cursor-pointer"
//                   >
//                     Air Hockey
//                   </p>
//                 </div>

//                 {/* right side */}

//                 <div className="w-1/3 grid grid-cols-2 gap-2">
//                   <div
//                     onClick={() =>
//                       handleSidebarCategory("sports", "boxing-kit")
//                     }
//                     className="relative cursor-pointer"
//                   >
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f2d501b6c510-30420931-31142751.webp"
//                       alt="Boxing Kit"
//                       className="w-40 h-28"
//                     />
//                     <p className="absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
//                       Boxing Kit
//                     </p>
//                   </div>

//                   <div
//                     onClick={() =>
//                       handleSidebarCategory("sports", "lawn-tennis")
//                     }
//                     className="relative cursor-pointer"
//                   >
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f2d5e6293de1-07994517-95297141.webp"
//                       alt="Lawn Tennis"
//                       className="w-40 h-28"
//                     />
//                     <p className="absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
//                       Lawn Tennis
//                     </p>
//                   </div>

//                   <div
//                     onClick={() => handleSidebarCategory("sports", "football")}
//                     className="relative cursor-pointer"
//                   >
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f2d69333f119-86216082-10248058.webp"
//                       alt="Football"
//                       className="w-44 h-28"
//                     />
//                     <p className=" absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
//                       Football
//                     </p>
//                   </div>

//                   <div
//                     onClick={() => handleSidebarCategory("sports", "cricket")}
//                     className="relative cursor-pointer"
//                   >
//                     <img
//                       src="	https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f2dc4a03c680-37067696-76961469.webp"
//                       alt="Cricket"
//                       className="w-40 h-28 object-cover"
//                     />
//                     <p className=" absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
//                       Cricket
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative group">
//             <p
//               onClick={() => handleSidebar("school-items")}
//               className="bg-red-600 text-white px-8 py-2 rounded-full cursor-pointer"
//             >
//               School Items
//             </p>

//             {/* Dropdown Container */}
//             <div className="absolute right-0 w-[900px] bg-white shadow-md rounded-md hidden group-hover:block z-10 p-4">
//               <div className="flex">
//                 {/* Left Side  */}
//                 <div className="w-2/3 grid grid-cols-3 gap-2">
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("school-items", "lunch-box")
//                     }
//                     className="font-semibold text-black py-2"
//                   >
//                     Lunch Box
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("school-items", "water-bottles")
//                     }
//                     className="font-semibold text-black py-2"
//                   >
//                     Water Bottles
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory(
//                         "school-items",
//                         "pencil-cases-and-pouches"
//                       )
//                     }
//                     className="font-semibold text-black py-2"
//                   >
//                     Pencil Cases & Pouches
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("school-items", "study-table")
//                     }
//                     className="font-semibold text-black py-2"
//                   >
//                     Study Tables
//                   </p>
//                   <p
//                     onClick={() =>
//                       handleSidebarCategory("school-items", "gift-sets")
//                     }
//                     className="font-semibold text-black py-2"
//                   >
//                     Gift Sets
//                   </p>

//                   <div className="space-y-1">
//                     <p className="font-semibold text-black py-2">Bags</p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("school-items", "school-bags")
//                       }
//                       className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                     >
//                       School Bags
//                     </p>

//                     <p
//                       onClick={() =>
//                         handleSidebarCategory("school-items", "fancy-bags")
//                       }
//                       className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer"
//                     >
//                       Fancy Bags
//                     </p>
//                   </div>
//                 </div>

//                 {/* Right Side */}
//                 <div className="w-1/3 grid grid-cols-2 gap-2">
//                   <div
//                     onClick={() =>
//                       handleSidebarCategory("school-items", "lunch-box")
//                     }
//                     className="relative"
//                   >
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f2d76fd806d6-74173325-86646041.webp"
//                       alt="Lunch Box"
//                       className="w-40 h-28 object-cover"
//                     />
//                     <p className="absolute bottom-0 w-full bg-opacity-60 text-white px-2 py-1 text-sm font-semibold text-start">
//                       Lunch Box
//                     </p>
//                   </div>

//                   <div
//                     onClick={() =>
//                       handleSidebarCategory("school-items", "study-table")
//                     }
//                     className="relative"
//                   >
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f2d9f37e02b3-21012753-27397235.webp"
//                       alt="Study Table"
//                       className="w-40 h-28 object-cover"
//                     />
//                     <p className="absolute bottom-0 w-full bg-opacity-60 text-white px-2 py-1 text-sm text-start">
//                       Study Table
//                     </p>
//                   </div>

//                   <div
//                     onClick={() =>
//                       handleSidebarCategory("school-items", "water-bottles")
//                     }
//                     className="relative"
//                   >
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f2dc359ace47-16790751-56325428.webp"
//                       alt="Bottles"
//                       className="w-52 h-40 rounded-lg object-cover"
//                     />
//                     <p className="absolute bottom-0 w-full bg-opacity-60 text-white px-2 py-1 font-semibold text-sm text-start">
//                       Bottles
//                     </p>
//                   </div>

//                   <div
//                     onClick={() =>
//                       handleSidebarCategory("school-items", "bags")
//                     }
//                     className="relative"
//                   >
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/upload_test/category_67bd2632b872b1-90897802-58310443.webp"
//                       alt="Bags"
//                       className="w-52 h-40 object-cover"
//                     />
//                     <p className="absolute bottom-0 w-full bg-opacity-60 text-white font-semibold px-2 py-1 text-sm text-start">
//                       Bags
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative group">
//             <p
//               onClick={() => handleSidebar("electronics")}
//               className="bg-red-600  text-white px-8 py-2 rounded-full cursor-pointer"
//             >
//               Electronics
//             </p>

//             <div className="absolute right-0 w-[1200px] bg-white shadow-md rounded-md hidden group-hover:block z-10 p-6">
//               <div className="grid grid-cols-4 gap-6">
//                 <div>
//                   <p onClick={() =>
//                       handleSidebarCategory("electronics", "camera")
//                     } className="font-semibold text-black mb-2 cursor-pointer">Camera</p>
//                   <p onClick={() =>
//                       handleSidebarCategory("camera", "print-diy-camera")
//                     } className="px-1 py-1 text-sm text-gray-500 hover:border-b border-gray-500 cursor-pointer">
//                     Print DIY Camera
//                   </p>
//                   <p onClick={() =>
//                       handleSidebarCategory("camera", "camera-accessories")
//                     } className="px-1 py-1 text-sm text-gray-500 hover:border-b border-gray-500 cursor-pointer">
//                     Camera Accessories
//                   </p>
//                   <p onClick={() =>
//                       handleSidebarCategory("camera", "digital-camera")
//                     }  className="px-1 py-1 text-sm text-gray-500 hover:border-b border-gray-500 cursor-pointer">
//                     Digital Camera
//                   </p>
//                   <p onClick={() =>
//                       handleSidebarCategory("camera", "instax-camera")
//                     } className="px-1 py-1 text-sm text-gray-500 hover:border-b border-gray-500 cursor-pointer">
//                     Instax Camera
//                   </p>

//                   <p onClick={() =>
//                       handleSidebarCategory("electronics", "led-bags")
//                     } className="mt-4 font-semibold text-black cursor-pointer">LED Bags</p>
//                   <p onClick={() =>
//                       handleSidebarCategory("electronics", "saregama-carvan")
//                     } className="mt-4 font-semibold text-black cursor-pointer">
//                     Saregama Carvan
//                   </p>
//                   <p onClick={() =>
//                       handleSidebarCategory("electronics", "telescope")
//                     }  className="mt-4 font-semibold text-black cursor-pointer">Telescope</p>
//                 </div>

                
//                 <div>
//                   <p onClick={() =>
//                       handleSidebarCategory("electronics", "kids-watch")
//                     } className="font-semibold text-black mb-2 cursor-pointer">Kids Watch</p>
//                   <p onClick={() =>
//                       handleSidebarCategory("electronics", "video-games")
//                     } className="mt-4 font-semibold text-black mb-2 cursor-pointer">
//                     Video Games
//                   </p>
//                   <p onClick={() =>
//                       handleSidebarCategory("video-games", "nintendo")
//                     } className="px-1 py-1 text-sm text-gray-500 hover:border-b border-gray-500 cursor-pointer">
//                     Nintendo
//                   </p>
//                   <p onClick={() =>
//                       handleSidebarCategory("video-games", "tv-video-game")
//                     } className="px-1 py-1 text-sm text-gray-500 hover:border-b border-gray-500 cursor-pointer">
//                     TV Video Game
//                   </p>
//                   <p onClick={() =>
//                       handleSidebarCategory("video-games", "ps4")
//                     } className="px-1 py-1 text-sm text-gray-500 hover:border-b border-gray-500 cursor-pointer">
//                     PS4
//                   </p>
//                   <p onClick={() =>
//                       handleSidebarCategory("video-games", "ps5")
//                     } className="px-1 py-1 text-sm text-gray-500 hover:border-b border-gray-500 cursor-pointer">
//                     PS5
//                   </p>
//                   <p onClick={() =>
//                       handleSidebarCategory("video-games", "xbox")
//                     } className="px-1 py-1 text-sm text-gray-500 hover:border-b border-gray-500 cursor-pointer">
//                     Xbox
//                   </p>
//                   <p onClick={() =>
//                       handleSidebarCategory("video-games", "racing-wheels")
//                     } className="px-1 py-1 text-sm text-gray-500 hover:border-b border-gray-500 cursor-pointer">
//                     Racing Wheels
//                   </p>
//                   <p className="px-1 py-1 text-sm text-gray-500 hover:border-b border-gray-500 cursor-pointer">
//                     Show All
//                   </p>
//                 </div>

                
//                 <div>
                  
//                   <p onClick={() =>
//                       handleSidebarCategory("electronics", "smart-watch-tracker")
//                     } className="font-semibold text-black mb-2 cursor-pointer">
//                     Smart Watch & Tracker
//                   </p>
//                   <p onClick={() =>
//                       handleSidebarCategory("electronics", "binoculars")
//                     } className="mt-4 font-semibold text-black cursor-pointer">Binoculars</p>
//                   <p onClick={() =>
//                       handleSidebarCategory("electronics", "e-scooter")
//                     } className="mt-4 font-semibold text-black cursor-pointer">E-Scooter</p>
//                   <p onClick={() =>
//                       handleSidebarCategory("electronics", "headphones")
//                     } className="mt-4 font-semibold text-black cursor-pointer">Headphones</p>
//                   <p onClick={() =>
//                       handleSidebarCategory("electronics", "hoverboards")
//                     } className="mt-4 font-semibold text-black cursor-pointer">Hoverboards</p>
//                 </div>

                
//                 <div className="grid grid-cols-2 gap-4">
//                   <div onClick={() =>
//                       handleSidebarCategory("electronics", "camera")
//                     } className="relative rounded overflow-hidden cursor-pointer">
//                     <img
//                       src="	https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f2e02c0a8e67-62678996-32322915.webp"
//                       alt="Camera"
//                       className="w-full h-auto object-cover"
//                     />
//                     <p className="absolute bottom-2 left-2 text-white font-semibold">
//                       Camera
//                     </p>
//                   </div>
//                   <div onClick={() =>
//                       handleSidebarCategory("electronics", "saregama-carvan")
//                     } className="relative rounded overflow-hidden cursor-pointer">
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f2e2a75b0755-71507434-19531671.webp"
//                       alt="Saregama Carvan"
//                       className="w-full h-auto object-cover"
//                     />
//                     <p className="absolute bottom-2 left-2 text-white font-semibold">
//                       Saregama Carvan
//                     </p>
//                   </div>
//                   <div onClick={() =>
//                       handleSidebarCategory("electronics", "nintendo")
//                     } className="relative rounded overflow-hidden cursor-pointer">
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f2e5f392c101-05817668-93609295.webp"
//                       alt="Nintendo"
//                       className="w-full h-auto object-cover"
//                     />
//                     <p className="absolute bottom-2 left-2 text-white font-semibold">
//                       Nintendo
//                     </p>
//                   </div>
//                   <div onClick={() =>
//                       handleSidebarCategory("electronics", "xbox")
//                     } className="relative rounded overflow-hidden cursor-pointer">
//                     <img
//                       src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f2e978032926-46652292-54954022.webp"
//                       alt="Xbox"
//                       className="w-full h-auto object-cover "
//                     />
//                     <p className="absolute bottom-2 left-2 text-white font-semibold">
//                       Xbox
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative group">
//             <p
//               className="bg-red-600 text-white px-8 py-2 rounded-full cursor-pointer"
//               onClick={()=>navigate('/contact')}
//             >
//               Contact Us
//             </p>
//           </div>
//         </div>
//       </div>
//       <LoginModal
//        isOpen={loginOpen}
//        onClose={() => setLoginOpen(false)}
//        onSuccess={handleLoginSuccess}
//  />
//     </div>
//   );
// }

// export default Navbar;

// // http://localhost/toyfort-master/

// import React, { useState, useRef, useEffect } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoIosArrowForward } from "react-icons/io";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { BsThreads } from "react-icons/bs";
// import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";

// const menuItems = [
//   { label: "Home", path: "/" },
//   { label: "Books", path: "/books" },
//   { label: "Infants", path: "/infants" },
//   { label: "Toys", path: "/toys" },
//   { label: "Sports", path: "/sports" },
//   { label: "School Items", path: "/school-items" },
//   { label: "Electronics", path: "/electronics" },
//   { label: "Contact Us", path: "/contact-us" },
//   { label: "Wishlist", path: "/wishlist" },
//   { label: "Contact", path: "/contact" },
//   { label: "Blog", path: "/blog" },
//   { label: "Login", path: "/login" },
//   { label: "Register", path: "/register" },
// ];

// const socialIcons = [
//   { icon: <FaFacebookF />, url: "https://www.facebook.com/toyfort/" },
//   { icon: <FaTwitter />, url: "https://x.com/toy_fort?mx=2" },
//   { icon: <FaInstagram />, url: "https://www.instagram.com/toyfort/?hl=en" },
//   { icon: <FaYoutube />, url: "https://www.youtube.com/channel/UCsgoufKQ-zDSZwpkEAcV-Ng" },
//   { icon: <FaPinterestP />, url: "https://in.pinterest.com/toyfort/_saved/" },
//   { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/toyfort/" },
//   { icon: <FaWhatsapp />, url: "https://api.whatsapp.com/send?phone=918744055175" },
//   { icon: <BsThreads />, url: "https://www.threads.net/@toyfort/" },
// ];

// function Navbar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const sidebarRef = useRef();
//   const navigate = useNavigate();

//   // Close sidebar on outside click
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setSidebarOpen(false);
//       }
//     }
//     if (sidebarOpen) document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [sidebarOpen]);

//   return (
//     <>
//       {/* Fixed Top Bar */}
//       <div>
//         {/* Social Bar (Desktop Only) */}
//         <div className="hidden md:flex items-center justify-between px-4 bg-red-600 text-white h-8 text-sm font-semibold">
//           <div className="flex items-center space-x-3">
//             {socialIcons.map(({ icon, url }, i) => (
//               <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">{icon}</a>
//             ))}
//           </div>
//           <div className="overflow-hidden whitespace-nowrap w-full ml-4">
//             <div className="animate-marquee">
//               CALL US AT 8744055175 FOR BULK ORDERS OR ANY OTHER ASSISTANCE
//             </div>
//           </div>
//         </div>

//         {/* Main Navbar */}
//         <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md relative">
//           {/* Hamburger for mobile */}
//           <button
//             className="md:hidden text-3xl text-gray-800"
//             onClick={() => setSidebarOpen(true)}
//             aria-label="Open menu"
//           >
//             <FiMenu />
//           </button>

//           {/* Logo */}
//           <div className="flex items-center">
//             <img
//               src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp"
//               alt="Toy Fort Logo"
//               className="h-10"
//               onClick={() => navigate("/")}
//               style={{ cursor: "pointer" }}
//             />
//           </div>

//           {/* Search bar (desktop only) */}
//           <div className="hidden md:block w-1/3 mx-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search for Toys"
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//               />
//               <svg
//                 className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//               </svg>
//             </div>
//           </div>

//           {/* User/Cart/Wishlist (right) */}
//           <div className="flex items-center space-x-4">
//             <AiOutlineShoppingCart className="w-7 h-7 text-gray-700 cursor-pointer" onClick={() => navigate("/cart")} />
//             <AiOutlineHeart className="w-7 h-7 text-gray-700 cursor-pointer" onClick={() => navigate("/wishlist")} />
//             <AiOutlineUser className="w-7 h-7 text-gray-700 cursor-pointer" onClick={() => navigate("/login")}/>
//           </div>
//         </header>

//         {/* Horizontal Menu (desktop only) */}
//         <nav className="hidden md:flex justify-center space-x-4 py-3 bg-white border-b-4 border-gray-100">
//           {menuItems.slice(0, 8).map((item) => (
//             <button
//               key={item.label}
//               className="bg-red-600 text-white px-7 py-2 rounded-full font-semibold hover:bg-red-700 transition"
//               onClick={() => navigate(item.path)}
//             >
//               {item.label}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Sidebar Drawer (mobile only) */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 z-40">
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black bg-opacity-20 z-50" />
//           {/* Sidebar */}
//           <aside
//             ref={sidebarRef}
//             className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300"
//           >
//             <div className="flex items-center justify-between px-4 py-3 border-b">
//               <img
//                 src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp"
//                 alt="Toy Fort Logo"
//                 className="h-8"
//               />
//               <button
//                 className="text-2xl text-gray-600"
//                 onClick={() => setSidebarOpen(false)}
//                 aria-label="Close menu"
//               >
//                 &times;
//               </button>
//             </div>
//             <nav className="flex-1 overflow-y-auto">
//               <ul className="py-2">
//                 {menuItems.map((item) => (
//                   <li key={item.label}>
//                     <button
//                       className="w-full flex justify-between items-center px-6 py-3 text-left text-gray-800 hover:bg-gray-100 focus:outline-none"
//                       onClick={() => {
//                         navigate(item.path);
//                         setSidebarOpen(false);
//                       }}
//                     >
//                       <span>{item.label}</span>
//                       <IoIosArrowForward className="text-gray-400" />
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </aside>
//         </div>
//       )}
// <div className="pt-24 md:pt-32"></div>
//       {/* Spacer for fixed header */}
//       {/* <div className="h-16 md:h-28"></div> */}
//     </>
//   );
// }

// export default Navbar;


import React, { useState, useRef, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";


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
  { icon: <FaYoutube />, url: "https://www.youtube.com/channel/UCsgoufKQ-zDSZwpkEAcV-Ng" },
  { icon: <FaPinterestP />, url: "https://in.pinterest.com/toyfort/_saved/" },
  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/toyfort/" },
  { icon: <FaWhatsapp />, url: "https://api.whatsapp.com/send?phone=918744055175" },
  { icon: <BsThreads />, url: "https://www.threads.net/@toyfort/" },
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navbarRef = useRef(null);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  // Dynamically calculate navbar height using ResizeObserver
  useEffect(() => {
    if (!navbarRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setNavHeight(entry.contentRect.height);
    });

    observer.observe(navbarRef.current);

    return () => observer.disconnect();
  }, []);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    if (sidebarOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

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
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                {icon}
              </a>
            ))}
          </div>
          <div className="overflow-hidden whitespace-nowrap w-full ml-2 md:ml-4 px-6">
            <div className="animate-marquee">
              CALL US AT 8744055175 FOR BULK ORDERS OR ANY OTHER ASSISTANCE
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="flex items-center px-2 sm:px-4 py-1 sm:py-2 bg-white w-full">
          {/* Hamburger (left on mobile only) */}
          <div className="flex md:hidden flex-1">
            <button className="text-2xl sm:text-3xl text-gray-800" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
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
                <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Icons (right) */}
          <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
            <AiOutlineShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 cursor-pointer" onClick={() => navigate("/cart")} />
            <AiOutlineHeart className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 cursor-pointer" onClick={() => navigate("/wishlist")} />
            <AiOutlineUser className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 cursor-pointer" onClick={() => navigate("/login")} />
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
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
      {!sidebarOpen &&  <div style={{ height: `${navHeight}px` }} />}

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black bg-opacity-20 z-50" />
          <aside
            ref={sidebarRef}
            className="fixed top-0 left-0 h-screen w-64 sm:w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <img src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp" alt="Toy Fort Logo" className="h-8" />
              <button className="text-2xl text-gray-600" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
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
                        navigate(item.path);
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
