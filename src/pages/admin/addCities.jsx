 // src/pages/admin/addCities.jsx

import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming react-router-dom is set up

const AddCities = () => {
  const navigate = useNavigate();

  // State for form fields
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [cityName, setCityName] = useState('');

  // Mock data for countries and states. In a real application, these would likely
  // be fetched from an API or derived from a larger data structure.
  // Using useMemo to prevent re-creation on every render.
  const mockCountries = useMemo(() => [
    { id: 1, name: 'Argentina' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Canada' },
    { id: 4, name: 'United Kingdom' },
    { id: 5, name: 'India' },
    // Add more countries as needed
  ], []);

  const mockStatesByCountry = useMemo(() => ({
    'Argentina': ['Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Salta', 'Tucumán'],
    'USA': ['California', 'New York', 'Texas', 'Florida'],
    'Canada': ['Ontario', 'British Columbia', 'Quebec'],
    'United Kingdom': ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    'India': ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
  }), []);

  // Filter states based on the selected country
  const availableStates = useMemo(() => {
    return country ? mockStatesByCountry[country] || [] : [];
  }, [country, mockStatesByCountry]);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    // Basic validation
    if (!country || !state || !cityName) {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Submitting City:', { country, state, cityName });
    alert(`City added! Country: ${country}, State: ${state}, Name: ${cityName}`);

    // In a real app: send data to API
    // e.g., await fetch('/api/cities', { method: 'POST', body: JSON.stringify({ country, state, cityName }) });

    // After successful add, navigate back to the cities list
    navigate('/admin/cities');

    // Clear form fields
    setCountry('');
    setState('');
    setCityName('');
  };

  return (
    <div className="add-city-container">
      <div className="add-city-header">
        <h2>Add City</h2>
        <Link to="/admin/cities" className="cities-list-btn">
          <i className="fa fa-list"></i> Cities
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="add-city-form">
        {/* Country Select */}
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setState(''); // Reset state when country changes
            }}
            required
          >
            <option value="">Select</option>
            {mockCountries.map((c) => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* State Select */}
        <div className="form-group">
          <label htmlFor="state">State</label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            disabled={!country} /* Disable state dropdown until a country is selected */
          >
            <option value="">Select</option>
            {availableStates.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* City Name Input */}
        <div className="form-group">
          <label htmlFor="cityName">Name</label>
          <input
            type="text"
            id="cityName"
            placeholder="Name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="add-city-submit-btn">
          Add City
        </button>
      </form>

      {/* Embedded CSS for AddCity page */}
      <style>{`
        /* General Styles for the container */
        .add-city-container {
          padding: 20px;
          font-family: Arial, sans-serif;
          max-width: 600px; /* Adjusted max-width to fit the form */
          margin: 40px auto; /* Center the container */
          background-color: #f0f2f5; /* Light background for the page */
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }

        /* Header Styles */
        .add-city-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e0e0e0;
        }
        .add-city-header h2 {
          font-size: 26px;
          color: #333;
          margin: 0;
        }

        /* "Cities" List Button (green, matching the screenshot) */
        .cities-list-btn {
          background-color: #4CAF50; /* Brighter green */
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
        .cities-list-btn:hover {
          background-color: #45a049; /* Slightly darker green on hover */
        }
        .cities-list-btn i {
          margin-right: 8px; /* Space for icon */
        }

        /* Form Styles (white box with shadow) */
        .add-city-form {
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
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          box-sizing: border-box; /* Include padding and border in element's total width and height */
          appearance: none; /* Remove default arrow for custom arrow below */
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23999'%3E%3Cpath d='M4 6l4 4 4-4z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 12px;
          padding-right: 30px; /* Make space for the custom arrow */
        }
        .form-group input[type="text"]::placeholder {
            color: #aaa;
        }
        .form-group select:disabled {
            background-color: #f5f5f5;
            cursor: not-allowed;
        }

        /* "Add City" Submit Button (blue, matching the later screenshot) */
        .add-city-submit-btn {
            background-color: #2196F3; /* Brighter blue, more like the screenshot */
            color: white;
            border: none;
            padding: 14px 25px; /* Increased padding slightly for a bolder look */
            border-radius: 5px; /* Rounded corners */
            cursor: pointer;
            font-size: 18px; /* Larger font size */
            margin-top: 20px;
            transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Add transition for shadow */
            float: right; /* Align to the right as in the image */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Added shadow for depth */
        }
        .add-city-submit-btn:hover {
            background-color: #1976D2; /* Darker blue on hover */
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
        }
      `}</style>
    </div>
  );
};

export default AddCities;
