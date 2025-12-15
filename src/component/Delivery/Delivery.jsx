import React from "react";
import { FaShieldAlt, FaShippingFast } from "react-icons/fa";
import { FaBoxOpen, FaGlobe } from "react-icons/fa6";


const Delivery = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">
          International Delivery
        </h1>
        <p className="text-gray-700 text-lg mb-12 max-w-3xl">
          Send books and parcels worldwide with confidence. Our international
          courier service ensures safe, fast, and reliable delivery across borders.
        </p>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaGlobe className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
            <p className="text-gray-600 text-sm">
              Deliver books to over 200+ countries with trusted global partners.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaShippingFast className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600 text-sm">
              Express and economy options tailored for international deliveries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaBoxOpen className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe Packaging</h3>
            <p className="text-gray-600 text-sm">
              Special packaging for books to prevent damage during transit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaShieldAlt className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tracking & Insurance</h3>
            <p className="text-gray-600 text-sm">
              Real-time tracking and optional insurance for peace of mind.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            How International Delivery Works
          </h2>

          <ol className="space-y-4 text-gray-700 list-decimal list-inside">
            <li>Book your international shipment online or at our service point.</li>
            <li>Securely pack your books using our recommended packaging.</li>
            <li>We handle customs documentation and export procedures.</li>
            <li>Track your parcel in real time until delivery is completed.</li>
          </ol>
        </div>

        {/* Call to Action */}
        <div className="bg-yellow-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Ship Internationally?
          </h2>
          <p className="mb-6 text-lg">
            Deliver your books worldwide with our trusted international courier service.
          </p>
          <button className="btn bg-white text-yellow-600 hover:bg-gray-100 font-semibold">
            Get Shipping Quote
          </button>
        </div>

      </div>
    </div>
  );
};

export default Delivery;
