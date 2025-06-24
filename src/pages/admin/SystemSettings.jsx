import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";
const SystemSettings = () => {
    // Initial state for system settings based on the provided images
    const [settings, setSettings] = useState({
        physicalProducts: 'Enable',
        digitalProducts: 'Enable',
        marketplace: 'Enable',
        classifiedAds: 'Enable',
        biddingSystem: 'Enable',
        sellingLicenseKeys: 'Enable',
        multiVendorSystem: 'Disable', // Default to Disable as shown in image
        vat: 'Enable',
        commissionRate: '10',
        timezone: 'Asia/Kolkata',
    });

    const handleInputChange = (field, value) => {
        setSettings(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSave = () => {
        // In a real application, you would send this data to a backend API
        console.log("Saving System Settings:", settings);
        alert("System Settings saved!");
    };

    return (
        <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
        <div className="p-6 bg-gray-50">
            <style>{`
                .card { background-color: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 1.5rem; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
                .form-input, .form-select { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
                .form-input::placeholder { color: #9ca3af; }
                .btn-primary { padding: 0.5rem 1rem; border-radius: 0.375rem; background-color: #3b82f6; color: white; font-weight: 500; cursor: pointer; transition: background-color 0.2s; border: none; }
                .btn-primary:hover { background-color: #2563eb; }
                .form-label { display: block; font-weight: 500; color: #374151; margin-bottom: 0.5rem; }
                .radio-group { display: flex; gap: 1rem; align-items: center; }
                .radio-label { display: inline-flex; align-items: center; cursor: pointer; }
                .settings-section { margin-bottom: 1.5rem; }
            `}</style>

            <h1 className="text-2xl font-bold text-gray-900 mb-6">System Settings</h1>

            <div className="card">
                <div className="space-y-6">

                    {/* Physical Products */}
                    <div className="settings-section">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-800">Physical Products</h3>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" name="physicalProducts" value="Enable" checked={settings.physicalProducts === 'Enable'} onChange={e => handleInputChange('physicalProducts', e.target.value)} /> <span className="ml-2">Enable</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="physicalProducts" value="Disable" checked={settings.physicalProducts === 'Disable'} onChange={e => handleInputChange('physicalProducts', e.target.value)} /> <span className="ml-2">Disable</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Digital Products */}
                    <div className="settings-section">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-800">Digital Products</h3>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" name="digitalProducts" value="Enable" checked={settings.digitalProducts === 'Enable'} onChange={e => handleInputChange('digitalProducts', e.target.value)} /> <span className="ml-2">Enable</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="digitalProducts" value="Disable" checked={settings.digitalProducts === 'Disable'} onChange={e => handleInputChange('digitalProducts', e.target.value)} /> <span className="ml-2">Disable</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Marketplace (Selling Products on the Site) */}
                    <div className="settings-section">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-800">Marketplace (Selling Products on the Site)</h3>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" name="marketplace" value="Enable" checked={settings.marketplace === 'Enable'} onChange={e => handleInputChange('marketplace', e.target.value)} /> <span className="ml-2">Enable</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="marketplace" value="Disable" checked={settings.marketplace === 'Disable'} onChange={e => handleInputChange('marketplace', e.target.value)} /> <span className="ml-2">Disable</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Classified Ads (Adding a Product or Service as an Ordinary Listing) */}
                    <div className="settings-section">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-800">Classified Ads (Adding a Product or Service as an Ordinary Listing)</h3>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" name="classifiedAds" value="Enable" checked={settings.classifiedAds === 'Enable'} onChange={e => handleInputChange('classifiedAds', e.target.value)} /> <span className="ml-2">Enable</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="classifiedAds" value="Disable" checked={settings.classifiedAds === 'Disable'} onChange={e => handleInputChange('classifiedAds', e.target.value)} /> <span className="ml-2">Disable</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Bidding System (Request Quote) */}
                    <div className="settings-section">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-800">Bidding System (Request Quote)</h3>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" name="biddingSystem" value="Enable" checked={settings.biddingSystem === 'Enable'} onChange={e => handleInputChange('biddingSystem', e.target.value)} /> <span className="ml-2">Enable</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="biddingSystem" value="Disable" checked={settings.biddingSystem === 'Disable'} onChange={e => handleInputChange('biddingSystem', e.target.value)} /> <span className="ml-2">Disable</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Selling License Keys */}
                    <div className="settings-section">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-800">Selling License Keys</h3>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" name="sellingLicenseKeys" value="Enable" checked={settings.sellingLicenseKeys === 'Enable'} onChange={e => handleInputChange('sellingLicenseKeys', e.target.value)} /> <span className="ml-2">Enable</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="sellingLicenseKeys" value="Disable" checked={settings.sellingLicenseKeys === 'Disable'} onChange={e => handleInputChange('sellingLicenseKeys', e.target.value)} /> <span className="ml-2">Disable</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Multi-Vendor System */}
                    <div className="settings-section">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-800">Multi-Vendor System <span className="text-sm text-gray-500">(If you disable it, only Admin can add product.)</span></h3>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" name="multiVendorSystem" value="Enable" checked={settings.multiVendorSystem === 'Enable'} onChange={e => handleInputChange('multiVendorSystem', e.target.value)} /> <span className="ml-2">Enable</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="multiVendorSystem" value="Disable" checked={settings.multiVendorSystem === 'Disable'} onChange={e => handleInputChange('multiVendorSystem', e.target.value)} /> <span className="ml-2">Disable</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* VAT (Value-Added Tax) */}
                    <div className="settings-section">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-800">VAT (Value-Added Tax)</h3>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" name="vat" value="Enable" checked={settings.vat === 'Enable'} onChange={e => handleInputChange('vat', e.target.value)} /> <span className="ml-2">Enable</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="vat" value="Disable" checked={settings.vat === 'Disable'} onChange={e => handleInputChange('vat', e.target.value)} /> <span className="ml-2">Disable</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Commission Rate (%) */}
                    <div className="settings-section">
                        <label className="form-label" htmlFor="commissionRate">Commission Rate(%)</label>
                        <input
                            type="number"
                            id="commissionRate"
                            className="form-input"
                            value={settings.commissionRate}
                            onChange={e => handleInputChange('commissionRate', e.target.value)}
                        />
                    </div>

                    {/* Timezone */}
                    <div className="settings-section">
                        <label className="form-label" htmlFor="timezone">Timezone</label>
                        <select
                            id="timezone"
                            className="form-select"
                            value={settings.timezone}
                            onChange={e => handleInputChange('timezone', e.target.value)}
                        >
                            {/* Example timezones. In a real app, this would be a comprehensive list */}
                            <option value="Asia/Kolkata">Asia/Kolkata</option>
                            <option value="UTC">UTC</option>
                            <option value="America/New_York">America/New_York</option>
                            <option value="Europe/London">Europe/London</option>
                        </select>
                    </div>

                    <div className="text-right pt-4">
                        <button className="btn-primary" onClick={handleSave}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
         <Adminfooter />
      
    </div>
    );
};

export default SystemSettings;