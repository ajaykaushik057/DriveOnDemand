import React, { useState, useContext } from "react";
import { cars } from "../../cars";

import { FaArrowRight } from "react-icons/fa";
import "./explore.css";
import { LocationContext } from "../../context/LocationContext";

const Explore = () => {
  const { location } = useContext(LocationContext);

  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const clearFilters = () => {
    setSelectedDate("");
  };

  const filteredCars = cars.filter((car) => {
    const isAvailableOnDate =
      !selectedDate || car.availableDates.includes(selectedDate);
    return car.location === `${location.city}` && isAvailableOnDate;
  });

  return (
    <>
      <div className="flex">
        <div className="w-1/4 p-5 border border-gray-300 rounded-lg h-[250px]">
          <button className="bg-[#243642] flex justify-center items-center gap-3 px-[40px] mb-[6px] py-[10px] text-white">
            List Your Car <FaArrowRight />
          </button>
          <hr className="mt-[10px]" />
          <h3 className="text-lg font-semibold mt-[10px]">Filter by Date</h3>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="mt-4 border border-gray-300 rounded p-2 w-full"
          />
          <button
            onClick={clearFilters}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Filters
          </button>
        </div>

        <div className="w-3/4 p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="cursor-pointer text-white flex flex-col relative akash1"
            >
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-[200px] object-cover"
              />
              <div className="akash2 flex justify-around p-[20px] bg-[rgba(0,0,0,0.4)] absolute w-full top-[38%]">
                <div>
                  <h4 className="mt-2 text-lg font-semibold">{car.model}</h4>
                  <p>Price: ${car.price}</p>
                  <p>Location: {car.location}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => setSelectedCar(car)}
                    className="bg-white px-4 py-1 rounded border text-gray-600 border-gray-300"
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedCar && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg relative">
              <span
                className="absolute top-2 right-2 cursor-pointer text-lg font-bold"
                onClick={() => setSelectedCar(null)}
              >
                &times;
              </span>
              <div className="flex justify-center items-center text-center">
                <div>
                  <h2 className="text-xl font-semibold">
                    {selectedCar.brand} {selectedCar.model}
                  </h2>
                  <img
                    className="h-[200px] w-[250px] m-auto object-cover"
                    src={selectedCar.image}
                    alt=""
                  />
                  <p>Year: {selectedCar.year}</p>
                  <p>Price: ${selectedCar.price}</p>

                  <p>
                    Available Dates: {selectedCar.availableDates.join(", ")}
                  </p>
                  <p>Location: {selectedCar.location}</p>
                  <p>Color: {selectedCar.color}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Explore;
