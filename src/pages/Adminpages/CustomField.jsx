import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";
import { Link } from 'react-router-dom';

const customFields = []; // Replace with your data

export default function CustomFields() {
  const [showCount, setShowCount] = useState(15);
  const [search, setSearch] = useState('');

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
                <Adminheader />
    
    <div className="min-h-screen bg-gray-100 py-5 px-6">
      <div className="w-full max-w-none bg-white rounded-lg shadow p-8 mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Custom Fields</h2>

        {/* Controls at top, closer to heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
          <div>
            <label className="text-sm font-medium">
              Show&nbsp;
              <select
                value={showCount}
                onChange={e => setShowCount(Number(e.target.value))}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                {[15, 30, 50, 100].map(count => (
                  <option key={count} value={count}>{count}</option>
                ))}
              </select>
            </label>
          </div>
          <button
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded text-sm font-medium transition"
           
          ><li className="flex items-center space-x-2"> <Link to={"/admin/add-custom-fields"}>
        
            + Add Custom Field</Link></li>
          </button>
        </div>

        {/* Search field: right-aligned and smaller, close to controls */}
        <div className="flex justify-end mb-6">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-base w-56"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Id</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Required</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Order</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Options</th>
              </tr>
            </thead>
            <tbody>
              {customFields.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="border border-gray-300 text-center text-gray-500 py-8"
                  >
                    No records found!
                  </td>
                </tr>
              ) : (
                customFields.map((field, idx) => (
                  <tr key={field.id || idx} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{field.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{field.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{field.type}</td>
                    <td className="border border-gray-300 px-4 py-2">{field.required ? 'Yes' : 'No'}</td>
                    <td className="border border-gray-300 px-4 py-2">{field.order}</td>
                    <td className="border border-gray-300 px-4 py-2">{field.status}</td>
                    <td className="border border-gray-300 px-4 py-2">{/* Options */}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
     <Adminfooter />
    </div>
  );
}
