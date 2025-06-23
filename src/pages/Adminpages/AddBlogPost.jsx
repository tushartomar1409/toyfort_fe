import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const categories = [
  'Infants',
  'Toys',
  'Sports',
  'School Items',
  'Electronics'
];

export default function AddBlogPost() {
  const [form, setForm] = useState({
    title: '',
    slug: '',
    summary: '',
    keywords: '',
    language: 'English',
    category: '',
    tags: [],
    image: null,
    content: ''
  });
  const [tagInput, setTagInput] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      setForm({ ...form, tags: [...form.tags, tagInput.trim()] });
      setTagInput('');
      e.preventDefault();
    }
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleContentChange = (e) => {
    setForm({ ...form, content: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage (replace with API call as needed)
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push({
      ...form,
      id: Date.now(),
      date: new Date().toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',', ' /')
    });
    localStorage.setItem('posts', JSON.stringify(posts));
    navigate('/admin/blog-posts');
  };

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
          <Adminheader />
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Add Post</h2>
        <Link
          to="/admin/blog-posts"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-medium"
        >
          Posts
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Slug</label>
          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="(auto-generated if empty)"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Summary & Description (Meta Tag)</label>
          <textarea
            name="summary"
            value={form.summary}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Keywords (Meta Tag)</label>
          <input
            name="keywords"
            value={form.keywords}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Language</label>
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Tags</label>
          <input
            value={tagInput}
            onChange={e => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            className="w-full border rounded px-3 py-2"
            placeholder="add a tag and hit enter"
          />
          <div className="flex flex-wrap mt-2">
            {form.tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-200 rounded px-2 py-1 mr-2 mb-2 text-sm">{tag}</span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-1">Content</label>
          <div className="border rounded shadow-sm bg-white min-h-[200px] p-4 font-sans text-base leading-relaxed focus-within:ring-2 focus-within:ring-blue-400">
            <textarea
              name="content"
              value={form.content}
              onChange={handleContentChange}
              className="w-full h-[180px] resize-y border-none outline-none bg-transparent font-sans text-base leading-relaxed placeholder-gray-400"
              placeholder="Write your post content here..."
              style={{
                fontFamily: 'inherit',
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#222'
              }}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Add Post
        </button>
      </form>
    </div>
     <Adminfooter />
        </div>
  );
}
