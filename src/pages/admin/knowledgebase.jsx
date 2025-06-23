 import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Adminheader from "../../components/admin_components/Adminheader"; // Original import
import Adminfooter from "../../components/admin_components/Adminfooter"; // Original import

// This is a common technique to embed CSS directly into a component.
// It's convenient for small, self-contained components.
const styles = `
  .knowledge-base-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: #f4f6f8;
    padding: 2rem;
    /* Removed min-height and box-sizing here as Adminheader/footer handle overall layout */
  }

  .card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .btn {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .btn-primary {
    background-color: #00c853;
    color: white;
  }

  .btn-primary:hover {
    background-color: #00b04a;
  }

  .language-selector {
    padding: 1.5rem;
    max-width: 300px;
  }

  .language-selector label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #555;
  }

  /* Modified the select styling */
  .language-selector select,
  .card-controls select {
    /* These three lines hide the default browser arrow */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    /* This adds our own custom arrow using an SVG */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-down-fill' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
    background-size: 1em;

    /* Add some padding to the right so text doesn't overlap the new arrow */
    padding-right: 2rem;
  }

  .language-selector select {
    width: 100%;
    padding: 0.75rem;
    padding-right: 2rem; /* Ensure padding is consistent */
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #e0e0e0;
  }

  .card-header h2 {
    margin: 0;
    font-size: 1.25rem;
    color: #333;
  }

  .card-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    font-size: 0.9rem;
    color: #555;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .card-controls span {
    margin-right: 0.5rem;
  }

  .card-controls select,
  .card-controls input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  /* Add back right padding for the entries select */
  .card-controls select {
    padding-right: 2rem;
  }

  .table-responsive {
    overflow-x: auto;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
  }

  .table th,
  .table td {
    text-align: left;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #e0e0e0;
    white-space: nowrap;
  }

  .table th {
    font-weight: 600;
    color: #555;
    background-color: #f9f9f9;
  }

  .no-records {
    text-align: center;
    color: #777;
    padding: 3rem;
  }

  .card-footer {
    display: flex;
    justify-content: flex-end;
    padding: 1rem 1.5rem;
  }

  .pagination button {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 0.5rem 0.75rem;
    margin-left: 0.25rem;
    cursor: pointer;
  }

  .pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

// Reusable component for the data tables (Contents and Categories)
const DataTable = ({ title, columns }) => {
  const [entries, setEntries] = useState('15');
  const [searchTerm, setSearchTerm] = useState('');
  
  // A simple way to create a more descriptive name for the "Add" button
  const singularTitle = title.endsWith('s') ? title.slice(0, -1) : title;

  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
        {title === "Contents" ? ( // Conditionally render Link for "Contents"
          <Link to="/admin/addContent" className="btn btn-primary">
            + Add {singularTitle}
          </Link>
        ) : (
          // Assuming a similar path for add category
          <Link to="/admin/addCategory" className="btn btn-primary">
            + Add {singularTitle}
          </Link>
        )}
      </div>
      <div className="card-controls">
        <div className="show-entries">
          <span>Show</span>
          <select value={entries} onChange={(e) => setEntries(e.target.value)}>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="search-bar">
          <span>Search:</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length} className="no-records">
                No records found!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-footer">
        <div className="pagination">
          <button disabled>&lt;</button>
          <button disabled>&gt;</button>
        </div>
      </div>
    </div>
  );
};

// Main component for the Knowledge Base page
const KnowledgeBase = () => {
  const contentColumns = ['Id', 'Title', 'Language', 'Category', 'Date', 'Options'];
  const categoryColumns = ['Id', 'Title', 'Language', 'Options'];

  return (
    <>
      <style>{styles}</style>
      {/* Adminheader and Adminfooter now wrap the entire content of KnowledgeBase */}
      <Adminheader />
      <div className="knowledge-base-container">
        <div className="language-selector card">
          <label htmlFor="language">Language</label>
          <select id="language" name="language" defaultValue="English">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>

        <DataTable title="Contents" columns={contentColumns} />
        <DataTable title="Categories" columns={categoryColumns} />
      </div>
      <Adminfooter />
    </>
  );
};

export default KnowledgeBase;
