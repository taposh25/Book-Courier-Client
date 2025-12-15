import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaBox, FaGlobe, FaTruck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">
          Pricing Plans
        </h1>
        <p className="text-gray-700 text-lg mb-12 max-w-3xl">
          Transparent and affordable pricing for local and international book
          deliveries. No hidden charges—pay only for what you ship.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <FaBox className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Local Delivery</h3>
            <p className="text-gray-600 mb-4">Inside the city</p>
            <p className="text-4xl font-bold text-gray-800 mb-4">
              Rs-80<span className="text-lg font-medium"> / kg</span>
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Same-day or next-day delivery</li>
              <li>Real-time tracking</li>
              <li>Secure packaging</li>
            </ul>
            <button className="btn btn-warning text-white w-full">
              Get Started
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center border-2 border-yellow-500">
            <FaTruck className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Nationwide Delivery</h3>
            <p className="text-gray-600 mb-4">Across the country</p>
            <p className="text-4xl font-bold text-gray-800 mb-4">
              Rs-120<span className="text-lg font-medium"> / kg</span>
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>2-4 business days</li>
              <li>Tracking & SMS updates</li>
              <li>Cash on delivery available</li>
            </ul>
            <button className="btn btn-warning text-white w-full">
              Most Popular
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <FaGlobe className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">International</h3>
            <p className="text-gray-600 mb-4">Worldwide shipping</p>
            <p className="text-4xl font-bold text-gray-800 mb-4">
              Rs-950<span className="text-lg font-medium"> / kg</span>
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>7–12 business days</li>
              <li>Customs handling</li>
              <li>Insurance available</li>
            </ul>
            <button className="btn btn-warning text-white w-full">
              Ship Worldwide
            </button>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Weight-Based Pricing
          </h2>

          <table className="table w-full">
            <thead>
              <tr>
                <th>Weight</th>
                <th>Local</th>
                <th>Nationwide</th>
                <th>International</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to 1kg</td>
                <td>Rs-80</td>
                <td>Rs-120</td>
                <td>Rs-950</td>
              </tr>
              <tr>
                <td>1-3kg</td>
                <td>Rs-150</td>
                <td>Rs-220</td>
                <td>Rs-1800</td>
              </tr>
              <tr>
                <td>3-5kg</td>
                <td>Rs-250</td>
                <td>Rs-350</td>
                <td>Rs-3000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaCheckCircle className="text-3xl text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">No Hidden Fees</h3>
            <p className="text-gray-600 text-sm">
              What you see is what you pay—simple and transparent pricing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaCheckCircle className="text-3xl text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Book-Friendly Packaging</h3>
            <p className="text-gray-600 text-sm">
              Special care for books and documents.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaCheckCircle className="text-3xl text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Trusted Nationwide</h3>
            <p className="text-gray-600 text-sm">
              Thousands of happy customers across the country.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-yellow-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Send Your Books?
          </h2>
          <p className="mb-6 text-lg">
            Get an instant delivery quote and ship with confidence.
          </p>
          <button className="btn bg-white text-yellow-600 hover:bg-gray-100 font-semibold">
            Get Instant Quote
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
