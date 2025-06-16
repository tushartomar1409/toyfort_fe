import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

// Sample data mimicking the structure from the screenshot.
// In a real application, this would be fetched from an API.
const transactionsData = [
  {
    id: 96,
    order: '#10114',
    paymentMethod: 'Cash on Delivery',
    paymentId: '',
    user: 'Manas',
    currency: 'INR',
    paymentAmount: '3,141.00',
    paymentStatus: 'Awaiting Payment',
    ipAddress: '~1',
    date: '2025-05-23 / 18:34',
  },
  {
    id: 95,
    order: '#10113',
    paymentMethod: 'Cash on Delivery',
    paymentId: '',
    user: 'anil',
    currency: 'INR',
    paymentAmount: '159.20',
    paymentStatus: 'Awaiting Payment',
    ipAddress: '172.71.241.143',
    date: '2025-05-23 / 18:25',
  },
  {
    id: 94,
    order: '#10112',
    paymentMethod: 'Cash on Delivery',
    paymentId: '',
    user: 'anil',
    currency: 'INR',
    paymentAmount: '319.20',
    paymentStatus: 'Awaiting Payment',
    ipAddress: '172.70.91.9',
    date: '2025-05-23 / 14:56',
  },
  {
    id: 93,
    order: '#10111',
    paymentMethod: 'Cash on Delivery',
    paymentId: '',
    user: 'anil',
    currency: 'INR',
    paymentAmount: '544.00',
    paymentStatus: 'Awaiting Payment',
    ipAddress: '172.71.26.35',
    date: '2025-05-23 / 13:19',
  },
    {
    id: 92,
    order: '#10110',
    paymentMethod: 'Cash on Delivery',
    paymentId: '',
    user: 'anil',
    currency: 'INR',
    paymentAmount: '569.05',
    paymentStatus: 'Awaiting Payment',
    ipAddress: '172.70.90.74',
    date: '2025-05-20 / 11:32',
  },
];


const TransactionsPage = () => {
  // State for handling filter inputs
  const [entriesToShow, setEntriesToShow] = useState(15);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilter = () => {
    // Add filtering logic here
    console.log(`Filtering with: ${entriesToShow} entries, search: "${searchQuery}"`);
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Transactions</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Filter Section */}
        <div className="flex items-center space-x-4 mb-5">
          <div className="flex items-center space-x-2">
            <label htmlFor="show-entries" className="text-sm text-gray-600">Show</label>
            <select 
              id="show-entries"
              value={entriesToShow}
              onChange={(e) => setEntriesToShow(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
            >
              <option value={15}>15</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="search-order" className="text-sm text-gray-600">Search</label>
            <input 
              type="text"
              id="search-order"
              placeholder="Order Number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
            />
          </div>
          <button 
            onClick={handleFilter}
            className="px-6 py-1.5 bg-indigo-600 text-white rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Filter
          </button>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="py-3 px-4">Id</th>
                <th className="py-3 px-4">Order</th>
                <th className="py-3 px-4">Payment Method</th>
                <th className="py-3 px-4">Payment Id</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Currency</th>
                <th className="py-3 px-4">Payment Amount</th>
                <th className="py-3 px-4">Payment Status</th>
                <th className="py-3 px-4">Ip Address</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-center">Options</th>
              </tr>
            </thead>
            <tbody>
              {transactionsData.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{transaction.id}</td>
                  <td className="py-3 px-4">{transaction.order}</td>
                  <td className="py-3 px-4">{transaction.paymentMethod}</td>
                  <td className="py-3 px-4">{transaction.paymentId || 'N/A'}</td>
                  <td className="py-3 px-4">{transaction.user}</td>
                  <td className="py-3 px-4">{transaction.currency}</td>
                  <td className="py-3 px-4">{transaction.paymentAmount}</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                      {transaction.paymentStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4">{transaction.ipAddress}</td>
                  <td className="py-3 px-4">{transaction.date}</td>
                  <td className="py-3 px-4 text-center">
                    {/* UPDATED: Changed the dropdown style to be white */}
                    <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-[#6B4EE4] text-white appearance-none pr-8 relative">
                      <option className="bg-white text-gray-700">Select an option</option>
                      <option className="bg-white text-gray-700">View Details</option>
                      <option className="bg-white text-gray-700">Approve</option>
                      <option className="bg-white text-gray-700">Decline</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-6"> {/* Changed justify-between to justify-end */}
            {/* The following line has been removed: */}
            {/* <p className="text-sm text-gray-600">Showing 1 to {transactionsData.length} of {transactionsData.length} entries</p> */}
            <div className="flex items-center space-x-1">
                <button className="px-3 py-1 border rounded-md bg-white hover:bg-gray-100 text-sm">Previous</button>
                <button className="px-3 py-1 border rounded-md bg-indigo-600 text-white text-sm">1</button>
                <button className="px-3 py-1 border rounded-md bg-white hover:bg-gray-100 text-sm">Next</button>
            </div>
        </div>

      </div>
    </div>
     <Adminfooter />
      
    </div>
  );
};

export default TransactionsPage;