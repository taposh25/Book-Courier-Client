import React, { useState } from "react";
import { FaUser, FaMapMarkerAlt, FaBox, FaTruck, FaClock } from "react-icons/fa";

const BookDelivery = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    receiverName: "",
    pickupAddress: "",
    deliveryAddress: "",
    weight: "",
    serviceType: "standard",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">
          Book a Delivery
        </h1>
        <p className="text-gray-700 text-lg mb-12 max-w-3xl">
          Schedule your book or parcel delivery in minutes. Enter pickup and
          destination details, choose your service, and track your shipment.
        </p>

        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Delivery Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="label font-medium">
                <FaUser className="inline mr-2" /> Sender Name
              </label>
              <input
                type="text"
                name="senderName"
                placeholder="Enter sender name"
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label font-medium">
                <FaUser className="inline mr-2" /> Receiver Name
              </label>
              <input
                type="text"
                name="receiverName"
                placeholder="Enter receiver name"
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label font-medium">
                <FaMapMarkerAlt className="inline mr-2" /> Pickup Address
              </label>
              <input
                type="text"
                name="pickupAddress"
                placeholder="Pickup location"
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label font-medium">
                <FaMapMarkerAlt className="inline mr-2" /> Delivery Address
              </label>
              <input
                type="text"
                name="deliveryAddress"
                placeholder="Delivery location"
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label font-medium">
                <FaBox className="inline mr-2" /> Parcel Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                placeholder="e.g. 2"
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label font-medium">
                <FaTruck className="inline mr-2" /> Service Type
              </label>
              <select
                name="serviceType"
                className="select select-bordered w-full"
                onChange={handleChange}
              >
                <option value="standard">Standard Delivery</option>
                <option value="express">Express Delivery</option>
                <option value="international">International Delivery</option>
              </select>
            </div>
          </div>

          <button className="btn btn-warning text-white mt-8 w-full">
            Confirm Booking
          </button>
        </div>

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaBox className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Book Online</h3>
            <p className="text-gray-600 text-sm">
              Fill out delivery details and confirm your booking.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaTruck className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">We Pick Up</h3>
            <p className="text-gray-600 text-sm">
              Our courier collects the parcel from your doorstep.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaClock className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Track your parcel until safe delivery.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-yellow-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Deliver Books With Confidence
          </h2>
          <p className="mb-6 text-lg">
            Trusted by thousands for safe and timely book deliveries.
          </p>
          <button className="btn bg-white text-yellow-600 hover:bg-gray-100 font-semibold">
            Track Your Booking
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookDelivery;
