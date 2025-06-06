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

  // Effect to manage modal behavior:
  // - Close with Escape key
  // - Prevent/allow body scrolling
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

    // Cleanup function: runs when component unmounts or when isOpen changes
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // If modal is not open, don't render anything
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
        "http://localhost:5000/api/login",
        values
      );

      if (response.status === 201 && response.data.user) {
        onSuccess(response.data.user, response.data.token);
        onClose();
      } else {
        setErrorMessage(
          response.data.message || "Login failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred during login. Please try again.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    // Modal Overlay: Covers the entire screen, centers content, allows click to close
    // Crucial for fixed, centered behavior
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto p-4"
      onClick={onClose}
    >
      {/* Modal Content Box: Prevents clicks inside from closing the modal */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative my-auto transform transition-transform duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
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
                // **CHANGE**: The input type now changes based on the state
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
                className="block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
              {/* **CHANGE**: Switched back to a button and re-added the onClick handler */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                  aria-label="Toggle password visibility"
            >
                {/* **CHANGE**: The icon is now static and does not change on click */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12c0 2.298.57 4.474 1.597 6.388-.85-.147-1.465-.45-1.928-.903-.78-.75-1.39-1.68-1.844-2.67M19.95 5.867A10.44 10.44 0 0022.066 12c0 2.298-.57 4.474-1.597 6.388.85-.147 1.465-.45 1.928-.903.78-.75 1.39-1.68-1.844-2.67M12 9.75c1.03 0 1.968.508 2.53 1.332M8.47 11.082C7.908 10.258 6.97 9.75 5.94 9.75M9 21v-4.5h4.5M10.5 16.5V21h3M12 3v4.5h-4.5M13.5 7.5V3H10.5M16.5 12a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
            </div>
          </div>

          <div className="text-right">
            <Link
              to="/forgot-password"
              onClick={onClose}
              className="text-sm text-red-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Login
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              Don’t have an account?{" "}
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