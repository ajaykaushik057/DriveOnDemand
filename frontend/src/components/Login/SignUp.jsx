import React, { useState } from "react";
import { Link } from "react-router-dom";

// Default profile picture (optional URL)
const defaultProfilePicture = "https://via.placeholder.com/150/000000/FFFFFF/?text=Profile";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    city: "",
    district: "",
    pincode: "",
    state: "",
    address: "",
    licenseNo: "",
    licenseExpiryDate: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePreview, setProfilePreview] = useState(defaultProfilePicture);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setProfilePreview(URL.createObjectURL(file)); // Show preview of the uploaded image
    }
  };

  const triggerFileInput = () => {
    document.getElementById("profilePictureInput").click(); // Programmatically click the hidden file input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark p-12">
      <div className="bg-white p-8 shadow-md w-full max-w-3xl h-screen lg:h-auto overflow-y-auto lg:overflow-visible">
        <h2 className="text-3xl font-bold mb-8">Sign Up</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">FULL NAME</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-medium"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">EMAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
              required
            />
          </div>

          {/* Gender and Profile Picture */}
          <div className="lg:col-span-2 flex flex-col lg:flex-row lg:gap-6">
            {/* Gender */}
            <div className="flex-1">
              <label className="block text-gray-600 my-2 font-semibold">GENDER</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Profile Picture */}
            <div className="flex-1 flex flex-col items-center">
              <label className="block text-gray-600 my-2 font-semibold mb-2">PROFILE</label>
              {/* Clickable Profile Picture */}
              <div onClick={triggerFileInput} className="cursor-pointer">
                <img
                  src={profilePreview || defaultProfilePicture}
                  alt="Profile Preview"
                  className="w-32 h-32 object-cover rounded-full"
                />
              </div>

              {/* Hidden file input for image upload */}
              <input
                type="file"
                id="profilePictureInput"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">PASSWORD</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">CONFIRM PASSWORD</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Re-type Password"
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
              required
            />
          </div>

          {/* License Number and License Expiry Date */}
          <div className="lg:col-span-2 flex flex-col lg:flex-row lg:gap-4">
            {/* License Number */}
            <div className="flex-1 mb-4 lg:mb-0">
              <label className="block text-gray-600 my-2 font-semibold">LICENSE NUMBER</label>
              <input
                type="text"
                name="licenseNo"
                value={formData.licenseNo}
                onChange={handleChange}
                placeholder="Enter License Number"
                className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
                required
              />
            </div>

            {/* License Expiry Date */}
            <div className="flex-1">
              <label className="block text-gray-600 my-2 font-semibold">LICENSE EXPIRY DATE</label>
              <input
                type="date"
                name="licenseExpiryDate"
                value={formData.licenseExpiryDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="lg:col-span-2">
            <label className="block text-gray-600 my-2 font-semibold">ADDRESS</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">CITY</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
              required
            />
          </div>

          {/* District */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">DISTRICT</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
              required
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">PINCODE</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
              required
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">STATE</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-medium"
              required
            />
          </div>

          {/* Terms and Submit */}
          <div className="lg:col-span-2 flex items-center">
            <input type="checkbox" required className="mr-2" />
            <label className="text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="lg:col-span-2 w-full bg-medium text-white px-4 py-2 rounded-3xl hover:bg-dark transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
