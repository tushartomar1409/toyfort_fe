 import React, { useState } from 'react';

// You might need an icon library like 'react-icons' for the icons.
// For example:
// import { FaPlus, FaImage, FaTimes } from 'react-icons/fa';
// import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


// --- Modal Component ---
const AddBannerModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose} // Optional: close modal on overlay click
        >
            <div 
                className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative"
                onClick={e => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
                {/* Header */}
                <div className="flex justify-between items-center pb-4 border-b">
                    <h3 className="text-xl font-semibold text-gray-800">Add Banner</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">
                        {/* <FaTimes /> */}
                        &times;
                    </button>
                </div>

                {/* Body */}
                <div className="mt-6 space-y-6">
                    <input
                        type="text"
                        placeholder="Banner URL"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                        type="number"
                        placeholder="Order"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="relative">
                        <input
                            type="number"
                            placeholder="Banner Width (E.g: 50)"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">%</span>
                    </div>

                    {/* Location Radio Buttons */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Location
                            <span className="text-xs text-gray-500 ml-1">(The banner will be added under the selected section)</span>
                        </label>
                        <div className="mt-2 space-y-2">
                            <label className="flex items-center">
                                <input type="radio" name="location" defaultChecked className="form-radio h-4 w-4 text-purple-600" />
                                <span className="ml-3 text-gray-700">Featured Categories</span>
                            </label>
                             <label className="flex items-center">
                                <input type="radio" name="location" className="form-radio h-4 w-4 text-purple-600" />
                                <span className="ml-3 text-gray-700">Special Offers</span>
                            </label>
                             <label className="flex items-center">
                                <input type="radio" name="location" className="form-radio h-4 w-4 text-purple-600" />
                                <span className="ml-3 text-gray-700">Featured Products</span>
                            </label>
                             <label className="flex items-center">
                                <input type="radio" name="location" className="form-radio h-4 w-4 text-purple-600" />
                                <span className="ml-3 text-gray-700">New Arrivals</span>
                            </label>
                        </div>
                    </div>
                    
                    {/* Banner Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Banner</label>
                        <label htmlFor="banner-upload" className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                            {/* <FaImage className="mr-2 text-gray-500" /> */}
                             <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <span className="text-sm font-medium text-gray-700">Select Image</span>
                        </label>
                        <input id="banner-upload" type="file" className="hidden" />
                    </div>

                </div>

                {/* Footer */}
                <div className="mt-8 pt-4 border-t text-right">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Add Banner
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- Previously defined components (Card, SectionTitle, etc.) ---
const SortableHeader = ({ children }) => (
  <th className="p-4 text-left text-sm font-semibold text-gray-600">
    <div className="flex items-center">
      {children}
      <span className="ml-2 text-gray-400">↕</span>
    </div>
  </th>
);

const Card = ({ children, className }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
  </div>
);


// --- Components from the first image (updated HomepageBanners) ---
const FeaturedCategories = () => (
  <Card>
    <SectionTitle
      title="Featured Categories"
      subtitle="Select the categories you want to show under the slider"
    />
    <form>
      <label htmlFor="featured-category" className="block text-sm font-medium text-gray-700 mb-1">
        Category
      </label>
      <select
        id="featured-category"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      >
        <option>Select Category</option>
      </select>
      <div className="mt-4 text-left">
        <button
          type="button"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Select Category
        </button>
      </div>
    </form>
  </Card>
);

const ProductsByCategory = () => (
  <Card>
    <SectionTitle
      title="Products by Category"
      subtitle="Show products by categories on the homepage"
    />
    <form>
      <label htmlFor="product-category" className="block text-sm font-medium text-gray-700 mb-1">
        Category
      </label>
      <select
        id="product-category"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      >
        <option>Select Category</option>
      </select>
      <div className="mt-4 flex items-center">
        <input
          id="show-subcategory"
          type="checkbox"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="show-subcategory" className="ml-2 block text-sm text-gray-900">
          Show subcategory products
        </label>
      </div>
      <div className="mt-4 text-left">
        <button
          type="button"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Select Category
        </button>
      </div>
    </form>
  </Card>
);

const HomepageBanners = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <AddBannerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <Card className="mt-8 col-span-1 md:col-span-2">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Homepage Banners</h2>
                        <p className="text-sm text-gray-500 mt-1">
                            You can manage the product banners on the homepage from this section
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 flex items-center"
                    >
                        <span className="mr-2 text-xl">+</span> Add Banner
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="border-b">
                                <SortableHeader>Id</SortableHeader>
                                <SortableHeader>Banner</SortableHeader>
                                <SortableHeader>URL</SortableHeader>
                                <SortableHeader>Order</SortableHeader>
                                <SortableHeader>Banner Width</SortableHeader>
                                <SortableHeader>Location</SortableHeader>
                                <SortableHeader>Options</SortableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="7" className="text-center p-8 text-gray-500">
                                    No records found!
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
        </>
    );
}


// --- Component from the second image ---
const Settings = () => {
    // ... (code for Settings component is unchanged)
    const RadioToggle = ({ name, label }) => (
        <div className="flex items-center justify-between py-3 border-b">
            <span className="text-gray-700 font-medium">{label}</span>
            <div className="flex items-center space-x-6">
                <label className="flex items-center cursor-pointer">
                    <input type="radio" name={name} defaultChecked className="form-radio h-5 w-5 text-purple-600" />
                    <span className="ml-2 text-gray-700">Show</span>
                </label>
                <label className="flex items-center cursor-pointer">
                    <input type="radio" name={name} className="form-radio h-5 w-5 text-gray-600" />
                    <span className="ml-2 text-gray-700">Hide</span>
                </label>
            </div>
        </div>
    );

    const NumberInput = ({ label, id, defaultValue }) => (
        <div className="mt-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input 
                type="number"
                id={id}
                defaultValue={defaultValue}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );

    return (
        <Card className="mt-8 col-span-1 md:col-span-2">
            <SectionTitle title="Settings" />
            <div className="space-y-4">
                <RadioToggle name="featuredCategories" label="Featured Categories" />
                <RadioToggle name="featuredProducts" label="Featured Products" />
                <RadioToggle name="latestProducts" label="Latest Products" />
                <RadioToggle name="blogSlider" label="Blog Slider" />
                <NumberInput label="Number of Featured Products to Show" id="numFeaturedProducts" defaultValue="10" />
                <NumberInput label="Number of Latest Products to Show" id="numLatestProducts" defaultValue="10" />
            </div>
            <div className="mt-8 text-right">
                <button
                    type="button"
                    className="px-8 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Save Changes
                </button>
            </div>
        </Card>
    );
}


// --- Main Page Component ---
export default function HomepageManager() {
  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Homepage Manager
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeaturedCategories />
        <ProductsByCategory />
        <HomepageBanners />
        <Settings />
      </div>
    </div>
  );
}