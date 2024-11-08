import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    licenseNo: "",
    licenseExpiryDate: "",
    address: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)

    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/register',formData,{
        headers:{
          'Content-Type':'application/json'
        }
      })
      if(response.status===201){
        alert("Registered")
      }else{
        alert("Failed to Registered")
      }

    } catch (error) {
      alert(error.message)
    }
    
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-dark p-12">
    <div className="bg-white p-8 shadow-md w-full max-w-3xl h-screen lg:h-auto overflow-y-auto lg:overflow-visible">
      <h2 className="text-3xl font-bold mb-8">Sign Up</h2>

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="block text-gray-600 my-2 font-semibold">FULL NAME</label>
          <input
            type="text"
            name="fullname"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-medium"
            required
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-gray-600 my-2 font-semibold">EMAIL</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Gender */}
        <div className="flex-1">
          <label className="block text-gray-600 my-2 font-semibold">GENDER</label>
          <select
            name="gender"
            className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
            required
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-600 my-2 font-semibold">PASSWORD</label>
          <input
            type="password"
            name="password"
            placeholder="Create password"
            className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-600 my-2 font-semibold">CONFIRM PASSWORD</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-type Password"
            className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        {/* License Number */}
        <div className="flex-1">
          <label className="block text-gray-600 my-2 font-semibold">LICENSE NUMBER</label>
          <input
            type="text"
            name="licenseNo"
            placeholder="Enter License Number"
            className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
            required
            value={formData.licenseNo}
            onChange={handleChange}
          />
        </div>

        {/* License Expiry Date */}
        <div className="flex-1">
          <label className="block text-gray-600 my-2 font-semibold">LICENSE EXPIRY DATE</label>
          <input
            type="date"
            name="licenseExpiryDate"
            className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
            required
            value={formData.licenseExpiryDate}
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <div className="lg:col-span-2">
          <label className="block text-gray-600 my-2 font-semibold">ADDRESS</label>
          <input
            type="text"
            name="address"
            className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-600 my-2 font-semibold">CITY</label>
          <input
            type="text"
            name="city"
            className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
            required
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        {/* District */}
        <div>
          <label className="block text-gray-600 my-2 font-semibold">DISTRICT</label>
          <input
            type="text"
            name="district"
            className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
            required
            value={formData.district}
            onChange={handleChange}
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-gray-600 my-2 font-semibold">STATE</label>
          <input
            type="text"
            name="state"
            className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
            required
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        {/* Pincode */}
        <div>
          <label className="block text-gray-600 my-2 font-semibold">PINCODE</label>
          <input
            type="text"
            name="pincode"
            className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
            required
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <div className="lg:col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-full lg:w-2/5 py-2 rounded-3xl bg-medium text-white font-semibold mt-6 hover:bg-dark transition-all"
          >
            Sign Up
          </button>
        </div>
      </form>

      {/* Redirect to Login */}
      <div className="flex justify-center mt-4">
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-medium font-semibold hover:text-dark">
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Signup;
