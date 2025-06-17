import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa'; // Example icon for options
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const MembershipTransactions = () => {
  // --- State Management ---
  const [transactions, setTransactions] = useState([]); // Start with no transactions
  const [searchQuery, setSearchQuery] = useState('');
  const [showEntries, setShowEntries] = useState(15);

  // --- Mock Data ---
  // In a real application, you would fetch this data from an API
  const sampleTransactions = [
    {
      id: 1,
      user: 'John Doe',
      plan: 'Gold Plan',
      paymentMethod: 'Credit Card',
      paymentId: 'txn_123abc456',
      amount: '₹999.00',
      status: 'Completed',
      ipAddress: '192.168.1.1',
      date: '2024-06-17',
    },
    {
      id: 2,
      user: 'Jane Smith',
      plan: 'Silver Plan',
      paymentMethod: 'PayPal',
      paymentId: 'txn_789def012',
      amount: '₹499.00',
      status: 'Completed',
      ipAddress: '10.0.0.5',
      date: '2024-06-16',
    },
     {
      id: 3,
      user: 'Peter Jones',
      plan: 'Bronze Plan',
      paymentMethod: 'Stripe',
      paymentId: 'txn_345ghi678',
      amount: '₹199.00',
      status: 'Pending',
      ipAddress: '172.16.0.10',
      date: '2024-06-15',
    }
  ];

  // --- Event Handlers ---
  const handleFilter = (e) => {
    e.preventDefault();
    // For demonstration, we'll load the sample data on filter/search
    // In a real app, you would perform an API call with the search query
    console.log(`Searching for: ${searchQuery}`);
    setTransactions(sampleTransactions);
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Membership Transactions</h1>
        
        {/* --- Filter and Search Controls --- */}
        <form onSubmit={handleFilter} className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <label htmlFor="show-entries" className="text-sm text-gray-700">Show</label>
            <select
              id="show-entries"
              value={showEntries}
              onChange={(e) => setShowEntries(e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="15">15</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="flex items-center gap-2 flex-grow">
             <label htmlFor="search" className="text-sm text-gray-700 sr-only">Search</label>
            <input
              type="search"
              id="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm w-full focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold text-sm rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Filter
          </button>
        </form>

        {/* --- Transactions Table --- */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">Id</th>
                <th scope="col" className="px-6 py-3">User</th>
                <th scope="col" className="px-6 py-3">Membership Plan</th>
                <th scope="col" className="px-6 py-3">Payment Method</th>
                <th scope="col" className="px-6 py-3">Payment Id</th>
                <th scope="col" className="px-6 py-3">Payment Amount</th>
                <th scope="col" className="px-6 py-3">Payment Status</th>
                <th scope="col" className="px-6 py-3">Ip Address</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">Options</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction) => (
                  <tr key={transaction.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{transaction.id}</td>
                    <td className="px-6 py-4">{transaction.user}</td>
                    <td className="px-6 py-4">{transaction.plan}</td>
                    <td className="px-6 py-4">{transaction.paymentMethod}</td>
                    <td className="px-6 py-4">{transaction.paymentId}</td>
                    <td className="px-6 py-4">{transaction.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{transaction.ipAddress}</td>
                    <td className="px-6 py-4">{transaction.date}</td>
                    <td className="px-6 py-4">
                      <button className="text-gray-600 hover:text-blue-600">
                        <FaEllipsisV />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-white border-b">
                  <td colSpan="10" className="px-6 py-12 text-center text-gray-500">
                    No records found!
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

export default MembershipTransactions;
