import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


const showOptions = [15, 30, 50];
const categories = ["All"];
const subcategories = ["All"];
const stockOptions = ["All"];

export default function SoldProduct() {
  const [show, setShow] = useState(15);
  const [category, setCategory] = useState("All");
  const [subcategory, setSubcategory] = useState("All");
  const [stock, setStock] = useState("All");
  const [search, setSearch] = useState("");
  const data = []; // No records as per screenshot

  // Filtering logic could go here if needed

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
             <Adminheader />
    <div className="min-h-screen bg-[#f7fafd] p-6">
      <div className="bg-white rounded-lg shadow p-6 max-w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sold Products</h2>
        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Show</label>
            <select
              className="border rounded px-4 py-2 w-32"
              value={show}
              onChange={(e) => setShow(Number(e.target.value))}
            >
              {showOptions.map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Category</label>
            <select
              className="border rounded px-4 py-2 w-40"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Subcategory</label>
            <select
              className="border rounded px-4 py-2 w-40"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
            >
              {subcategories.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Stock</label>
            <select
              className="border rounded px-4 py-2 w-40"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            >
              {stockOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700 mb-1 font-medium">Search</label>
            <input
              type="text"
              placeholder="Search"
              className="border rounded px-4 py-2 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-end">
            <button className="bg-[#5d5bb7] hover:bg-[#49479e] text-white font-semibold px-6 py-2 rounded transition mt-6">
              Filter
            </button>
          </div>
        </div>
        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded">
            <thead>
              <tr className="bg-[#f5f6fa]">
                <th className="px-4 py-2 text-left font-medium text-gray-700 w-10">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Id</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Product</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">SKU</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Product Type</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Category</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Purchased Plan</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">User</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Date</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Options</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={10} className="text-center py-8 text-gray-500">
                    No records found!
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id}>
                    {/* Render table data here */}
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
}
