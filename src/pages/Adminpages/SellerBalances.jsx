import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


// Sample data
const sellers = [
  {
    id: 9,
    name: "Piyush",
    avatar: null,
    sales: 63,
    balance: 42005,
  },
  {
    id: 114,
    name: "Merrell",
    avatar: null,
    sales: 0,
    balance: 0,
  },
  {
    id: 104,
    name: "Naobi",
    avatar: null,
    sales: 0,
    balance: 0,
  },
  {
    id: 105,
    name: "Jessianne",
    avatar: null,
    sales: 0,
    balance: 0,
  },
  {
    id: 106,
    name: "Rebekah",
    avatar: null,
    sales: 0,
    balance: 0,
  },
  {
    id: 107,
    name: "Adalina",
    avatar: null,
    sales: 0,
    balance: 0,
  },
];

const SellerBalances = () => {
  const [showCount, setShowCount] = useState(15);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(sellers);

  const handleFilter = () => {
    setFiltered(
      sellers.filter((seller) =>
        seller.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded shadow p-4 sm:p-6">
        <h2 className="text-2xl font-normal mb-6">
          Seller <span className="font-semibold">Balances</span>
        </h2>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div>
            <label className="mr-2 font-medium">Show</label>
            <select
              value={showCount}
              onChange={(e) => setShowCount(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
            >
              {[5, 10, 15, 20, 50].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <input
            type="text"
            placeholder="Username"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <button
            className="bg-[#6f6fdc] text-white px-4 py-2 rounded font-semibold"
            onClick={handleFilter}
          >
            Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-left">User Id</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">User</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Number of total sales</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Balance</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Options</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, showCount).map((seller, idx) => (
                <tr key={seller.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-2 px-4 border-b border-gray-100">{seller.id}</td>
                  <td className="py-2 px-4 border-b border-gray-100 flex items-center gap-3">
                    <img
                      src={
                        seller.avatar ||
                        "https://www.gravatar.com/avatar/?d=mp&f=y"
                      }
                      alt={seller.name}
                      className="w-10 h-10 rounded bg-gray-200 border object-cover"
                    />
                    <span>{seller.name}</span>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-100">{seller.sales}</td>
                  <td className="py-2 px-4 border-b border-gray-100">
                    ₹{seller.balance.toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-100">
                    <select className="bg-[#6f6fdc] text-white px-3 py-2 rounded w-full font-semibold focus:outline-none">
                      <option>Select an option</option>
                      <option>View Details</option>
                      <option>Send Payout</option>
                    </select>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-4 text-center text-gray-500">
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

export default SellerBalances;
