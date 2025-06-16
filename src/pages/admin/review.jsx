 import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

// Star component for displaying ratings
const Star = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Rating component to display a number of stars
const Rating = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} filled={i < rating} />
    ))}
  </div>
);

// Main component for the Reviews page
export default function ReviewsPage() {
  // Mock data for the reviews table, based on the provided image
  const reviewsData = [
    {
      id: 5,
      user: 'anil waghmare',
      rating: 5,
      reviewText: 'YES',
      product: 'iToys Disney Mickey Mouse Plastic Bat',
      ipAddress: '172.71.26.56',
      date: '2025-05-23 / 18:32',
    },
    {
      id: 4,
      user: 'anil waghmare',
      rating: 4,
      reviewText: 'Y',
      product: 'Ekta DIY Fun Fridge Magnets',
      ipAddress: '172.69.224.128',
      date: '2025-05-23 / 15:08',
    },
    {
      id: 3,
      user: 'anil waghmare',
      rating: 5,
      reviewText: 'GOOD',
      product: 'Cosco Badminton Racket Cb-150E',
      ipAddress: '172.71.26.35',
      date: '2025-05-23 / 13:25',
    },
    {
      id: 2,
      user: 'anil waghmare',
      rating: 4,
      reviewText: 'Nice Design',
      product: 'Rabitat Nutrilock Insulated Steel Bottle Mad Eye',
      ipAddress: '172.71.178.75',
      date: '2025-05-15 / 12:49',
    },
    {
      id: 1,
      user: 'Manas Baranwal',
      rating: 3,
      reviewText: 'Testing Again on qa',
      product: 'Smiggle Away Hard Top Pencil Case Navy',
      ipAddress: '172.68.234.24',
      date: '2025-05-01 / 13:50',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [reviews, setReviews] = useState(reviewsData);

  // A simple filter function for demonstration
  const handleFilter = () => {
    if (searchTerm.trim() === '') {
        setReviews(reviewsData);
        return;
    }
    const filtered = reviewsData.filter(review =>
        Object.values(review).some(value =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setReviews(filtered);
  };


  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Reviews</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Top Controls: Show, Search, Filter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <label htmlFor="show-entries" className="text-gray-600">Show</label>
              <select id="show-entries" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition">
                <option>15</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
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

          {/* Reviews Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="p-4"><input type="checkbox" className="rounded" /></th>
                  <th className="p-4 font-medium text-gray-600">Id</th>
                  <th className="p-4 font-medium text-gray-600">User</th>
                  <th className="p-4 font-medium text-gray-600">Review</th>
                  <th className="p-4 font-medium text-gray-600">Product</th>
                  <th className="p-4 font-medium text-gray-600">Ip Address</th>
                  <th className="p-4 font-medium text-gray-600">Date</th>
                  <th className="p-4 font-medium text-gray-600">Options</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id} className="border-b hover:bg-gray-50">
                    <td className="p-4"><input type="checkbox" className="rounded"/></td>
                    <td className="p-4 text-gray-700">{review.id}</td>
                    <td className="p-4 text-gray-900 font-medium">{review.user}</td>
                    <td className="p-4 text-gray-700">
                      <Rating rating={review.rating} />
                      <p className="mt-1 text-sm">{review.reviewText}</p>
                    </td>
                    <td className="p-4 text-blue-600 hover:underline cursor-pointer">{review.product}</td>
                    <td className="p-4 text-gray-700">{review.ipAddress}</td>
                    <td className="p-4 text-gray-700">{review.date}</td>
                    <td className="p-4">
                      <select className="border border-gray-300 rounded-md px-3 py-2 bg-indigo-500 text-white focus:ring-2 focus:ring-indigo-500 transition w-full">
                        <option>Select</option>
                        <option>Approve</option>
                        <option>Delete</option>
                        <option>Mark as Spam</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
     <Adminfooter />
      
    </div>
  );
}
