 import React, { useState } from 'react';

// A simple user avatar icon component
const UserAvatar = () => (
  <svg className="w-8 h-8 text-gray-400 bg-gray-200 rounded-full p-1" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
  </svg>
);

// A simple view icon for the invoice button
const ViewIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);


function Orders() {
  // Mock data to populate the orders table, based on the user's image
  const ordersData = [
    { id: '#10114', buyer: 'Manas', total: '3,141', currency: 'INR', status: 'Completed', paymentStatus: 'Payment Received', updated: '19 days ago', date: '2025-05-23 / 18:34' },
    { id: '#10113', buyer: 'anil', total: '159', currency: 'INR', status: 'Completed', paymentStatus: 'Payment Received', updated: '19 days ago', date: '2025-05-23 / 18:25' },
    { id: '#10112', buyer: 'anil', total: '319', currency: 'INR', status: 'Completed', paymentStatus: 'Payment Received', updated: '19 days ago', date: '2025-05-23 / 14:56' },
    { id: '#10111', buyer: 'anil', total: '1544', currency: 'INR', status: 'Completed', paymentStatus: 'Payment Received', updated: '19 days ago', date: '2025-05-23 / 13:19' },
    { id: '#10110', buyer: 'anil', total: '569', currency: 'INR', status: 'Completed', paymentStatus: 'Payment Received', updated: '19 days ago', date: '2025-05-20 / 11:32' },
    { id: '#10109', buyer: 'anil', total: '467', currency: 'INR', status: 'Completed', paymentStatus: 'Payment Received', updated: '22 days ago', date: '2025-05-19 / 18:11' },
    { id: '#10108', buyer: 'Piyush Gupta', total: '198', currency: 'INR', status: 'Completed', paymentStatus: 'Payment Received', updated: '23 days ago', date: '2025-05-19 / 13:16' },
  ];
  
  // State to manage which options dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (orderId) => {
    setOpenDropdown(openDropdown === orderId ? null : orderId);
  };


  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Orders</h1>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm transition">
          &larr; Back
        </button>
      </div>

      {/* Filters Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 items-end">
            <div className="w-full">
                <label htmlFor="show" className="block text-sm font-medium text-gray-700 mb-1">Show</label>
                <select id="show" className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                    <option>15</option>
                    <option>25</option>
                    <option>50</option>
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select id="status" className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                    <option>All</option>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>Cancelled</option>
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="payment_status" className="block text-sm font-medium text-gray-700 mb-1">Payment Status</label>
                <select id="payment_status" className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                    <option>All</option>
                    <option>Payment Received</option>
                    <option>Pending</option>
                </select>
            </div>
            <div className="w-full lg:col-span-2 xl:col-span-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input type="text" id="search" placeholder="Order Id" className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
            </div>
            <div className="flex space-x-2 col-span-full sm:col-span-1 xl:col-span-2 justify-end">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition text-sm">
                    Filter
                </button>
                 <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition text-sm">
                    Export To Excel
                </button>
            </div>
        </div>
      </div>
      
      {/* Orders Table Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th scope="col" className="p-4">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                </th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-700 tracking-wider">Select Order</th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-700 tracking-wider">Buyer</th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-700 tracking-wider">Total</th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-700 tracking-wider">Currency</th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-700 tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-700 tracking-wider">Payment Status</th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-700 tracking-wider">Updated</th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-700 tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-700 tracking-wider">Options</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {ordersData.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <UserAvatar />
                        <span className="ml-3">{order.buyer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">₹{order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.currency}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>{order.paymentStatus}</div>
                    <button className="text-indigo-600 hover:text-indigo-800 text-xs font-medium mt-1">
                       <ViewIcon />
                       View Invoice
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.updated}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                     <button 
                        onClick={() => toggleDropdown(order.id)}
                        className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-semibold py-2 px-4 border border-indigo-200 rounded-lg shadow-sm transition w-full text-left flex justify-between items-center"
                    >
                        Select an option
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </button>
                      {openDropdown === order.id && (
                         <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">View Details</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Contact Buyer</a>
                                <a href="#" className="block px-4 py-2 text-sm text-red-700 hover:bg-red-50" role="menuitem">Cancel Order</a>
                            </div>
                        </div>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
