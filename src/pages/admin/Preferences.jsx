import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


const Preferences = () => {
  const [generalSettings, setGeneralSettings] = useState({
    multilingualSystem: 'Enable',
    rssSystem: 'Enable',
    vendorVerificationSystem: 'Enable',
    hideVendorContactInformation: 'No',
    guestCheckout: 'Enable',
    searchByLocation: 'Disable',
    progressiveWebApp: 'Disable',
  });

  const [productSettings, setProductSettings] = useState({
    approveProductsBeforePublishing: 'Yes',
    featuredProductsSystem: 'Enable',
    vendorBulkProductUpload: 'Enable',
    showSoldProductsOnSite: 'Yes',
    productLinkStructure: 'domain.com/id-slug',
  });

  const [reviewsCommentsSettings, setReviewsCommentsSettings] = useState({
    reviews: 'Enable',
    productComments: 'Enable',
    blogComments: 'Enable',
    commentApprovalSystem: 'Enable',
  });

  const [shopSettings, setShopSettings] = useState({
    showCustomerEmailToSeller: 'Yes',
    showCustomerPhoneNoToSeller: 'Yes',
    requestDocumentsFromVendorsToOpenStore: 'No',
  });

  const handleGeneralChange = (field, value) => {
    setGeneralSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProductChange = (field, value) => {
    setProductSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleReviewsCommentsChange = (field, value) => {
    setReviewsCommentsSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleShopChange = (field, value) => {
    setShopSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const RadioToggle = ({ name, value, onChange, options }) => (
    <div className="flex gap-4 items-center">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 cursor-pointer">
          <div className="relative">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="sr-only"
            />
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
              value === option ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
            }`}>
              {value === option && <Check className="w-3 h-3 text-white" />}
            </div>
          </div>
          <span className="text-gray-700 text-sm">{option}</span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
        
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Preferences</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* General Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">General</h2>

            <div className="space-y-6">
              {/* Multilingual System */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Multilingual System</label>
                <RadioToggle
                  name="multilingualSystem"
                  value={generalSettings.multilingualSystem}
                  onChange={(val) => handleGeneralChange('multilingualSystem', val)}
                  options={['Enable', 'Disable']}
                />
              </div>

              {/* RSS System */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">RSS System</label>
                <RadioToggle
                  name="rssSystem"
                  value={generalSettings.rssSystem}
                  onChange={(val) => handleGeneralChange('rssSystem', val)}
                  options={['Enable', 'Disable']}
                />
              </div>

              {/* Vendor Verification System */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Vendor Verification System <span className="text-gray-500 text-sm">(Disable if you want to allow all users to add products.)</span>
                </label>
                <RadioToggle
                  name="vendorVerificationSystem"
                  value={generalSettings.vendorVerificationSystem}
                  onChange={(val) => handleGeneralChange('vendorVerificationSystem', val)}
                  options={['Enable', 'Disable']}
                />
              </div>

              {/* Hide Vendor Contact Information on the Site */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Hide Vendor Contact Information on the Site</label>
                <RadioToggle
                  name="hideVendorContactInformation"
                  value={generalSettings.hideVendorContactInformation}
                  onChange={(val) => handleGeneralChange('hideVendorContactInformation', val)}
                  options={['Yes', 'No']}
                />
              </div>

              {/* Guest Checkout */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Guest Checkout</label>
                <RadioToggle
                  name="guestCheckout"
                  value={generalSettings.guestCheckout}
                  onChange={(val) => handleGeneralChange('guestCheckout', val)}
                  options={['Enable', 'Disable']}
                />
              </div>

              {/* Search by Location */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Search by Location</label>
                <RadioToggle
                  name="searchByLocation"
                  value={generalSettings.searchByLocation}
                  onChange={(val) => handleGeneralChange('searchByLocation', val)}
                  options={['Enable', 'Disable']}
                />
              </div>

              {/* Progressive Web App (PWA) */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Progressive Web App (PWA)</label>
                <RadioToggle
                  name="progressiveWebApp"
                  value={generalSettings.progressiveWebApp}
                  onChange={(val) => handleGeneralChange('progressiveWebApp', val)}
                  options={['Enable', 'Disable']}
                />
                {generalSettings.progressiveWebApp === 'Enable' && (
                  <p className="text-yellow-700 bg-yellow-100 p-3 rounded-md mt-3 text-sm">
                    <span className="font-semibold">Warning!</span> If you enable PWA option, read "Progressive Web App (PWA)" section from the documentation to make the necessary settings.
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={() => console.log('General settings saved', generalSettings)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>

          {/* Products Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Products</h2>

            <div className="space-y-6">
              {/* Approve Products Before Publishing */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Approve Products Before Publishing</label>
                <RadioToggle
                  name="approveProductsBeforePublishing"
                  value={productSettings.approveProductsBeforePublishing}
                  onChange={(val) => handleProductChange('approveProductsBeforePublishing', val)}
                  options={['Yes', 'No']}
                />
              </div>

              {/* Featured Products System */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Featured Products System</label>
                <RadioToggle
                  name="featuredProductsSystem"
                  value={productSettings.featuredProductsSystem}
                  onChange={(val) => handleProductChange('featuredProductsSystem', val)}
                  options={['Enable', 'Disable']}
                />
              </div>

              {/* Vendor Bulk Product Upload */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Vendor Bulk Product Upload</label>
                <RadioToggle
                  name="vendorBulkProductUpload"
                  value={productSettings.vendorBulkProductUpload}
                  onChange={(val) => handleProductChange('vendorBulkProductUpload', val)}
                  options={['Enable', 'Disable']}
                />
              </div>

              {/* Show Sold Products on the Site */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Show Sold Products on the Site</label>
                <RadioToggle
                  name="showSoldProductsOnSite"
                  value={productSettings.showSoldProductsOnSite}
                  onChange={(val) => handleProductChange('showSoldProductsOnSite', val)}
                  options={['Yes', 'No']}
                />
              </div>

              {/* Product Link Structure */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Product Link Structure</label>
                <RadioToggle
                  name="productLinkStructure"
                  value={productSettings.productLinkStructure}
                  onChange={(val) => handleProductChange('productLinkStructure', val)}
                  options={['domain.com/slug-id', 'domain.com/id-slug']}
                />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={() => console.log('Product settings saved', productSettings)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Reviews & Comments Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Reviews & Comments</h2>

            <div className="space-y-6">
              {/* Reviews */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Reviews</label>
                <RadioToggle
                  name="reviews"
                  value={reviewsCommentsSettings.reviews}
                  onChange={(val) => handleReviewsCommentsChange('reviews', val)}
                  options={['Enable', 'Disable']}
                />
              </div>

              {/* Product Comments */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Product Comments</label>
                <RadioToggle
                  name="productComments"
                  value={reviewsCommentsSettings.productComments}
                  onChange={(val) => handleReviewsCommentsChange('productComments', val)}
                  options={['Enable', 'Disable']}
                />
              </div>

              {/* Blog Comments */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Blog Comments</label>
                <RadioToggle
                  name="blogComments"
                  value={reviewsCommentsSettings.blogComments}
                  onChange={(val) => handleReviewsCommentsChange('blogComments', val)}
                  options={['Enable', 'Disable']}
                />
              </div>

              {/* Comment Approval System */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Comment Approval System</label>
                <RadioToggle
                  name="commentApprovalSystem"
                  value={reviewsCommentsSettings.commentApprovalSystem}
                  onChange={(val) => handleReviewsCommentsChange('commentApprovalSystem', val)}
                  options={['Enable', 'Disable']}
                />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={() => console.log('Reviews & Comments settings saved', reviewsCommentsSettings)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>

          {/* Shop Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Shop</h2>

            <div className="space-y-6">
              {/* Show Customer Email to Seller */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Show Customer Email to Seller</label>
                <RadioToggle
                  name="showCustomerEmailToSeller"
                  value={shopSettings.showCustomerEmailToSeller}
                  onChange={(val) => handleShopChange('showCustomerEmailToSeller', val)}
                  options={['Yes', 'No']}
                />
              </div>

              {/* Show Customer Phone Number to Seller */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Show Customer Phone Number to Seller</label>
                <RadioToggle
                  name="showCustomerPhoneNoToSeller"
                  value={shopSettings.showCustomerPhoneNoToSeller}
                  onChange={(val) => handleShopChange('showCustomerPhoneNoToSeller', val)}
                  options={['Yes', 'No']}
                />
              </div>

              {/* Request Documents from Vendors to Open a Store */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Request Documents from Vendors to Open a Store</label>
                <RadioToggle
                  name="requestDocumentsFromVendorsToOpenStore"
                  value={shopSettings.requestDocumentsFromVendorsToOpenStore}
                  onChange={(val) => handleShopChange('requestDocumentsFromVendorsToOpenStore', val)}
                  options={['Yes', 'No']}
                />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={() => console.log('Shop settings saved', shopSettings)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Adminfooter />
      
    </div>
  );
};

export default Preferences;