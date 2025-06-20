import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


// Generate 25 sample entries for pagination demonstration
const initialDrafts = Array.from({ length: 25 }, (_, idx) => ({
  id: 3044 - idx,
  product: "Product " + (idx + 1),
  productType: "Physical",
  category: idx % 3 === 0 ? "Baby Gear" : idx % 3 === 1 ? "Baby Carrier" : "Special-offers",
  user: "Piyush Gupta",
  date: `2025-06-${String(17 - idx % 15).padStart(2, "0")} / 10:0${idx % 10}`,
}));

const PAGE_SIZE = 15;

export default function DraftsPage() {
  const [search, setSearch] = useState("");
  const [drafts, setDrafts] = useState(initialDrafts);
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered and paginated data
  const filteredDrafts = drafts.filter((d) =>
    d.product.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredDrafts.length / PAGE_SIZE);
  const paginatedDrafts = filteredDrafts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Checkbox logic
  const allSelected =
    paginatedDrafts.length > 0 &&
    paginatedDrafts.every((d) => selected.includes(d.id));

  const handleSelectAll = () => {
    if (allSelected) {
      setSelected((prev) =>
        prev.filter((id) => !paginatedDrafts.some((d) => d.id === id))
      );
    } else {
      setSelected((prev) => [
        ...prev,
        ...paginatedDrafts
          .map((d) => d.id)
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
    setDrafts((prev) => prev.filter((d) => !selected.includes(d.id)));
    setSelected([]);
    setCurrentPage(1);
  };

  // Pagination controls
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
      <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
         <Adminheader />
    <div className="p-8 bg-gray-100 min-h-screen relative pb-24">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Drafts</h2>
        {/* Filters with bold headings */}
        <div className="flex flex-wrap gap-4 mb-4 items-end">
          <div>
            <div className="text-s  text-gray-700 mb-1">Show</div>
            <select className="border rounded px-2 py-1">
              <option>15</option>
              <option>30</option>
              <option>50</option>
            </select>
          </div>
          <div>
            <div className="text-s  text-gray-700 mb-1">Category</div>
            <select className="border rounded px-2 py-1">
              <option>All</option>
              <option>Baby Gear</option>
              <option>Baby Carrier</option>
              <option>Special-offers</option>
            </select>
          </div>
          <div>
            <div className="text-s  text-gray-700 mb-1">Sub Category</div>
            <select className="border rounded px-2 py-1">
              <option>All</option>
            </select>
          </div>
          <div>
            <div className="text-s  text-gray-700 mb-1">Stock</div>
            <select className="border rounded px-2 py-1">
              <option>All</option>
            </select>
          </div>
          <div className="flex-1">
            <div className="text-s  text-gray-700 mb-1">Search</div>
            <input
              type="text"
              className="border rounded px-2 py-1 "
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
              <th className="p-2">Product Type</th>
              <th className="p-2">Category</th>
              <th className="p-2">User</th>
              <th className="p-2">Date</th>
              <th className="p-2">Options</th>
            </tr>
          </thead>
          <tbody>
            {paginatedDrafts.map((draft) => (
              <tr key={draft.id} className="border-b hover:bg-gray-50">
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(draft.id)}
                    onChange={() => handleSelect(draft.id)}
                  />
                </td>
                <td className="p-2">{draft.id}</td>
                <td className="p-2 flex items-center gap-2">
                  <img
                    src="broken-image.png"
                    alt=""
                    className="w-16 h-20 border object-cover bg-gray-200"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "data:image/svg+xml;charset=UTF-8,<svg width='64' height='80' xmlns='http://www.w3.org/2000/svg'><rect width='64' height='80' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='12'>No Image</text></svg>";
                    }}
                  />
                  <span className="underline text-blue-600 cursor-pointer">
                    {draft.product}
                  </span>
                </td>
                <td className="p-2">{draft.productType}</td>
                <td className="p-2">{draft.category}</td>
                <td className="p-2">{draft.user}</td>
                <td className="p-2">{draft.date}</td>
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
