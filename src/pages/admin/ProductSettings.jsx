 import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


const ProductSettings = () => {
  const [settings, setSettings] = useState({
    marketplace: {
      sku: true,
      variations: true,
      shipping: true,
      location: true
    },
    classifiedAds: {
      price: { enabled: true, required: true },
      location: true,
      externalLink: true
    },
    digitalProducts: {
      demoUrl: true,
      videoPreview: true,
      audioPreview: true,
      allowedExtensions: ['zip']
    },
    physicalProducts: {
      demoUrl: true,
      videoPreview: true,
      audioPreview: true
    },
    fileUpload: {
      imageUploadLimit: 20,
      maxImageSize: 1000,
      maxVideoSize: 1000,
      maxAudioSize: 1000
    }
  });

  const [newExtension, setNewExtension] = useState('');

  const toggleSetting = (section, key, subKey = null) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: subKey 
          ? { ...prev[section][key], [subKey]: !prev[section][key][subKey] }
          : !prev[section][key]
      }
    }));
  };

  const updateFileSize = (type, value) => {
    setSettings(prev => ({
      ...prev,
      fileUpload: {
        ...prev.fileUpload,
        [type]: parseInt(value) || 0
      }
    }));
  };

  const addExtension = () => {
    if (newExtension.trim() && !settings.digitalProducts.allowedExtensions.includes(newExtension.trim())) {
      setSettings(prev => ({
        ...prev,
        digitalProducts: {
          ...prev.digitalProducts,
          allowedExtensions: [...prev.digitalProducts.allowedExtensions, newExtension.trim()]
        }
      }));
      setNewExtension('');
    }
  };

  const removeExtension = (extension) => {
    setSettings(prev => ({
      ...prev,
      digitalProducts: {
        ...prev.digitalProducts,
        allowedExtensions: prev.digitalProducts.allowedExtensions.filter(ext => ext !== extension)
      }
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addExtension();
    }
  };

  const CheckboxInput = ({ checked, onChange, label }) => (
    <div className="flex items-center space-x-3 mb-4">
      <div 
        className={`w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${
          checked ? 'bg-purple-600 border-purple-600' : 'border-gray-300 hover:border-purple-400'
        }`}
        onClick={onChange}
      >
        {checked && <Check size={14} className="text-white" />}
      </div>
      <span className="text-gray-700 font-medium">{label}</span>
    </div>
  );

  const SettingSection = ({ title, subtitle, children, onSave }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
      </div>
      
      <div className="space-y-4 mb-6">
        {children}
      </div>
      
      <button 
        onClick={onSave}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
      >
        Save Changes
      </button>
    </div>
  );

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
        
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Settings</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Marketplace */}
          <SettingSection 
            title="Marketplace" 
            subtitle="Add a Product for Sale"
            onSave={() => console.log('Marketplace settings saved')}
          >
            <CheckboxInput 
              checked={settings.marketplace.sku}
              onChange={() => toggleSetting('marketplace', 'sku')}
              label="SKU"
            />
            <CheckboxInput 
              checked={settings.marketplace.variations}
              onChange={() => toggleSetting('marketplace', 'variations')}
              label="Variations"
            />
            <CheckboxInput 
              checked={settings.marketplace.shipping}
              onChange={() => toggleSetting('marketplace', 'shipping')}
              label="Shipping"
            />
            <CheckboxInput 
              checked={settings.marketplace.location}
              onChange={() => toggleSetting('marketplace', 'location')}
              label="Location"
            />
          </SettingSection>

          {/* Classified Ads */}
          <SettingSection 
            title="Classified Ads" 
            subtitle="Add a Product or Service as an Ordinary Listing"
            onSave={() => console.log('Classified Ads settings saved')}
          >
            <div className="mb-4">
              <span className="text-gray-700 font-medium mb-3 block">Price</span>
              <div className="ml-4 space-y-2">
                <CheckboxInput 
                  checked={settings.classifiedAds.price.enabled}
                  onChange={() => toggleSetting('classifiedAds', 'price', 'enabled')}
                  label="Enable"
                />
                <CheckboxInput 
                  checked={settings.classifiedAds.price.required}
                  onChange={() => toggleSetting('classifiedAds', 'price', 'required')}
                  label="Required"
                />
              </div>
            </div>
            
            <CheckboxInput 
              checked={settings.classifiedAds.location}
              onChange={() => toggleSetting('classifiedAds', 'location')}
              label="Location"
            />
            <CheckboxInput 
              checked={settings.classifiedAds.externalLink}
              onChange={() => toggleSetting('classifiedAds', 'externalLink')}
              label="External Link"
            />
          </SettingSection>

          {/* Digital Products */}
          <SettingSection 
            title="Digital Products"
            onSave={() => console.log('Digital Products settings saved')}
          >
            <CheckboxInput 
              checked={settings.digitalProducts.demoUrl}
              onChange={() => toggleSetting('digitalProducts', 'demoUrl')}
              label="Demo URL"
            />
            <CheckboxInput 
              checked={settings.digitalProducts.videoPreview}
              onChange={() => toggleSetting('digitalProducts', 'videoPreview')}
              label="Video Preview"
            />
            <CheckboxInput 
              checked={settings.digitalProducts.audioPreview}
              onChange={() => toggleSetting('digitalProducts', 'audioPreview')}
              label="Audio Preview"
            />
            
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-3">Allowed File Extensions</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {settings.digitalProducts.allowedExtensions.map((ext, index) => (
                  <span 
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                  >
                    {ext}
                    <button 
                      onClick={() => removeExtension(ext)}
                      className="text-green-600 hover:text-green-800 font-bold text-lg leading-none"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newExtension}
                  onChange={(e) => setNewExtension(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="E.g. zip, jpg, doc, pdf..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={addExtension}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm font-medium"
                >
                  Add
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-2">(Type an extension and hit enter. E.g. zip, jpg, doc, pdf.)</p>
            </div>
          </SettingSection>

          {/* Physical Products */}
          <SettingSection 
            title="Physical Products"
            onSave={() => console.log('Physical Products settings saved')}
          >
            <CheckboxInput 
              checked={settings.physicalProducts.demoUrl}
              onChange={() => toggleSetting('physicalProducts', 'demoUrl')}
              label="Demo URL"
            />
            <CheckboxInput 
              checked={settings.physicalProducts.videoPreview}
              onChange={() => toggleSetting('physicalProducts', 'videoPreview')}
              label="Video Preview"
            />
            <CheckboxInput 
              checked={settings.physicalProducts.audioPreview}
              onChange={() => toggleSetting('physicalProducts', 'audioPreview')}
              label="Audio Preview"
            />
          </SettingSection>

          {/* File Upload */}
          <SettingSection 
            title="File Upload"
            onSave={() => console.log('File Upload settings saved')}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Product Image Upload Limit</label>
                <input
                  type="number"
                  value={settings.fileUpload.imageUploadLimit}
                  onChange={(e) => updateFileSize('imageUploadLimit', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Max File Size (Image)</label>
                <div className="flex">
                  <input
                    type="number"
                    value={settings.fileUpload.maxImageSize}
                    onChange={(e) => updateFileSize('maxImageSize', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md text-gray-600 font-medium">
                    MB
                  </span>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Max File Size (Video)</label>
                <div className="flex">
                  <input
                    type="number"
                    value={settings.fileUpload.maxVideoSize}
                    onChange={(e) => updateFileSize('maxVideoSize', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md text-gray-600 font-medium">
                    MB
                  </span>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Max File Size (Audio)</label>
                <div className="flex">
                  <input
                    type="number"
                    value={settings.fileUpload.maxAudioSize}
                    onChange={(e) => updateFileSize('maxAudioSize', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md text-gray-600 font-medium">
                    MB
                  </span>
                </div>
              </div>
            </div>
          </SettingSection>
        </div>
      </div>
    </div>
    <Adminfooter />
      
    </div>
  );
};

export default ProductSettings;