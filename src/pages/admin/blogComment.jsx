 import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader"; // Re-enabled original import
import Adminfooter from "../../components/admin_components/Adminfooter"; // Re-enabled original import


const App = () => {
  // State to manage the active comment filter: 'pending' or 'approved'
  const [activeFilter, setActiveFilter] = useState('pending');
  // State for the number of entries to show
  const [entriesToShow, setEntriesToShow] = useState('15');
  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for blog comments
  const comments = [
    {
      id: 1,
      name: 'Prince',
      email: 'root72153@gmail.com',
      comment: 'Hey thanks for sharing this amazing content, This article is a fantastic resource for parents looking to buy toys online! It covers everything from safety tips for infant toys to creative and educational options for older kids. The emphasis on considering safety standards, age appropriateness, and diverse interests is really helpful. The detailed sections on popular toy categories like Lego, Hot wheels, and educational toys provide great ideas for making informed choices. Thanks for sharing such valuable insights and making the process of buying toys online less overwhelming! We also have some amazing content for kids toys Visit us at-https://trendyzone21.com/collections/toys .',
      url: 'How to buy kids Toys Online?',
      ipAddress: '108.162.241.167',
      date: '2024-05-21 / 17:05',
      status: 'pending', // Added status to filter comments
    },
    {
      id: 2,
      name: 'Approved User',
      email: 'approved@example.com',
      comment: 'This is an approved comment example.',
      url: 'https://example.com/blog',
      ipAddress: '192.168.1.1',
      date: '2024-05-20 / 10:00',
      status: 'approved',
    },
    // Add more sample comments here, with 'pending' or 'approved' status
  ];

  // Filtered comments based on the activeFilter and searchTerm
  const filteredComments = comments.filter(comment => {
    const matchesFilter = comment.status === activeFilter;
    const matchesSearch =
      comment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.ipAddress.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Pagination logic (simplified for demonstration)
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = parseInt(entriesToShow, 10);
  const totalPages = Math.ceil(filteredComments.length / commentsPerPage);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = filteredComments.slice(indexOfFirstComment, indexOfLastComment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    // The main container now directly holds Adminheader, the page content, and Adminfooter
    <>
      <script src="https://cdn.tailwindcss.com"></script> {/* Load Tailwind CSS */}
      <Adminheader /> {/* Adminheader is rendered once here */}
      <div className="min-h-screen bg-gray-100 p-8 font-sans"> {/* This is the main content wrapper */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Blog Comments</h1>

        {/* Filter tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            className={`px-6 py-3 rounded-md shadow-md transition-all duration-200
              ${activeFilter === 'pending' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            onClick={() => {
              setActiveFilter('pending');
              setCurrentPage(1); // Reset page on filter change
            }}
          >
            Pending Comments
          </button>
          <button
            className={`px-6 py-3 rounded-md shadow-md transition-all duration-200
              ${activeFilter === 'approved' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            onClick={() => {
              setActiveFilter('approved');
              setCurrentPage(1); // Reset page on filter change
            }}
          >
            Approved Comments
          </button>
        </div>

        {/* Controls: Show entries and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="text-gray-700 mr-2">Show</span>
            <select
              className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={entriesToShow}
              onChange={(e) => {
                setEntriesToShow(e.target.value);
                setCurrentPage(1); // Reset to first page on entries change
              }}
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
          </div>
          <div className="flex items-center w-full sm:w-auto">
            <span className="text-gray-700 mr-2">Search:</span>
            <input
              type="text"
              className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500 flex-grow"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
            />
          </div>
        </div>

        {/* Comments Table */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                    Id
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-40">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-64">
                    Comment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-40">
                    URL
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                    IP Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-28">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentComments.length > 0 ? (
                  currentComments.map((comment) => (
                    <tr key={comment.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {comment.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 break-words"> {/* break-words for name wrapping */}
                        {comment.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-blue-600 hover:underline cursor-pointer break-words"> {/* break-words for email wrapping */}
                        {comment.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 break-words"> {/* break-words for comment wrapping */}
                        {comment.comment}
                      </td>
                      <td className="px-6 py-4 text-sm text-blue-600 hover:underline cursor-pointer break-words"> {/* break-words for URL wrapping */}
                        {comment.url}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {comment.ipAddress}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {comment.date}
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-medium">
                        <select className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                          <option>Select an option</option>
                          <option>View</option>
                          <option>Approve</option>
                          <option>Delete</option>
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="px-6 py-4 text-center text-sm text-gray-500">
                      No comments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
            <div className="text-sm text-gray-700">
              Number of Entries: {filteredComments.length}
            </div>
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Adminfooter /> {/* Adminfooter is rendered once here */}
    </>
  );
};

export default App;