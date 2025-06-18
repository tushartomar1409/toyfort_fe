import Dashboardsidebar from "../../components/dashboard_components/Dashboardsidebar";
import DashboardFooter from "../../components/dashboard_components/DashboardFooter";
import Dashboardheader from "../../components/dashboard_components/Dashboardheader";
import DashboardCards from "../../components/dashboard_components/DashboardCards";
import LatestOrders from "../../components/admin_components/LatestOrders";
import LatestTransactions from "../../components/admin_components/LatestTransactions";
import LatestProducts from "../../components/admin_components/LatestProducts";
import LatestPendingProducts from "../../components/admin_components/LatestPendingProducts";
import LatestTransactionFeatures from "../../components/admin_components/LatestTransactionsFeature";
import LatestReviews from "../../components/admin_components/LatestReviews";
import LatestComments from "../../components/admin_components/LatestComments";
import LatestMembers from "../../components/admin_components/LatestMembers";


function DashboardHome() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Dashboardsidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen ml-64 overflow-auto">
        <Dashboardheader /> {/* Kept unchanged */}
        <div className="p-4">
          <DashboardCards />

          {/* Grid Content */}
          <div className="grid grid-cols-2 gap-4">
            <LatestOrders />
            <LatestTransactions />
            <LatestProducts />
            <LatestPendingProducts />
            <LatestTransactionFeatures />
            <LatestReviews />
            <LatestComments />
            <LatestMembers />
          </div>
        </div>

        <DashboardFooter />
      </div>
    </div>
  );
}

export default DashboardHome;
