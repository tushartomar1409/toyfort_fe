import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

// Sample data
const earningsData = [
  {
    id: 68,
    order: "#10108",
    user: "Piyush Gupta",
    total: 198,
    vat: 0,
    commission: 20,
    commissionPercent: 10,
    discountCoupon: 0,
    shippingCost: 0,
    earnedAmount: 178,
    paymentType: "Cash on Delivery",
    date: "2025-05-19 15:05",
  },
  {
    id: 67,
    order: "#10108",
    user: "Piyush Gupta",
    total: 198,
    vat: 0,
    commission: 20,
    commissionPercent: 10,
    discountCoupon: 0,
    shippingCost: 0,
    earnedAmount: 178,
    paymentType: "Cash on Delivery",
    date: "2025-05-19 15:01",
  },
  {
    id: 66,
    order: "#10108",
    user: "Piyush Gupta",
    total: 198,
    vat: 0,
    commission: 20,
    commissionPercent: 10,
    discountCoupon: 0,
    shippingCost: 0,
    earnedAmount: 178,
    paymentType: "Cash on Delivery",
    date: "2025-05-19 13:19",
  },
];

const Earnings = () => {
  const [search, setSearch] = useState("");
  const [showCount, setShowCount] = useState(30);

  // Filtering logic
  const filtered = earningsData
    .filter((item) =>
      item.order.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, showCount);

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Earnings</h2>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div>
            <label className="mr-2 font-medium">Show</label>
            <select
              value={showCount}
              onChange={(e) => setShowCount(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
            >
              {[10, 20, 30, 50].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <input
            type="text"
            placeholder="Order Number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded font-semibold"
            onClick={() => {}}
          >
            Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Id</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Order</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">User</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Total</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">VAT</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Commission</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Discount Coupon</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Shipping Cost</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Earned Amount</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Date</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Options</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, idx) => (
                <tr key={row.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-2 px-4 border-b border-gray-100">{row.id}</td>
                  <td className="py-2 px-4 border-b border-gray-100">{row.order}</td>
                  <td className="py-2 px-4 border-b border-gray-100">{row.user}</td>
                  <td className="py-2 px-4 border-b border-gray-100">₹{row.total}</td>
                  <td className="py-2 px-4 border-b border-gray-100">₹{row.vat}</td>
                  <td className="py-2 px-4 border-b border-gray-100">
                    ₹{row.commission} ({row.commissionPercent}%)
                  </td>
                  <td className="py-2 px-4 border-b border-gray-100">₹{row.discountCoupon}</td>
                  <td className="py-2 px-4 border-b border-gray-100">₹{row.shippingCost}</td>
                  <td className="py-2 px-4 border-b border-gray-100">
                    ₹{row.earnedAmount}
                    <br />
                    <span className="text-red-500">{row.paymentType}</span>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-100">{row.date}</td>
                  <td className="py-2 px-4 border-b border-gray-100">
                    <select className="bg-indigo-600 text-white px-3 py-2 rounded w-full focus:outline-none">
                      <option>Select an option</option>
                      <option>View Details</option>
                      <option>Download Invoice</option>
                    </select>
                  </td>
                </tr>
                
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={11} className="py-4 text-center text-gray-500">
                    No data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    

        <Adminfooter />
      
    </div>
  );
};

export default Earnings;
