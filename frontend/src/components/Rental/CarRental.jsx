<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b

const CarRental = () => {
  const [car, setCar] = useState({
    name: "",
    nameOnRC: "",
    brand: "",
    model: "",
    year: "",
    NoPlate: "",
    available: true,
<<<<<<< HEAD
    pricePerDay: '',
    seats: '',
    fuelType: '',
    transmission: '',
    image: null, // Change from array to single image
    availableDates: { from: '', to: '' },
=======
    pricePerDay: "",
    seats: "",
    fuelType: "",
    transmission: "",
    images: [],
    availableDates: { from: "", to: "" },
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleImageChange = (e) => {
<<<<<<< HEAD
    const file = e.target.files[0]; // Get the first file only
    if (file) {
      setCar({ ...car, image: file });
=======
    const files = Array.from(e.target.files);
    if (files.length <= 3) {
      setCar({ ...car, images: files });
    } else {
      alert("You can only upload a maximum of 3 images.");
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    console.log('Car Data Submitted:', car);
    // Submit data logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-12">
      <div className="bg-white p-8 shadow-md w-full max-w-3xl h-screen lg:h-auto overflow-y-auto lg:overflow-visible">
        <h2 className="text-3xl font-bold mb-8">Car Information</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Car Name */}
=======
    console.log("Car Data Submitted:", car);
    // You can submit the car data to the backend here
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <h1 className="text-2xl font-bold mb-6">Car Information Form</h1>

        {/* Car Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Car Name</label>
          <input
            type="text"
            name="name"
            value={car.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter car name"
            required
          />
        </div>

        {/* Name on RC */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Name on RC
          </label>
          <input
            type="text"
            name="nameOnRC"
            value={car.nameOnRC}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter name on RC"
            required
          />
        </div>

        {/* Brand and Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
          <div>
            <label className="block text-gray-600 my-2 font-semibold">CAR NAME</label>
            <input
              type="text"
              name="name"
              value={car.name}
              onChange={handleChange}
              placeholder="Enter car name"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Name on RC */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">NAME ON RC</label>
            <input
              type="text"
              name="nameOnRC"
              value={car.nameOnRC}
              onChange={handleChange}
              placeholder="Enter name on RC"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">BRAND</label>
            <input
              type="text"
              name="brand"
              value={car.brand}
              onChange={handleChange}
              placeholder="Enter car brand"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Model */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">MODEL</label>
            <input
              type="text"
              name="model"
              value={car.model}
              onChange={handleChange}
              placeholder="Enter car model"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Year */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">YEAR</label>
            <input
              type="number"
              name="year"
              value={car.year}
              onChange={handleChange}
              placeholder="Enter manufacturing year"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* License Plate */}
          <div>
<<<<<<< HEAD
            <label className="block text-gray-600 my-2 font-semibold">NUMBER PLATE</label>
=======
            <label className="block text-gray-700 font-bold mb-2">
              License Plate
            </label>
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
            <input
              type="text"
              name="NoPlate"
              value={car.NoPlate}
              onChange={handleChange}
              placeholder="Enter license plate number"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Price Per Day */}
          <div>
<<<<<<< HEAD
            <label className="block text-gray-600 my-2 font-semibold">PRICE PER DAY</label>
=======
            <label className="block text-gray-700 font-bold mb-2">
              Price per Day
            </label>
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
            <input
              type="number"
              name="pricePerDay"
              value={car.pricePerDay}
              onChange={handleChange}
              placeholder="Enter price per day"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Seats */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">SEATS</label>
            <input
              type="number"
              name="seats"
              value={car.seats}
              onChange={handleChange}
              placeholder="Enter number of seats"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Fuel Type */}
          <div>
<<<<<<< HEAD
            <label className="block text-gray-600 my-2 font-semibold">FUEL TYPE</label>
=======
            <label className="block text-gray-700 font-bold mb-2">
              Fuel Type
            </label>
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
            <select
              name="fuelType"
              value={car.fuelType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select fuel type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

<<<<<<< HEAD
          {/* Transmission */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">TRANSMISSION</label>
            <select
              name="transmission"
              value={car.transmission}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select transmission</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>

          {/* Car Image */}
          <div className="lg:col-span-2">
            <label className="block text-gray-600 my-2 font-semibold">CAR IMAGE</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {car.image && <p className="text-gray-600 mt-2">Image selected: {car.image.name}</p>}
          </div>

          {/* Available Dates */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">AVAILABLE FROM</label>
=======
        {/* Transmission */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Transmission
          </label>
          <select
            name="transmission"
            value={car.transmission}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select transmission</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>

        {/* Car Images */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Car Images (Up to 3)
          </label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {car.images.length > 3 && (
            <p className="text-red-500 mt-2">
              You can upload up to 3 images only!
            </p>
          )}
        </div>

        {/* Available Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Available From
            </label>
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
            <input
              type="date"
              name="from"
              value={car.availableDates.from}
              onChange={(e) =>
<<<<<<< HEAD
                setCar({ ...car, availableDates: { ...car.availableDates, from: e.target.value } })
              }
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
=======
                setCar({
                  ...car,
                  availableDates: {
                    ...car.availableDates,
                    from: e.target.value,
                  },
                })
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
              required
            />
          </div>
          <div>
<<<<<<< HEAD
            <label className="block text-gray-600 my-2 font-semibold">AVAILABLE TO</label>
=======
            <label className="block text-gray-700 font-bold mb-2">
              Available To
            </label>
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
            <input
              type="date"
              name="to"
              value={car.availableDates.to}
              onChange={(e) =>
<<<<<<< HEAD
                setCar({ ...car, availableDates: { ...car.availableDates, to: e.target.value } })
              }
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
=======
                setCar({
                  ...car,
                  availableDates: { ...car.availableDates, to: e.target.value },
                })
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
              required
            />
          </div>

          {/* Submit Button */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarRental;
