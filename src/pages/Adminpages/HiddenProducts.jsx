import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


const initialProducts = [
  {
    id: 3029,
    name: "Zuru Magic Potions Surprise",
    image: "broken-image.png",
    sku: "TF-Zuru-EX008733",
    barcode: "EX008733",
    category: "1.Toys",
    price: 4999,
    stock: "In Stock (4)",
    stockStatus: "in", // "in" or "out"
    pageViews: 4,
    date: "2024-10-06 / 19:09",
  },
  {
    id: 2603,
    name: "Kriddaank Avengers Projecter Set",
    image: "broken-image.png",
    sku: "TF-Kriddaank-ProjecterSet-Avengers",
    barcode: "EX007378",
    category: "1.Learning Toys",
    price: 1199,
    stock: "Out of Stock",
    stockStatus: "out",
    pageViews: 0,
    date: "2024-09-12 / 17:32",
  },
  {
    id: 2599,
    name: "Kriddank Princess Educational Laptop",
    image: "broken-image.png",
    sku: "TF-Kriddaank-Educational-Laptop-Princess",
    barcode: "EX009608",
    category: "1.Educational Games",
    price: 1899,
    stock: "In Stock (1)",
    stockStatus: "in",
    pageViews: 0,
    date: "2024-09-12 / 16:23",
  },
  {
    id: 2598,
    name: "Kriddaank Minnie Mouse Educational Laptop",
    image: "broken-image.png",
    sku: "TF-Kriddaank-Educational-Laptop-MinnieMouse",
    barcode: "EX009604",
    category: "1.Educational Games",
    price: 1899,
    stock: "Out of Stock",
    stockStatus: "out",
    pageViews: 0,
    date: "2024-09-12 / 16:14",
  },
  // ...add more if needed for pagination
];

const PAGE_SIZE = 15;

export default function HiddenProductsPage() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(initialProducts);
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering and pagination
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Checkbox logic
  const allSelected =
    paginatedProducts.length > 0 &&
    paginatedProducts.every((p) => selected.includes(p.id));

  const handleSelectAll = () => {
    if (allSelected) {
      setSelected((prev) =>
        prev.filter((id) => !paginatedProducts.some((p) => p.id === id))
      );
    } else {
      setSelected((prev) => [
        ...prev,
        ...paginatedProducts
          .map((p) => p.id)
          .filter((id) => !prev.includes(id)),
      ]);
    }
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleDelete = () => {
    setProducts((prev) => prev.filter((p) => !selected.includes(p.id)));
    setSelected([]);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
         <Adminheader />
    <div className="p-8 bg-gray-100 min-h-screen relative pb-24">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Hidden Products</h2>
          <div className="flex items-center gap-2">
            <button className="border px-4 py-1 rounded bg-gray-100 hover:bg-gray-200 mr-2">
              Back
            </button>
            <button className="bg-purple-600 text-white px-4 py-1 rounded">
              Export
            </button>
          </div>
        </div>
        {/* Filters with bold headings */}
        <div className="flex flex-wrap gap-4 mb-4 items-end">
          <div>
            <div className="text-xs font-bold text-gray-700 mb-1">Show</div>
            <select className="border rounded px-2 py-1">
              <option>15</option>
              <option>30</option>
              <option>50</option>
            </select>
          </div>
          <div>
            <div className="text-xs font-bold text-gray-700 mb-1">Category</div>
            <select className="border rounded px-2 py-1">
              <option>All</option>
              <option>Toys</option>
              <option>Learning Toys</option>
              <option>Educational Games</option>
            </select>
          </div>
          <div>
            <div className="text-xs font-bold text-gray-700 mb-1">Subcategory</div>
            <select className="border rounded px-2 py-1">
              <option>All</option>
            </select>
          </div>
          <div>
            <div className="text-xs font-bold text-gray-700 mb-1">Stock</div>
            <select className="border rounded px-2 py-1">
              <option>All</option>
              <option>In Stock</option>
              <option>Out of Stock</option>
            </select>
          </div>
          <div>
            <div className="text-xs font-bold text-gray-700 mb-1">Search</div>
            <input
              type="text"
              className="border rounded px-2 py-1"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <button className="bg-purple-600 text-white px-4 py-1 rounded h-9 mt-4">
            Filter
          </button>
        </div>
        {/* Table */}
        <table className="w-full text-left border-t">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-2">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="p-2">Id</th>
              <th className="p-2">Product</th>
              <th className="p-2">SKU</th>
              <th className="p-2">Barcode</th>
              <th className="p-2">Category</th>
              <th className="p-2">Price</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Page Views</th>
              <th className="p-2">Date</th>
              <th className="p-2">Options</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(product.id)}
                    onChange={() => handleSelect(product.id)}
                  />
                </td>
                <td className="p-2">{product.id}</td>
                <td className="p-2 flex items-center gap-2">
                  <img
                    src={product.image}
                    alt=""
                    className="w-16 h-20 border object-cover bg-gray-200"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "data:image/svg+xml;charset=UTF-8,<svg width='64' height='80' xmlns='http://www.w3.org/2000/svg'><rect width='64' height='80' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='12'>No Image</text></svg>";
                    }}
                  />
                  <span>{product.name}</span>
                </td>
                <td className="p-2">{product.sku}</td>
                <td className="p-2">{product.barcode}</td>
                <td className="p-2">{product.category}</td>
                <td className="p-2">{product.price}</td>
                <td className="p-2">
                  <span
                    className={
                      product.stockStatus === "in"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {product.stock}
                  </span>
                </td>
                <td className="p-2">{product.pageViews}</td>
                <td className="p-2">{product.date}</td>
                <td className="p-2">
                  <select className="border rounded px-2 py-1 bg-purple-600 text-white">
                    <option>Select an option</option>
                    <option>Edit</option>
                    <option>Delete</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-end mt-6 space-x-2">
            <button
              className={`px-3 py-1 rounded ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-purple-600 text-white"
              }`}
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              {"<"}
            </button>
            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx}
                className={`px-3 py-1 rounded ${
                  currentPage === idx + 1
                    ? "bg-purple-700 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => goToPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
            <button
              className={`px-3 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-purple-600 text-white"
              }`}
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              {">"}
            </button>
          </div>
        )}
      </div>
      {/* Delete Button at bottom */}
      {selected.length > 0 && (
        <div className="fixed bottom-8 left-0 w-full flex justify-center z-50">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-6 py-3 rounded shadow-lg text-lg font-semibold"
          >
            Delete 
          </button>
        </div>
      )}
    </div>
     <Adminfooter />
    </div>
  );
}
