import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const DigitalSalesPage = () => {
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(15);
  const salesData = []; // No records found

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
            <Adminheader />
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Digital Sales</h2>
        <div className="flex items-center mb-6">
          <label className="mr-2 text-gray-700">Show&nbsp;
            <select
              value={show}
              onChange={e => setShow(e.target.value)}
              className="p-2 border rounded"
            >
              <option value={15}>15</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
            </select>
          </label>
          <div className="ml-8">
            <input
              type="text"
              placeholder="Purchase Code"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="p-2 border rounded mr-2"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded">
              Filter
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left text-gray-700 border-b">Id</th>
                <th className="p-3 text-left text-gray-700 border-b">Order</th>
                <th className="p-3 text-left text-gray-700 border-b">Purchase Code</th>
                <th className="p-3 text-left text-gray-700 border-b">Seller</th>
                <th className="p-3 text-left text-gray-700 border-b">Buyer</th>
                <th className="p-3 text-left text-gray-700 border-b">Total</th>
                <th className="p-3 text-left text-gray-700 border-b">Currency</th>
                <th className="p-3 text-left text-gray-700 border-b">Date</th>
                <th className="p-3 text-left text-gray-700 border-b">Options</th>
              </tr>
            </thead>
            <tbody>
              {salesData.length === 0 ? (
                <tr>
                  <td colSpan="9" className="p-8 text-center text-gray-500">
                    No records found!
                  </td>
                </tr>
              ) : (
                salesData.map((sale, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-3">{sale.id}</td>
                    <td className="p-3">{sale.order}</td>
                    <td className="p-3">{sale.purchaseCode}</td>
                    <td className="p-3">{sale.seller}</td>
                    <td className="p-3">{sale.buyer}</td>
                    <td className="p-3">{sale.total}</td>
                    <td className="p-3">{sale.currency}</td>
                    <td className="p-3">{sale.date}</td>
                    <td className="p-3">{/* Options buttons */}</td>
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

export default DigitalSalesPage;
