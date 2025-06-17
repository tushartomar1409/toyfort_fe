import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


const Transaction = () => {
  const [show, setShow] = useState(15);
  const [search, setSearch] = useState('');
  const featuredProducts = []; // No records found

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
                <Adminheader />
    
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Featured Products Transactions</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Show</label>
            <select
              className="p-2 border rounded w-24"
              value={show}
              onChange={e => setShow(Number(e.target.value))}
            >
              <option value={15}>15</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
            </select>
          </div>
       
    
          <div className="flex flex-col">
            <label className="block text-gray-700 mb-1">Search</label>
            <div className="flex">
              <input
                type="text"
                className="p-2 border rounded-l w-40"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button className="bg-indigo-600 text-white px-4 rounded-r">
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border-b"></th>
                <th className="p-3 border-b text-left">Id</th>
                <th className="p-3 border-b text-left">Payment Method</th>
                <th className="p-3 border-b text-left">Payment Id</th>
                <th className="p-3 border-b text-left">User</th>
                <th className="p-3 border-b text-left">Product Id</th>
                <th className="p-3 border-b text-left">Currency</th>
                <th className="p-3 border-b text-left">Payment Amount</th>
                <th className="p-3 border-b text-left">Payment Status</th>
                <th className="p-3 border-b text-left">Purchased Plan</th>
                <th className="p-3 border-b text-left">Ip Address</th>
                <th className="p-3 border-b text-left">Date</th>
                <th className="p-3 border-b text-left">Options</th>
              </tr>
            </thead>
            <tbody>
              {featuredProducts.length === 0 ? (
                <tr>
                  <td colSpan="15" className="text-center text-gray-500 py-10">
                    No records found!
                  </td>
                </tr>
              ) : (
                featuredProducts.map((item, idx) => (
                  <tr key={idx}>
                    {/* Render product data here */}
                  </tr>
                ))
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

export default Transaction;