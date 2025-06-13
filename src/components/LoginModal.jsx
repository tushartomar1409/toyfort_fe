// ───────────────────────────────────────────────────
// File: src/components/LoginModal.jsx
// ───────────────────────────────────────────────────

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LoginModal({ isOpen, onClose, onSuccess }) {
  const [values, setValues] = useState({ email: "", password: "" });
  // **CHANGE**: Re-added state to track password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // **CHANGE**: Re-added the function to toggle the state
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5001/api/login",
        values
      );

      if (response.status === 201) {
        onSuccess(response.data.user, response.data.token);
        onClose();
      } else {
        setErrorMessage(
          response.data.message || "Login failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred during login. Please try again.");
      }
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[95%] sm:max-w-sm relative my-auto transform transition-transform duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
          Login
        </h2>

        {errorMessage && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded relative mb-3 sm:mb-4 text-sm sm:text-base"
            role="alert"
          >
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm sm:text-base"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm sm:text-base"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                aria-label="Toggle password visibility"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link
              to="/forgot-password"
              onClick={onClose}
              className="text-xs sm:text-sm text-red-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              Login
            </button>
          </div>

          <div className="text-center">
            <span className="text-xs sm:text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                onClick={onClose}
                className="text-red-500 hover:underline"
              >
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
