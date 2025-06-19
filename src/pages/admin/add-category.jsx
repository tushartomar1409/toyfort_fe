// src/components/add-category.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddCategory = ({ onAddCategory, existingCategories }) => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState('');
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [order, setOrder] = useState('');
  const [parentCategory, setParentCategory] = useState('None');
  const [visibility, setVisibility] = useState('Show');
  const [showOnMainMenu, setShowOnMainMenu] = useState('Yes');
  const [showImageOnMainMenu, setShowImageOnMainMenu] = useState('No');
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      id: Date.now(), // Simple unique ID for demo purposes
      name: categoryName,
      slug,
      title,
      description,
      keywords,
      order: order ? parseInt(order, 10) : null,
      parentCategory,
      visible: visibility === 'Show',
      showOnMainMenu: showOnMainMenu === 'Yes',
      showImageOnMainMenu: showImageOnMainMenu === 'Yes',
      image: imageFile ? imageFile.name : null,
    };
    onAddCategory(newCategory); // Call the function passed from parent (Categories)
    alert('Category added successfully!');
    navigate('/categories'); // Navigate back to the categories list
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <div className="add-category-container">
      <div className="add-category-header">
        <h2>Add Category</h2>
        <Link to="/admin/categories" className="categories-list-btn">
          <i className="fa fa-list"></i> Categories
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="add-category-form">
        <div className="form-group">
          <label htmlFor="categoryName">Category Name (English)</label>
          <input
            type="text"
            id="categoryName"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="slug">Slug (If you leave it empty, it will be generated automatically.)</label>
          <input
            type="text"
            id="slug"
            placeholder="Slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title (Meta Tag)</label>
          <input
            type="text"
            id="title"
            placeholder="Title (Meta Tag)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description (Meta Tag)</label>
          <input
            type="text"
            id="description"
            placeholder="Description (Meta Tag)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="keywords">Keywords (Meta Tag)</label>
          <input
            type="text"
            id="keywords"
            placeholder="Keywords (Meta Tag)"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="order">Order</label>
          <input
            type="number"
            id="order"
            placeholder="Order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="parentCategory">Parent Category</label>
          <select
            id="parentCategory"
            value={parentCategory}
            onChange={(e) => setParentCategory(e.target.value)}
          >
            <option value="None">None</option>
            {/* Render existing categories here for parent options */}
            {existingCategories?.map(cat => (
              <option key={cat.id} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group radio-group-container"> {/* New container for radio groups */}
          <label>Visibility</label>
          <div className="radio-options-row"> {/* Container for radio options to keep them in a row */}
            <label className="radio-option">
              <input
                type="radio"
                name="visibility"
                value="Show"
                checked={visibility === 'Show'}
                onChange={(e) => setVisibility(e.target.value)}
              />
              <span className="checkmark"></span> Show
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="visibility"
                value="Hide"
                checked={visibility === 'Hide'}
                onChange={(e) => setVisibility(e.target.value)}
              />
              <span className="checkmark"></span> Hide
            </label>
          </div>
        </div>

        <div className="form-group radio-group-container">
          <label>Show on Main Menu</label>
          <div className="radio-options-row">
            <label className="radio-option">
              <input
                type="radio"
                name="showOnMainMenu"
                value="Yes"
                checked={showOnMainMenu === 'Yes'}
                onChange={(e) => setShowOnMainMenu(e.target.value)}
              />
              <span className="checkmark"></span> Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="showOnMainMenu"
                value="No"
                checked={showOnMainMenu === 'No'}
                onChange={(e) => setShowOnMainMenu(e.target.value)}
              />
              <span className="checkmark"></span> No
            </label>
          </div>
        </div>

        <div className="form-group radio-group-container">
          <label>Show Image on Main Menu</label>
          <div className="radio-options-row">
            <label className="radio-option">
              <input
                type="radio"
                name="showImageOnMainMenu"
                value="Yes"
                checked={showImageOnMainMenu === 'Yes'}
                onChange={(e) => setShowImageOnMainMenu(e.target.value)}
              />
              <span className="checkmark"></span> Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="showImageOnMainMenu"
                value="No"
                checked={showImageOnMainMenu === 'No'}
                onChange={(e) => setShowImageOnMainMenu(e.target.value)}
              />
              <span className="checkmark"></span> No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="categoryImage">Image</label>
          <input
            type="file"
            id="categoryImage"
            style={{ display: 'none' }} // Hide default file input
            onChange={handleImageChange}
            accept="image/*" // Accept only image files
          />
          <button
            type="button"
            className="select-image-btn"
            onClick={() => document.getElementById('categoryImage').click()}
          >
            Select Image
          </button>
          {imageFile && <span style={{ marginLeft: '10px', fontSize: '14px', color: '#555' }}>{imageFile.name}</span>}
        </div>

        <button type="submit" className="add-category-submit-btn">Add Category</button>
      </form>

      {/* Embedded CSS for AddCategory */}
      <style>{`
        /* General Styles for the container */
        .add-category-container {
          padding: 20px;
          font-family: Arial, sans-serif;
          max-width: 900px;
          /* FIX 1: Align content to the left */
          margin: 20px 0 20px 20px; /* Top, Right (0 for left align), Bottom, Left */
          background-color: #f0f2f5;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        /* Header */
        .add-category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e0e0e0;
        }
        .add-category-header h2 {
          font-size: 26px;
          color: #333;
          margin: 0;
        }

        /* "Categories" List Button */
        .categories-list-btn {
          background-color: #17a2b8; /* Info blue */
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          text-decoration: none; /* For Link component */
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }
        .categories-list-btn:hover {
          background-color: #138496;
        }
        .categories-list-btn i {
          margin-right: 8px; /* Space for icon */
        }

        /* Form Styles */
        .add-category-form {
          background-color: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
          color: #555;
        }
        .form-group input[type="text"],
        .form-group input[type="number"],
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          box-sizing: border-box; /* Include padding and border in element's total width and height */
        }
        .form-group input[type="text"]::placeholder,
        .form-group input[type="number"]::placeholder {
            color: #aaa;
        }

        /* Radio Button Group Styles */
        /* FIX 2: Radio options in a single line */
        .radio-group-container { /* New container class for each radio group */
            margin-bottom: 20px;
        }
        .radio-group-container > label { /* Targets the main label (e.g., "Visibility") */
            display: block; /* Ensures the label is on its own line */
            margin-bottom: 8px;
            font-weight: bold;
            color: #555;
        }
        .radio-options-row { /* New class for the div containing the radio options */
            display: flex; /* Use flexbox to keep options in a single row */
            align-items: center;
            gap: 25px; /* Space between radio options */
            flex-wrap: wrap; /* Allow wrapping on smaller screens if necessary */
        }
        .radio-option {
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            position: relative;
            padding-left: 25px; /* Space for custom radio button */
        }
        .radio-option input[type="radio"] {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        .checkmark {
            position: absolute;
            top: 2px;
            left: 0;
            height: 18px;
            width: 18px;
            background-color: #eee;
            border-radius: 50%;
            border: 1px solid #ccc;
        }
        .radio-option:hover input ~ .checkmark {
            background-color: #ccc;
        }
        .radio-option input:checked ~ .checkmark {
            background-color: #2196F3; /* Blue when checked */
            border-color: #2196F3;
        }
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        .radio-option input:checked ~ .checkmark:after {
            display: block;
        }
        .radio-option .checkmark:after {
            top: 4px;
            left: 4px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
        }

        /* Image Upload Button */
        .select-image-btn {
            background-color: #007bff; /* Blue for select image */
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        .select-image-btn:hover {
            background-color: #0056b3;
        }

        /* Submit Button */
        .add-category-submit-btn {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 18px;
            margin-top: 20px;
            transition: background-color 0.3s ease;
            width: auto;
        }
        .add-category-submit-btn:hover {
            background-color: #218838;
        }
      `}</style>
    </div>
  );
};

export default AddCategory;