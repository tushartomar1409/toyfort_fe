import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";
import { Link } from 'react-router-dom';


// Dummy data for translations for EditTranslationsPage, now matching the provided image
const dummyTranslations = [
  { id: 1, label: '1_business_day', translation: 'Ready to ship in 1 Business Day' },
  { id: 2, label: '2_3_business_days', translation: 'Ready to ship in 2-3 Business Days' },
  { id: 3, label: '4_7_business_days', translation: 'Ready to ship in 4-7 Business Days' },
  { id: 4, label: '8_15_business_days', translation: 'Ready to ship in 8-15 Business Days' },
  { id: 5, label: 'abuse_reports', translation: 'Abuse Reports' },
  { id: 6, label: 'abuse_report_exp', translation: 'Briefly describe the issue you\'re facing' },
  { id: 7, label: 'abuse_report_msg', translation: 'Your report has reached us. Thank you!' },
  { id: 8, label: 'accept_cookies', translation: 'Accept Cookies' },
  // Adding more dummy data to ensure pagination still works and we have enough entries
  { id: 9, label: 'add_product_for_sale', translation: 'Add a Product for Sale' },
  { id: 10, label: 'add_product_for_sale_exp', translation: 'Add a product to sell on the site' },
  { id: 11, label: 'add_product_get_price_requests', translation: 'Add a Product to Receive Quote (Price) Requests' },
  { id: 12, label: 'add_product_get_price_requests_exp', translation: 'Add a product without adding a price to get price requests from customers' },
  { id: 13, label: 'add_product_sell_license_keys', translation: 'Add a Product to Sell License Keys' },
  { id: 14, label: 'add_product_sell_license_keys_exp', translation: 'Add a product to sell only license keys' },
  { id: 15, label: 'add_product_services_listing', translation: 'Add a Product or Service as an Ordinary Listing' },
  // Continue adding more dummy data up to 100 entries to maintain pagination visibility
  ...Array.from({ length: 85 }, (_, i) => ({ // Remaining entries to make it 100
    id: i + 16,
    label: `generic_label_${i + 16}`,
    translation: `Generic translation ${i + 16}`,
  })),
];


export default function EditTranslationsPage({ languageName, onGoBackToLanguages }) {
  const [translations, setTranslations] = useState(dummyTranslations);
  const [showEntries, setShowEntries] = useState(50); // Default to 50 as per screenshot
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered translations based on search term
  const filteredTranslations = translations.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredTranslations.length / showEntries);
  const paginatedTranslations = filteredTranslations.slice(
    (currentPage - 1) * showEntries,
    currentPage * showEntries
  );

  const handleTranslationChange = (id, newTranslation) => {
    setTranslations((prev) =>
      prev.map((item) => (item.id === id ? { ...item, translation: newTranslation } : item))
    );
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', translations);
    alert('Translations saved!');
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
                <Adminheader />
    <div className="bg-gray-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Edit Translations -English {languageName}
          </h2>
          <button
            onClick={onGoBackToLanguages}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <li className="flex items-center space-x-2"> <Link to={"/admin/language-settings"}>
                                            Languages</Link></li>
          </button>
        </div>

        {/* Controls Section: Show, Search, Filter all in one row */}
        <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Show</span>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              value={showEntries}
              onChange={(e) => {
                setShowEntries(Number(e.target.value));
                setCurrentPage(1); // Reset to first page on entries change
              }}
            >
              {[10, 25, 50, 100].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={() => setCurrentPage(1)} // Apply filter by resetting to first page
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Filter
            </button>
          </div>
        </div>

        {/* Column Headers for Translations List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3 px-4 py-2 bg-gray-100 rounded-md font-semibold text-gray-700">
          <div className="text-sm">#</div>
          <div className="text-sm">Label</div>
          <div className="text-sm">Translation</div> {/* Implicit header for the editable field */}
        </div>

        {/* Translations List */}
        <div className="space-y-4 mb-6">
          {paginatedTranslations.length > 0 ? (
            paginatedTranslations.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-md shadow-sm items-center">
                <div className="text-sm font-medium text-gray-700">#{item.id}</div>
                <div>
                  <label htmlFor={`label-${item.id}`} className="sr-only">Label {item.id}</label>
                  <input
                    id={`label-${item.id}`}
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 cursor-not-allowed"
                    value={item.label}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor={`translation-${item.id}`} className="sr-only">Translation for {item.label}</label>
                  <input
                    id={`translation-${item.id}`}
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                    value={item.translation}
                    onChange={(e) => handleTranslationChange(item.id, e.target.value)}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">No translations found.</div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && ( // Only show pagination if more than one page
          <div className="flex justify-center items-center space-x-2 mb-6">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              &laquo;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border border-gray-300 rounded-md text-sm ${
                  currentPage === page ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              &raquo;
            </button>
          </div>
        )}

        {/* Save Changes Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSaveChanges}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
     <Adminfooter />
        </div>
  );
}
