import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const tabs = [
  "General Settings",
  "Contact Settings",
  "Social Media Settings",
  "Facebook Comments",
  "Custom Header Codes",
  "Custom Footer Codes", // Index 5
  "Cookies Warning", // Index 6
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [maintenanceEnabled, setMaintenanceEnabled] = useState(false);

  // State for social media URLs
  const [socialMediaUrls, setSocialMediaUrls] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    pinterest: "",
    linkedin: "",
    vk: "",
    whatsapp: "",
    telegram: "",
    youtube: "",
  });

  // State for Facebook Comments
  const [facebookCommentsEnabled, setFacebookCommentsEnabled] = useState(false);
  const [facebookPluginCode, setFacebookPluginCode] = useState("");

  // State for Custom Header Codes
  const [customHeaderCode, setCustomHeaderCode] = useState("");

  // State for Custom Footer Codes
  const [customFooterCode, setCustomFooterCode] = useState("");

  // State for Cookies Warning
  const [showCookiesWarning, setShowCookiesWarning] = useState(false);

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setSocialMediaUrls((prevUrls) => ({
      ...prevUrls,
      [name]: value,
    }));
  };

  const handleSaveSocialMedia = (e) => {
    e.preventDefault();
    console.log("Saving Social Media URLs:", socialMediaUrls);
    // Here you would typically send this data to your backend API
    alert("Social Media URLs saved!");
  };

  const handleSaveFacebookComments = (e) => {
    e.preventDefault();
    console.log("Facebook Comments Enabled:", facebookCommentsEnabled);
    console.log("Facebook Plugin Code:", facebookPluginCode);
    // Here you would typically send this data to your backend API
    alert("Facebook Comments settings saved!");
  };

  const handleSaveCustomHeaderCode = (e) => {
    e.preventDefault();
    console.log("Custom Header Code:", customHeaderCode);
    // Here you would typically send this data to your backend API
    alert("Custom Header Code saved!");
  };

  const handleSaveCustomFooterCode = (e) => {
    e.preventDefault();
    console.log("Custom Footer Code:", customFooterCode);
    // Here you would typically send this data to your backend API
    alert("Custom Footer Code saved!");
  };

  const handleSaveCookiesWarning = (e) => {
    e.preventDefault();
    console.log("Show Cookies Warning:", showCookiesWarning);
    // Here you would typically send this data to your backend API
    alert("Cookies Warning settings saved!");
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
                <Adminheader />
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-8">
        <h2 className="text-2xl font-bold mb-4">Settings Language</h2>
        <select className="border rounded px-3 py-2 mb-6">
          <option>English</option>
          {/* Add more languages if needed */}
        </select>

        {/* Tabs */}
        <div className="flex border-b mb-6">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 -mb-px border-b-2 ${
                activeTab === idx
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-transparent text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* General Settings Tab */}
        {activeTab === 0 && (
          <>
            <form className="space-y-4">
              <div>
                <label className="block font-semibold">Application Name</label>
                <input
                  className="w-full border rounded px-3 py-2"
                  defaultValue="Toyfort"
                />
              </div>
              <div>
                <label className="block font-semibold">Site Title</label>
                <input
                  className="w-full border rounded px-3 py-2"
                  defaultValue="Where Every Smile Counts"
                />
              </div>
              <div>
                <label className="block font-semibold">Homepage Title</label>
                <input
                  className="w-full border rounded px-3 py-2"
                  defaultValue="Best Toy Store India | Online Children Toy Shop | Toy Fort"
                />
              </div>
              <div>
                <label className="block font-semibold">Site Description</label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  defaultValue="Shop online at the best price from Toy Fort, Visit for the widest range of gifts, toys, games, baby essentials, return gifts, etc."
                />
              </div>
              <div>
                <label className="block font-semibold">Keywords</label>
                <input
                  className="w-full border rounded px-3 py-2"
                  defaultValue="index, home, toyfort"
                />
              </div>
              <div>
                <label className="block font-semibold">Copyright</label>
                <input
                  className="w-full border rounded px-3 py-2"
                  defaultValue="Copyright 2025 Toyfort - All Rights Reserved, Developed by Austere Systems /Designed by Crazy Bunny"
                />
              </div>
              <div>
                <label className="block font-semibold">
                  Footer About Section
                </label>
                <textarea className="w-full border rounded px-3 py-2" />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded"
              >
                Save Changes
              </button>
            </form>

            {/* Google reCAPTCHA & Maintenance Mode as separate cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Google reCAPTCHA */}
              <div className="bg-gray-50 rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-blue-700">
                  Google reCAPTCHA
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Site Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Secret Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
              {/* Maintenance Mode */}
              <div className="bg-gray-50  rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-yellow-700">
                  Maintenance Mode
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Title</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Coming Soon"
                  />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Description</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Our website is under construction. We'll be here soon with our new awesome site."
                  />
                </div>
                <div className="flex items-center mb-3">
                  <label className="mr-4 font-medium">Status</label>
                  <input
                    type="radio"
                    checked={!maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(false)}
                    className="mr-1"
                  />
                  <span className="mr-4">Disable</span>
                  <input
                    type="radio"
                    checked={maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(true)}
                    className="mr-1"
                  />
                  <span>Enable</span>
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Image</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="assets/img/maintenance_bg.jpg"
                  />
                </div>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
            </div>
          </>
        )}

        {/* Contact Settings Tab */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  defaultValue="99-E Kamla Nagar , Delhi-110007"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  defaultValue="tushar.tomar@austere.co.in"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  defaultValue="8744055175"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Contact Text
                </label>
                <div className="border border-gray-300 rounded">
                  {/* Rich Text Editor Toolbar */}
                  <div className="border-b border-gray-300 p-2 bg-gray-50 flex items-center flex-wrap gap-1 text-sm">
                    <button className="p-1 hover:bg-gray-200 rounded">
                      ⛶
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      {"<>"}
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      👁
                    </button>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      ↶
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      ↷
                    </button>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <button className="font-bold p-1 hover:bg-gray-200 rounded">
                      B
                    </button>
                    <button className="italic p-1 hover:bg-gray-200 rounded">
                      I
                    </button>
                    <button className="underline p-1 hover:bg-gray-200 rounded">
                      U
                    </button>
                    <button className="line-through p-1 hover:bg-gray-200 rounded">
                      S
                    </button>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      ≡
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      ⊞
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      →
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      ⊟
                    </button>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      • •
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      1 2
                    </button>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      A
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      🖍
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      I
                    </button>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      🖼
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      📎
                    </button>
                  </div>

                  {/* Text Editor Content Area */}
                  <div className="p-3 min-h-[200px] bg-white">
                    <p className="text-gray-500 text-sm">Contact Text</p>
                  </div>
                </div>

                {/* TinyMCE branding in bottom right */}
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-gray-400 flex items-center">
                    <span className="mr-1">⚡</span>
                    tiny
                  </span>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Google reCAPTCHA & Maintenance Mode as separate cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Google reCAPTCHA */}
              <div className="bg-gray-50 rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-blue-700">
                  Google reCAPTCHA
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Site Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Secret Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
              {/* Maintenance Mode */}
              <div className="bg-gray-50  rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-yellow-700">
                  Maintenance Mode
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Title</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Coming Soon"
                  />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Description</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Our website is under construction. We'll be here soon with our new awesome site."
                  />
                </div>
                <div className="flex items-center mb-3">
                  <label className="mr-4 font-medium">Status</label>
                  <input
                    type="radio"
                    checked={!maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(false)}
                    className="mr-1"
                  />
                  <span className="mr-4">Disable</span>
                  <input
                    type="radio"
                    checked={maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(true)}
                    className="mr-1"
                  />
                  <span>Enable</span>
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Image</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="assets/img/maintenance_bg.jpg"
                  />
                </div>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Social Media Settings Tab */}
        {activeTab === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Social Media URLs</h3>
            <form onSubmit={handleSaveSocialMedia} className="space-y-4">
              <div>
                <label className="block font-semibold">Facebook URL</label>
                <input
                  type="url"
                  name="facebook"
                  className="w-full border rounded px-3 py-2"
                  value={socialMediaUrls.facebook}
                  onChange={handleSocialMediaChange}
                  placeholder="Facebook URL"
                />
              </div>
              <div>
                <label className="block font-semibold">Twitter URL</label>
                <input
                  type="url"
                  name="twitter"
                  className="w-full border rounded px-3 py-2"
                  value={socialMediaUrls.twitter}
                  onChange={handleSocialMediaChange}
                  placeholder="Twitter URL"
                />
              </div>
              <div>
                <label className="block font-semibold">Instagram URL</label>
                <input
                  type="url"
                  name="instagram"
                  className="w-full border rounded px-3 py-2"
                  value={socialMediaUrls.instagram}
                  onChange={handleSocialMediaChange}
                  placeholder="Instagram URL"
                />
              </div>
              <div>
                <label className="block font-semibold">Pinterest URL</label>
                <input
                  type="url"
                  name="pinterest"
                  className="w-full border rounded px-3 py-2"
                  value={socialMediaUrls.pinterest}
                  onChange={handleSocialMediaChange}
                  placeholder="Pinterest URL"
                />
              </div>
              <div>
                <label className="block font-semibold">LinkedIn URL</label>
                <input
                  type="url"
                  name="linkedin"
                  className="w-full border rounded px-3 py-2"
                  value={socialMediaUrls.linkedin}
                  onChange={handleSocialMediaChange}
                  placeholder="LinkedIn URL"
                />
              </div>
              <div>
                <label className="block font-semibold">VK URL</label>
                <input
                  type="url"
                  name="vk"
                  className="w-full border rounded px-3 py-2"
                  value={socialMediaUrls.vk}
                  onChange={handleSocialMediaChange}
                  placeholder="VK URL"
                />
              </div>
              <div>
                <label className="block font-semibold">WhatsApp URL</label>
                <input
                  type="url"
                  name="whatsapp"
                  className="w-full border rounded px-3 py-2"
                  value={socialMediaUrls.whatsapp}
                  onChange={handleSocialMediaChange}
                  placeholder="WhatsApp URL"
                />
              </div>
              <div>
                <label className="block font-semibold">Telegram URL</label>
                <input
                  type="url"
                  name="telegram"
                  className="w-full border rounded px-3 py-2"
                  value={socialMediaUrls.telegram}
                  onChange={handleSocialMediaChange}
                  placeholder="Telegram URL"
                />
              </div>
              <div>
                <label className="block font-semibold">Youtube URL</label>
                <input
                  type="url"
                  name="youtube"
                  className="w-full border rounded px-3 py-2"
                  value={socialMediaUrls.youtube}
                  onChange={handleSocialMediaChange}
                  placeholder="Youtube URL"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>
          {/* Google reCAPTCHA & Maintenance Mode as separate cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Google reCAPTCHA */}
              <div className="bg-gray-50 rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-blue-700">
                  Google reCAPTCHA
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Site Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Secret Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
              {/* Maintenance Mode */}
              <div className="bg-gray-50  rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-yellow-700">
                  Maintenance Mode
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Title</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Coming Soon"
                  />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Description</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Our website is under construction. We'll be here soon with our new awesome site."
                  />
                </div>
                <div className="flex items-center mb-3">
                  <label className="mr-4 font-medium">Status</label>
                  <input
                    type="radio"
                    checked={!maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(false)}
                    className="mr-1"
                  />
                  <span className="mr-4">Disable</span>
                  <input
                    type="radio"
                    checked={maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(true)}
                    className="mr-1"
                  />
                  <span>Enable</span>
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Image</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="assets/img/maintenance_bg.jpg"
                  />
                </div>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Facebook Comments Tab */}
        {activeTab === 3 && (
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Facebook Comments</h3>
            <form onSubmit={handleSaveFacebookComments} className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="facebookCommentsStatus"
                    className="form-radio text-blue-600 h-4 w-4"
                    checked={facebookCommentsEnabled}
                    onChange={() => setFacebookCommentsEnabled(true)}
                  />
                  <span className="ml-2 text-gray-700">Enable</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="facebookCommentsStatus"
                    className="form-radio text-blue-600 h-4 w-4"
                    checked={!facebookCommentsEnabled}
                    onChange={() => setFacebookCommentsEnabled(false)}
                  />
                  <span className="ml-2 text-gray-700">Disable</span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="facebookCommentsPluginCode"
                  className="block font-semibold mb-2"
                >
                  Facebook Comments Plugin Code
                </label>
                <textarea
                  id="facebookCommentsPluginCode"
                  className="w-full border rounded px-3 py-2 min-h-[150px]"
                  placeholder="Facebook Comments Plugin Code"
                  value={facebookPluginCode}
                  onChange={(e) => setFacebookPluginCode(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>
          {/* Google reCAPTCHA & Maintenance Mode as separate cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Google reCAPTCHA */}
              <div className="bg-gray-50 rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-blue-700">
                  Google reCAPTCHA
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Site Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Secret Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
              {/* Maintenance Mode */}
              <div className="bg-gray-50  rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-yellow-700">
                  Maintenance Mode
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Title</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Coming Soon"
                  />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Description</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Our website is under construction. We'll be here soon with our new awesome site."
                  />
                </div>
                <div className="flex items-center mb-3">
                  <label className="mr-4 font-medium">Status</label>
                  <input
                    type="radio"
                    checked={!maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(false)}
                    className="mr-1"
                  />
                  <span className="mr-4">Disable</span>
                  <input
                    type="radio"
                    checked={maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(true)}
                    className="mr-1"
                  />
                  <span>Enable</span>
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Image</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="assets/img/maintenance_bg.jpg"
                  />
                </div>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Custom Header Codes Tab */}
        {activeTab === 4 && (
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Custom Header Codes</h3>
            <p className="text-sm text-gray-600 mb-4">
              (These codes will be added to the header of the site)
            </p>
            <form onSubmit={handleSaveCustomHeaderCode} className="space-y-4">
              <div>
                <label
                  htmlFor="customHeaderCodes"
                  className="sr-only" // Hidden label for accessibility
                >
                  Custom Header Codes
                </label>
                <textarea
                  id="customHeaderCodes"
                  className="w-full border rounded px-3 py-2 min-h-[250px] font-mono text-sm"
                  placeholder="Custom Header Codes"
                  value={customHeaderCode}
                  onChange={(e) => setCustomHeaderCode(e.target.value)}
                />
              </div>
              <p className="text-xs text-gray-500">
                E.g. &lt;style&gt; body &#123;background-color: #00a65a;&#125;
                &lt;/style&gt;
              </p>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
        {/* Google reCAPTCHA & Maintenance Mode as separate cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Google reCAPTCHA */}
              <div className="bg-gray-50 rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-blue-700">
                  Google reCAPTCHA
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Site Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Secret Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
              {/* Maintenance Mode */}
              <div className="bg-gray-50  rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-yellow-700">
                  Maintenance Mode
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Title</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Coming Soon"
                  />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Description</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Our website is under construction. We'll be here soon with our new awesome site."
                  />
                </div>
                <div className="flex items-center mb-3">
                  <label className="mr-4 font-medium">Status</label>
                  <input
                    type="radio"
                    checked={!maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(false)}
                    className="mr-1"
                  />
                  <span className="mr-4">Disable</span>
                  <input
                    type="radio"
                    checked={maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(true)}
                    className="mr-1"
                  />
                  <span>Enable</span>
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Image</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="assets/img/maintenance_bg.jpg"
                  />
                </div>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Custom Footer Codes Tab */}
        {activeTab === 5 && (
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Custom Footer Codes</h3>
            <p className="text-sm text-gray-600 mb-4">
              (These codes will be added to the footer of the site)
            </p>
            <form onSubmit={handleSaveCustomFooterCode} className="space-y-4">
              <div>
                <label
                  htmlFor="customFooterCodes"
                  className="sr-only" // Hidden label for accessibility
                >
                  Custom Footer Codes
                </label>
                <textarea
                  id="customFooterCodes"
                  className="w-full border rounded px-3 py-2 min-h-[250px] font-mono text-sm"
                  placeholder="Custom Footer Codes"
                  value={customFooterCode}
                  onChange={(e) => setCustomFooterCode(e.target.value)}
                />
              </div>
              <p className="text-xs text-gray-500">
                E.g. &lt;script&gt; alert('Hello!'); &lt;/script&gt;
              </p>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
        {/* Google reCAPTCHA & Maintenance Mode as separate cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Google reCAPTCHA */}
              <div className="bg-gray-50 rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-blue-700">
                  Google reCAPTCHA
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Site Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Secret Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
              {/* Maintenance Mode */}
              <div className="bg-gray-50  rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-yellow-700">
                  Maintenance Mode
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Title</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Coming Soon"
                  />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Description</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Our website is under construction. We'll be here soon with our new awesome site."
                  />
                </div>
                <div className="flex items-center mb-3">
                  <label className="mr-4 font-medium">Status</label>
                  <input
                    type="radio"
                    checked={!maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(false)}
                    className="mr-1"
                  />
                  <span className="mr-4">Disable</span>
                  <input
                    type="radio"
                    checked={maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(true)}
                    className="mr-1"
                  />
                  <span>Enable</span>
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Image</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="assets/img/maintenance_bg.jpg"
                  />
                </div>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Cookies Warning Tab */}
        {activeTab === 6 && (
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Cookies Warning</h3>

            <div className="flex items-center space-x-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="cookiesWarningStatus"
                  className="form-radio text-blue-600 h-4 w-4"
                  checked={showCookiesWarning}
                  onChange={() => setShowCookiesWarning(true)}
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="cookiesWarningStatus"
                  className="form-radio text-blue-600 h-4 w-4"
                  checked={!showCookiesWarning}
                  onChange={() => setShowCookiesWarning(false)}
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>

            {/* Rich Text Editor */}
            <div className="border border-gray-300 rounded">
              {/* Rich Text Editor Toolbar */}
              <div className="border-b border-gray-300 p-2 bg-gray-50 flex items-center flex-wrap gap-1 text-sm">
                <button className="p-1 hover:bg-gray-200 rounded">⛶</button>
                <button className="p-1 hover:bg-gray-200 rounded">{"<>"}</button>
                <button className="p-1 hover:bg-gray-200 rounded">👁</button>
                <div className="w-px h-4 bg-gray-300"></div>
                <button className="p-1 hover:bg-gray-200 rounded">↶</button>
                <button className="p-1 hover:bg-gray-200 rounded">↷</button>
                <div className="w-px h-4 bg-gray-300"></div>
                <button className="font-bold p-1 hover:bg-gray-200 rounded">
                  B
                </button>
                <button className="italic p-1 hover:bg-gray-200 rounded">
                  I
                </button>
                <button className="underline p-1 hover:bg-gray-200 rounded">
                  U
                </button>
                <button className="line-through p-1 hover:bg-gray-200 rounded">
                  S
                </button>
                <div className="w-px h-4 bg-gray-300"></div>
                <button className="p-1 hover:bg-gray-200 rounded">≡</button>
                <button className="p-1 hover:bg-gray-200 rounded">⊞</button>
                <button className="p-1 hover:bg-gray-200 rounded">→</button>
                <button className="p-1 hover:bg-gray-200 rounded">⊟</button>
                <div className="w-px h-4 bg-gray-300"></div>
                <button className="p-1 hover:bg-gray-200 rounded">• •</button>
                <button className="p-1 hover:bg-gray-200 rounded">1 2</button>
                <div className="w-px h-4 bg-gray-300"></div>
                <button className="p-1 hover:bg-gray-200 rounded">A</button>
                <button className="p-1 hover:bg-gray-200 rounded">🖍</button>
                <button className="p-1 hover:bg-gray-200 rounded">I</button>
                <div className="w-px h-4 bg-gray-300"></div>
                <button className="p-1 hover:bg-gray-200 rounded">🖼</button>
                <button className="p-1 hover:bg-gray-200 rounded">📎</button>
              </div>

              {/* Text Editor Content Area */}
              <div className="p-3 min-h-[200px] bg-white">
                <p className="text-gray-500 text-sm">Cookies Warning Text</p>
              </div>
            </div>

            {/* TinyMCE branding in bottom right */}
            <div className="flex justify-end mt-1">
              <span className="text-xs text-gray-400 flex items-center">
                <span className="mr-1">⚡</span>
                tiny
              </span>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                onClick={handleSaveCookiesWarning}
              >
                Save Changes
              </button>
            </div>
         {/* Google reCAPTCHA & Maintenance Mode as separate cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Google reCAPTCHA */}
              <div className="bg-gray-50 rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-blue-700">
                  Google reCAPTCHA
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Site Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Secret Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
              {/* Maintenance Mode */}
              <div className="bg-gray-50  rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-yellow-700">
                  Maintenance Mode
                </h3>
                <div className="mb-3">
                  <label className="block font-medium">Title</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Coming Soon"
                  />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Description</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Our website is under construction. We'll be here soon with our new awesome site."
                  />
                </div>
                <div className="flex items-center mb-3">
                  <label className="mr-4 font-medium">Status</label>
                  <input
                    type="radio"
                    checked={!maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(false)}
                    className="mr-1"
                  />
                  <span className="mr-4">Disable</span>
                  <input
                    type="radio"
                    checked={maintenanceEnabled}
                    onChange={() => setMaintenanceEnabled(true)}
                    className="mr-1"
                  />
                  <span>Enable</span>
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Image</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    defaultValue="assets/img/maintenance_bg.jpg"
                  />
                </div>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
     <Adminfooter />
        </div>
  );
}