import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";
import { Link } from 'react-router-dom';

export default function AddCustomField() {
  const [fieldName, setFieldName] = useState('');
  const [rowWidth, setRowWidth] = useState('half');
  const [required, setRequired] = useState(false);
  const [status, setStatus] = useState('active');
  const [order, setOrder] = useState('1');
  const [type, setType] = useState('Text');

  return (
      <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
                    <Adminheader />
    <div className="min-h-screen bg-[#f5f8fa] flex items-start justify-start py-6 px-8">
      <div className="bg-white rounded shadow-md p-6 w-full max-w-4xl border border-gray-200 relative text-left">
        {/* Top right button */}
        <button className="absolute top-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg><li className="flex items-center space-x-2"> <Link to={"/admin/custom-fields"}>
        
             Custom Field</Link></li>
          
        </button>

        {/* Heading */}
        <h2 className="text-xl font-semibold mb-4">Add Custom Field</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Field Name */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Field Name (English)
            </label>
            <input
              type="text"
              placeholder="Field Name"
              value={fieldName}
              onChange={e => setFieldName(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 bg-[#fafbfc] focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Row Width */}
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700">Row Width</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer font-normal">
                <input
                  type="radio"
                  name="rowWidth"
                  value="half"
                  checked={rowWidth === 'half'}
                  onChange={() => setRowWidth('half')}
                  className="accent-purple-600 w-5 h-5"
                />
                Half Width
              </label>
              <label className="flex items-center gap-2 cursor-pointer font-normal">
                <input
                  type="radio"
                  name="rowWidth"
                  value="full"
                  checked={rowWidth === 'full'}
                  onChange={() => setRowWidth('full')}
                  className="accent-purple-600 w-5 h-5"
                />
                Full Width
              </label>
            </div>
          </div>
          {/* Required */}
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700">Required</label>
            <div className="flex items-center h-10">
              <input
                type="checkbox"
                checked={required}
                onChange={() => setRequired(!required)}
                className="accent-purple-600 w-5 h-5"
              />
            </div>
          </div>
          {/* Status */}
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700">Status</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer font-normal">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={status === 'active'}
                  onChange={() => setStatus('active')}
                  className="accent-purple-600 w-5 h-5"
                />
                Active
              </label>
              <label className="flex items-center gap-2 cursor-pointer font-normal">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={status === 'inactive'}
                  onChange={() => setStatus('inactive')}
                  className="accent-purple-600 w-5 h-5"
                />
                Inactive
              </label>
            </div>
          </div>

          {/* Order */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Order</label>
            <input
              type="number"
              min="1"
              value={order}
              onChange={e => setOrder(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 bg-[#fafbfc] focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Type</label>
            <select
              value={type}
              onChange={e => setType(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 bg-[#fafbfc] focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="Text">Text</option>
              <option value="Number">Number</option>
              <option value="Date">Date</option>
              {/* Add more types as needed */}
            </select>
          </div>

          {/* Save and Continue button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#179ad6] hover:bg-blue-700 text-white px-6 py-2 rounded font-medium"
            >
              Save and Continue
            </button>
          </div>
        </form>
      </div>
    </div>
     <Adminfooter />
    </div>
  );
}
