import React from "react";

// Images
import deliveryImg from "../../assets/delivery.png";
import supportImg from "../../assets//support.png";
import logisticsImg from "../../assets/logistic.jpg";

const Careers = () => {
  const jobs = [
    {
      title: "Delivery Executive",
      description:
        "Responsible for timely and safe delivery of books to customers. Must know local routes and handle packages with care.",
      image: deliveryImg,
    },
    {
      title: "Customer Support",
      description:
        "Handle customer inquiries, track orders, and ensure smooth communication between customers and delivery teams.",
      image: supportImg,
    },
    {
      title: "Logistics Manager",
      description:
        "Plan delivery routes, manage inventory flow, and supervise courier operations for maximum efficiency.",
      image: logisticsImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">
          Careers at Book Courier
        </h1>
        <p className="text-gray-700 text-lg mb-12">
          Join our professional team and help us deliver knowledge across the country.
        </p>

        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 gap-8"
            >
              {/* Image */}
              <div className="md:w-1/3">
                <img
                  src={job.image}
                  alt={job.title}
                  className="rounded-lg w-full h-56 object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {job.description}
                </p>
                <button className="btn btn-warning text-white">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
