import React from "react";
import { useLocation } from "react-router-dom";

const earningsData = [
  {
    id: 68,
    order: "#10108",
    user: "Piyush Gupta",
    total: 198,
    vat: 0,
    commission: 20,
    commissionPercent: 10,
    coupon: "",
    shipping: 0,
    earned: 178,
    deduction: 178,
    method: "Cash on Delivery",
    date: "2025-05-19 / 15:05",
  },
  {
    id: 67,
    order: "#10108",
    user: "Piyush Gupta",
    total: 198,
    vat: 0,
    commission: 20,
    commissionPercent: 10,
    coupon: "",
    shipping: 0,
    earned: 178,
    deduction: 178,
    method: "Cash on Delivery",
    date: "2025-05-19 / 15:01",
  },
];

export default function Earnings() {
  const location = useLocation();
  const isAdmin = location.pathname.includes("/admin");

  return (
    <div className="p-4 sm:p-6 bg-white rounded-md shadow-md m-2 sm:m-4">
      {isAdmin ? (
        <>
          <h2 className="text-xl sm:text-2xl font-semibold mb-8">Earnings</h2>

          {/* Admin Filter */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-7 mb-4">
            <div>
              <label className="text-sm font-medium mr-3">Show</label>
              <select className="w-full sm:w-auto border px-3 py-1 rounded">
                <option>15</option>
                <option>25</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mr-3">Search</label>
              <input
                type="text"
                placeholder="Order Number"
                className="w-full sm:w-auto border px-3 py-1 rounded"
              />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-1 rounded">
              Filter
            </button>
          </div>

          {/* Admin Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-t">
              <thead className="bg-gray-50 text-left">
                <tr className="border-b">
                  <th className="p-2">Id</th>
                  <th>Order</th>
                  <th>User</th>
                  <th>Total</th>
                  <th>VAT</th>
                  <th>Commission</th>
                  <th>Discount Coupon</th>
                  <th>Shipping</th>
                  <th>Earned</th>
                  <th>Date</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {earningsData.map((e) => (
                  <tr key={e.id} className="border-b">
                    <td className="p-2">{e.id}</td>
                    <td>{e.order}</td>
                    <td className="font-semibold">{e.user}</td>
                    <td>₹{e.total}</td>
                    <td>₹{e.vat}</td>
                    <td>
                      ₹{e.commission} ({e.commissionPercent}%)
                    </td>
                    <td>{e.coupon || "-"}</td>
                    <td>₹{e.shipping}</td>
                    <td>
                      ₹{e.earned}{" "}
                      <span className="text-red-500">(-₹{e.deduction})</span>
                      <br />
                      <span className="text-red-500 text-xs">{e.method}</span>
                    </td>
                    <td>{e.date}</td>
                    <td>
                      <select className="border bg-indigo-600 text-white rounded px-2 py-1">
                        <option>Select</option>
                        <option>View</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="p-4 sm:p-6 bg-[#f9fafb] min-h-screen">
    {/* Balance Card */}
    <div className="bg-white rounded-lg shadow p-6 mb-6 flex items-center justify-between max-w-md sm:max-w-lg">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">₹42,005</h2>
        <p className="text-gray-400 font-medium mt-1">Balance</p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6.75C3 5.784 3.784 5 4.75 5h14.5c.966 0 1.75.784 1.75 1.75v10.5c0 .966-.784 1.75-1.75 1.75H4.75A1.75 1.75 0 013 17.25V6.75zM3 9h18"
          />
        </svg>
      </div>
    </div>

          {/* Filter */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-4">
            <div>
              <label className="text-sm font-medium mr-4">Search</label>
              <input
                type="text"
                placeholder="Order Id"
                className="border px-3 py-1 rounded w-full sm:w-auto"
              />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-1 rounded">
              Filter
            </button>
          </div>

          {/* User Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-t">
              <thead className="bg-gray-50 text-left">
                <tr className="border-b">
                  <th className="p-2">Order</th>
                  <th>Total</th>
                  <th>VAT</th>
                  <th>Commission</th>
                  <th>Coupon</th>
                  <th>Shipping</th>
                  <th>Earned</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {earningsData.map((e) => (
                  <tr key={e.id} className="border-b">
                    <td className="p-2">{e.order}</td>
                    <td>₹{e.total}</td>
                    <td>₹{e.vat}</td>
                    <td>
                      ₹{e.commission} ({e.commissionPercent}%)
                    </td>
                    <td>{e.coupon || "-"}</td>
                    <td>₹{e.shipping}</td>
                    <td>
                      ₹{e.earned}{" "}
                      <span className="text-red-500">(-₹{e.deduction})</span>
                      <br />
                      <span className="text-red-500 text-xs">{e.method}</span>
                    </td>
                    <td>{e.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>

          <p className="text-sm mt-4">Number of Entries: {earningsData.length}</p>
        </>
      )}
    </div>
  );
}
