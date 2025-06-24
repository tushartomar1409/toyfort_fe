import React, { useState } from 'react';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';

countries.registerLocale(enLocale);

const countryOptions = Object.entries(countries.getNames('en', { select: 'official' })).map(
  ([code, name]) => ({ code, name })
);

const SetPayoutAccount = () => {
  const [activeMethod, setActiveMethod] = useState('PayPal');

  const tabStyle = (method) =>
    `px-4 py-2 rounded-md font-medium text-sm ${
      activeMethod === method
        ? 'bg-[#6366f1] text-white'
        : 'bg-gray-200 text-gray-700'
    }`;

  return (
    <div className="min-h-screen bg-[#f9fafb] flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Set Payout Account</h2>

        {/* Tabs */}
        <div className="flex space-x-3 mb-6">
          {['PayPal', 'IBAN', 'SWIFT'].map((method) => (
            <button
              key={method}
              onClick={() => setActiveMethod(method)}
              className={tabStyle(method)}
            >
              {method}
            </button>
          ))}
        </div>

        {/* Form */}
        <form className="space-y-6">
          {activeMethod === 'PayPal' && (
            <div>
              <label className="block font-medium mb-2">
                PayPal Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full border rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
          )}

          {activeMethod === 'IBAN' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-2">Full Name*</label>
                <input type="text" required className="w-full border rounded-md px-4 py-2" />
              </div>
              <div>
                <label className="block font-medium mb-2">Bank Name*</label>
                <input type="text" required className="w-full border rounded-md px-4 py-2" />
              </div>
              <div>
                <label className="block font-medium mb-2">Country*</label>
                <select required className="w-full border rounded-md px-4 py-2">
                  <option value="">Select Country</option>
                  {countryOptions.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium mb-2">International Bank Account Number (IBAN)*</label>
                <input type="text" required className="w-full border rounded-md px-4 py-2" />
              </div>
            </div>
          )}

          {activeMethod === 'SWIFT' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-2">Full Name*</label>
                <input type="text" required className="w-full border rounded-md px-4 py-2" />
              </div>
              <div>
                <label className="block font-medium mb-2">State*</label>
                <input type="text" required className="w-full border rounded-md px-4 py-2" />
              </div>
              <div>
                <label className="block font-medium mb-2">Country*</label>
                <select required className="w-full border rounded-md px-4 py-2">
                  <option value="">Select Country</option>
                  {countryOptions.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium mb-2">Postcode*</label>
                <input type="text" required className="w-full border rounded-md px-4 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium mb-2">Address*</label>
                <input type="text" required className="w-full border rounded-md px-4 py-2" />
              </div>
              <div>
                <label className="block font-medium mb-2">Bank Account Holder's Name*</label>
                <input type="text" required className="w-full border rounded-md px-4 py-2" />
              </div>
              <div>
                <label className="block font-medium mb-2">Bank Name*</label>
                <input type="text" required className="w-full border rounded-md px-4 py-2" />
              </div>
              <div>
                <label className="block font-medium mb-2">Bank Branch Country*</label>
                <select required className="w-full border rounded-md px-4 py-2">
                  <option value="">Select Country</option>
                  {countryOptions.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium mb-2">Bank Branch City*</label>
                <input type="text" required className="w-full border rounded-md px-4 py-2" />
              </div>
              <div>
                <label className="block font-medium mb-2">Bank Account Number / IBAN*</label>
                <input type="text" required className="w-full border rounded-md px-4 py-2" />
              </div>
              <div>
                <label className="block font-medium mb-2">SWIFT Code*</label>
                <input type="text" required className="w-full border rounded-md px-4 py-2" />
              </div>
            </div>
          )}

          <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-md">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetPayoutAccount;
