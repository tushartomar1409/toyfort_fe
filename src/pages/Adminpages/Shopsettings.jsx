import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import Select from 'react-select';

export default function Shopsettings() {
  // State
  const [shopName, setShopName] = useState('');
  const [shopDescription, setShopDescription] = useState('');
  const [rssEnabled, setRssEnabled] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [cityName, setCityName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [codEnabled, setCodEnabled] = useState(true);

  // Options lists
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  // Load countries on mount
  useEffect(() => {
    const allCountries = Country.getAllCountries().map(c => ({ value: c.isoCode, label: c.name }));
    setCountryOptions(allCountries);
    if (allCountries.length) setCountryCode(allCountries[0].value);
  }, []);

  // Load states when country changes
  useEffect(() => {
    if (!countryCode) return;
    const states = State.getStatesOfCountry(countryCode).map(s => ({ value: s.isoCode, label: s.name }));
    setStateOptions(states);
    setStateCode(states.length ? states[0].value : '');
  }, [countryCode]);

  // Load cities when state changes
  useEffect(() => {
    if (!countryCode || !stateCode) {
      setCityOptions([]);
      setCityName('');
      return;
    }
    const cities = City.getCitiesOfState(countryCode, stateCode).map(c => ({ value: c.name, label: c.name }));
    setCityOptions(cities);
    setCityName(cities.length ? cities[0].value : '');
  }, [countryCode, stateCode]);

  // Handlers
  const handleCountryChange = option => setCountryCode(option.value);
  const handleStateChange = option => setStateCode(option.value);
  const handleCityChange = option => setCityName(option.value);

  // Submit handler
  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      shopName,
      shopDescription,
      rssEnabled,
      location: { countryCode, stateCode, cityName, address, postalCode },
      codEnabled,
    };
    console.log('Saving settings:', payload);
    // TODO: API call
  };

  return (
    
    <div className="scroll-smooth flex gap-8 p-6 bg-gray-100 min-h-screen">

      {/* Left form panel */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md flex-1 space-y-6">
        <h2 className="text-2xl font-semibold">Shop Settings</h2>

        {/* Shop Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Shop Name</label>
          <input
            type="text"
            value={shopName}
            onChange={e => setShopName(e.target.value)}
            placeholder="Shop Name"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Shop Description</label>
          <textarea
            value={shopDescription}
            onChange={e => setShopDescription(e.target.value)}
            placeholder="Shop Description"
            className="w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none"
          />
        </div>

        {/* RSS Feeds */}
          <span className="text-sm font-medium">RSS Feeds</span>
          <div className="flex items-center space-x-6">
          {['Enable', 'Disable'].map((opt, i) => (
            <label key={i} className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                checked={rssEnabled === (opt === 'Enable')}
                onChange={() => setRssEnabled(opt === 'Enable')}
              />
              <span className="ml-2">{opt}</span>
            </label>
          ))}
        </div>
        

        {/* Searchable selects */}
        <div className="grid grid-cols-3 gap-4">
          <Select options={countryOptions} onChange={handleCountryChange} placeholder="Select Country" isSearchable />
          <Select options={stateOptions} onChange={handleStateChange} placeholder="Select State" isSearchable isDisabled={!stateOptions.length} />
          <Select options={cityOptions} onChange={handleCityChange} placeholder="Select City" isSearchable isDisabled={!cityOptions.length} />
        </div>

        {/* Address + Postal */}
        <div className="grid grid-cols-4 gap-4">
          <input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder="Address"
            className="col-span-3 border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
            placeholder="Postal Code"
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Map embed */}
        <div className="w-full h-64 rounded overflow-hidden">
          <iframe
            title="Shop Location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(address)},+${encodeURIComponent(cityName)},+${encodeURIComponent(stateCode)},+${encodeURIComponent(countryCode)}&output=embed`}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        {/* Save button in form */}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>

      {/* Right aside panel */}
      <aside className="w-96 bg-white p-6 rounded-lg shadow-md space-y-6 h-min">
        <h3 className="text-xl font-semibold">Cash on Delivery</h3>
        <p className="text-sm text-gray-500">Sell your products with pay on delivery option</p>

        <div className="flex items-center space-x-4">
          {['Enable', 'Disable'].map((opt, i) => (
            <label key={i} className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                checked={codEnabled === (opt === 'Enable')}
                onChange={() => setCodEnabled(opt === 'Enable')}
              />
              <span className="ml-2">{opt}</span>
            </label>
          ))}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save Changes
        </button>
      </aside>
    </div>
  );
}
