import React, { useEffect, useState } from "react";
import axios from "axios";

const AddressForm = ({ onClose }) => {
  const [zipCode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${zipCode}`
        );

        const fetchData = response.data[0]?.PostOffice;

        if (fetchData) {
          const block = fetchData[0]?.Block;
          const state = fetchData[0]?.State;

          setCity(block || "");
          setState(state || "");
        }
      } catch (error) {
        console.log("Failed to fetch the location details ", error);
      }
    };

    if (zipCode.length === 6) {
      fetchLocation();
    }
  }, [zipCode]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl relative">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Add New Address
        </h2>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-xl hover:text-black"
        >
          &times;
        </button>

        <form className="space-y-4">
          {/* Address Title */}
          <div>
            <label className="block mb-1 text-sm font-medium text-black">
              Address Title
            </label>
            <input
              type="text"
              placeholder="Ex. Home/Office"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* First & Last Name */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-black">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-black">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-black">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-sm font-medium text-black">
              Address
            </label>
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* city and zip code */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-black">
                Zip Code
              </label>
              <input
                type="text"
                placeholder="Zip Code"
                value={zipCode}
                className="w-full border border-gray-300 p-2 rounded"
                onChange={(e) => setZipcode(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-black">
                City
              </label>
              <input
                type="text"
                placeholder="City"
                value={city}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          {/* state */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-black">
                State
              </label>
              <input
                type="text"
                placeholder="State"
                value={state}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;

// import React, { useState, useEffect } from "react";
// import { Country, State } from "country-state-city";

// const AddressForm = ({ onClose }) => {
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);

//   useEffect(() => {
//     const allCountries = Country.getAllCountries();
//     setCountries(allCountries);
//   }, []);

//   useEffect(() => {
//     if (selectedCountry) {
//       const countryStates = State.getStatesOfCountry(selectedCountry);
//       setStates(countryStates);
//       setSelectedState(""); // Reset state on country change
//     }
//   }, [selectedCountry]);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-6 w-full max-w-2xl relative">
//         <h2 className="text-2xl font-bold text-center mb-6 text-black">Add New Address</h2>

//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 text-xl hover:text-black"
//         >
//           &times;
//         </button>

//         <form className="space-y-4">
//           {/* Address Title */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-black">Address Title</label>
//             <input
//               type="text"
//               placeholder="Ex. Home/Office"
//               className="w-full border border-gray-300 p-2 rounded"
//             />
//           </div>

//           {/* First & Last Name */}
//           <div className="flex space-x-4">
//             <div className="w-1/2">
//               <label className="block mb-1 text-sm font-medium text-black">First Name</label>
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block mb-1 text-sm font-medium text-black">Last Name</label>
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>
//           </div>

//           {/* Email & Phone */}
//           <div className="flex space-x-4">
//             <div className="w-1/2">
//               <label className="block mb-1 text-sm font-medium text-black">Email</label>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block mb-1 text-sm font-medium text-black">Phone Number</label>
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-black">Address</label>
//             <input
//               type="text"
//               placeholder="Address"
//               className="w-full border border-gray-300 p-2 rounded"
//             />
//           </div>

//           {/* Country & State */}
//           <div className="flex space-x-4">
//             <div className="w-1/2">
//               <label className="block mb-1 text-sm font-medium text-black">Country</label>
//               <select
//                 className="w-full border border-gray-300 p-2 rounded text-black"
//                 value={selectedCountry}
//                 onChange={(e) => setSelectedCountry(e.target.value)}
//               >
//                 <option value="">Select Country</option>
//                 {countries.map((country) => (
//                   <option key={country.isoCode} value={country.isoCode}>
//                     {country.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="w-1/2">
//               <label className="block mb-1 text-sm font-medium text-black">State</label>
//               <select
//                 className="w-full border border-gray-300 p-2 rounded text-black"
//                 value={selectedState}
//                 onChange={(e) => setSelectedState(e.target.value)}
//                 disabled={!selectedCountry}
//               >
//                 <option value="">Select State</option>
//                 {states.map((state) => (
//                   <option key={state.isoCode} value={state.isoCode}>
//                     {state.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* City & Zip Code */}
//           <div className="flex space-x-4">
//             <div className="w-1/2">
//               <label className="block mb-1 text-sm font-medium text-black">City</label>
//               <input
//                 type="text"
//                 placeholder="City"
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block mb-1 text-sm font-medium text-black">Zip Code</label>
//               <input
//                 type="text"
//                 placeholder="Zip Code"
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end mt-4">
//             <button
//               type="submit"
//               className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddressForm;
