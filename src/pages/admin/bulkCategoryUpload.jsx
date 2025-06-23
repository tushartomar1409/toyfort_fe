import React, { useState, useRef } from 'react';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  // Handle file drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Handle file input change (browse files)
  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Trigger file input click
  const handleBrowseFilesClick = () => {
    fileInputRef.current.click();
  };

  return (
    // Tailwind CSS classes are used for styling
    <div className="min-h-screen bg-gray-100 p-8 font-sans flex justify-center">
      <script src="https://cdn.tailwindcss.com"></script> {/* Load Tailwind CSS */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mt-10">
        {/* Bulk Category Upload Section */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Bulk Category Upload</h1>
            <a href="#" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200">
              Categories
            </a>
          </div>
          <p className="text-gray-600 mb-6">You can add your categories with a CSV file from this section</p>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-medium mb-4">CSV File</label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center flex flex-col items-center justify-center h-64"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {selectedFile ? (
                <p className="text-gray-700 text-lg">{selectedFile.name}</p>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v7" />
                  </svg>
                  <p className="text-gray-500 text-lg mb-4">Drag and drop file here or</p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                    className="hidden"
                    accept=".csv"
                  />
                  <button
                    type="button"
                    onClick={handleBrowseFilesClick}
                    className="px-6 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 transition duration-200"
                  >
                    Browse Files
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Help Documents Section */}
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Help Documents</h2>
          <p className="text-gray-600 mb-6">You can use these documents to generate your CSV file</p>
          <div className="flex flex-col space-y-4">
            <a href="#" className="w-full px-6 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-700 text-center hover:bg-gray-100 transition duration-200">
              Download CSV Template
            </a>
            <a href="#" className="w-full px-6 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-700 text-center hover:bg-gray-100 transition duration-200">
              Download CSV Example
            </a>
            <a href="#" className="w-full px-6 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-700 text-center hover:bg-gray-100 transition duration-200">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
