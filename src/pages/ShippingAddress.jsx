import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlusCircle, FaCheckCircle } from "react-icons/fa";
import AddressForm from "../components/AddressForm";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ShippingAddress = () => {
  const [menu, setMenu] = useState("Shipping Address");
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null); // ⭐ new
  const [address, setAddress] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const fetchAddress = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;
      const response = await axios.get(
        "http://localhost:5001/api/get-shipping-address",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAddress(response.data);
    } catch (error) {
      if (error.response?.status === 404) {
        setAddress([]);
      } else {
        console.error("Something went wrong.");
      }
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/api/delete-shipping-address/${id}`
      );
      setMessage(response.data.message);
      setAddress((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting address", error);
    }
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div
        className="text-gray-600 text-sm mt-6 ml-6"
        style={{ fontFamily: "Open Sans" }}
      >
        <a
          className="hover:text-red-500 mr-1 cursor-pointer text-gray-400"
          href="/"
        >
          Home /
        </a>
        <a
          className="hover:text-red-500 mr-1 cursor-pointer text-gray-600"
          href="/"
        >
          {menu}
        </a>
      </div>

      {/* Main layout */}
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <div className="space-y-2">
            <Link
              to="/settings/edit-profile"
              onClick={() => setMenu("Update Profile")}
              className={`block p-3 rounded-md ${
                menu === "Update Profile" ? "bg-gray-100 " : ""
              } hover:bg-gray-100`}
            >
              Update Profile
            </Link>
            <Link
              to="/settings/shipping-address"
              onClick={() => setMenu("Shipping Address")}
              className={`block p-3 rounded-md ${
                menu === "Shipping Address"
                  ? "bg-gray-100"
                  : "hover:bg-gray-100"
              }`}
            >
              Shipping Address
            </Link>
            <Link
              to="/settings/change-password"
              onClick={() => setMenu("Change Password")}
              className={`block p-3 rounded-md ${
                menu === "Change Password" ? "bg-gray-100" : "hover:bg-gray-100"
              }`}
            >
              Change Password
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="w-full p-16">
          {message && (
            <div className="bg-green-100 p-4 text-green-800 mb-4 flex items-center">
              <FaCheckCircle className="mr-2" />
              {message}
            </div>
          )}

          {address.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {address.map((address, index) => (
                <div key={index} className="border p-4 rounded-lg">
                  <strong className="text-black">{address.title}</strong>
                  <p className="mt-2 text-black">
                    {address.first_name} {address.last_name}
                  </p>
                  <p className="text-sm text-black">
                    {address.address}, {address.city}, {address.zip_code}{" "}
                    {address.state_id}
                  </p>
                  <p aria-readonly className="text-sm text-black">
                    {address.email} {address.phone_number}
                  </p>

                  <div className="mt-3">
                    <button
                      className="mr-4 text-black"
                      onClick={() => {
                        setEditData(address);
                        setShowForm(true);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="text-gray-600 mr-1"
                      />
                      Edit
                    </button>

                    <button
                      className="text-black"
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "Do you really want to delete this address?",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            handleDelete(address.id);
                          }
                        });
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="text-gray-600 mr-1"
                      />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              You have not added a shipping address yet.
            </p>
          )}

          {/* Add or Edit Button */}
          <button
            onClick={() => {
              setEditData(null);
              setShowForm(true);
            }}
            className="flex items-center mt-6 text-black font-semibold hover:text-cyan-600"
          >
            <FaPlusCircle className="mr-2" />
            Add New Address
          </button>

          {/* Form */}
          {showForm && (
            <AddressForm
              onClose={() => {
                setShowForm(false);
                setEditData(null);
              }}
              editData={editData}
              onAddressUpdated={fetchAddress}
            />
          )}

          {/* Go to Cart */}
          <div className="mt-6">
            <button
              onClick={() => navigate("/cart")}
              className="bg-black text-white px-4 py-2 hover:bg-gray-800"
            >
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
