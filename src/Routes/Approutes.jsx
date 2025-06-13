import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Contact from "../pages/contact";
import HelpCenter from "../pages/HelpCenter";
import TermsConditions from "../pages/TermsConditions";
import ShippingPolicy from "../pages/ShippingPolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";
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
import LatestTransactions from "../components/admin_components/LatestTransactions";
import LatestTransactionsFeature from "../components/admin_components/LatestTransactionsFeature";
import AdminHome from "../pages/Adminpages/AdminHome";
import Layout from "../components/Layout"; // ✅ Import it here
import ProductsTable from "../pages/Adminpages/ProductsTable";





// Accept openLoginModal as a prop
const Approutes = ({ openLoginModal }) => {
  const LoggedIn = true ;

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/about-us", component: AboutUs },
  { path: "/help-center", component: HelpCenter },
  { path: "/terms-conditions", component: TermsConditions },
  { path: "/shipping-policy", component: ShippingPolicy },
  { path: "/privacy-policy", component: PrivacyPolicy },
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
  // { path: "/order", component: Orders }, // REMOVED from public routes
  { path: "/refund-requests", component: Refund },
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
  { path: "admin/quote-requests", component: QuoteRequestPage }
  

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