import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


const FeaturedProducts = () => {
  const [show, setShow] = useState(15);
  const [category, setCategory] = useState('All');
  const [subcategory, setSubcategory] = useState('All');
  const [stock, setStock] = useState('All');
  const [search, setSearch] = useState('');
  const featuredProducts = []; // No records found

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
                <Adminheader />
    
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Featured Products</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Show</label>
            <select
              className="p-2 border rounded w-24"
              value={show}
              onChange={e => setShow(Number(e.target.value))}
            >
              <option value={15}>15</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Category</label>
            <select
              className="p-2 border rounded w-32"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option>All</option>
              {/* Add more categories as needed */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Subcategory</label>
            <select
              className="p-2 border rounded w-32"
              value={subcategory}
              onChange={e => setSubcategory(e.target.value)}
            >
              <option>All</option>
              {/* Add more subcategories as needed */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Stock</label>
            <select
              className="p-2 border rounded w-32"
              value={stock}
              onChange={e => setStock(e.target.value)}
            >
              <option>All</option>
              {/* Add more stock options as needed */}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="block text-gray-700 mb-1">Search</label>
            <div className="flex">
              <input
                type="text"
                className="p-2 border rounded-l w-40"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button className="bg-indigo-600 text-white px-4 rounded-r">
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border-b"></th>
                <th className="p-3 border-b text-left">Id</th>
                <th className="p-3 border-b text-left">Product</th>
                <th className="p-3 border-b text-left">SKU</th>
                <th className="p-3 border-b text-left">Product Type</th>
                <th className="p-3 border-b text-left">Category</th>
                <th className="p-3 border-b text-left">Purchased Plan</th>
                <th className="p-3 border-b text-left">Remaining Days</th>
                <th className="p-3 border-b text-left">User</th>
                <th className="p-3 border-b text-left">Date</th>
                <th className="p-3 border-b text-left">Options</th>
              </tr>
            </thead>
            <tbody>
              {featuredProducts.length === 0 ? (
                <tr>
                  <td colSpan="11" className="text-center text-gray-500 py-10">
                    No records found!
                  </td>
                </tr>
              ) : (
                featuredProducts.map((item, idx) => (
                  <tr key={idx}>
                    {/* Render product data here */}
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

export default FeaturedProducts;
