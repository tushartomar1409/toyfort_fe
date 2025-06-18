import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AddressForm from "../components/AddressForm";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FaCheckCircle } from "react-icons/fa";
import Swal from 'sweetalert2'


const ShippingAddress = () => {
  const [menu, setMenu] = useState("Shipping Address");
  const [showForm, setShowForm] = useState(false);
  const [address, setAddress] = useState(null);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
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
        if (error.response && error.response.status === 404) {
          setAddress(null);
        } else {
          setError("Something went wrong.");
        }
      }
    };
    fetchAddress();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/api/delete-shipping-address/${id}`
      );
      console.log(response.data.message);
      setMessage(response.data.message);
      setAddress((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error in remove address", error);
    }
  };
  return (
    <div>
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

      <div className="min-h-screen flex">
        <div className="w-1/4 bg-white p-6 shadow-md">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ fontFamily: "Open Sans" }}
          >
            Settings
          </h2>

          <div className="space-y-2">
            <Link
              to="/settings/edit-profile"
              onClick={() => setMenu("Update Profile")}
              className={`block p-3 rounded-md ${
                menu === "Update Profile" ? "bg-gray-100 " : ""
              } hover:bg-gray-100 transition-all`}
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
              } transition-all`}
            >
              Shipping Address
            </Link>

            <Link
              to="/settings/change-password"
              onClick={() => setMenu("Change Password")}
              className={`block p-3 rounded-md ${
                menu === "Change Password" ? "bg-gray-100" : "hover:bg-gray-100"
              } transition-all`}
            >
              Change Password
            </Link>
          </div>
        </div>

        <div className="w-full p-16">
          {message && (
            <div
              style={{
                backgroundColor: "#d4edda",
                padding: "20px",
                color: "#155724",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaCheckCircle style={{ marginRight: "10px" }} />
              {message}
            </div>
          )}
          {address && address.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {address.map((address, index) => (
                <div
                  key={index}
                  className="min-w-[300px] grid-cols-2 border border-gray-300 p-4 rounded-lg shrink-0"
                >
                  <strong className="text-black text-sm">
                    {address.title}
                  </strong>
                  <p className="text-black mt-3">
                    {address.first_name} {address.last_name}
                  </p>
                  <p className="text-black text-sm">
                    {address.address}, {address.city}, {address.zip_code}{" "}
                    {address.state_id}
                  </p>
                  <p className="text-black text-sm">
                    {address.email} {address.phone_number}
                  </p>

                  <div className="mt-2 ">
                    <button className="mr-4">
                      {" "}
                      <FontAwesomeIcon
                        className="text-gray-600 mr-1"
                        icon={faPenToSquare}
                      />
                      Edit
                    </button>
                    <button
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
                        className="text-gray-600 mr-1"
                        icon={faTrashCan}
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

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center mt-3 text-black font-semibold hover:text-cyan-600"
          >
            <FaPlusCircle className="mr-2" />
            Add New Address
          </button>

          {showForm && <AddressForm onClose={() => setShowForm(false)} />}

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
