import React, { useState } from "react";

const tabs = [
  "General Settings",
  "Contact Settings",
  "Social Media Settings",
  "Facebook Comments",
  "Custom Header Codes",
  "Custom Footer Codes",
  "Cookies Warning",
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [maintenanceEnabled, setMaintenanceEnabled] = useState(false);

  return (
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
                <input className="w-full border rounded px-3 py-2" defaultValue="Toyfort" />
              </div>
              <div>
                <label className="block font-semibold">Site Title</label>
                <input className="w-full border rounded px-3 py-2" defaultValue="Where Every Smile Counts" />
              </div>
              <div>
                <label className="block font-semibold">Homepage Title</label>
                <input className="w-full border rounded px-3 py-2" defaultValue="Best Toy Store India | Online Children Toy Shop | Toy Fort" />
              </div>
              <div>
                <label className="block font-semibold">Site Description</label>
                <textarea className="w-full border rounded px-3 py-2" defaultValue="Shop online at the best price from Toy Fort, Visit for the widest range of gifts, toys, games, baby essentials, return gifts, etc." />
              </div>
              <div>
                <label className="block font-semibold">Keywords</label>
                <input className="w-full border rounded px-3 py-2" defaultValue="index, home, toyfort" />
              </div>
              <div>
                <label className="block font-semibold">Copyright</label>
                <input className="w-full border rounded px-3 py-2" defaultValue="Copyright 2025 Toyfort - All Rights Reserved, Developed by Austere Systems /Designed by Crazy Bunny" />
              </div>
              <div>
                <label className="block font-semibold">Footer About Section</label>
                <textarea className="w-full border rounded px-3 py-2" />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Save Changes</button>
            </form>

            {/* Google reCAPTCHA & Maintenance Mode as separate cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Google reCAPTCHA */}
              <div className="bg-gray-50 rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-blue-700">Google reCAPTCHA</h3>
                <div className="mb-3">
                  <label className="block font-medium">Site Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Secret Key</label>
                  <input className="w-full border rounded px-3 py-2" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
              </div>
              {/* Maintenance Mode */}
              <div className="bg-gray-50 rounded shadow p-6">
                <h3 className="font-semibold mb-4 text-yellow-700">Maintenance Mode</h3>
                <div className="mb-3">
                  <label className="block font-medium">Title</label>
                  <input className="w-full border rounded px-3 py-2" defaultValue="Coming Soon" />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Description</label>
                  <textarea className="w-full border rounded px-3 py-2" defaultValue="Our website is under construction. We'll be here soon with our new awesome site." />
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
                  <input className="w-full border rounded px-3 py-2" defaultValue="assets/img/maintenance_bg.jpg" />
                </div>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded">Save Changes</button>
              </div>
            </div>
          </>
        )}

        {/* Contact Settings Tab */}
        {activeTab === 1 && (
          <form className="space-y-4">
            <div>
              <label className="block font-semibold">Contact Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2"
                placeholder="contact@yourdomain.com"
              />
            </div>
            <div>
              <label className="block font-semibold">Phone Number</label>
              <input
                type="tel"
                className="w-full border rounded px-3 py-2"
                placeholder="+91 12345 67890"
              />
            </div>
            <div>
              <label className="block font-semibold">Alternate Phone</label>
              <input
                type="tel"
                className="w-full border rounded px-3 py-2"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block font-semibold">Contact Address</label>
              <textarea
                className="w-full border rounded px-3 py-2"
                placeholder="123, Main Street, City, Country"
              />
            </div>
            <div>
              <label className="block font-semibold">Google Maps Embed Link</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="https://maps.google.com/..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              Save Changes
            </button>
          </form>
        )}

        {/* You can add more tab contents here for other tabs */}
      </div>
    </div>
  );
}
