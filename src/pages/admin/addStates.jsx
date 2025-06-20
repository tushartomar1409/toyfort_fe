 import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddState() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [country, setCountry] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'State name is required.';
    if (!country)   newErrors.country = 'Country is required.';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // TODO: submit the form data (e.g., API call) and handle success/failure.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-md p-6 w-full max-w-lg">
        {/* Header with title and "States" button */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Add State</h3>
          <Link to="/states" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            States
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          {/* State Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500`}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
              }}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* State Code */}
          <div className="mb-4">
            <label htmlFor="code" className="block text-gray-700 font-medium mb-1">State Code</label>
            <input
              type="text"
              id="code"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          {/* Country Select */}
          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 font-medium mb-1">Country</label>
            <select
              id="country"
              className={`w-full border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500`}
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                if (errors.country) setErrors(prev => ({ ...prev, country: '' }));
              }}
            >
              <option value="">-- Select Country --</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              {/* Add more countries as needed */}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddState;
