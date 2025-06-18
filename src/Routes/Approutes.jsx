import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Contact from "../pages/contact";
import HelpCenter from "../pages/HelpCenter";
import TermsConditions from "../pages/TermsConditions";
import ShippingPolicy from "../pages/ShippingPolicy";
// import PrivacyPolicy from "../pages/PrivacyPolicy";
import Books from "../pages/Books";
import WriteForUs from "../pages/WriteForUs";
import ColoringBooks from "../pages/ColoringBooks";
import Register from "../pages/Register"; // Import Register component
import ForgotPassword from "../pages/ForgotPassword";
import Infants from "../pages/Infants";
import Toys from "../pages/Toys";
import Sports from "../pages/Sports";
import SchoolItems from "../pages/SchoolItems";
import Electronics from "../pages/Electronics";
import BlogContent from "../pages/BlogContent";
import BrandProducts from "../pages/BrandProducts";
import ProductDetails from "../pages/ProductDetails";
import UpdateProfile from '../pages/UpdateSideBar';
import ShippingAddress from "../pages/ShippingAddress";
import ChangePassword from "../pages/ChangePassword";
import Orders from "../pages/admin/Orders"; // This is the main Orders component
import Refund from "../pages/Refund";
import Order from "../pages/Orders";
import WishList from "../pages/WishList";
import Cart from "../pages/Cart";
import cartSlider from "../pages/cartSlider";
import DiscountProductPage from "../pages/DiscountProductPage";
import AgeProductPage from "../pages/AgeProductPage";
import CategoryProductPage from "../pages/CategoryProductPage";
import BrandProduct from "../pages/BrandProduct";
import ProductByGender from "../pages/ProductByGender";
import ProductOnPrice from "../pages/ProductOnPrice";
import CharacterProducts from "../pages/CharacterProducts";
import InStockProduct from "../pages/InStockProduct";
import OutOfStockProduct from "../pages/OutOfStockProduct";
import SubCategory from "../pages/SubCategory";
import ResetPassword from "../pages/ResetPassword";
// import OutdoorPlays from "../pages/OutdoorPlays";
import OutdoorPlays from "../pages/OutdoorPlays";
import AdminSidebar from "../components/admin_components/AdminSidebar";
import { Dashboard } from "@mui/icons-material";
import Dashboardcard from "../components/admin_components/Dashboardcard";
import Adminheader from "../components/admin_components/Adminheader";
import Adminfooter from "../components/admin_components/Adminfooter";
import LatestComments from "../components/admin_components/LatestComments";
import LatestMembers from "../components/admin_components/LatestComments";
import LatestOrders from "../components/admin_components/LatestOrders"; // This is a different component
import LatestPendingProducts from "../components/admin_components/LatestPendingProducts";
import LatestProducts from "../components/admin_components/LatestProducts";
import LatestReviews from "../pages/admin/review";
import LatestTransactions from "../pages/admin/Transactions";
import LatestTransactionsFeature from "../components/admin_components/LatestTransactionsFeature";
import AdminHome from "../pages/Adminpages/AdminHome";
import Layout from "../components/Layout"; // ✅ Import it here
import ProductsTable from "../pages/Adminpages/ProductsTable";
import Earnings from "../pages/Adminpages/Earnings";
import SellerBalances from "../pages/Adminpages/SellerBalances";
import QuoteRequestPage from "../pages/admin/Quote Request";
import AddPayout from "../pages/Adminpages/AddPayout";
import PayoutRequest from "../pages/Adminpages/PayoutRequest";
import PayoutSettings from "../pages/Adminpages/PayoutSettings";
import BankTransfer from "../pages/admin/BankTransfersNotifications"
import DigitalSales from "../pages/Adminpages/DigitalSales";
import FeaturedProducts from "../pages/Adminpages/FeaturedProducts";
import Pricing from "../pages/Adminpages/Pricing";
import Transaction from "../pages/Adminpages/Transaction";

import Newsletter from"../pages/admin/newsletter"
import MembershipPlan from "../pages/admin/MembershipPlan";
import MembershipTransactions from "../pages/admin/MembershipTransactions";
import CustomField from "../pages/Adminpages/CustomField";
import AddCustomField from "../pages/Adminpages/AddCustomField";
import users from"../pages/admin/Users";
import shopOpening from "../pages/admin/ShopOpeningRequests";
import rolesAndPermission from "../pages/admin/Roles & Permissions"
import Navigation from "../pages/admin/navigation";





// Accept openLoginModal as a prop
const Approutes = ({ openLoginModal }) => {

  const LoggedIn = true  ;


const publicRoutes = [
  { path: "/", component: Home },
  { path: "/about-us", component: AboutUs },
  { path: "/help-center", component: HelpCenter },
  { path: "/terms-conditions", component: TermsConditions },
  { path: "/shipping-policy", component: ShippingPolicy },
  // { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/write-for-us", component: WriteForUs },
  { path: "/register", component: () => <Register openLoginModal={openLoginModal} /> },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/infants", component: Infants },
  { path: "/sports", component: Sports },
  { path: "/toys", component: Toys },
  { path: "/school-items", component: SchoolItems },
  { path: "/electronics", component: Electronics },
  { path: "/blog/:category_slug/:id", component: BlogContent },
  { path: "/products", component: BrandProducts },
  { path: "/:slug", component: ProductDetails },
  { path: "/settings/edit-profile", component: UpdateProfile },
  { path: "/settings/shipping-address", component: ShippingAddress },
  { path: "/settings/change-password", component: ChangePassword },
  { path: "/order", component: Order },
  { path: "/refund-requests", component: Refund },
  // { path: "/order", component: Orders }, // REMOVED from public routes

  { path: "/wishlist/:slug", component: WishList },
  { path: "/cart", component: Cart },
  { path: "/card-slider", component: cartSlider },
  { path: "/products/discount", component: DiscountProductPage },
  { path: "/products/age", component: AgeProductPage },
  { path: "/category/:category", component: CategoryProductPage },
  { path: "/brandProducts/products", component: BrandProduct },
  { path: "/products/gender", component: ProductByGender },
  { path: "/products/filter-by-price", component: ProductOnPrice },
  { path: "/characterProducts/products", component: CharacterProducts },
  { path: "/stock-product/in-stock", component: InStockProduct },
  { path: "/stock-product/out-stock", component: OutOfStockProduct },
  { path: "/category/:category/:subcategory", component: SubCategory },
  { path: "/reset-password", component: ResetPassword },
  { path: "/toys/:toys", component: OutdoorPlays },
  { path: "/books", component: Books },
  { path: "/books/colouring-books", component: ColoringBooks },
];

  const privateRoutes = [
  { path: "/admin/home", component: AdminHome },
  { path: "/admin/dashboardcard", component: Dashboardcard },
  { path: "/admin/header", component: Adminheader },
  { path: "/admin/footer", component: Adminfooter },
  { path: "/admin/comments", component: LatestComments },
  { path: "/admin/members", component: LatestMembers },
  { path: "/admin/orders", component: Orders }, // Main Orders page for admin
  { path: "/admin/latest-orders", component: LatestOrders }, // Existing LatestOrders component
  { path: "/admin/pending-products", component: LatestPendingProducts },
  //{ path: "/admin/products", component: LatestProducts },
  { path: "/admin/reviews", component: LatestReviews },
  { path: "/admin/transactions", component: LatestTransactions },
  { path: "/admin/transactions-feature", component: LatestTransactionsFeature },
  { path: "/admin/products", component: ProductsTable },
  { path: "admin/quote-requests", component: QuoteRequestPage },
  { path: "/admin/earnings", component: Earnings },
  { path: "/admin/seller-balances", component: SellerBalances },
   { path: "/admin/add-payout", component: AddPayout },
    { path: "/admin/payout-requests", component: PayoutRequest },
    { path: "/admin/payout-settings", component: PayoutSettings},
  { path: "/admin/refund-requests", component: Refund },
  { path: "/admin/refund-requests", component: Refund },
  { path: "/admin/bank-transfers", component: BankTransfer},
   { path: "/admin/digital-sales", component: DigitalSales},
  { path: "/admin/order-bank-transfers", component: BankTransfer},
   { path: "/admin/sales", component: DigitalSales},
   { path: "/admin/featuredProducts", component:FeaturedProducts},
   { path: "/admin/pricing", component:Pricing},
   { path: "/admin/transaction", component:Transaction},
   { path: "/admin/newsletter", component: Newsletter},
  { path: "/admin/newsletter", component: Newsletter},
 {path: "/admin/membership-plans" ,component: MembershipPlan},
 {path: "/admin/membership-transactions",component: MembershipTransactions} ,
 {path: "/admin/custom-fields",component: CustomField} ,
  {path: "/admin/add-custom-fields",component: AddCustomField} ,
 {path: "/admin/transactions-membership",component: MembershipTransactions} ,
   {path: "/admin/users",component: users}, 
   {path: "/admin/shop-opening-requests" ,component: shopOpening},
   {path: "/admin/roles-permissions" ,component: rolesAndPermission},
   {path: "/admin/navigation" ,component: Navigation}

];



 return (
  <Routes>
    {/* Public route always accessible */}
    <Route path="/reset-password" element={<ResetPassword />} />

    {/* Conditional Routes based on LoggedIn */}
    {LoggedIn
      ? privateRoutes.map((route, index) => {
          const Component = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={<ProtectedRoutes component={Component} />}
            />
          );
        })
      : publicRoutes.map((route, index) => {
          const Component = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout openLoginModal={openLoginModal}>
                  <Component />
                </Layout>
              }
            />
          );
        })}
  </Routes>
);

};

export default Approutes;