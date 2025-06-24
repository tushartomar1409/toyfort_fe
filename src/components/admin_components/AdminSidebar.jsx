import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaFileInvoice, // Using this for sub-items if needed
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
  FaShoppingBag,
  FaEnvelope, // Import FaEnvelope for the Newsletter icon
  FaUsers, // Imported for Membership -> Users
} from "react-icons/fa";

const AdminSidebar = () => {
  const [isOrdersOpen, setIsOrdersOpen] = useState(false); // State for the new Orders dropdown
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
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Hi, Piyush Gupta
        </h2>
      </div>

      <nav className="overflow-y-auto flex-grow pr-2">
        <ul className="p-4 space-y-6">
          <li className="text-gray-400 text-xs mb-6">NAVIGATION</li>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin/home"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaHome />
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="text-gray-400 text-xs mt-4 mb-2">PRODUCTS</li>
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/productsform"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaFileAlt />
              <p>Add Product</p>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link
              to="/dashboard/bulkproductupload"
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

          {/* <ul className="space-y-2 text-sm text-gray-700">
            <li
              className="flex items-center justify-between cursor-pointer  py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsFeaturedProduct(!isFeaturedProduct)}
            >
              <div className="flex items-center space-x-2">
                <FaDollarSign />
                <p> Featured Products</p>
              </div>
              {isFeaturedProduct ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>
            {isFeaturedProduct && (
              <ul className="ml-6 mt-1 space-y-1 text-gray-500">
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/featuredProducts"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Products</p>
                  </Link>
                </li>

                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/pricing"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Pricing</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/transaction"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Transaction</p>
                  </Link>
                </li>
              </ul>
            )}
          </ul> */}

          {/* <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center space-x-2">
            <Link
              to="/admin/sales"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaShoppingBag />
              <p>Digital Sales</p>
            </Link>
          </li>
          </ul> */}

          {/* MODIFIED: Orders section is now a dropdown */}
          {/* <ul className="space-y-2 text-sm text-gray-700">
            <li
              className="flex items-center justify-between cursor-pointer py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsOrdersOpen(!isOrdersOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>Orders</p>
              </div>
              {isOrdersOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>
            {isOrdersOpen && (
              <ul className="ml-6 mt-1 space-y-1 text-gray-500">
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/orders"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Orders</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/transactions"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Transactions</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/bank-transfers"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Bank Transfers Notifications</p>
                  </Link>
                </li>
              </ul>
            )}
          </ul> */}

          {/* <ul className="space-y-2 text-sm text-gray-700">
            <li
              className="flex items-center justify-between cursor-pointer  py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsEarningOpen(!isEarningOpen)}
            >
           <div className="flex items-center space-x-2">
                <FaWallet />
                <p>Earnings</p>
              </div>
              {isEarningOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>
            {isEarningOpen && (
              <ul className="ml-6 mt-1 space-y-1 text-gray-500">
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/earnings"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Earnings</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/admin/sellerBalances"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Seller Balances</p>
                  </Link>
                </li>
                </ul>
               
            )}
             </ul>
             
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
                    to="/dashboard/withdraw-money"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Withdraw Money</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/dashboard/payoutpage"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Payouts</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to="/dashboard/set-payout-account"
                    className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
                  >
                    <p>Set Payout Amount</p>
                  </Link>
                </li>
              </ul>
            )}
          </ul>
          <li className="flex items-center space-x-2">
            <Link
              to="/dashboard/quote-requests"
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
              to="/dashboard/refund-requests"
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
                  to="/dashboard/promotional-payment"
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
              to="/dashboard/comments"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaComment />
              <p>Comments</p>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link
              to="/dashboard/reviews"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaStar />
              <p>Reviews</p>
            </Link>
          </li>
          {/* New Newsletter section */}
          {/* <li className="flex items-center space-x-2">
            <Link
              to="/admin/newsletter"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaEnvelope />
              <p>Newsletter</p>
            </Link>
          </li> */}
          <li className="text-gray-400 text-xs mb-6">SETTINGS</li>
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/shopsettings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaCog />
              <p>Shop Settings</p>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/shippingsettings"
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
