import React from "react";
import aboutImg from '../../../assets/About.png'

const AboutUs = () => {
  return (
    <div className="bg-black text-white">

      {/* Top Image */}
      <div>
        <img src={aboutImg} className="w-full h-[400px] object-cover" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-yellow-400 mb-6">About Us</h2>

        <p className="text-gray-300 leading-7">
          Welcome to Book Courier, your trusted book delivery and exchange service.
          We help students, book lovers, sellers, and buyers connect faster through
          our courier network. Whether you want to buy, sell, exchange or donate
          books, Book Courier makes the entire process smooth, safe, and affordable.
        </p>

        {/* Branch Section */}
        <h2 className="mt-12 text-3xl font-bold text-yellow-400">
          Our Branch Network
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-10">

          {/* Branch 1 */}
          <div className="text-center">
            <h3 className="text-xl text-yellow-400 font-semibold">Dhaka</h3>
            <p>Main City, Gulshan Area</p>
            <p>Contact: 01234-567890</p>
            <p>Mon-Sun: 10 AM - 7 PM</p>
            <p>Package & Courier Services</p>
          </div>

          {/* Branch 2 */}
          <div className="text-center">
            <h3 className="text-xl text-yellow-400 font-semibold">Chittagong</h3>
            <p>Main City, Agrabad</p>
            <p>Contact: 01234-567890</p>
            <p>Mon-Sun: 10 AM - 7 PM</p>
            <p>Book Delivery & Exchange</p>
          </div>

          {/* Branch 3 */}
          <div className="text-center">
            <h3 className="text-xl text-yellow-400 font-semibold">Rajshahi</h3>
            <p>Main City, Zero Point</p>
            <p>Contact: 01234-567890</p>
            <p>Mon-Sun: 10 AM - 7 PM</p>
            <p>Student Book Service</p>
          </div>

        </div>

        {/* Bottom Paragraph */}
        <p className="mt-12 text-gray-300 leading-7">
          At Book Courier, we believe that books have the power to change lives.
          Our mission is to make books easily available in every corner of
          Bangladesh. We are continuously expanding our network and delivery
          services to provide you the fastest and most reliable book courier
          experience.
        </p>

      </div>

    </div>
  );
};

export default AboutUs;
