 import React, { useState } from 'react';

// Reusable component for each settings card
const SettingsCard = ({ title, subtitle, children }) => (
    <div className="card">
        <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        {/* The children prop is rendered here, its spacing controlled by the parent ProductSettings component or internal divs */}
        <div>
            {children}
        </div>
    </div>
);

const ProductSettings = () => {
    const [settings, setSettings] = useState({
        // Physical Products settings
        physicalProducts: {
            demoUrl: true,
            videoPreview: true,
            audioPreview: true,
        },
        // Marketplace settings
        marketplace: {
            sku: true,
            variations: true,
            shipping: true,
            location: true,
        },
        // Classified Ads settings
        classifiedAds: {
            priceEnable: true,
            priceRequired: true,
            locationEnable: true,
            externalLink: true,
        },
        // Digital Products settings
        digitalProducts: {
            demoUrl: true,
            videoPreview: true,
            audioPreview: true,
            allowedExtensions: ['zip'],
        },
        // File Upload settings
        fileUpload: {
            productImageUploadLimit: 20,
            maxFileSizeImage: 1000, // MB
            maxFileSizeVideo: 1000, // MB
            maxFileSizeAudio: 1000, // MB
        }
    });

    // Handle checkbox changes for nested objects
    const handleCheckboxChange = (section, field) => {
        setSettings(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: !prev[section][field],
            },
        }));
    };

    // Handle input changes for nested objects
    const handleInputChange = (section, field, value) => {
        setSettings(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    // Handle allowed extensions input with tag-like behavior
    const handleExtensionChange = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            const newExtension = e.target.value.trim().toLowerCase();
            if (!settings.digitalProducts.allowedExtensions.includes(newExtension)) {
                setSettings(prev => ({
                    ...prev,
                    digitalProducts: {
                        ...prev.digitalProducts,
                        allowedExtensions: [...prev.digitalProducts.allowedExtensions, newExtension],
                    },
                }));
            }
            e.target.value = ''; // Clear input
            e.preventDefault(); // Prevent form submission
        }
    };

    const removeExtension = (extensionToRemove) => {
        setSettings(prev => ({
            ...prev,
            digitalProducts: {
                ...prev.digitalProducts,
                allowedExtensions: prev.digitalProducts.allowedExtensions.filter(ext => ext !== extensionToRemove),
            },
        }));
    };

    const handleSave = (section) => {
        // In a real application, you would send specific section data to an API
        console.log(`Saving ${section} Settings:`, settings[section]);
        alert(`${section} Settings saved!`);
    };

    return (
        <div className="p-6 bg-gray-50">
            <style>{`
                .card { background-color: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 1.5rem; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
                .form-input { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
                .btn-primary { padding: 0.5rem 1rem; border-radius: 0.375rem; background-color: #3b82f6; color: white; font-weight: 500; cursor: pointer; transition: background-color 0.2s; border: none; }
                .btn-primary:hover { background-color: #2563eb; }
                .checkbox-label { display: inline-flex; align-items: center; cursor: pointer; }
                .tag { display: inline-flex; align-items: center; background-color: #e0f2f7; color: #007bb6; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.875rem; margin-right: 0.5rem; margin-bottom: 0.5rem; }
                .tag-remove { margin-left: 0.5rem; cursor: pointer; font-weight: bold; }
            `}</style>

            <h1 className="text-2xl font-bold text-gray-900 mb-6">Product Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Marketplace Section */}
                <SettingsCard title="Marketplace" subtitle="Add a Product for Sale">
                    <div className="space-y-2"> {/* Added space-y-2 here for explicit spacing */}
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={settings.marketplace.sku}
                                onChange={() => handleCheckboxChange('marketplace', 'sku')}
                            />
                            <span className="ml-2">SKU</span>
                        </label>
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={settings.marketplace.variations}
                                onChange={() => handleCheckboxChange('marketplace', 'variations')}
                            />
                            <span className="ml-2">Variations</span>
                        </label>
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={settings.marketplace.shipping}
                                onChange={() => handleCheckboxChange('marketplace', 'shipping')}
                            />
                            <span className="ml-2">Shipping</span>
                        </label>
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={settings.marketplace.location}
                                onChange={() => handleCheckboxChange('marketplace', 'location')}
                            />
                            <span className="ml-2">Location</span>
                        </label>
                    </div>
                    <div className="text-right pt-4">
                        <button className="btn-primary" onClick={() => handleSave('marketplace')}>Save Changes</button>
                    </div>
                </SettingsCard>

                {/* Classified Ads Section */}
                <SettingsCard title="Classified Ads" subtitle="Add a Product or Service as an Ordinary Listing">
                    <div className="space-y-2"> {/* Added space-y-2 here for explicit spacing */}
                        <div>
                            <span className="block font-medium text-gray-700 mb-2">Price</span>
                            <label className="checkbox-label block mb-2">
                                <input
                                    type="checkbox"
                                    checked={settings.classifiedAds.priceEnable}
                                    onChange={() => handleCheckboxChange('classifiedAds', 'priceEnable')}
                                />
                                <span className="ml-2">Enable</span>
                            </label>
                            <label className="checkbox-label block">
                                <input
                                    type="checkbox"
                                    checked={settings.classifiedAds.priceRequired}
                                    onChange={() => handleCheckboxChange('classifiedAds', 'priceRequired')}
                                />
                                <span className="ml-2">Required</span>
                            </label>
                        </div>
                        <label className="checkbox-label block">
                            <input
                                type="checkbox"
                                checked={settings.classifiedAds.locationEnable}
                                onChange={() => handleCheckboxChange('classifiedAds', 'locationEnable')}
                            />
                            <span className="ml-2">Location</span>
                        </label>
                        <label className="checkbox-label block">
                            <input
                                type="checkbox"
                                checked={settings.classifiedAds.externalLink}
                                onChange={() => handleCheckboxChange('classifiedAds', 'externalLink')}
                            />
                            <span className="ml-2">External Link</span>
                        </label>
                    </div>
                    <div className="text-right pt-4">
                        <button className="btn-primary" onClick={() => handleSave('classifiedAds')}>Save Changes</button>
                    </div>
                </SettingsCard>

                {/* Digital Products Section */}
                <SettingsCard title="Digital Products">
                    <div className="space-y-2"> {/* Added space-y-2 here for explicit spacing */}
                        <label className="checkbox-label block">
                            <input
                                type="checkbox"
                                checked={settings.digitalProducts.demoUrl}
                                onChange={() => handleCheckboxChange('digitalProducts', 'demoUrl')}
                            />
                            <span className="ml-2">Demo URL</span>
                        </label>
                        <label className="checkbox-label block">
                            <input
                                type="checkbox"
                                checked={settings.digitalProducts.videoPreview}
                                onChange={() => handleCheckboxChange('digitalProducts', 'videoPreview')}
                            />
                            <span className="ml-2">Video Preview</span>
                        </label>
                        <label className="checkbox-label block">
                            <input
                                type="checkbox"
                                checked={settings.digitalProducts.audioPreview}
                                onChange={() => handleCheckboxChange('digitalProducts', 'audioPreview')}
                            />
                            <span className="ml-2">Audio Preview</span>
                        </label>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Allowed File Extensions</label>
                            <div className="flex flex-wrap items-center mb-2">
                                {settings.digitalProducts.allowedExtensions.map((ext, index) => (
                                    <span key={index} className="tag">
                                        {ext}
                                        <span className="tag-remove" onClick={() => removeExtension(ext)}>x</span>
                                    </span>
                                ))}
                                <input
                                    type="text"
                                    className="form-input flex-grow"
                                    placeholder="Type an extension and hit enter (e.g., zip, jpg, doc, pdf..)"
                                    onKeyDown={handleExtensionChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-right pt-4">
                        <button className="btn-primary" onClick={() => handleSave('digitalProducts')}>Save Changes</button>
                    </div>
                </SettingsCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Physical Products Section - Adjusted for compactness */}
                <SettingsCard title="Physical Products">
                    <div className="space-y-1"> {/* Changed from space-y-2 to space-y-1 for more compactness */}
                        <label className="checkbox-label block">
                            <input
                                type="checkbox"
                                checked={settings.physicalProducts.demoUrl}
                                onChange={() => handleCheckboxChange('physicalProducts', 'demoUrl')}
                            />
                            <span className="ml-2">Demo URL</span>
                        </label>
                        <label className="checkbox-label block">
                            <input
                                type="checkbox"
                                checked={settings.physicalProducts.videoPreview}
                                onChange={() => handleCheckboxChange('physicalProducts', 'videoPreview')}
                            />
                            <span className="ml-2">Video Preview</span>
                        </label>
                        <label className="checkbox-label block">
                            <input
                                type="checkbox"
                                checked={settings.physicalProducts.audioPreview}
                                onChange={() => handleCheckboxChange('physicalProducts', 'audioPreview')}
                            />
                            <span className="ml-2">Audio Preview</span>
                        </label>
                    </div>
                    <div className="text-right pt-4">
                        <button className="btn-primary" onClick={() => handleSave('physicalProducts')}>Save Changes</button>
                    </div>
                </SettingsCard>

                {/* File Upload Section (Separate Card, as per image) */}
                <SettingsCard title="File Upload">
                    <div className="space-y-2"> {/* Added space-y-2 here for explicit spacing */}
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Product Image Upload Limit</label>
                            <input
                                type="number"
                                className="form-input"
                                value={settings.fileUpload.productImageUploadLimit}
                                onChange={e => handleInputChange('fileUpload', 'productImageUploadLimit', parseInt(e.target.value) || 0)}
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Max File Size (Image)</label>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    className="form-input"
                                    value={settings.fileUpload.maxFileSizeImage}
                                    onChange={e => handleInputChange('fileUpload', 'maxFileSizeImage', parseInt(e.target.value) || 0)}
                                />
                                <span className="ml-2 text-gray-600">MB</span>
                            </div>
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Max File Size (Video)</label>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    className="form-input"
                                    value={settings.fileUpload.maxFileSizeVideo}
                                    onChange={e => handleInputChange('fileUpload', 'maxFileSizeVideo', parseInt(e.target.value) || 0)}
                                />
                                <span className="ml-2 text-gray-600">MB</span>
                            </div>
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Max File Size (Audio)</label>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    className="form-input"
                                    value={settings.fileUpload.maxFileSizeAudio}
                                    onChange={e => handleInputChange('fileUpload', 'maxFileSizeAudio', parseInt(e.target.value) || 0)}
                                />
                                <span className="ml-2 text-gray-600">MB</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right pt-4">
                        <button className="btn-primary" onClick={() => handleSave('fileUpload')}>Save Changes</button>
                    </div>
                </SettingsCard>
            </div>
        </div>
    );
};

export default ProductSettings; 