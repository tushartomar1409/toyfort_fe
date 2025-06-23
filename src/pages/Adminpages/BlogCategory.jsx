import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const BlogCategory = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Infants", language: "English", order: 1 },
    { id: 2, name: "Toys", language: "English", order: 2 },
    { id: 3, name: "Sports", language: "English", order: 3 },
    { id: 4, name: "School Items", language: "English", order: 4 },
    { id: 5, name: "Electronics", language: "English", order: 5 },
  ]);

  const [form, setForm] = useState({
    language: "English",
    name: "",
    slug: "",
    description: "",
    keywords: "",
    order: 1,
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const newCategory = {
      id: categories.length + 1,
      name: form.name,
      language: form.language,
      order: parseInt(form.order),
    };
    setCategories([...categories, newCategory]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setForm({ language: "English", name: "", slug: "", description: "", keywords: "", order: 1 });
  };

  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const displayedCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
              <Adminheader />
    <div className="p-6 bg-gray-100 min-h-screen">
      {showSuccess && (
        <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
          Item successfully added!
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white p-6 rounded shadow-md w-full md:w-1/3 h-[700px]">
          <h2 className="text-lg font-semibold mb-4">Add Category</h2>
          <div className="space-y-4 text-sm">
            <div>
              <label className="block mb-1 font-medium">Language</label>
              <select
                name="language"
                value={form.language}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Category Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Slug</label>
              <input
                type="text"
                name="slug"
                value={form.slug}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
              <p className="text-xs text-gray-500 mt-1">If you leave it empty, it will be generated automatically.</p>
            </div>
            <div>
              <label className="block mb-1 font-medium">Description (Meta Tag)</label>
              <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Keywords (Meta Tag)</label>
              <input
                type="text"
                name="keywords"
                value={form.keywords}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Order</label>
              <input
                type="number"
                name="order"
                value={form.order}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded">
              Add Category
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow-md w-full md:w-2/3">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Id</th>
                <th className="p-2 text-left">Category Name</th>
                <th className="p-2 text-left">Language</th>
                <th className="p-2 text-left">Order</th>
                <th className="p-2 text-left">Options</th>
              </tr>
            </thead>
            <tbody>
              {displayedCategories.map((cat) => (
                <tr key={cat.id} className="border-b">
                  <td className="p-2">{cat.id}</td>
                  <td className="p-2">{cat.name}</td>
                  <td className="p-2">{cat.language}</td>
                  <td className="p-2">{cat.order}</td>
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
          <div className="mt-2 text-sm text-gray-600">
            Number of Entries: {categories.length}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
     <Adminfooter />
    </div>
  );
};

export default BlogCategory;