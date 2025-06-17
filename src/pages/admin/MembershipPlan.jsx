import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


const MembershipPlan = () => {
  // State for the main form fields
  const [title, setTitle] = useState('English');
  const [numberOfAds, setNumberOfAds] = useState('');
  const [isAdsUnlimited, setIsAdsUnlimited] = useState(false);
  const [duration, setDuration] = useState('');
  const [isDurationUnlimited, setIsDurationUnlimited] = useState(false);
  const [price, setPrice] = useState('0.00');
  const [isFree, setIsFree] = useState(false);
  const [order, setOrder] = useState('');
  const [isPopular, setIsPopular] = useState(false);

  // State for dynamically added features
  const [features, setFeatures] = useState(['']);
  
  // State for the settings panel
  const [status, setStatus] = useState('Disable');

  // Handler to add a new feature input field
  const handleAddFeature = () => {
    setFeatures([...features, '']);
  };

  // Handler to update a specific feature in the list
  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };
  
  // Handler to remove a feature
  const handleRemoveFeature = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend API
    console.log('Form Submitted', {
      title,
      numberOfAds: isAdsUnlimited ? 'Unlimited' : numberOfAds,
      duration: isDurationUnlimited ? 'Unlimited' : duration,
      price: isFree ? 'Free' : price,
      order,
      isPopular,
      features,
    });
    // You could show a success message to the user here
  };

  // Handler for saving settings
  const handleSettingsSave = (e) => {
    e.preventDefault();
    // Logic to save settings to a backend or state management
    console.log('Settings Saved', { status });
    // You could show a confirmation message here
  }

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* --- Left Side: Create Plan Form --- */}
        <div className="flex-grow lg:w-2/3 bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-4">Create a New Plan</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              />
            </div>

            {/* Number of Ads */}
            <div>
              <label htmlFor="num-ads" className="block text-sm font-medium text-gray-700 mb-1">Number of Ads</label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  id="num-ads"
                  placeholder="E.g: 10"
                  value={numberOfAds}
                  onChange={(e) => setNumberOfAds(e.target.value)}
                  disabled={isAdsUnlimited}
                  className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                />
                <div className="flex items-center select-none">
                  <input
                    type="checkbox"
                    id="ads-unlimited"
                    checked={isAdsUnlimited}
                    onChange={(e) => setIsAdsUnlimited(e.target.checked)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="ads-unlimited" className="ml-2 text-sm text-gray-900 cursor-pointer">Unlimited</label>
                </div>
              </div>
            </div>

            {/* Duration */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration <span className="text-gray-500">(A time limit for the plan)</span></label>
               <div className="flex items-center gap-4">
                <input
                  type="number"
                  id="duration"
                  placeholder="Number of Days (E.g: 30)"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  disabled={isDurationUnlimited}
                  className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                />
                <div className="flex items-center select-none">
                  <input
                    type="checkbox"
                    id="duration-unlimited"
                    checked={isDurationUnlimited}
                    onChange={(e) => setIsDurationUnlimited(e.target.checked)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="duration-unlimited" className="ml-2 text-sm text-gray-900 cursor-pointer">Unlimited</label>
                </div>
              </div>
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <div className="flex items-center gap-4">
                 <div className="relative flex-grow">
                   <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">₹</span>
                   <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    disabled={isFree}
                    className="w-full p-2 pl-7 border border-gray-300 rounded-md shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                  />
                 </div>
                <div className="flex items-center select-none">
                  <input
                    type="checkbox"
                    id="is-free"
                    checked={isFree}
                    onChange={(e) => setIsFree(e.target.checked)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="is-free" className="ml-2 text-sm text-gray-900 cursor-pointer">Free</label>
                </div>
              </div>
            </div>
            
            {/* Order */}
            <div>
              <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-1">Order</label>
              <input
                type="number"
                id="order"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                placeholder="Order"
              />
            </div>
            
            {/* Popular Checkbox */}
            <div className="flex items-center select-none">
              <input
                type="checkbox"
                id="is-popular"
                checked={isPopular}
                onChange={(e) => setIsPopular(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="is-popular" className="ml-2 block text-sm text-gray-900 cursor-pointer">Popular</label>
            </div>
            
            {/* Features */}
            <div className="space-y-4 border-t pt-6">
              <label className="block text-sm font-medium text-gray-700">Features</label>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    id={`feature-${index}`}
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                    placeholder="Enter feature description"
                  />
                   {features.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveFeature(index)}
                        className="px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                      >
                        &ndash;
                      </button>
                    )}
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddFeature}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
              >
                + Add Feature
              </button>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white font-semibold text-sm rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* --- Right Side: Settings Panel --- */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-4">Settings</h2>
            <form onSubmit={handleSettingsSave}>
              <fieldset className="mb-6">
                <legend className="text-sm font-medium text-gray-700 mb-2">Status</legend>
                <div className="flex items-center space-x-8">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="enable"
                            name="status"
                            value="Enable"
                            checked={status === 'Enable'}
                            onChange={(e) => setStatus(e.target.value)}
                            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="enable" className="ml-2 text-sm text-gray-900 cursor-pointer">Enable</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="disable"
                            name="status"
                            value="Disable"
                            checked={status === 'Disable'}
                            onChange={(e) => setStatus(e.target.value)}
                            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="disable" className="ml-2 text-sm text-gray-900 cursor-pointer">Disable</label>
                    </div>
                </div>
              </fieldset>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold text-sm rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
      <Adminfooter />
      
    </div>
  );
};

export default MembershipPlan;
