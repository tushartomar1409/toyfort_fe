import React, { useState } from 'react';

// Main component for the Quote Requests page
export default function QuoteRequestPage() {
  // State to hold the quote requests. Initialized as an empty array
  // to show the "No records found!" message, as in the screenshot.
  const [quoteRequests, setQuoteRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // This function would handle the filtering logic.
  // In a real application, it would likely refetch data from an API.
  const handleFilter = () => {
    console.log("Filtering with:", { searchTerm, statusFilter });
    // For now, it just logs the state.
    // If you had data, you would filter it here.
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Quote Requests</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Top Controls: Show, Status, Search, Filter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <label htmlFor="show-entries" className="text-gray-600">Show</label>
                <select id="show-entries" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition">
                  <option>15</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="status-filter" className="text-gray-600">Status</label>
                <select 
                  id="status-filter" 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                  <option>All</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
              <label htmlFor="search" className="text-gray-600">Search</label>
              <input
                type="text"
                id="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-64 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
              <button 
                onClick={handleFilter}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition w-full sm:w-auto">
                Filter
              </button>
            </div>
          </div>

          {/* Quote Requests Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="p-4 font-medium text-gray-600">Quote</th>
                  <th className="p-4 font-medium text-gray-600">Product</th>
                  <th className="p-4 font-medium text-gray-600">Seller</th>
                  <th className="p-4 font-medium text-gray-600">Buyer</th>
                  <th className="p-4 font-medium text-gray-600">Status</th>
                  <th className="p-4 font-medium text-gray-600">Seller's Bid</th>
                  <th className="p-4 font-medium text-gray-600">Updated</th>
                  <th className="p-4 font-medium text-gray-600">Date</th>
                  <th className="p-4 font-medium text-gray-600">Options</th>
                </tr>
              </thead>
              <tbody>
                {quoteRequests.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-center text-gray-500 py-10">
                      No records found!
                    </td>
                  </tr>
                ) : (
                  quoteRequests.map((request) => (
                    // This is where you would map over your data to create rows
                    <tr key={request.id} className="border-b hover:bg-gray-50">
                      {/* Render table cells with request data */}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
