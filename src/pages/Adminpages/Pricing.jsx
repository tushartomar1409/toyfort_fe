import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


const Pricing = () => {
  const [pricePerDay, setPricePerDay] = useState('0.10');
  const [pricePerMonth, setPricePerMonth] = useState('1');
  const [freePromotion, setFreePromotion] = useState('disable');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Changes saved!');
  };

  return (
      <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
                <Adminheader />
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-6 text-left">Pricing</h2>
        <div className="mb-5 text-left">
          <label className="block mb-2 text-gray-700">Price Per Day</label>
          <input
            type="number"
            step="0.01"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={pricePerDay}
            onChange={e => setPricePerDay(e.target.value)}
          />
        </div>
        <div className="mb-5 text-left">
          <label className="block mb-2 text-gray-700">Price Per Month</label>
          <input
            type="number"
            step="0.01"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={pricePerMonth}
            onChange={e => setPricePerMonth(e.target.value)}
          />
        </div>
        <div className="mb-6 text-left">
          <label className="block mb-2 text-gray-700">Free Promotion</label>
          <div className="flex items-center gap-8">
            <label className="flex items-center">
              <input
                type="radio"
                name="freePromotion"
                value="enable"
                checked={freePromotion === 'enable'}
                onChange={() => setFreePromotion('enable')}
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <span className="ml-2 text-gray-700">Enable</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="freePromotion"
                value="disable"
                checked={freePromotion === 'disable'}
                onChange={() => setFreePromotion('disable')}
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <span className="ml-2 text-gray-700">Disable</span>
            </label>
          </div>
        </div>
        <div className="text-left">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
    <Adminfooter />
    </div>
  );
};

export default Pricing;
