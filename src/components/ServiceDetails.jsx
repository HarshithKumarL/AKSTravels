import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ServiceDetails() {
  const location = useLocation();
  const { selectedVehicle } = location.state || {}; // Get selected vehicle from navigation state

  const vehicleOptions = [
    "buses",
    "7 Seaters",
    "Sedan",
    "Premium Cars",
    "Mini Bus",
  ];

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    vehicleType: selectedVehicle || "", // Pre-populate if available
    peopleCount: "",
    date: "",
  });

  useEffect(() => {
    if (selectedVehicle) {
      setFormData((prevData) => ({
        ...prevData,
        vehicleType: selectedVehicle,
      }));
    }
  }, [selectedVehicle, location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="p-10 md:p-16 bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-2xl w-full max-w-md border border-gray-700"
      >
        <h2 className="text-xl font-bold text-center mb-4 text-blue-400">
          Service Request Form
        </h2>

        <div className="mb-3">
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Vehicle Type
          </label>
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" className="text-gray-400">
              Select Vehicle
            </option>
            {vehicleOptions.map((vehicle) => (
              <option key={vehicle} value={vehicle}>
                {vehicle}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Number of People
          </label>
          <input
            type="number"
            name="peopleCount"
            value={formData.peopleCount}
            onChange={handleChange}
            min="1"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded text-white font-bold transition duration-300"
        >
          Send Request
        </button>
      </form>
    </div>
  );
}

export default ServiceDetails;
