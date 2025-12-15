import React, { useState } from "react";
import { FaCheckCircle, FaMapMarkedAlt, FaSearch } from "react-icons/fa";
import { FaBox, FaTruck } from "react-icons/fa6";

const TrackParcel = () => {
  const [trackingId, setTrackingId] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">
          Track Your Parcel
        </h1>
        <p className="text-gray-700 text-lg mb-10">
          Enter your tracking number to get real-time updates on your parcel’s
          location and delivery status.
        </p>

        {/* Tracking Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Tracking Number"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="input input-bordered w-full"
            />
            <button className="btn btn-warning text-white flex items-center gap-2">
              <FaSearch /> Track Parcel
            </button>
          </div>
        </div>

        {/* Tracking Status (UI Preview) */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Shipment Status
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaBox className="text-yellow-500 text-2xl" />
              <div>
                <p className="font-semibold">Order Received</p>
                <p className="text-sm text-gray-500">
                  Parcel information has been received.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaTruck className="text-yellow-500 text-2xl" />
              <div>
                <p className="font-semibold">In Transit</p>
                <p className="text-sm text-gray-500">
                  Your parcel is on the way to the destination.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkedAlt className="text-yellow-500 text-2xl" />
              <div>
                <p className="font-semibold">Out for Delivery</p>
                <p className="text-sm text-gray-500">
                  Courier is delivering your parcel today.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <div>
                <p className="font-semibold">Delivered</p>
                <p className="text-sm text-gray-500">
                  Parcel delivered successfully.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
            <p className="text-gray-600 text-sm">
              Track your parcel with live location and status updates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Secure Tracking</h3>
            <p className="text-gray-600 text-sm">
              Your shipment details are protected and private.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
            <p className="text-gray-600 text-sm">
              Track both local and international deliveries easily.
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-yellow-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Help With Tracking?
          </h2>
          <p className="mb-6 text-lg">
            If your tracking number is not working, contact our support team.
          </p>
          <button className="btn bg-white text-yellow-600 hover:bg-gray-100 font-semibold">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};

export default TrackParcel;
