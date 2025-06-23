import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

// CSS styles embedded within the component file for convenience.
const styles = `
  .add-category-page {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: #f4f6f8;
    padding: 2rem;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .page-header h1 {
    margin: 0;
    font-size: 1.75rem;
    color: #333;
  }

  .card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #555;
  }

  .form-group input,
  .form-group select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    box-sizing: border-box; /* Important for consistent sizing */
  }
  
  /* Style for the helper text under the slug input */
  .form-group .slug-note {
    font-size: 0.85rem;
    color: #777;
    margin-top: 0.25rem;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    display: inline-block;
  }

  .btn-green {
    background-color: #00c853;
    color: white;
  }
  .btn-green:hover {
    background-color: #00b04a;
  }
  
  .btn-blue {
    background-color: #0d6efd;
    color: white;
  }
  .btn-blue:hover {
    background-color: #0b5ed7;
  }

  .form-footer {
    text-align: right;
    margin-top: 2rem;
  }
`;

const AddCategoryKnowledge = () => {
  // State to hold the values of the form fields
  const [language, setLanguage] = useState('English');
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [order, setOrder] = useState('1');

  // Handle form submission (currently prevents default and logs values)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ language, name, slug, order });
    // Here you would typically send this data to your backend or state management
  };

  return (
    
    <>
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
      <style>{styles}</style>
      <div className="add-category-page">
        <div className="page-header">
          <h1>Add Category</h1>
          <a href="#" className="btn btn-green">Knowledge Base</a> {/* Link back to Knowledge Base */}
        </div>

        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="language">Language</label>
              <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="slug">Slug</label>
              <input 
                type="text" 
                id="slug" 
                value={slug} 
                onChange={(e) => setSlug(e.target.value)}
                placeholder="Slug"
              />
              <p className="slug-note">If you leave it empty, it will be generated automatically.</p>
            </div>

            <div className="form-group">
              <label htmlFor="order">Order</label>
              <input 
                type="number" 
                id="order" 
                value={order} 
                onChange={(e) => setOrder(e.target.value)}
              />
            </div>
            
            <div className="form-footer">
              <button type="submit" className="btn btn-blue">Add Category</button>
            </div>
          </form>
        </div>
      </div>
       <Adminfooter />
      
    </div>
      
    </>
  );
};

export default AddCategoryKnowledge;
