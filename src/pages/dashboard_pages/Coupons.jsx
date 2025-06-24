import React, { useState } from "react";
import Select from "react-select";
import { Dialog } from "@headlessui/react";


export default function CouponManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [coupons, setCoupons] = useState([]);

  const [formData, setFormData] = useState({
    code: "",
    discountRate: "",
    fixedAmount: "",
    title: "",
    description: "",
    numberOfCoupons: "",
    minOrderAmount: "",
    usageType: "single",
    expiryDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, usageType: e.target.value });
  };

  const generateCode = () => {
    const random = Math.random().toString(36).substr(2, 8).toUpperCase();
    setFormData({ ...formData, code: random });
  };
 const handleDateChange = (date) => {
    setFormData({ ...formData, expiryDate: date });
  };

  const openEditPopup = (index) => {
    setFormData(coupons[index]);
    setEditIndex(index);
    setIsOpen(true);
  };

  const deleteCoupon = (index) => {
    const updated = [...coupons];
    updated.splice(index, 1);
    setCoupons(updated);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updated = [...coupons];
      updated[editIndex] = formData;
      setCoupons(updated);
    } else {
      setCoupons([...coupons, formData]);
    }
    setFormData({
      code: "",
      discountRate: "",
      fixedAmount: "",
      title: "",
      description: "",
      numberOfCoupons: "",
      minOrderAmount: "",
      usageType: "single",
      expiryDate: "",
    });
    setIsOpen(false);
    setEditIndex(null);
  };

  return (
    <div className="p-6 max-w-full mx-auto">
      <button
        onClick={() => {
          setFormData({
            code: "",
            discountRate: "",
            fixedAmount: "",
            title: "",
            description: "",
            numberOfCoupons: "",
            minOrderAmount: "",
            usageType: "single",
            expiryDate: "",
          });
          setEditIndex(null);
          setIsOpen(true);
        }}
        className="bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700 float-right mb-4"
      >
        <i className="fas fa-plus mr-2"></i> Add Coupon
      </button>

      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">Code</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Rate</th>
            <th className="px-4 py-2">Fixed</th>
            <th className="px-4 py-2">Count</th>
            <th className="px-4 py-2">Usage</th>
            <th className="px-4 py-2">Expiry</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{coupon.code}</td>
              <td className="px-4 py-2">{coupon.title}</td>
              <td className="px-4 py-2">{coupon.discountRate}%</td>
              <td className="px-4 py-2">₹{coupon.fixedAmount}</td>
              <td className="px-4 py-2">{coupon.numberOfCoupons}</td>
              <td className="px-4 py-2">{coupon.usageType}</td>
              <td className="px-4 py-2">{coupon.expiryDate}</td>
              <td className="px-4 py-2">
                <button
                  className="text-blue-600 hover:underline mr-3"
                  onClick={() => openEditPopup(index)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => deleteCoupon(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
          <Dialog.Panel className="mx-auto w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded bg-white p-6">
            <Dialog.Title className="text-xl font-semibold mb-6">
              {editIndex !== null ? "Edit Coupon" : "Add Coupon"}
            </Dialog.Title>

            <div className="grid gap-4">
              <div>
                <label className="font-semibold">Coupon Code</label>
                <div className="flex gap-2">
                  <input
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Coupon Code"
                  />
                  <button
                    onClick={generateCode}
                    className="px-4 py-2 bg-gray-200 rounded"
                  >
                    Generate
                  </button>
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">
                  Discount Rate
                </label>
                <div className="flex border border-gray-300 rounded-md overflow-hidden">
                  <span className="bg-gray-100 px-4 flex items-center text-gray-700 font-medium">
                    %
                  </span>
                  <input
                    type="number"
                    name="discountRate"
                    value={formData.discountRate}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full px-4 py-2 border-l border-gray-300 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1 mt-4">
                  Fixed Discount Amount
                </label>
                <div className="flex border border-gray-300 rounded-md overflow-hidden">
                  <span className="bg-gray-100 px-4 flex items-center text-gray-700 font-medium">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="fixedAmount"
                    value={formData.fixedAmount}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full px-4 py-2 border-l border-gray-300 focus:outline-none"
                  />
                </div>
              </div>
              <label className="font-semibold block mb-1 mt-4">
                Coupon Title
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="p-2 border rounded"
                placeholder="Coupon Title"
              />
              <label className="font-semibold block mb-1 mt-4">
                Coupon Description
              </label>
              <input
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="p-2 border rounded"
                placeholder="Coupon Description"
              />
              <label className="font-semibold block mb-1 mt-4">
                No. of Coupons
              </label>
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <input
                  type="number"
                  name="numberOfCoupons"
                  value={formData.numberOfCoupons}
                  onChange={handleInputChange}
                  placeholder="Number of Coupons"
                  className="w-full px-4 py-2 border-l border-gray-300 focus:outline-none"
                />
              </div>
              <label className="font-semibold block mb-1 mt-4">
                Minimum Order Amount
              </label>
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <span className="bg-gray-100 px-4 flex items-center text-gray-700 font-medium">
                  ₹
                </span>
                <input
                  type="number"
                  name="minOrderAmount"
                  value={formData.minOrderAmount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-4 py-2 border-l border-gray-300 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">
                  Coupon Usage Type
                </label>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="usageType"
                    value="single"
                    checked={formData.usageType === "single"}
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  Each user can use it for only one order
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="usageType"
                    value="multiple"
                    checked={formData.usageType === "multiple"}
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  Each user can use it for multiple orders (Guests can use)
                </label>
              </div>
             <label className="font-semibold block mb-1">Expiry Date</label>
              <input
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="p-2 border rounded"
                placeholder="Expiry Date"
              />

              {/* <div>
                <label className="font-semibold block mb-1">Expiry Date</label>
                <DatePicker
                  selected={formData.expiryDate}
                  onChange={handleDateChange}
                  className="p-2 border rounded w-full text-right"
                  dateFormat="yyyy-MM-dd"
                />
              </div> */}
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 text-sm"
              >
                Save Coupon
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
