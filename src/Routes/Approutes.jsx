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
import UpdateProfile from "../pages/UpdateSideBar";
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
import AddCategory from "../pages/admin/add-category";
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
import LatestReviews from "../components/admin_components/LatestReviews";
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
import BankTransfer from "../pages/admin/BankTransfersNotifications";
import DigitalSales from "../pages/Adminpages/DigitalSales";
import FeaturedProducts from "../pages/Adminpages/FeaturedProducts";
import Pricing from "../pages/Adminpages/Pricing";
import Transaction from "../pages/Adminpages/Transaction";

import Newsletter from "../pages/admin/newsletter";
import MembershipPlan from "../pages/admin/MembershipPlan";
import MembershipTransactions from "../pages/admin/MembershipTransactions";
import CustomField from "../pages/Adminpages/CustomField";
import AddCustomField from "../pages/Adminpages/AddCustomField";
import users from "../pages/admin/Users";
import shopOpening from "../pages/admin/ShopOpeningRequests";
import rolesAndPermission from "../pages/admin/Roles & Permissions";
import Navigation from "../pages/admin/navigation";
import Categories from "../pages/admin/categories";
import HomepageManager from "../pages/admin/HomepageManager";
import Pages from "../pages/admin/Pages";
import AddPage from "../pages/admin/add-page";
import PendingProduct from "../pages/Adminpages/PendingProduct";
import SoldProduct from "../pages/Adminpages/SoldProduct";
import SpecialOffers from "../pages/Adminpages/SpecialOffers";
import Countries from "../pages/admin/countries";
import AddCountry from "../pages/admin/AddCountry";
import States from "../pages/admin/states";
import AddStates from "../pages/admin/addStates";
import Cities from "../pages/admin/Cities";
import AddCities from "../pages/admin/addCities";

import ProductDrafts from "../pages/Adminpages/ProductDrafts";
import HiddenProducts from "../pages/Adminpages/HiddenProducts";
import DeletedProductsPage from "../pages/Adminpages/DeletedProducts";
import BlogPosts from "../pages/Adminpages/Blogposts";
import AddBlogPost from "../pages/Adminpages/AddBlogPost";
import BlogCategory from "../pages/Adminpages/BlogCategory";
import Storage from "../pages/Adminpages/Storage";
import SeoTools from "../pages/Adminpages/SeoTools";
import AbuseReports from "../pages/Adminpages/AbuseReports";
import ApprovedProductComments from "../pages/Adminpages/ApprovedProductComments";
import PendingProductComments from "../pages/Adminpages/PendingProductComments";
import KnowledgeBase from "../pages/admin/knowledgebase";
import AddContent from "../pages/admin/AddContent";
import AddCategoryKnowledge from "../pages/admin/AddCategoryKnowledge";
import supportTicket from "../pages/admin/Support Ticket Page"
import cacheSystem from "../pages/admin/CacheSystem"
import AdSpaces from "../pages/admin/AdSpaces"
import bulkCategory from "../pages/admin/bulkCategoryUpload"
import contactMessage from "../pages/admin/ContactMessage"
import Blogcomment from "../pages/admin/blogComment";
import refundRequest from "../pages/admin/refundRequest"
import ProductForm from "../pages/Adminpages/ProductForm";
import BulkProductUpload from "../pages/dashboard_pages/BulkProductUpload";
import WithdrawMoney from "../pages/dashboard_pages/WithdrawMoney";
import SetPayoutAccount from "../pages/dashboard_pages/SetPayoutAccount";
import Payoutpage from "../pages/dashboard_pages/Payoutpage";
import PromotionalPayment from "../components/dashboard_components/PromotionalPayment";
import Shopsettings from "../pages/Adminpages/Shopsettings";
import Shippingsettings from "../pages/Adminpages/Shippingsettings";
import Coupons from "../pages/dashboard_pages/Coupons";
import ActiveSalesPage from "../pages/dashboard_pages/ActiveSalesPage";
import CancelledSalesPage from "../pages/dashboard_pages/CancelledSalesPage";
import CurrencySettings from "../pages/admin/CurrencySettings";
import AddCurrency from "../pages/admin/addCurrency";
import PaymentSettings from "../pages/admin/PaymentSettings";
import SystemSettings from "../pages/admin/SystemSettings";
import RouteSettings from "../pages/admin/RouteSettings";
import ProductSettings from "../pages/admin/ProductSettings";


import GeneralSettings from "../pages/Adminpages/GeneralSettings";
import EmailSettings from "../pages/Adminpages/EmailSettings";
import SocialLogin from "../pages/Adminpages/SocialLogin";
import LanguageSettings from "../pages/Adminpages/LanguageSettings";
import EditTranslationsPage from "../pages/Adminpages/EditTranslation";
import visualsetting from "../pages/admin/Visual Settings";
import Preferences from "../pages/admin/Preferences";
import FontSettings from "../pages/admin/FontSettings";

import CompletedSales from "../pages/dashboard_pages/CompletedSales";
// Accept openLoginModal as a prop
const Approutes = ({ openLoginModal }) => {

  const LoggedIn = true;

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
    {
      path: "/register",
      component: () => <Register openLoginModal={openLoginModal} />,
    },
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
  { path: "/dashboard/comments", component: LatestComments },
  { path: "/admin/members", component: LatestMembers },
  { path: "/admin/orders", component: Orders }, // Main Orders page for admin
  { path: "/admin/latest-orders", component: LatestOrders }, // Existing LatestOrders component
  { path: "/admin/pending-products", component: LatestPendingProducts },
  //{ path: "/admin/products", component: LatestProducts },
  { path: "/dashboard/reviews", component: LatestReviews },
  { path: "/admin/reviews", component: LatestReviews },
  { path: "/admin/transactions", component: LatestTransactions },
  { path: "/admin/transactions-feature", component: LatestTransactionsFeature },
  { path: "/admin/products", component: ProductsTable },
  { path: "/dashboard/quote-requests", component: QuoteRequestPage },
  { path: "/admin/quote-requests", component: QuoteRequestPage },
  { path: "/dashboard/earnings", component: Earnings },
  { path: "/admin/earnings", component: Earnings },
  { path: "/dashboard/earnings", component: Earnings },
  { path: "/admin/seller-balances", component: SellerBalances },
   { path: "/admin/add-payout", component: AddPayout },
    { path: "/admin/payout-requests", component: PayoutRequest },
    { path: "/admin/payout-settings", component: PayoutSettings},
<<<<<<< Updated upstream
  { path: "/admin/refund-requests", component: refundRequest },
  { path: "/dashboard/refund-requests", component: refundRequest },
=======
  // { path: "/admin/refund-requests", component: RefundRequest },
  // { path: "/dashboard/refund-requests", component: RefundRequest },
>>>>>>> Stashed changes
  { path: "/admin/bank-transfers", component: BankTransfer},
   { path: "/admin/digital-sales", component: DigitalSales},
  { path: "/admin/order-bank-transfers", component: BankTransfer},
   { path: "/admin/sales", component: DigitalSales},
   { path: "/admin/featured-products", component:FeaturedProducts},
   { path: "/admin/featured-products-pricing", component:Pricing},
   { path: "/admin/featured-products-transaction", component:Transaction},
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
   {path: "/admin/navigation" ,component: Navigation},
 {path: "/admin/categories",component: Categories},
 {path: "/admin/add-category", component:AddCategory},
  
   {path: "/admin/homepage-manager" ,component: HomepageManager},
   {path: "/admin/pages" ,component: Pages},
   {path: "/admin/add-page" ,component: AddPage},
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
    {
      path: "/admin/transactions-feature",
      component: LatestTransactionsFeature,
    },
    { path: "/admin/products", component: ProductsTable },
    { path: "admin/quote-requests", component: QuoteRequestPage },
    { path: "/admin/earnings", component: Earnings },
    { path: "/admin/seller-balances", component: SellerBalances },
    { path: "/admin/add-payout", component: AddPayout },
    { path: "/admin/payout-requests", component: PayoutRequest },
    { path: "/admin/payout-settings", component: PayoutSettings },
    { path: "/admin/refund-requests", component: Refund },
    { path: "/admin/refund-requests", component: Refund },
    { path: "/admin/bank-transfers", component: BankTransfer },
    { path: "/admin/digital-sales", component: DigitalSales },
    { path: "/admin/order-bank-transfers", component: BankTransfer },
    { path: "/admin/sales", component: DigitalSales },
    { path: "/admin/featured-products", component: FeaturedProducts },
    { path: "/admin/featured-products-pricing", component: Pricing },
    { path: "/admin/featured-products-transaction", component: Transaction },
    { path: "/admin/newsletter", component: Newsletter },
    { path: "/admin/newsletter", component: Newsletter },
    { path: "/admin/membership-plans", component: MembershipPlan },
    {
      path: "/admin/membership-transactions",
      component: MembershipTransactions,
    },
    { path: "/admin/custom-fields", component: CustomField },
    { path: "/admin/add-custom-fields", component: AddCustomField },
    {
      path: "/admin/transactions-membership",
      component: MembershipTransactions,
    },
    { path: "/admin/users", component: users },
    { path: "/admin/shop-opening-requests", component: shopOpening },
    { path: "/admin/roles-permissions", component: rolesAndPermission },
    { path: "/admin/navigation", component: Navigation },
    { path: "/admin/categories", component: Categories },
    { path: "/admin/add-category", component: AddCategory },
    { path: "/admin/homepage-manager", component: HomepageManager },
    { path: "/admin/pages", component: Pages },
    { path: "/admin/add-page", component: AddPage },
    { path: "/admin/pending-product", component: PendingProduct },
    { path: "/admin/sold-products", component: SoldProduct },
    { path: "/admin/special-offers", component: SpecialOffers },
    { path: "/admin/countries", component: Countries },
    { path: "/admin/addCountries", component: AddCountry },
    { path: "/admin/states", component: States },
    { path: "/add-state", component: AddStates },
    { path: "/admin/cities", component: Cities },
    { path: "/admin/add-city", component: AddCities },
    { path: "/admin/drafts", component: ProductDrafts },
    { path: "/admin/hidden-products", component: HiddenProducts },
    { path: "/admin/deleted-products", component: DeletedProductsPage },
    { path: "/admin/blog-posts", component: BlogPosts },
    { path: "/admin/add-blog-post", component: AddBlogPost },
    { path: "/admin/blog-categories", component: BlogCategory },
    { path: "/admin/storage", component: Storage },
    { path: "/admin/seo-tools", component: SeoTools },
    { path: "/admin/abuse-reports", component: AbuseReports },
    { path: "/admin/product-comments", component: ApprovedProductComments },
    {
      path: "/admin/pending-product-comments",
      component: PendingProductComments,
    },

     {path: "/admin/knowledge-base"  ,component:KnowledgeBase},
     {path:"/admin/addContent", component:AddContent},
     {path:"/admin/addCategory",component :AddCategoryKnowledge},
     {path:"/admin/support-tickets",component:supportTicket},
     {path:"/admin/cache-system",component:cacheSystem},
     {path:"/admin/ad-spaces" ,component:AdSpaces},
     {path:"/admin/bulk-category-upload" ,component:bulkCategory},
     {path:"/admin/contact-messages" ,component:contactMessage},
     {path :"/admin/pending-blog-comments",component:Blogcomment},
     {path :"/dashboard/addproduct",component:ProductForm},
     {path :"/admin/addproduct",component:ProductForm},
     {path :"/dashboard/bulkproduct",component:BulkProductUpload},
     {path :"/admin/bulkproduct",component:BulkProductUpload},
     {path :"/dashboard/withdrawmoney",component:WithdrawMoney},
     {path :"/dashboard/setpayout",component:SetPayoutAccount},
     {path :"/dashboard/payouts",component: Payoutpage},
     {path :"/dashboard/promotionalpayment",component: PromotionalPayment},
     {path :"/admin/promotionalpayment",component: PromotionalPayment},
     {path :"/dashboard/shopsettings",component: Shopsettings},
     {path :"/dashboard/shippingsettings",component: Shippingsettings},
     {path :"/dashboard/coupons",component: Coupons},
     {path :"/dashboard/activesales", component: ActiveSalesPage},
     {path :"/dashboard/cancelledsales", component: CancelledSalesPage},
     {path :"/dashboard/completedsales", component: CompletedSales},


     {path :"admin/pending-blog-comments",component:Blogcomment},
       {path :"/admin/currency-settings",component:CurrencySettings},
       {path :"/admin/addCurrency",component:AddCurrency},
        {path :"/admin/payment-settings",component:PaymentSettings},
        {path:"/admin/system-settings", component:SystemSettings},
{path:"/admin/route-settings",component:RouteSettings},
{path:"/admin/product-settings",component:ProductSettings},

     {path :"admin/pending-blog-comments",component:Blogcomment},
     {path :"admin/general-settings",component:GeneralSettings},
     {path :"admin/email-settings",component:EmailSettings},
 {path :"admin/social-login",component:SocialLogin},
 {path :"admin/language-settings",component:LanguageSettings},
 {path :"admin/edit-translations",component:EditTranslationsPage},

  {path :"/admin/visual-settings",component:visualsetting},
   {path :"/admin/preferences",component:Preferences},
   {path :"/admin/font-settings", component:FontSettings}
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
