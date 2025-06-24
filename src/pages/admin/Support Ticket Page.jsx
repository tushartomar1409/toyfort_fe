import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";
// Main App component for the Support Tickets page
const App = () => {
  // State to manage the active ticket filter (e.g., 'open', 'responded', 'closed')
  const [activeFilter, setActiveFilter] = useState('open');

  // Sample data for support tickets
  const tickets = [
    {
      id: 2,
      subject: 'Where is my order',
      user: 'Mr Frank',
      status: 'Open',
      date: '2023-08-26 / 14:47',
      updated: '2 years ago',
    },
    {
      id: 1,
      subject: 'How do I track my order ?',
      user: 'Guest',
      status: 'Open',
      date: '2023-08-24 / 04:03',
      updated: '2 years ago',
    },
    // You can add more ticket data here
  ];

  // Filtered tickets based on the activeFilter state
  // In a real application, you might fetch these from an API
  const filteredTickets = tickets.filter(ticket => {
    if (activeFilter === 'open') {
      return ticket.status === 'Open';
    } else if (activeFilter === 'responded') {
      return ticket.status === 'Responded'; // Assuming 'Responded' status
    } else if (activeFilter === 'closed') {
      return ticket.status === 'Closed'; // Assuming 'Closed' status
    }
    return true; // Should not happen with defined filters
  });

  return (
    // Tailwind CSS classes are used for styling
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <script src="https://cdn.tailwindcss.com"></script> {/* Load Tailwind CSS */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Support Tickets</h1>

      {/* Filter buttons section */}
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-6 py-3 rounded-lg shadow-md transition-all duration-200 
            ${activeFilter === 'open' ? 'bg-green-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
          onClick={() => setActiveFilter('open')}
        >
          ( {tickets.filter(t => t.status === 'Open').length} ) Open
        </button>
        <button
          className={`px-6 py-3 rounded-lg shadow-md transition-all duration-200 
            ${activeFilter === 'responded' ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
          onClick={() => setActiveFilter('responded')}
        >
          ( {tickets.filter(t => t.status === 'Responded').length} ) Responded
        </button>
        <button
          className={`px-6 py-3 rounded-lg shadow-md transition-all duration-200 
            ${activeFilter === 'closed' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
          onClick={() => setActiveFilter('closed')}
        >
          ( {tickets.filter(t => t.status === 'Closed').length} ) Closed
        </button>
      </div>

      {/* Support tickets table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Options
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{ticket.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {ticket.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {ticket.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${ticket.status === 'Open' ? 'bg-green-100 text-green-800' :
                           ticket.status === 'Responded' ? 'bg-yellow-100 text-yellow-800' :
                           'bg-gray-100 text-gray-800'}`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {ticket.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {ticket.updated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">Show</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                  No tickets found for this filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    <Adminfooter />
      
    </div>
  );
};

export default App;
