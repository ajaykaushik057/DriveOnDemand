import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CarBooking = () => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="p-4 rounded-lg bg-gray-200  shadow-md">
      <div  className="flex flex-col items-center border-2 border-black  ">

      <div className="flex flex-col mb-4 ">
        <label htmlFor="location" className="text-gray-700 font-medium">
          Location
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
          placeholder={coords ? `${coords.latitude}, ${coords.longitude}` : 'Enter location'}
          className="border rounded-md py-2 px-3"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="startDate" className="text-gray-700 font-medium">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="border rounded-md py-2 px-3"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="endDate" className="text-gray-700 font-medium">End Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          className="border rounded-md py-2 px-3"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="startTime" className="text-gray-700 font-medium">Start Time</label>
        <DatePicker
          selected={startTime}
          onChange={(time) => setStartTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          className="border rounded-md py-2 px-3"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="endTime" className="text-gray-700 font-medium">End Time</label>
        <DatePicker
          selected={endTime}
          onChange={(time) => setEndTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          className="border rounded-md py-2 px-3"
        />
      </div>

      <button className="bg-medium text-white py-2 px-4 rounded-md">Get Car</button> 
      </div>
      
    </div>
  );
};

export default CarBooking;
