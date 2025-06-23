import React, { useState, useEffect } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";
import { Link } from 'react-router-dom';

// Default posts, used if localStorage is empty
const defaultPosts = [
  {
    id: 23,
    title: "A Complete Guide to Buying Safe and Fun Toys for Kids in India",
    language: "English",
    category: "Toys",
    date: "2025-02-28 / 14:09",
  },
  {
    id: 22,
    title: "The Barbie Journey: From Origins to Iconic Status and Its Positive Impact on Kids",
    language: "English",
    category: "Toys",
    date: "2024-05-29 / 17:18",
  },
  {
    id: 21,
    title: "Monopoly - How a Simple Board Game Became a Global Sensation",
    language: "English",
    category: "Toys",
    date: "2024-05-21 / 16:00",
  },
  {
    id: 20,
    title: "9 Unique and Exciting Christmas Gifts for Kids of All Ages",
    language: "English",
    category: "Toys",
    date: "2023-12-05 / 21:14",
  },
  {
    id: 19,
    title: "Why Rideon for Kids is the Best Choice",
    language: "English",
    category: "Toys",
    date: "2023-11-20 / 18:11",
  },
];

const PAGE_SIZE_OPTIONS = [15, 25, 50];

export default function BlogPosts() {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");
  const [pageSize, setPageSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage or fallback to defaultPosts
  useEffect(() => {
    const stored = localStorage.getItem("posts");
    if (stored) {
      setPosts(JSON.parse(stored));
    } else {
      setPosts(defaultPosts);
    }
  }, []);

  // Filter logic
  const filteredPosts = posts.filter(
    (post) =>
      (language === "All" || post.language === language) &&
      post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / pageSize);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Handle page change
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Reset to page 1 when filters or pageSize change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, language, pageSize]);

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
      <Adminheader />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto bg-white shadow rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-semibold mb-4 md:mb-0">Blog Posts</h2>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              <li className="flex items-center space-x-2">
                <Link to={"/admin/add-blog-post"}>
                  + Add Post
                </Link>
              </li>
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
            {/* Show Dropdown */}
            <div className="flex items-center gap-2">
              <span>Show</span>
              <select
                className="border rounded px-2 py-1"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {PAGE_SIZE_OPTIONS.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <span>entries</span>
            </div>
            {/* Language Filter */}
            <select
              className="border rounded px-3 py-2"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="All">All Languages</option>
              <option value="English">English</option>
              {/* Add more languages if needed */}
            </select>
            {/* Search */}
            <input
              type="text"
              className="border rounded px-3 py-2 "
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              Filter
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-12 px-4 py-2 border">Id</th>
                  <th className="w-1/3 px-4 py-2 border">Title</th>
                  <th className="w-24 px-4 py-2 border">Language</th>
                  <th className="w-24 px-4 py-2 border">Category</th>
                  <th className="w-32 px-4 py-2 border">Date</th>
                  <th className="w-40 px-4 py-2 border">Options</th>
                </tr>
              </thead>
              <tbody>
                {paginatedPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border text-center">{post.id}</td>
                    <td className="px-4 py-2 border flex items-center gap-2">
                      {/* Image placeholder */}
                      <div className="w-10 h-10 bg-gray-200 rounded mr-2 flex-shrink-0 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Img</span>
                      </div>
                      <span>{post.title}</span>
                    </td>
                    <td className="px-4 py-2 border text-center">{post.language}</td>
                    <td className="px-4 py-2 border text-center">{post.category}</td>
                    <td className="px-4 py-2 border text-center">{post.date}</td>
                    <td className="px-4 py-2 border text-center">
                      {/* Replace with a dropdown menu for options */}
                      <select className="border rounded px-2 py-1">
                        <option>Select an option</option>
                        <option>Edit</option>
                        <option>Delete</option>
                      </select>
                    </td>
                  </tr>
                ))}
                {paginatedPosts.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-400">
                      No posts found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-6">
              <span>
                Showing {(currentPage - 1) * pageSize + 1} to{" "}
                {Math.min(currentPage * pageSize, filteredPosts.length)} of{" "}
                {filteredPosts.length} entries
              </span>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 border rounded disabled:opacity-50"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous Page"
                >
                  &lt;
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    className={`px-3 py-1 border rounded ${
                      currentPage === idx + 1
                        ? "bg-blue-500 text-white"
                        : "bg-white"
                    }`}
                    onClick={() => goToPage(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  className="px-3 py-1 border rounded disabled:opacity-50"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next Page"
                >
                  &gt;
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
      <Adminfooter />
    </div>
  );
}
