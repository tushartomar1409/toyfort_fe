import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const App = () => {
  // State for cache status: 'enable' or 'disable'
  const [cacheStatus, setCacheStatus] = useState('disable'); 
  // State for refresh cache on DB changes: 'yes' or 'no'
  const [refreshOnDbChange, setRefreshOnDbChange] = useState('no'); 
  // State for cache refresh time in minutes
  const [cacheRefreshTime, setCacheRefreshTime] = useState('30');
  // State for showing the success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Handle form submission
  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log({
      cacheStatus,
      refreshOnDbChange,
      cacheRefreshTime,
    });
    // In a real application, you'd send this data to a backend API.
    // For demonstration, we just show a success message.
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide message after 3 seconds
  };

  // Handle reset cache button click
  const handleResetCache = () => {
    console.log('Reset Cache clicked');
    // In a real application, you'd trigger a cache reset operation.
    alert("Cache has been reset!"); // Using alert for simplicity, consider a custom modal
  };

  return (
    // Tailwind CSS classes are used for styling
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    
    <div className="min-h-screen bg-gray-100 p-8 font-sans flex justify-center items-start">
      <script src="https://cdn.tailwindcss.com"></script> {/* Load Tailwind CSS */}
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl mt-10">
        {/* Success Message */}
        {showSuccessMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 flex justify-between items-center" role="alert">
            <span className="block sm:inline">Changes successfully saved!</span>
            <button 
              onClick={() => setShowSuccessMessage(false)} 
              className="text-green-700 hover:text-green-900 font-bold text-lg"
            >
              &times;
            </button>
          </div>
        )}

        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Cache System</h1>

        <form onSubmit={handleSaveChanges}>
          {/* Status Section */}
          <div className="mb-6 flex items-center justify-between">
            <label className="text-gray-700 text-lg">Status</label>
            <div className="flex space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600 rounded-full border-gray-300"
                  name="cacheStatus"
                  value="enable"
                  checked={cacheStatus === 'enable'}
                  onChange={() => setCacheStatus('enable')}
                />
                <span className="ml-2 text-gray-700">Enable</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600 rounded-full border-gray-300"
                  name="cacheStatus"
                  value="disable"
                  checked={cacheStatus === 'disable'}
                  onChange={() => setCacheStatus('disable')}
                />
                <span className="ml-2 text-gray-700">Disable</span>
              </label>
            </div>
          </div>

          {/* Refresh Cache Files When Database Changes Section */}
          <div className="mb-6 flex items-center justify-between">
            <label className="text-gray-700 text-lg">Refresh Cache Files When Database Changes</label>
            <div className="flex space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600 rounded-full border-gray-300"
                  name="refreshOnDbChange"
                  value="yes"
                  checked={refreshOnDbChange === 'yes'}
                  onChange={() => setRefreshOnDbChange('yes')}
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600 rounded-full border-gray-300"
                  name="refreshOnDbChange"
                  value="no"
                  checked={refreshOnDbChange === 'no'}
                  onChange={() => setRefreshOnDbChange('no')}
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Cache Refresh Time (Minute) Section */}
          <div className="mb-8">
            <label htmlFor="cacheRefreshTime" className="block text-gray-700 text-lg mb-2">
              Cache Refresh Time (Minute) 
              <span className="text-gray-500 text-sm ml-2">(After this time, your cache files will be refreshed.)</span>
            </label>
            <input
              type="number"
              id="cacheRefreshTime"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              value={cacheRefreshTime}
              onChange={(e) => setCacheRefreshTime(e.target.value)}
              min="0" // Ensure positive values
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button" // Use type="button" to prevent form submission
              onClick={handleResetCache}
              className="px-6 py-2 rounded-md border border-yellow-500 text-yellow-700 bg-yellow-50 hover:bg-yellow-100 transition duration-200"
            >
              Reset Cache
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
     <Adminfooter />
      
    </div>
  );
};

export default App;
