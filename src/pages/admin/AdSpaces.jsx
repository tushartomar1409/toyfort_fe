import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";
const App = () => {
  // State for the selected ad space
  const [selectedAdSpace, setSelectedAdSpace] = useState('Index Ad Space 1');

  // States for Desktop Banner
  const [desktopAdSizeWidth, setDesktopAdSizeWidth] = useState('728');
  const [desktopAdSizeHeight, setDesktopAdSizeHeight] = useState('90');
  const [desktopAdCode, setDesktopAdCode] = useState('');
  const [desktopAdUrl, setDesktopAdUrl] = useState('');
  const [desktopSelectedImage, setDesktopSelectedImage] = useState(null); // For file input

  // States for Mobile Banner
  const [mobileAdSizeWidth, setMobileAdSizeWidth] = useState('300');
  const [mobileAdSizeHeight, setMobileAdSizeHeight] = useState('250');
  const [mobileAdCode, setMobileAdCode] = useState('');
  const [mobileAdUrl, setMobileAdUrl] = useState('');
  const [mobileSelectedImage, setMobileSelectedImage] = useState(null); // For file input

  // State for Google AdSense Code
  const [googleAdsenseCode, setGoogleAdsenseCode] = useState('');

  // State for showing the success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Handle file selection for desktop banner
  const handleDesktopImageSelect = (e) => {
    setDesktopSelectedImage(e.target.files[0]);
  };

  // Handle file selection for mobile banner
  const handleMobileImageSelect = (e) => {
    setMobileSelectedImage(e.target.files[0]);
  };

  // Handle form submission for all ad space settings
  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log({
      selectedAdSpace,
      desktopAdSizeWidth,
      desktopAdSizeHeight,
      desktopAdCode,
      desktopAdUrl,
      desktopSelectedImage,
      mobileAdSizeWidth,
      mobileAdSizeHeight,
      mobileAdCode,
      mobileAdUrl,
      mobileSelectedImage,
      googleAdsenseCode,
    });
    // In a real application, you'd send this data to a backend API.
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide message after 3 seconds
  };

  return (
    // Tailwind CSS classes are used for styling
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
            <Adminheader />
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <script src="https://cdn.tailwindcss.com"></script> {/* Load Tailwind CSS */}
      
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

      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Ad Spaces</h1>

      <form onSubmit={handleSaveChanges}>
        {/* Select Ad Space Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-6">
            <label htmlFor="selectAdSpace" className="block text-gray-700 text-lg font-medium mb-2">
              Select Ad Space
            </label>
            <select
              id="selectAdSpace"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              value={selectedAdSpace}
              onChange={(e) => setSelectedAdSpace(e.target.value)}
            >
              <option value="Index Ad Space 1">Index Ad Space 1</option>
              <option value="Index Ad Space 2">Index Ad Space 2</option>
              {/* Add more ad space options as needed */}
            </select>
          </div>
        </div>

        {/* Dynamic Section based on selectedAdSpace, for now hardcoded for Index Ad Space 1 */}
        {selectedAdSpace === 'Index Ad Space 1' && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Index Ad Space 1</h2>

            {/* Desktop Banner Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                Desktop Banner <span className="text-gray-500 text-sm">(This ad will be displayed on screens larger than 992px)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-lg font-medium mb-2">Ad Size</label>
                  <div className="flex space-x-4">
                    <input
                      type="number"
                      placeholder="728"
                      className="mt-1 block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
                      value={desktopAdSizeWidth}
                      onChange={(e) => setDesktopAdSizeWidth(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="90"
                      className="mt-1 block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
                      value={desktopAdSizeHeight}
                      onChange={(e) => setDesktopAdSizeHeight(e.target.value)}
                    />
                  </div>
                </div>
                <div></div> {/* Empty div for grid alignment */}

                <div className="md:col-span-1">
                  <label htmlFor="desktopAdCode" className="block text-gray-700 text-lg font-medium mb-2">Paste Ad Code</label>
                  <textarea
                    id="desktopAdCode"
                    rows="5"
                    placeholder="Paste Ad Code"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
                    value={desktopAdCode}
                    onChange={(e) => setDesktopAdCode(e.target.value)}
                  ></textarea>
                </div>

                <div className="md:col-span-1">
                  <label className="block text-gray-700 text-lg font-medium mb-2">
                    Upload Your Banner 
                    <span className="text-gray-500 text-sm ml-1">(If you don't have an ad code, you can create an ad code by selecting an image and adding an URL)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Paste Ad URL"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg mb-4"
                    value={desktopAdUrl}
                    onChange={(e) => setDesktopAdUrl(e.target.value)}
                  />
                  <input
                    type="file"
                    id="desktopImageSelect"
                    className="hidden" // Hide default file input
                    onChange={handleDesktopImageSelect}
                  />
                  <label
                    htmlFor="desktopImageSelect"
                    className="cursor-pointer bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-200 inline-block"
                  >
                    Select Image
                  </label>
                  {desktopSelectedImage && <span className="ml-3 text-gray-600">{desktopSelectedImage.name}</span>}
                </div>
              </div>
            </div>

            {/* Mobile Banner Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                Mobile Banner <span className="text-gray-500 text-sm">(This ad will be displayed on screens smaller than 992px)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-lg font-medium mb-2">Ad Size</label>
                  <div className="flex space-x-4">
                    <input
                      type="number"
                      placeholder="300"
                      className="mt-1 block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
                      value={mobileAdSizeWidth}
                      onChange={(e) => setMobileAdSizeWidth(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="250"
                      className="mt-1 block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
                      value={mobileAdSizeHeight}
                      onChange={(e) => setMobileAdSizeHeight(e.target.value)}
                    />
                  </div>
                </div>
                <div></div> {/* Empty div for grid alignment */}

                <div className="md:col-span-1">
                  <label htmlFor="mobileAdCode" className="block text-gray-700 text-lg font-medium mb-2">Paste Ad Code</label>
                  <textarea
                    id="mobileAdCode"
                    rows="5"
                    placeholder="Paste Ad Code"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
                    value={mobileAdCode}
                    onChange={(e) => setMobileAdCode(e.target.value)}
                  ></textarea>
                </div>

                <div className="md:col-span-1">
                  <label className="block text-gray-700 text-lg font-medium mb-2">
                    Upload Your Banner
                    <span className="text-gray-500 text-sm ml-1">(If you don't have an ad code, you can create an ad code by selecting an image and adding an URL)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Paste Ad URL"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg mb-4"
                    value={mobileAdUrl}
                    onChange={(e) => setMobileAdUrl(e.target.value)}
                  />
                  <input
                    type="file"
                    id="mobileImageSelect"
                    className="hidden" // Hide default file input
                    onChange={handleMobileImageSelect}
                  />
                  <label
                    htmlFor="mobileImageSelect"
                    className="cursor-pointer bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-200 inline-block"
                  >
                    Select Image
                  </label>
                  {mobileSelectedImage && <span className="ml-3 text-gray-600">{mobileSelectedImage.name}</span>}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Google Adsense Code Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-medium text-gray-700 mb-4">Google Adsense Code</h3>
          <p className="text-gray-500 text-sm mb-4">The codes you add here will be added in the tags.</p>
          <textarea
            rows="5"
            placeholder="Google Adsense Code"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
            value={googleAdsenseCode}
            onChange={(e) => setGoogleAdsenseCode(e.target.value)}
          ></textarea>
        </div>

        {/* Save Changes Button (Global) */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
    <Adminfooter />
      
    </div>
  );
};

export default App;
