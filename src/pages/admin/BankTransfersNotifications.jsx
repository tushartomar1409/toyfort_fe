 import React, { useState } from 'react';
 import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const BankTransfersNotifications = () => {
  const [showEntries, setShowEntries] = useState('15');
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilter = () => {
    console.log("Filtering Bank Transfers Notifications:", {
      showEntries,
      statusFilter,
      searchQuery,
    });
    // In a real application, you would fetch data based on these filters
  };

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Bank Transfers Notifications</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Filter Section */}
        <div className="flex items-center space-x-4 mb-5">
          {/* Show entries dropdown */}
          <div className="flex items-center space-x-2">
            <label htmlFor="show-entries" className="text-sm text-gray-600">Show</label>
            <select
              id="show-entries"
              value={showEntries}
              onChange={(e) => setShowEntries(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
            >
              <option value="15">15</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          {/* Status dropdown */}
          <div className="flex items-center space-x-2">
            <label htmlFor="status-filter" className="text-sm text-gray-600">Status</label>
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* Search input */}
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

          {/* Filter button */}
          <button
            onClick={handleFilter}
            className="px-6 py-1.5 bg-indigo-600 text-white rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Filter
          </button>
        </div>

        {/* Table Structure */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="py-3 px-4">Id</th>
                <th className="py-3 px-4">Order</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Receipt</th>
                <th className="py-3 px-4">Payment Note</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Ip Address</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-center">Options</th>
              </tr>
            </thead>
            <tbody>
              {/* This is where your table rows would go if you had data */}
              <tr>
                <td colSpan="9" className="text-center py-4 text-gray-500">
                  No records found!
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination - The "Showing 0 to 0 of 0 entries" text was here and is now removed */}
        <div className="flex justify-end items-center mt-6"> {/* Changed justify-between to justify-end */}
          {/* Removed the <p> tag containing "Showing 0 to 0 of 0 entries" */}
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1 border rounded-md bg-white hover:bg-gray-100 text-sm" disabled>Previous</button>
            <button className="px-3 py-1 border rounded-md bg-white text-gray-700 text-sm" disabled>1</button>
            <button className="px-3 py-1 border rounded-md bg-white hover:bg-gray-100 text-sm" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
    <Adminfooter />
      
    </div>
  );
};

export default BankTransfersNotifications;