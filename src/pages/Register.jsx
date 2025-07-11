import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { API_ENDPOINTS } from "../config/api/api";

// Accept openLoginModal as a prop
const Register = ({ openLoginModal }) => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });

  const [message, setMessage] = useState("");
  const [messageState, setMessageState] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setUser, setProfile } = useContext(AppContext);

  const navigate = useNavigate()

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setMessage(""); 
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (values.password !== values.confirm_password) {
      setMessage("Passwords do not match.");
      setMessageState(false);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        API_ENDPOINTS.AUTH.REGISTER,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Register ",response);
      console.log("values",values);
      
      

      if (response.status === 200) {
        const userData = response.data.data;
        
        // // Store token and user data
        // localStorage.setItem("token", userData.token);
        // localStorage.setItem("user", JSON.stringify(userData));
        
        // Update app state
        setUser(userData);
        setProfile(true);
        
        // Navigate to profile page
        navigate("/settings/edit-profile");
      } else {
        setMessageState(false);
        setMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      setMessageState(false);
      if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred during registration. Please try again.");
      }
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    if (openLoginModal) {
      openLoginModal();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-red-600 text-2xl mb-12 text-center">
        We are asking you to Register as it will help to track the status of the
        shipping of your order.
      </p>

      <h1 className="text-center text-2xl text-black font-medium mb-4">
        Register
      </h1>

      {message && (
        <div 
          className={`w-full p-3 mb-4 rounded ${
            messageState ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleRegister} className="w-full max-w-md">
        <input
          className="mb-3 w-full p-3 border border-gray-300 rounded"
          type="text"
          name="first_name"
          placeholder="First Name"
          required
          disabled={loading}
          onChange={handleChanges}
        />
        <input
          className="mb-3 w-full p-3 border border-gray-300 rounded"
          type="text"
          name="last_name"
          placeholder="Last Name"
          required
          disabled={loading}
          onChange={handleChanges}
        />
        <input
          className="mb-3 w-full p-3 border border-gray-300 rounded"
          type="email"
          name="email"
          placeholder="Email Address"
          required
          disabled={loading}
          onChange={handleChanges}
        />
        <input
          className="mb-3 w-full p-3 border border-gray-300 rounded"
          type="tel"
          name="phone_number"
          placeholder="Phone Number"
          required
          disabled={loading}
          onChange={handleChanges}
        />
        <input
          className="mb-3 w-full p-3 border border-gray-300 rounded"
          type="password"
          name="password"
          placeholder="Password"
          required
          disabled={loading}
          onChange={handleChanges}
        />
        <input
          className="mb-3 w-full p-3 border border-gray-300 rounded"
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
          disabled={loading}
          onChange={handleChanges}
        />
        <div className="mb-4">
          <input 
            type="checkbox" 
            id="check" 
            required 
            className="mr-2"
          />
          <label htmlFor="check">
            I have read and agree to the{" "}
            <a 
              href="/terms-conditions" 
              target="_blank"
              className="text-red-500 hover:underline"
            >
              Terms & Conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <div className="text-center mt-4">
          <span className="text-gray-500">Have an account? </span>
          <button
            onClick={handleLoginClick}
            className="text-red-500 hover:underline font-medium"
            type="button"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
