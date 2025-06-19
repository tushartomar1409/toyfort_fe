import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


// Dummy data for demonstration
const initialData = [
  {
    id: 2625,
    image: "", // Add image URL if available
    product: "Imagi Make Mirror Mosaic Butterfly",
    sku: "TF-Imagimake-MM02",
    barcode: "8906057366965",
    category: "1.Art & Craft",
    price: 399,
    stock: 5,
    pageViews: 37,
    date: "2024-09-13 / 15:34",
  },
];

const categories = ["All", "Art & Craft"];
const subcategories = ["All"];
const stockOptions = ["All", "In Stock", "Out of Stock"];
const showOptions = [15, 30, 50];

export default function SpecialOffers() {
  const [show, setShow] = useState(15);
  const [category, setCategory] = useState("All");
  const [subcategory, setSubcategory] = useState("All");
  const [stock, setStock] = useState("All");
  const [search, setSearch] = useState("");
  const [data] = useState(initialData);

  // Filter logic
  const filteredData = data.filter((item) => {
    const matchesCategory = category === "All" || item.category.includes(category);
    const matchesStock =
      stock === "All" ||
      (stock === "In Stock" && item.stock > 0) ||
      (stock === "Out of Stock" && item.stock === 0);
    const matchesSearch = item.product.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesStock && matchesSearch;
  });

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
         <Adminheader />
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header with title and right-aligned back button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Special Offers</h2>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded flex items-center gap-2">
          <span className="text-xl">&#8592;</span> Back
        </button>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-4 bg-white p-4 rounded-lg shadow">
        <label className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Show</span>
          <select
            className="border rounded px-2 py-1"
            value={show}
            onChange={(e) => setShow(Number(e.target.value))}
          >
            {showOptions.map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Category</span>
          <select
            className="border rounded px-2 py-1"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Subcategory</span>
          <select
            className="border rounded px-2 py-1"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          >
            {subcategories.map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Stock</span>
          <select
            className="border rounded px-2 py-1"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          >
            {stockOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </label>
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-2 py-1 flex-1 min-w-[150px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition">
          Filter
        </button>
        <button className="ml-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded transition">
          Export
        </button>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left font-semibold text-gray-700"></th>
              <th className="p-3 text-left font-semibold text-gray-700">Id</th>
              <th className="p-3 text-left font-semibold text-gray-700">Product</th>
              <th className="p-3 text-left font-semibold text-gray-700">SKU</th>
              <th className="p-3 text-left font-semibold text-gray-700">Barcode</th>
              <th className="p-3 text-left font-semibold text-gray-700">Category</th>
              <th className="p-3 text-left font-semibold text-gray-700">Price</th>
              <th className="p-3 text-left font-semibold text-gray-700">Stock</th>
              <th className="p-3 text-left font-semibold text-gray-700">Page Views</th>
              <th className="p-3 text-left font-semibold text-gray-700">Date</th>
              <th className="p-3 text-left font-semibold text-gray-700">Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, show).map((item) => (
              <tr key={item.id} className="border-b last:border-none hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" className="accent-blue-500" />
                </td>
                <td className="p-3">{item.id}</td>
                <td className="p-3 flex items-center gap-2">
                  <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    {/* <img src={item.image} alt="" className="w-full h-full object-cover" /> */}
                  </div>
                  <span className="ml-2">{item.product}</span>
                </td>
                <td className="p-3">{item.sku}</td>
                <td className="p-3">{item.barcode}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3 font-semibold text-blue-700">₹{item.price}</td>
                <td className="p-3">
                  <span className={item.stock > 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                    {item.stock > 0 ? `In Stock (${item.stock})` : "Out of Stock"}
                  </span>
                </td>
                <td className="p-3">{item.pageViews}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3">
                  <select className="border rounded px-2 py-1">
                    <option>Select an option</option>
                    {/* Add more options as needed */}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
     <Adminfooter />
    </div>
  );
}
