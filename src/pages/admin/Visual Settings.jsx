 import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const VisualSettings = () => {
  const [settings, setSettings] = useState({
    color: '#222222',
    watermark: {
      text: 'Toyfort',
      fontSize: 42,
      verticalAlignment: 'Center',
      horizontalAlignment: 'Center',
      addToProductImages: 'No',
      addToBlogImages: 'No',
      addToThumbnails: 'No'
    }
  });

  const [logoFile, setLogoFile] = useState(null);
  const [emailLogoFile, setEmailLogoFile] = useState(null);
  const [faviconFile, setFaviconFile] = useState(null);

  const handleColorChange = (e) => {
    setSettings(prev => ({
      ...prev,
      color: e.target.value
    }));
  };

  const handleWatermarkChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      watermark: {
        ...prev.watermark,
        [field]: value
      }
    }));
  };

  const handleFileUpload = (fileType) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = fileType === 'favicon' ? '.png' : '.png,.jpg,.jpeg,.gif,.svg';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        if (fileType === 'logo') setLogoFile(file);
        else if (fileType === 'emailLogo') setEmailLogoFile(file);
        else if (fileType === 'favicon') setFaviconFile(file);
      }
    };
    input.click();
  };

  const RadioGroup = ({ name, value, onChange, options }) => (
    <div className="flex gap-6">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 cursor-pointer">
          <div className="relative">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              value === option ? 'border-purple-600 bg-purple-600' : 'border-gray-300'
            }`}>
              {value === option && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </div>
          </div>
          <span className="text-gray-700">{option}</span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-width-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Visual Settings Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Visual Settings</h2>
            
            {/* Color Picker */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Color</h3>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={settings.color}
                  onChange={handleColorChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent w-32"
                  placeholder="#222222"
                />
                <input
                  type="color"
                  value={settings.color}
                  onChange={handleColorChange}
                  className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                />
              </div>
              
              {/* Color Palette */}
              <div className="mt-4">
                <div className="relative w-48 h-32">
                  <div 
                    className="w-full h-full rounded"
                    style={{
                      background: `linear-gradient(to bottom, 
                        rgba(255,255,255,1) 0%, 
                        rgba(255,255,255,0) 50%, 
                        rgba(0,0,0,0) 50%, 
                        rgba(0,0,0,1) 100%),
                        linear-gradient(to right, 
                        ${settings.color} 0%, 
                        rgba(255,255,255,1) 100%)`
                    }}
                  />
                  <div className="absolute left-0 top-1/2 w-2 h-2 bg-white border-2 border-gray-800 rounded-full transform -translate-y-1/2"></div>
                </div>
                
                {/* Hue Slider */}
                <div className="mt-2 w-48 h-4 rounded" style={{
                  background: 'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'
                }}>
                  <div className="w-full h-full relative">
                    <div className="absolute right-0 top-0 w-1 h-full bg-white border border-gray-800"></div>
                  </div>
                </div>
                
                {/* Brightness Slider */}
                <div className="mt-2 w-48 h-4 bg-gradient-to-r from-black to-white rounded">
                  <div className="w-full h-full relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-white border border-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Logo (180x50px)</h3>
              <div className="mb-4">
                <img 
                  src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp"
                  alt="ToyFort Logo" 
                  className="border border-gray-200 rounded w-[180px]"
                />
              </div>
              <button 
                onClick={() => handleFileUpload('logo')}
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium mr-3"
              >
                Select Logo
              </button>
              <span className="text-gray-500 text-sm">(.png, .jpg, .jpeg, .gif, .svg)</span>
            </div>

            {/* Logo Email Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Logo Email</h3>
              <div className="mb-4">
                <img 
                  src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp"
                  alt="ToyFort Email Logo" 
                  className="border border-gray-200 rounded w-[180px]"
                />
              </div>
              <button 
                onClick={() => handleFileUpload('emailLogo')}
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium mr-3"
              >
                Select Logo
              </button>
              <span className="text-gray-500 text-sm">(.png, .jpg, .jpeg)</span>
            </div>

            {/* Favicon Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Favicon (16x16px)</h3>
              <div className="mb-4">
                <img 
                  src="https://toyfort.s3.ap-south-1.amazonaws.com/img/favicon.webp"
                  alt="ToyFort Favicon" 
                  className="border border-gray-200 rounded "
                />
              </div>
              <button 
                onClick={() => handleFileUpload('favicon')}
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium mr-3"
              >
                Select Favicon
              </button>
              <span className="text-gray-500 text-sm">(.png)</span>
            </div>

            {/* Save Button for Visual Settings */}
            <div className="flex justify-end mt-6">
              <button 
                onClick={() => console.log('Visual settings saved', settings)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>

          {/* Watermark Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Watermark</h2>
            
            {/* Watermark Text */}
            <div className="mb-6">
              <input
                type="text"
                value={settings.watermark.text}
                onChange={(e) => handleWatermarkChange('text', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Watermark text"
              />
            </div>

            {/* Font Size and Alignment */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Font Size</label>
                <input
                  type="number"
                  value={settings.watermark.fontSize}
                  onChange={(e) => handleWatermarkChange('fontSize', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Vertical Alignment</label>
                <select
                  value={settings.watermark.verticalAlignment}
                  onChange={(e) => handleWatermarkChange('verticalAlignment', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Top">Top</option>
                  <option value="Center">Center</option>
                  <option value="Bottom">Bottom</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Horizontal Alignment</label>
                <select
                  value={settings.watermark.horizontalAlignment}
                  onChange={(e) => handleWatermarkChange('horizontalAlignment', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Left">Left</option>
                  <option value="Center">Center</option>
                  <option value="Right">Right</option>
                </select>
              </div>
            </div>

            {/* Watermark Options */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-gray-700 font-medium mb-3">Add Watermark to Product Images</label>
                <RadioGroup
                  name="productImages"
                  value={settings.watermark.addToProductImages}
                  onChange={(value) => handleWatermarkChange('addToProductImages', value)}
                  options={['Yes', 'No']}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-3">Add Watermark to Blog Images</label>
                <RadioGroup
                  name="blogImages"
                  value={settings.watermark.addToBlogImages}
                  onChange={(value) => handleWatermarkChange('addToBlogImages', value)}
                  options={['Yes', 'No']}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-3">Add Watermark to Thumbnail (Small) Images</label>
                <RadioGroup
                  name="thumbnails"
                  value={settings.watermark.addToThumbnails}
                  onChange={(value) => handleWatermarkChange('addToThumbnails', value)}
                  options={['Yes', 'No']}
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button 
                onClick={() => console.log('Visual settings saved', settings)}
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

export default VisualSettings;