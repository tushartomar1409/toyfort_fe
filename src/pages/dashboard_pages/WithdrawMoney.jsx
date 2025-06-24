import React, { useState } from 'react';

const WithdrawMoney = () => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('PayPal');
  const balance = 42005;

  return (
    <div className="min-h-screen bg-[#f9fafb] flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-8 grid md:grid-cols-3 gap-8">
        {/* Left Side Form */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Withdraw Money</h2>

          {/* Amount Input */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">Withdrawal Amount</label>
            <div className="flex border rounded-md overflow-hidden">
              <span className="bg-gray-100 px-4 flex items-center text-gray-700 font-medium">₹</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full px-4 py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Method Select */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">Withdrawal Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            >
              <option>PayPal</option>
              <option>IBAN</option>
              <option>SWIFT</option>
            </select>
          </div>

          {/* Submit Button */}
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-md">
            Submit
          </button>
        </div>

        {/* Right Side Info Card */}
        <div className="bg-gray-100 p-6 rounded-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Minimum Payout Amounts</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>PayPal</span>
              <span>: ₹50</span>
            </div>
            <div className="flex justify-between">
              <span>IBAN</span>
              <span>: ₹50</span>
            </div>
            <div className="flex justify-between">
              <span>SWIFT</span>
              <span>: ₹50</span>
            </div>
          </div>

          <hr className="my-4 border-gray-300" />

          <div className="text-gray-800 font-semibold">
            Your Balance: <span className="text-xl">₹{balance.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawMoney;
