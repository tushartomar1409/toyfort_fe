 import React, { useState } from 'react';


export default function Navigation() {
  const [menuLimit, setMenuLimit] = useState(8);

  const handleLimitChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setMenuLimit(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: persist settings (e.g., call an API or update global state)
    console.log('Saved menu limit:', menuLimit);
    alert(`Settings saved! Menu limit: ${menuLimit}`);
  };

  return (
    <>
      {/* Embedded CSS */}
      <style>{`
        .navigation-settings {
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          max-width: 1200px; /* Increased from 800px to a larger value */
          margin: 0 auto;
        }
        .navigation-settings h2 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .form-group input[type="number"] {
          width: 6rem;
          padding: 0.25rem 0.5rem;
          border: 1px solid #d1d5db;
          border-radius: 0.25rem;
        }
        .template-preview {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .template-preview {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .preview-box {
          border: 1px solid #e5e7eb;
          border-radius: 0.25rem;
          overflow: hidden;
        }
        .preview-box img {
          display: block;
          width: 100%;
          height: auto;
        }
        .btn-save {
          padding: 0.5rem 1rem;
          background-color: #2563eb;
          color: #ffffff;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
        }
        .btn-save:hover {
          background-color: #1d4ed8;
        }
        .text-right {
          text-align: right;
        }
      `}</style>

      <div className="navigation-settings">
        <h2>Navigation</h2>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="menuLimit">
              Menu Limit (The number of links that appear in the menu)
            </label>
            <input
              id="menuLimit"
              type="number"
              min="0"
              value={menuLimit}
              onChange={handleLimitChange}
            />
          </div>

          <div className="template-preview">
            <div className="preview-box">
              <img
                src="https://qa.toyfort.in/assets/admin/img/nav_1.jpg"
                alt="Navigation Template 1"
              />
            </div>
            <div className="preview-box">
              <img
                src="https://qa.toyfort.in/assets/admin/img/nav_2.jpg"
                alt="Navigation Template 2"
              />
            </div>
          </div>

          <div className="text-right">
            <button type="submit" className="btn-save">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
}