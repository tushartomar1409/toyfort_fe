import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";

// Accept openLoginModal as a prop
const Register = ({ openLoginModal }) => {
  const [values, setValues] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [messageState, setMessageState] = useState(false);

  const { user, setUser, setProfile } = useContext(AppContext);

  const navigate = useNavigate();

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (values.password !== values.confirmPassword) {
      console.log("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/register",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(values.fName);
      // console.log("Register Val", values);
      

      if (response.status === 201) {
        let userData = response.data.data
        console.log(userData.name);
        
        localStorage.setItem("token", userData.token);
        setUser(userData);
        setProfile(true);
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/settings/edit-profile");

        } else {
          setMessageState(false);
          setMessage("User not Register!");
        }
       
    } catch (error) {
      if (error.response) {
        console.log("Backend error:", error.response.data);
      } else {
        console.log("Other error:", error.message);
      }
    }
  };

  // New handler to open the login modal
  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent default anchor link behavior
    if (openLoginModal) {
      // Check if the prop exists
      openLoginModal(); // Call the function passed from App.jsx to open the modal
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

      <form onSubmit={handleRegister}>
        <input
          className="mb-3 w-full p-3 border border-gray-300"
          type="text"
          name="fName"
          placeholder="First Name"
          required
          onChange={handleChanges}
        />
        <br />
        <input
          className="mb-3 w-full p-3 border border-gray-300"
          type="text"
          name="lName"
          placeholder="Last Name"
          required
          onChange={handleChanges}
        />
        <br />
        <input
          className="mb-3 w-full p-3 border border-gray-300"
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChanges}
        />
        <br />
        <input
          className="mb-3 w-full p-3 border border-gray-300"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChanges}
        />
        <br />
        <input
          className="mb-3 w-full p-3 border border-gray-300"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChanges}
        />
        <br />
        <input
          className="mb-3 w-full p-3 border border-gray-300"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          onChange={handleChanges}
        />
        <br />
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="ml-2">
          I have read and agree to the{" "}
          <u>
            <a href="/terms-conditions" target="_blank">
              Terms & Conditions
            </a>
          </u>
        </label>
        <br />
        <button
          type="submit"
          className="w-full text-white py-2 rounded mt-4"
          style={{ backgroundColor: "black" }}
        >
          Register
        </button>
        <br />
        <div className="text-center mt-4">
          <p className="text-gray-500 inline-block mr-1">Have an account?</p>
          <a
            href="#" // Change href to # or remove it to prevent page reload
            onClick={handleLoginClick} // Call the new handler
            className="text-black font-medium"
          >
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
