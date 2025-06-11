import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaFileInvoice, // Import FaFileInvoice for orders icon
  FaBoxOpen,
  FaDollarSign,
  FaFlag,
  FaCog,
  FaThLarge,
  FaChevronDown,
  FaChevronUp,
  FaDownload,
  FaFileAlt,
  FaCloudUploadAlt,
  FaShoppingBasket,
  FaWallet,
  FaCreditCard,
  FaTag,
  FaTicketAlt,
  FaComment,
  FaStar,
  FaShippingFast,
} from "react-icons/fa";

const AdminSidebar = () => {
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isEarningOpen, setIsEarningOpen] = useState(false);
  const [isPayoutOpen, setIsPayoutOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isFeaturedProduct, setIsFeaturedProduct] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isGeneralSettingsOpen, setIsGeneralSettingsOpen] = useState(false);
  const [isPaymentSettingsOpen, setIsPaymentSettingsOpen] = useState(false);
  const [isSystemSettingsOpen, setIsSystemSettingsOpen] = useState(false);
  const [isSaleOpen, setIsSaleOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="text-black w-64 h-screen fixed top-0 left-0 overflow-y-auto flex flex-col"
    >
      <div className="flex flex-col items-center pt-6 px-4">
        <img
          src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp"
          alt="Toy Fort Logo"
          className="w-[150px] h-auto mb-4"
        />
        <div className="w-[90px] h-[90px] rounded-full border-4 border-blue-400 p-1 mb-4">
          <img
            src="https://toyfort.s3.ap-south-1.amazonaws.com/img/user.webp"
            alt="User"
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Hi, Piyush Gupta</h2>
      </div>
      
      <nav className="overflow-y-auto flex-grow pr-2">
        <ul className="p-4 space-y-6">
          <li className="text-gray-400 text-xs mb-6">NAVIGATION</li>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaHome />
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="text-gray-400 text-xs mt-4 mb-2">PRODUCTS</li>
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/products"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaFileAlt />
              <p>Add Product</p>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/products"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaCloudUploadAlt />
              <p>Bulk Product Upload</p>
            </Link>
          </li>
          <ul className="space-y-2 text-sm text-gray-700">
            <li
              className="flex items-center justify-between cursor-pointer  py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsProductOpen(!isProductOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingBasket />
                <p>Products</p>
              </div>
              {isProductOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>
            {isProductOpen && (
              <ul className="ml-6 mt-1 space-y-1 text-gray-500">
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/products"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Products</p>
                  </Link>
                </li>
                {/* <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/products"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Special Offers</p>
                  </Link>
                </li> */}
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/products"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Pending Products</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/products"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Hidden Products</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/products"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Sold Product</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/products"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Drafts</p>
                  </Link>
                </li>
                {/* <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/products"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Deleted Products</p>
                  </Link>
                </li> */}

              </ul>
            )}
          </ul>
          <li className="text-gray-400 text-xs mb-6">SALES</li>
          <ul className="space-y-2 text-sm text-gray-700">
            <li
              className="flex items-center justify-between cursor-pointer  py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsSaleOpen(!isSaleOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>Sales</p>
              </div>
              {isSaleOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>
            {isSaleOpen && (
              <ul className="ml-6 mt-1 space-y-1 text-gray-500">
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/activesales"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Active Sales</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/completedsales"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Completed Sales</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/cancelledsales"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Cancelled Sales</p>
                  </Link>
                </li>
              </ul>
            )}
          </ul>
          {/* New Orders Section */}
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/orders"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaFileInvoice /> {/* Using FaFileInvoice icon for Orders */}
              <p>Orders</p>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/earnings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaWallet />
              <p>Earnings</p>
            </Link>
          </li>
          <ul className="space-y-2 text-sm text-gray-700">
            <li
              className="flex items-center justify-between cursor-pointer  py-2 hover:bg-gray-100 rounded "
              onClick={() => setIsPayoutOpen(!isPayoutOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaCreditCard />
                <p>Payouts</p>
              </div>
              {isPayoutOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isPayoutOpen && (
              <ul className="ml-6 mt-1 space-y-1 text-gray-500">
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/add-payout"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Add Payout</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/payout-requests"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Payout Requests</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/payout-settings"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Payout Settings</p>
                  </Link>
                </li>
              </ul>
            )}
          </ul>
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/quote-requests"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaTag />
              <p>Quote Requests</p>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/coupons"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaTicketAlt />
              <p>Coupons</p>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/refund-requests"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaFlag />
              <p>Refund Requests</p>
            </Link>
          </li>


          <li className="text-gray-400 text-xs mb-6">PAYMENTS</li>
          <ul className="space-y-2 text-sm text-gray-700">

            <li
              className="flex items-center justify-between cursor-pointer  py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsPaymentSettingsOpen(!isPaymentSettingsOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaCreditCard />
                <p>Payment History</p>
              </div>
              {isPaymentSettingsOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isPaymentSettingsOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                <Link
                  to="/admin/promotional-payment"
                  className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                >
                  <p>Promotional Payments</p>
                </Link>
              </ul>
            )}
          </ul>
          <li className="text-gray-400 text-xs mb-6">COMMENTS</li>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin/comments"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaComment />
              <p>Comments</p>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/reviews"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaStar />
              <p>Reviews</p>
            </Link>
          </li>
          <li className="text-gray-400 text-xs mb-6">SETTINGS</li>
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/shopsetttings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaCog />
              <p>Shop Settings</p>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/systemsettings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaShippingFast />
              <p>Shipping Settings</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;