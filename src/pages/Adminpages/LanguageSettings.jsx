import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";
import { Link } from 'react-router-dom';

// Dummy data for languages table - now only 'English' as per the screenshot
const initialLanguages = [
  { id: 1, name: 'English', default: true, active: true },
];

export default function LanguageSettings() {
  // State for languages table
  const [languages, setLanguages] = useState(initialLanguages);
  const [showEntries, setShowEntries] = useState(15);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // State for Add Language form
  const [newLanguage, setNewLanguage] = useState({
    name: '',
    shortForm: '',
    code: '',
    order: 1,
    textDirection: 'ltr', // 'ltr' or 'rtl'
    textEditorLanguage: 'Select',
    flagFile: null, // Stores File object
    status: true, // true for Active, false for Inactive
  });

  // State for Import Language form
  const [importJsonFile, setImportJsonFile] = useState(null);
  const [importFlagFile, setImportFlagFile] = useState(null);

  // Filtered languages for the table based on search term
  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredLanguages.length / showEntries);
  const paginatedLanguages = filteredLanguages.slice(
    (currentPage - 1) * showEntries,
    currentPage * showEntries
  );

  // Handlers for Add Language form
  const handleNewLanguageChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewLanguage((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNewLanguageFileChange = (e) => {
    setNewLanguage((prev) => ({
      ...prev,
      flagFile: e.target.files[0],
    }));
  };

  const handleAddLanguageSubmit = (e) => {
    e.preventDefault();
    console.log('Adding new language:', newLanguage);
    // In a real app, you would send newLanguage data to your backend
    // For now, just add it to the dummy list
    const id = languages.length > 0 ? Math.max(...languages.map(l => l.id)) + 1 : 1;
    const addedLanguage = {
        id,
        name: newLanguage.name,
        default: false, // Newly added language is not default initially
        active: newLanguage.status,
    };
    setLanguages((prev) => [...prev, addedLanguage]);
    // Reset form
    setNewLanguage({
      name: '',
      shortForm: '',
      code: '',
      order: 1,
      textDirection: 'ltr',
      textEditorLanguage: 'Select',
      flagFile: null,
      status: true,
    });
    alert('New language added!');
  };

  // Handlers for Import Language form
  const handleImportJsonFileChange = (e) => {
    setImportJsonFile(e.target.files[0]);
  };

  const handleImportFlagFileChange = (e) => {
    setImportFlagFile(e.target.files[0]);
  };

  const handleImportLanguageSubmit = (e) => {
    e.preventDefault();
    console.log('Importing language:', { importJsonFile, importFlagFile });
    // In a real app, you would upload these files to your backend
    alert('Language imported!');
    setImportJsonFile(null);
    setImportFlagFile(null);
  };

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
                <Adminheader />
    <div className="bg-gray-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Language Settings</h2>

        {/* Languages Section */}
        <div className="mb-10 p-6 bg-gray-50 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Languages</h3>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Show</span>
              <select
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                value={showEntries}
                onChange={(e) => setShowEntries(Number(e.target.value))}
              >
                {[10, 15, 25, 50, 100].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <span className="text-gray-700">entries</span>
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="search" className="text-gray-700">Search:</label>
              <input
                id="search"
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Languages Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Id <span className="inline-block ml-1 opacity-50">⇅</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Language Name <span className="inline-block ml-1 opacity-50">⇅</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Default Language <span className="inline-block ml-1 opacity-50">⇅</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Translation/Export
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Options <span className="inline-block ml-1 opacity-50">⇅</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedLanguages.length > 0 ? (
                  paginatedLanguages.map((lang) => (
                    <tr key={lang.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lang.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {lang.name}
                        {lang.active && (
                          <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        )}
                         {!lang.active && (
                          <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Inactive
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {lang.default && (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            Default
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex space-x-2">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-medium transition duration-150 ease-in-out">
                         <li className="flex items-center space-x-2"> <Link to={"/admin/edit-translations"}>
                                 
                                     Edit Translations</Link></li>
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-xs font-medium transition duration-150 ease-in-out">
                          Export
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <select className="border border-gray-300 rounded-md px-2 py-1 text-xs focus:ring-blue-500 focus:border-blue-500">
                          <option>Select an option</option>
                          <option>Edit</option>
                          <option>Delete</option>
                          <option>Set as Default</option>
                          <option>Activate/Deactivate</option>
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                      No languages found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
            <div className="text-sm text-gray-700">
              Number of Entries: {filteredLanguages.length}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50"
              >
                &lt;
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
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Add Language & Import Language Sections - Arranged Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add Language Section (Left) */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Add Language</h3>
            <form onSubmit={handleAddLanguageSubmit} className="space-y-4">
              <div>
                <label htmlFor="languageName" className="block text-sm font-medium text-gray-700">Language Name</label>
                <input
                  type="text"
                  id="languageName"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: English"
                  value={newLanguage.name}
                  onChange={handleNewLanguageChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="shortForm" className="block text-sm font-medium text-gray-700">Short Form</label>
                <input
                  type="text"
                  id="shortForm"
                  name="shortForm"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: en"
                  value={newLanguage.shortForm}
                  onChange={handleNewLanguageChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="languageCode" className="block text-sm font-medium text-gray-700">Language Code</label>
                <input
                  type="text"
                  id="languageCode"
                  name="code"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: en-US"
                  value={newLanguage.code}
                  onChange={handleNewLanguageChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="order" className="block text-sm font-medium text-gray-700">Order</label>
                <input
                  type="number"
                  id="order"
                  name="order"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  value={newLanguage.order}
                  onChange={handleNewLanguageChange}
                  min="1"
                  required
                />
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">Text Direction</span>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="textDirection"
                      value="ltr"
                      checked={newLanguage.textDirection === 'ltr'}
                      onChange={handleNewLanguageChange}
                      className="form-radio text-blue-600 h-4 w-4"
                    />
                    <span className="ml-2 text-gray-700">Left to Right (LTR)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="textDirection"
                      value="rtl"
                      checked={newLanguage.textDirection === 'rtl'}
                      onChange={handleNewLanguageChange}
                      className="form-radio text-blue-600 h-4 w-4"
                    />
                    <span className="ml-2 text-gray-700">Right to Left (RTL)</span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="textEditorLanguage" className="block text-sm font-medium text-gray-700">Text Editor Language</label>
                <select
                  id="textEditorLanguage"
                  name="textEditorLanguage"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  value={newLanguage.textEditorLanguage}
                  onChange={handleNewLanguageChange}
                >
                  <option>Select</option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  {/* Add more editor languages */}
                </select>
              </div>
              <div>
                <label htmlFor="flag" className="block text-sm font-medium text-gray-700">Flag</label>
                <label className="block mt-1">
                  <span className="sr-only">Choose flag file</span>
                  <input
                    type="file"
                    onChange={handleNewLanguageFileChange}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                  />
                  {newLanguage.flagFile && (
                    <p className="mt-2 text-sm text-gray-500">Selected: {newLanguage.flagFile.name}</p>
                  )}
                </label>
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">Status</span>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="status"
                      checked={newLanguage.status === true}
                      onChange={() => setNewLanguage(prev => ({ ...prev, status: true }))}
                      className="form-radio text-blue-600 h-4 w-4"
                    />
                    <span className="ml-2 text-gray-700">Active</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="status"
                      checked={newLanguage.status === false}
                      onChange={() => setNewLanguage(prev => ({ ...prev, status: false }))}
                      className="form-radio text-blue-600 h-4 w-4"
                    />
                    <span className="ml-2 text-gray-700">Inactive</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Add Language
                </button>
              </div>
            </form>
          </div>

          {/* Import Language Section (Right) */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Import Language</h3>
            <form onSubmit={handleImportLanguageSubmit} className="space-y-4">
              <div>
                <label htmlFor="jsonFile" className="block text-sm font-medium text-gray-700">JSON Language File</label>
                <label className="block mt-1">
                  <span className="sr-only">Choose JSON file</span>
                  <input
                    type="file"
                    id="jsonFile"
                    onChange={handleImportJsonFileChange}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                    accept=".json"
                  />
                  {importJsonFile && (
                    <p className="mt-2 text-sm text-gray-500">Selected: {importJsonFile.name}</p>
                  )}
                </label>
              </div>
              <div>
                <label htmlFor="importFlag" className="block text-sm font-medium text-gray-700">Flag</label>
                <label className="block mt-1">
                  <span className="sr-only">Choose flag image file</span>
                  <input
                    type="file"
                    id="importFlag"
                    onChange={handleImportFlagFileChange}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                    accept="image/*"
                  />
                  {importFlagFile && (
                    <p className="mt-2 text-sm text-gray-500">Selected: {importFlagFile.name}</p>
                  )}
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Import Language
                </button>
              </div>
            </form>
            <p className="mt-6 text-sm text-gray-600">
              Languages: <a href="https://codingest.net/languages" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://codingest.net/languages</a>
            </p>
          </div>
        </div>
      </div>
    </div>
     <Adminfooter />
        </div>
  );
}
