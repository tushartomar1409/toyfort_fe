import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 3596, name: 'Home', visible: true, order: 1 },
    { id: 339, name: 'Infants', visible: true, order: 2 },
    { id: 3615, name: 'Books', visible: true, order: 3 },
    { id: 361, name: 'Toys', visible: true, order: 4 },
    { id: 384, name: 'Sports', visible: true, order: 5 },
    { id: 492, name: 'School Items', visible: true, order: 6 },
    { id: 3582, name: 'Electronics', visible: true, order: 7 },
    { id: 3597, name: 'Contact Us', visible: true, order: 8 },
  ]);

  const [sortOption, setSortOption] = useState('categoryOrder');
  const [sortParentCategories, setSortParentCategories] = useState(true);
  const navigate = useNavigate()

  const handleAddCategory = () => {
    // alert('Add Category button clicked!');
    navigate('/admin/add-category');
  };

  const handleToggleVisibility = (id) => {
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, visible: !cat.visible } : cat
    ));
  };

  const handleEditCategory = (id) => {
    alert(`Edit category with ID: ${id}`);
  };

  const handleDeleteCategory = (id) => {
    if (window.confirm(`Are you sure you want to delete category with ID: ${id}?`)) {
      setCategories(categories.filter(cat => cat.id !== id));
    }
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSaveSettings = () => {
    alert('Settings saved!');
    console.log('Sort Option:', sortOption);
    console.log('Sort Parent Categories:', sortParentCategories);
  };

  
  return (
    <div className="categories-container">
      <style>{`
        .categories-container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .categories-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .add-category-btn {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .category-list {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 30px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .category-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        .category-item:last-child {
          border-bottom: none;
        }
        .category-name {
          font-weight: bold;
        }
        .category-actions button {
          margin-left: 10px;
          padding: 5px 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
          background-color: #fff;
          cursor: pointer;
        }
        .category-actions .visible {
          background-color: #28a745;
          color: white;
          border-color: #28a745;
        }
        .category-actions .hidden {
          background-color: #dc3545;
          color: white;
          border-color: #dc3545;
        }
        .category-actions .delete-btn {
          background-color: #dc3545;
          color: white;
          border-color: #dc3545;
        }
        .settings-section {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .settings-section h2 {
          font-size: 20px;
          font-weight: bold;
        }
        .sort-options {
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .sort-options label {
          margin-right: 20px;
        }
        .sort-parent-options label {
          display: block;
          margin-bottom: 10px;
        }
        .save-changes-btn {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 20px;
        }
        .warning-message {
          background-color: #ffeeba;
          color: #856404;
          border: 1px solid #ffc107;
          padding: 10px;
          border-radius: 5px;
          margin-top: 20px;
        }
      `}</style>

      <div className="categories-header">
        <h2>Categories</h2>
        <button className="add-category-btn" onClick={handleAddCategory}>
          + Add Category
        </button>
      </div>

      <div className="category-list">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <span className="category-name">{category.name} (id: {category.id})</span>
            <div className="category-actions">
              <button
                className={`category-action-btn ${category.visible ? 'visible' : 'hidden'}`}
                onClick={() => handleToggleVisibility(category.id)}
              >
                {category.visible ? 'Visible' : 'Hidden'}
              </button>
              <button className="category-action-btn" onClick={() => handleEditCategory(category.id)}>Edit</button>
              <button className="category-action-btn delete-btn" onClick={() => handleDeleteCategory(category.id)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>

      <div className="settings-section">
        <h2>Settings</h2>

        <div className="sort-options">
          <h3 style={{ marginBottom: "10px" }}>Sort Categories</h3>
          <label>
            <input
              type="radio"
              name="sortCategories"
              value="categoryOrder"
              checked={sortOption === 'categoryOrder'}
              onChange={handleSortOptionChange}
            />
            by Category Order
          </label>
          <label>
            <input
              type="radio"
              name="sortCategories"
              value="byDate"
              checked={sortOption === 'byDate'}
              onChange={handleSortOptionChange}
            />
            by Date
          </label>
          <label>
            <input
              type="radio"
              name="sortCategories"
              value="byDateDesc"
              checked={sortOption === 'byDateDesc'}
              onChange={handleSortOptionChange}
            />
            by Date (DESC)
          </label>
          <label>
            <input
              type="radio"
              name="sortCategories"
              value="alphabetically"
              checked={sortOption === 'alphabetically'}
              onChange={handleSortOptionChange}
            />
            Alphabetically
          </label>
        </div>

        <div className="sort-parent-options">
          <h3>Sort Parent Categories by Category Order</h3>
          <label>
            <input
              type="checkbox"
              checked={sortParentCategories}
              onChange={(e) => setSortParentCategories(e.target.checked)}
            />
            Sort Parent Categories by Category Order
          </label>
        </div>

        <button className="save-changes-btn" onClick={handleSaveSettings}>Save Changes</button>

        {sortOption !== 'categoryOrder' && (
          <div className="warning-message">
            Warning! Sorting with drag and drop will be active only when the "by Category Order" option is selected.
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
