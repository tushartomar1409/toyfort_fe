import AdminSidebar from "../../components/admin_components/AdminSidebar";
import Adminheader from "../../components/admin_components/Adminheader";
import Dashboardcard from "../../components/admin_components/Dashboardcard";
import LatestOrders from "../../components/admin_components/LatestOrders";
import LatestTransactions from "../../components/admin_components/LatestTransactions";
import Adminfooter from "../../components/admin_components/Adminfooter";
import LatestProducts from "../../components/admin_components/LatestProducts";
import LatestPendingProducts from "../../components/admin_components/LatestPendingProducts";
import LatestTransactionFeatures from "../../components/admin_components/LatestTransactionsFeature";
import LatestReviews from "../../components/admin_components/LatestReviews";
import LatestComments from "../../components/admin_components/LatestComments";
import LatestMembers from "../../components/admin_components/LatestMembers";

function AdminHome() {
  return (
    
    <div className="flex">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader /> {/* Kept unchanged */}
        <div className="p-4">
          <Dashboardcard />

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

        <Adminfooter />
      </div>
    </div>
  );
}

export default AdminHome;
