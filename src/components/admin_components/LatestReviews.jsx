import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaStar, FaTrash } from 'react-icons/fa';

export default function LatestReviews() {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState('');
  const location = useLocation();

  useEffect(() => {
    const fetchedReviews = [
      {
        id: 5,
        user: 'anil waghmare',
        rating: 5,
        review: 'YES',
        product: 'IToys Disney Mickey Mouse Plastic Bat',
        ip: '172.71.26.56',
        date: '2025-05-23 / 18:32'
      },
      {
        id: 4,
        user: 'anil waghmare',
        rating: 5,
        review: 'Y',
        product: 'Ekta DIY Fun Fridge Magnets',
        ip: '172.69.224.128',
        date: '2025-05-23 / 15:08'
      },
      {
        id: 3,
        user: 'anil waghmare',
        rating: 5,
        review: 'GOOD',
        product: 'Cosco Badminton Racket Cb-150E',
        ip: '172.71.26.35',
        date: '2025-05-23 / 13:25'
      },
      {
        id: 2,
        user: 'anil waghmare',
        rating: 5,
        review: 'Nice Design',
        product: 'Rabitat Nutrilock Insulated Steel Bottle Mad Eye',
        ip: '172.71.178.75',
        date: '2025-05-15 / 12:49'
      },
      {
        id: 1,
        user: 'Manas Baranwal',
        rating: 4,
        review: 'Testing Again on qa',
        product: 'Smiggle Away Hard Top Pencil Case Navy',
        ip: '172.68.234.24',
        date: '2025-05-01 / 13:50'
      },
    ];
    setReviews(fetchedReviews);
    setFilteredReviews(fetchedReviews);
  }, [location.pathname]);

  useEffect(() => {
    const filtered = reviews.filter((r) =>
      r.user.toLowerCase().includes(search.toLowerCase()) ||
      r.review.toLowerCase().includes(search.toLowerCase()) ||
      r.product.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredReviews(filtered);
  }, [search, reviews]);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleDelete = (id) => {
    const toDelete = id ? [id] : selectedIds;
    const updated = reviews.filter((r) => !toDelete.includes(r.id));
    setReviews(updated);
    setSelectedIds([]);
  };

  const isAdmin = location.pathname.includes("admin");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">
        {isAdmin ? 'Reviews' : ' Reviews'}
      </h2>

      <div className="flex items-center space-x-4 mb-4">
        <label htmlFor="limit">Show</label>
        <select id="limit" className="p-2 border rounded">
          <option>15</option>
          <option>30</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded flex-1"
        />
        <button className="px-4 py-2 bg-purple-600 text-white rounded">Filter</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200 text-left">
              {isAdmin && (
                <th className="p-2">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      setSelectedIds(
                        e.target.checked ? filteredReviews.map((r) => r.id) : []
                      )
                    }
                    checked={selectedIds.length === filteredReviews.length && filteredReviews.length > 0}
                  />
                </th>
              )}
              <th className="p-2">Id</th>
              <th className="p-2">User</th>
              <th className="p-2">Review</th>
              <th className="p-2">Product</th>
              <th className="p-2">Date</th>
              {isAdmin && <th className="p-2">IP Address</th>}
              {isAdmin && <th className="p-2">Options</th>}
            </tr>
          </thead>
          <tbody>
            {filteredReviews.map((review) => (
              <tr key={review.id} className="border-t">
                {isAdmin && (
                  <td className="p-2">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(review.id)}
                      onChange={() => toggleSelect(review.id)}
                    />
                  </td>
                )}
                <td className="p-2">{review.id}</td>
                <td className="p-2">{review.user}</td>
                <td className="p-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <div>{review.review}</div>
                </td>
                <td className="p-2 text-blue-600">{review.product}</td>
                <td className="p-2">{review.date}</td>
                {isAdmin && <td className="p-2">{review.ip}</td>}
                {isAdmin && (
                  <td className="p-2">
                    <select
                      onChange={(e) => e.target.value === 'delete' && handleDelete(review.id)}
                      className="p-1 border rounded bg-purple-600 text-white"
                    >
                      <option>Select</option>
                      <option value="delete">Delete</option>
                    </select>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isAdmin && selectedIds.length > 0 && (
        <button
          onClick={() => handleDelete()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        >
          Delete Selected
        </button>
      )}

      <div className="mt-4 font-semibold">
        Number of Entries: {filteredReviews.length}
      </div>
    </div>
  );
}
