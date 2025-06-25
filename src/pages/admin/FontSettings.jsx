 import React, { useState } from 'react';
import { ChevronDown, Search, Check } from 'lucide-react'; // Assuming you have lucide-react for icons
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const FontSettings = () => {
  const [siteLanguage, setSiteLanguage] = useState('English');
  const [siteFont, setSiteFont] = useState('Open Sans');
  const [dashboardFont, setDashboardFont] = useState('Poppins');

  const [addFontName, setAddFontName] = useState('');
  const [addFontUrl, setAddFontUrl] = useState('');
  const [addFontFamily, setAddFontFamily] = useState('');

  const [showEntries, setShowEntries] = useState(15);
  const [searchFonts, setSearchFonts] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data for fonts table based on the image
  const [fonts, setFonts] = useState([
    { id: 36, name: 'Tajawal', fontFamily: 'font-family: \'Tajawal\', sans-serif;' },
    { id: 35, name: 'Signika', fontFamily: 'font-family: \'Signika\', sans-serif;' },
    { id: 34, name: 'Libre Baskerville', fontFamily: 'font-family: \'Libre Baskerville\', Helvetica, sans-serif;' },
    { id: 33, name: 'Work Sans', fontFamily: 'font-family: \'Work Sans\', Helvetica, sans-serif;' },
    { id: 32, name: 'Verdana', fontFamily: 'font-family: Verdana, Helvetica, sans-serif;' },
    { id: 31, name: 'Ubuntu', fontFamily: 'font-family: \'Ubuntu\', Helvetica, sans-serif;' },
    { id: 30, name: 'Titillium Web', fontFamily: 'font-family: \'Titillium Web\', Helvetica, sans-serif;' },
    { id: 29, name: 'Source Sans Pro', fontFamily: 'font-family: \'Source Sans Pro\', Helvetica, sans-serif;' },
    { id: 28, name: 'Rokkitt', fontFamily: 'font-family: \'Rokkitt\', Helvetica, sans-serif;' },
    { id: 27, name: 'Roboto Slab', fontFamily: 'font-family: \'Roboto Slab\', Helvetica, sans-serif;' },
    { id: 26, name: 'Roboto Condensed', fontFamily: 'font-family: \'Roboto Condensed\', Helvetica, sans-serif;' },
    { id: 25, name: 'Roboto', fontFamily: 'font-family: \'Roboto\', Helvetica, sans-serif;' },
    { id: 24, name: 'Raleway', fontFamily: 'font-family: \'Raleway\', Helvetica, sans-serif;' },
    { id: 23, name: 'PT Sans', fontFamily: 'font-family: \'PT Sans\', Helvetica, sans-serif;' },
    { id: 22, name: 'Poppins', fontFamily: 'font-family: \'Poppins\', Helvetica, sans-serif;' },
    // Add more mock data if needed to match the 36 entries
    { id: 21, name: 'Arial', fontFamily: 'font-family: Arial, sans-serif;' },
    { id: 20, name: 'Times New Roman', fontFamily: 'font-family: \'Times New Roman\', serif;' },
    { id: 19, name: 'Courier New', fontFamily: 'font-family: \'Courier New\', monospace;' },
    { id: 18, name: 'Georgia', fontFamily: 'font-family: Georgia, serif;' },
    { id: 17, name: 'Palatino', fontFamily: 'font-family: Palatino, serif;' },
    { id: 16, name: 'Trebuchet MS', fontFamily: 'font-family: \'Trebuchet MS\', sans-serif;' },
    { id: 15, name: 'Impact', fontFamily: 'font-family: Impact, sans-serif;' },
    { id: 14, name: 'Lucida Sans Unicode', fontFamily: 'font-family: \'Lucida Sans Unicode\', sans-serif;' },
    { id: 13, name: 'Tahoma', fontFamily: 'font-family: Tahoma, sans-serif;' },
    { id: 12, name: 'Garamond', fontFamily: 'font-family: Garamond, serif;' },
    { id: 11, name: 'Comic Sans MS', fontFamily: 'font-family: \'Comic Sans MS\', cursive;' },
    { id: 10, name: 'Arial Black', fontFamily: 'font-family: \'Arial Black\', sans-serif;' },
    { id: 9, name: 'Verdana', fontFamily: 'font-family: Verdana, sans-serif;' },
    { id: 8, name: 'Helvetica', fontFamily: 'font-family: Helvetica, sans-serif;' },
    { id: 7, name: 'Lucida Console', fontFamily: 'font-family: \'Lucida Console\', monospace;' },
    { id: 6, name: 'Franklin Gothic Medium', fontFamily: 'font-family: \'Franklin Gothic Medium\', sans-serif;' },
    { id: 5, name: 'Gill Sans', fontFamily: 'font-family: \'Gill Sans\', sans-serif;' },
    { id: 4, name: 'Noto Sans JP', fontFamily: 'font-family: \'Noto Sans JP\', sans-serif;' },
    { id: 3, name: 'Montserrat', fontFamily: 'font-family: Montserrat, sans-serif;' },
    { id: 2, name: 'Lato', fontFamily: 'font-family: Lato, sans-serif;' },
    { id: 1, name: 'Oswald', fontFamily: 'font-family: Oswald, sans-serif;' },
  ]);

  // Filtered fonts based on search
  const filteredFonts = fonts.filter(font =>
    font.name.toLowerCase().includes(searchFonts.toLowerCase()) ||
    font.fontFamily.toLowerCase().includes(searchFonts.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredFonts.length / showEntries);
  const startIndex = (currentPage - 1) * showEntries;
  const endIndex = startIndex + showEntries;
  const currentFonts = filteredFonts.slice(startIndex, endIndex);

  const handleAddFont = () => {
    if (addFontName && addFontUrl && addFontFamily) {
      const newFont = {
        id: fonts.length > 0 ? Math.max(...fonts.map(f => f.id)) + 1 : 1,
        name: addFontName,
        fontFamily: addFontFamily,
        url: addFontUrl // Though not shown in table, useful to store
      };
      setFonts(prevFonts => [newFont, ...prevFonts]); // Add to the beginning for visibility
      setAddFontName('');
      setAddFontUrl('');
      setAddFontFamily('');
      alert('Font added successfully!');
    } else {
      alert('Please fill all fields to add a new font.');
    }
  };

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
  
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"> {/* Adjusted grid for top row */}
          {/* Site Font Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Site Font</h2> {/* Reduced margin */}

            <div className="space-y-4"> {/* Reduced spacing */}
              {/* Language */}
              <div>
                <label htmlFor="language" className="block text-gray-700 font-medium text-sm mb-1">Language</label> {/* Reduced font and margin */}
                <div className="relative">
                  <select
                    id="language"
                    value={siteLanguage}
                    onChange={(e) => setSiteLanguage(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none pr-8 text-sm"
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Site Font */}
              <div>
                <label htmlFor="siteFont" className="block text-gray-700 font-medium text-sm mb-1">Site Font</label> {/* Reduced font and margin */}
                <div className="relative">
                  <select
                    id="siteFont"
                    value={siteFont}
                    onChange={(e) => setSiteFont(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none pr-8 text-sm"
                  >
                    {fonts.map((font) => (
                      <option key={font.id} value={font.name}>{font.name}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Dashboard Font */}
              <div>
                <label htmlFor="dashboardFont" className="block text-gray-700 font-medium text-sm mb-1">Dashboard Font</label> {/* Reduced font and margin */}
                <div className="relative">
                  <select
                    id="dashboardFont"
                    value={dashboardFont}
                    onChange={(e) => setDashboardFont(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none pr-8 text-sm"
                  >
                    {fonts.map((font) => (
                      <option key={font.id} value={font.name}>{font.name}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4"> {/* Reduced margin */}
              <button
                onClick={() => console.log('Site font settings saved', { siteLanguage, siteFont, dashboardFont })}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm"
              >
                Save Changes
              </button>
            </div>
          </div>

          {/* Add Font Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex justify-between items-center">
              Add Font
              <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-normal">
                Google Fonts
              </a>
            </h2>

            <div className="space-y-4"> {/* Reduced spacing */}
              {/* Name */}
              <div>
                <label htmlFor="addFontName" className="block text-gray-700 font-medium text-sm mb-1">Name</label> {/* Reduced font and margin */}
                <input
                  type="text"
                  id="addFontName"
                  value={addFontName}
                  onChange={(e) => setAddFontName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Name"
                />
                <p className="text-gray-500 text-xs mt-1">(E.g: Open Sans)</p> {/* Reduced font and margin */}
              </div>

              {/* URL */}
              <div>
                <label htmlFor="addFontUrl" className="block text-gray-700 font-medium text-sm mb-1">URL</label> {/* Reduced font and margin */}
                <textarea
                  id="addFontUrl"
                  value={addFontUrl}
                  onChange={(e) => setAddFontUrl(e.target.value)}
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="URL"
                ></textarea>
                <p className="text-gray-500 text-xs mt-1">(E.g: &lt;link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"&gt;)</p> {/* Reduced font and margin */}
              </div>

              {/* Font Family */}
              <div>
                <label htmlFor="addFontFamily" className="block text-gray-700 font-medium text-sm mb-1">Font Family</label> {/* Reduced font and margin */}
                <input
                  type="text"
                  id="addFontFamily"
                  value={addFontFamily}
                  onChange={(e) => setAddFontFamily(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Font Family"
                />
                <p className="text-gray-500 text-xs mt-1">(E.g: font-family: "Open Sans", Helvetica, sans-serif)</p> {/* Reduced font and margin */}
              </div>
            </div>

            <div className="flex justify-end mt-4"> {/* Reduced margin */}
              <button
                onClick={handleAddFont}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm"
              >
                Add Font
              </button>
            </div>
          </div>
        </div>

        {/* Fonts Table Section - Full Width Below */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 col-span-full"> {/* Make it full width */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Fonts</h2> {/* Reduced margin */}

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-3 space-y-2 sm:space-y-0"> {/* Reduced margin and spacing */}
            <div className="flex items-center gap-2 text-sm"> {/* Reduced font */}
              <span className="text-gray-700">Show</span>
              <select
                value={showEntries}
                onChange={(e) => {
                  setShowEntries(Number(e.target.value));
                  setCurrentPage(1); // Reset to first page on entries change
                }}
                className="px-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-xs"
              >
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search:"
                value={searchFonts}
                onChange={(e) => setSearchFonts(e.target.value)}
                className="pl-8 pr-3 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <Search className="absolute left-2.5 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Fonts Table */}
          <div className="overflow-x-auto mb-3"> {/* Reduced margin */}
            <table className="min-w-full divide-y divide-gray-200 text-sm"> {/* Reduced font */}
              <thead className="bg-gray-50 text-xs"> {/* Reduced font */}
                <tr>
                  <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Id
                  </th>
                  <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Font Family
                  </th>
                  <th scope="col" className="px-3 py-2 text-right font-medium text-gray-500 uppercase tracking-wider">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentFonts.map((font) => (
                  <tr key={font.id}>
                    <td className="px-3 py-2 whitespace-nowrap text-gray-900">{font.id}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-gray-900">{font.name}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-gray-500">{font.fontFamily}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-right font-medium">
                      <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-xs">
                        Select an option
                        <ChevronDown className="-mr-1 ml-2 h-4 w-4" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-2 text-sm text-gray-700">
            <span>Number of Entries: {filteredFonts.length}</span>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-1 rounded-l-md border border-gray-300 bg-white font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
              >
                <span className="sr-only">Previous</span>
                {'<'}
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`relative inline-flex items-center px-3 py-1 border font-medium ${
                    currentPage === i + 1
                      ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  } text-xs`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 bg-white font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
              >
                <span className="sr-only">Next</span>
                {'>'}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <Adminfooter />
      
    </div>
  );
};

export default FontSettings;