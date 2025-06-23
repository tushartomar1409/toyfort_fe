import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


const StorageSettingsPage = () => {
  const [storageType, setStorageType] = useState("local");
  const [message, setMessage] = useState(null);

  const handleStorageChange = (e) => {
    setStorageType(e.target.value);
    setMessage(null);
  };

  const handleSave = () => {
    if (storageType === "local") {
      setMessage({ type: "success", text: "Changes successfully saved!" });
    } else {
      setMessage({ type: "error", text: "The changes you requested are not allowed." });
    }
  };

  const handleCloseMessage = () => {
    setMessage(null);
  };

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
              <Adminheader />
    <div className="p-6 bg-gray-100 min-h-screen">
      {message && (
        <div
          className={`relative p-3 mb-4 rounded flex justify-between items-center ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          <span>{message.text}</span>
          <button onClick={handleCloseMessage} className="text-xl font-bold px-2">
            &times;
          </button>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Storage Type Selection */}
        <div className="bg-white p-6 rounded shadow-md w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-4">Storage</h2>
          <div className="space-y-4">
            <label className="block font-medium">Storage</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="storage"
                  value="local"
                  checked={storageType === "local"}
                  onChange={handleStorageChange}
                  className="text-purple-600"
                />
                <span>Local Storage</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="storage"
                  value="aws"
                  checked={storageType === "aws"}
                  onChange={handleStorageChange}
                  className="text-purple-600"
                />
                <span>AWS S3 Storage</span>
              </label>
            </div>
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* AWS S3 Storage Details */}
        <div className="bg-white p-6 rounded shadow-md w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-4">AWS S3 Storage</h2>
          <div className="space-y-4 text-sm">
            <div>
              <label className="block mb-1 font-medium">AWS Access Key</label>
              <input
                type="text"
                placeholder="AWS Access Key"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">AWS Secret Key</label>
              <input
                type="text"
                placeholder="AWS Secret Key"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Bucket Name</label>
              <input
                type="text"
                placeholder="Bucket Name"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Region</label>
              <input
                type="text"
                placeholder="E.g: us-east-1"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
     <Adminfooter />
    </div>
  );
};

export default StorageSettingsPage;
