import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const AddressForm = ({ onClose }) => {
  const [zipCode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const formRef = useRef();

  const [formData, setFormData] = useState({
    title: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${zipCode}`
        );
        const fetchData = response.data[0]?.PostOffice;

        if (fetchData) {
          const block = fetchData[0]?.Block;
          const stateName = fetchData[0]?.State;
          const name = fetchData[0]?.Name;
          setCity(`${name}, ${block}` || "");
          setState(stateName || "");
        }
      } catch (error) {
        console.log("Failed to fetch the location details ", error);
      }
    };

    if (zipCode.length === 6) {
      fetchLocation();
    }
  }, [zipCode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;

    if (!token) {
      console.log("No token found");
      return;
    }

    const payload = {
      ...formData,
      zip_code: zipCode,
      city,
      state,
    };

    try {
      const response = await axios.post(
        "http://localhost:5001/api/shipping-address/info",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onClose();
    } catch (error) {
      console.error("Error submitting address:", error);
    }
  };

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
        <div ref={formRef}>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Address Title */}
            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Address Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ex. Home/Office"
                className="w-full border border-gray-300 p-2 rounded"
                required
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
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-1 text-sm font-medium text-black">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
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
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Zip Code & City */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block mb-1 text-sm font-medium text-black">
                  Zip Code
                </label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipcode(e.target.value)}
                  placeholder="Zip Code"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-1 text-sm font-medium text-black">
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
            </div>

            {/* State */}
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-black">
                State
              </label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Submit */}
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
    </div>
  );
};

export default AddressForm;
 