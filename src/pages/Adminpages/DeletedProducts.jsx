import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


const initialProducts = [
  {
    id: 2902,
    name: "Ramson Chef Apron Set-Barbie-4 pcs with free Mask",
    image: "broken-image.png",
    sku: "",
    productType: "Physical",
    category: "Kitchen Set",
    user: "Piyush Gupta",
    date: "2024-09-29 / 19:05",
  },
  {
    id: 2901,
    name: "Ramson Chef Apron Set-Baker-4 pcs with free Mask",
    image: "broken-image.png",
    sku: "TF-Ramson-EX021927",
    productType: "Physical",
    category: "Kitchen Set",
    user: "Piyush Gupta",
    date: "2024-09-29 / 18:48",
  },
  {
    id: 2721,
    name: "Skillmatics Guess in 10 Wonders of India",
    image: "broken-image.png",
    sku: "",
    productType: "Physical",
    category: "Educational Games",
    user: "Piyush Gupta",
    date: "2024-09-20 / 14:15",
  },
  {
    id: 2579,
    name: "Kriddaank Disney Minnie Big Fishing Game",
    image: "broken-image.png",
    sku: "",
    productType: "Physical",
    category: "Educational Games",
    user: "Piyush Gupta",
    date: "2024-09-10 / 11:44",
  },
  // Add more items here for pagination demonstration
];

const PAGE_SIZE = 2;

export default function DeletedProductsPage() {
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
        <h2 className="text-2xl font-semibold mb-6">Deleted Products</h2>
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
              <option>Kitchen Set</option>
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
              <th className="p-2">Product Type</th>
              <th className="p-2">Category</th>
              <th className="p-2">User</th>
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
                    className="w-24 h-24 border object-cover bg-gray-200"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "data:image/svg+xml;charset=UTF-8,<svg width='96' height='96' xmlns='http://www.w3.org/2000/svg'><rect width='96' height='96' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='12'>No Image</text></svg>";
                    }}
                  />
                  <span>{product.name}</span>
                </td>
                <td className="p-2">{product.sku}</td>
                <td className="p-2">{product.productType}</td>
                <td className="p-2">{product.category}</td>
                <td className="p-2">{product.user}</td>
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
