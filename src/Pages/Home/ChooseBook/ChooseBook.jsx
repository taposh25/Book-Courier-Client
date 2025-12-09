import React from 'react';
import choiceImg from '../../../assets/choiseImg.png'
import { NavLink } from 'react-router';

const ChooseBook = () => {
    return (
        <div className="bg-black text-white py-20 px-10">
               <h2 className='text-5xl'>Why Choose Book Courier</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            
                {/* Left Image */}
                <div className="flex justify-center">
                    <img src={choiceImg} className="w-96" alt="books" />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-4xl font-bold leading-tight">
                        Your favourite <span className="text-yellow-400">Reads</span> <br />
                        Are Here!
                    </h2>

                    <p className="text-gray-300 mt-5 leading-7">
                        Buy your favorite books online with ease! Enjoy exclusive offers
                        and discounts on selected titles. Dive into our collection and find
                        great deals that make reading more affordable.
                    </p>

                    {/* Stats */}
                    <div className="flex gap-10 mt-10">

                        <div>
                            <h3 className="text-3xl text-yellow-400 font-bold">800+</h3>
                            <p className="text-sm text-gray-300">Book Listing</p>
                        </div>

                        <div>
                            <h3 className="text-3xl text-yellow-400 font-bold">1K+</h3>
                            <p className="text-sm text-gray-300">Registered Members</p>
                        </div>

                        <div>
                            <h3 className="text-3xl text-yellow-400 font-bold">50+</h3>
                            <p className="text-sm text-gray-300">Branch Count</p>
                        </div>

                    </div>

                    {/* Button */}
                   <NavLink to="/about-us">
                     <button className="mt-10 btn border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black">
                        Explore More
                    </button>
                   </NavLink>

                </div>
            </div>

        </div>
    );
};

export default ChooseBook;
