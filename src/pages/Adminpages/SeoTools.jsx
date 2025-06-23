import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


const SeoTools = () => {
  const [frequency, setFrequency] = useState("Always");
  const [lastMod, setLastMod] = useState("server");
  const [priority, setPriority] = useState("auto");
  const [analyticsCode, setAnalyticsCode] = useState("307647787");

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
              <Adminheader />
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-semibold mb-6">SEO Tools</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sitemap Settings */}
        <div className="bg-white p-6 rounded shadow-md w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Sitemap</h3>

          <div className="mb-4">
            <label className="block font-medium mb-1">
              Frequency <span className="text-sm font-normal text-gray-500">(This value indicates how frequently the content at a particular URL is likely to change )</span>
            </label>
            <select
              className="w-full border rounded px-3 py-2"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option>Always</option>
              <option>Hourly</option>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
              <option>Never</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">
              Last Modification <span className="text-sm font-normal text-gray-500">(The time the URL was last modified)</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="none"
                  checked={lastMod === "none"}
                  onChange={(e) => setLastMod(e.target.value)}
                  className="text-purple-600"
                />
                <span className="ml-2">None</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="server"
                  checked={lastMod === "server"}
                  onChange={(e) => setLastMod(e.target.value)}
                  className="text-purple-600"
                />
                <span className="ml-2">Server's Response</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">
              Priority <span className="text-sm font-normal text-gray-500">(The priority of a particular URL relative to other pages on the same site)</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="none"
                  checked={priority === "none"}
                  onChange={(e) => setPriority(e.target.value)}
                  className="text-purple-600"
                />
                <span className="ml-2">None</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="auto"
                  checked={priority === "auto"}
                  onChange={(e) => setPriority(e.target.value)}
                  className="text-purple-600"
                />
                <span className="ml-2">Automatically Calculated Priority</span>
              </label>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Generate Sitemap
          </button>
        </div>

        {/* Google Analytics */}
        <div className="bg-white p-6 rounded shadow-md w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Google Analytics Code</h3>
          <textarea
            className="w-full border rounded px-3 py-2 h-32"
            value={analyticsCode}
            onChange={(e) => setAnalyticsCode(e.target.value)}
          ></textarea>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </div>
      </div>

      {/* Cron Job */}
      <div className="mt-6 bg-white border-l-4 border-cyan-500 p-4 text-sm">
        <p className="font-semibold">Cron Job</p>
        <p className="text-blue-800">http://domain.com/cron/update-sitemap</p>
        <p className="text-gray-600">With this URL you can automatically update your sitemap.</p>
      </div>
    </div>
     <Adminfooter />
    </div>
  );
};

export default SeoTools;