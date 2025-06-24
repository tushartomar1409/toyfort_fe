import React, { useState } from 'react';
import currencyCodes from 'currency-codes';

export default function BulkProductUpload() {
  const [listingType, setListingType] = useState('');
  const [currency, setCurrency] = useState('');
  const [csvFile, setCsvFile] = useState(null);

  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const allCurrencies = currencyCodes.data.map(c => c.code);

  // Optional filtering logic (example):
  const getFilteredCurrencies = (type) => {
    if (type === 'Ordinarylisting') return allCurrencies;
    if (type === 'Pricerequest') return ['INR'];
    if (type === 'Sale') return ['INR'];
    return [];
  };

  const currencyList = getFilteredCurrencies(listingType);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Section */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Bulk Product Upload</h2>
        <p className="text-sm text-gray-500 mb-4">
          You can add your products with a CSV file from this section
        </p>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Listing Type</label>
          <select
            value={listingType}
            onChange={(e) => {
              setListingType(e.target.value);
              setCurrency('');
            }}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select</option>
            <option value="Sale">Add a Product For Sale</option>
            <option value="Ordinarylisting">Add a Product Or Service As a Ordinary Listing</option>
            <option value="Pricerequest">Add a Product to receive Quote(Price) Requests</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            disabled={!listingType}
          >
            <option value="">Select</option>
            {currencyList.map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">CSV File</label>
          <div className="border-dashed border-2 border-gray-300 rounded p-6 text-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="csvUpload"
            />
            <label htmlFor="csvUpload" className="cursor-pointer">
              <div className="text-3xl">📤</div>
              <p className="text-gray-500">Drag and drop file here or</p>
              <button className="mt-2 px-4 py-2 border border-gray-300 rounded">Browse Files</button>
            </label>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Help Documents</h3>
          <p className="text-sm text-gray-500 mb-3">
            You can use these documents to generate your CSV file
          </p>
          <div className="space-y-2">
            <button className="w-full bg-emerald-500 text-white py-2 rounded">Download CSV Template</button>
            <button className="w-full bg-blue-500 text-white py-2 rounded">Download CSV Example</button>
            <button className="w-full bg-gray-600 text-white py-2 rounded">Documentation</button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Category Id Finder</h3>
          <p className="text-sm text-gray-500 mb-2">
            You can use this section to find out the Id of a category
          </p>
          <input
            type="text"
            placeholder="Category Name"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
}
