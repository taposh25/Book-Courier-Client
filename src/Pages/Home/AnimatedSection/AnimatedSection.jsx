import React from 'react';

const AnimatedSection = () => {
    return (
       <div className=''>
         <div>
        {/* Stats Section */}
        <div className="bg-neutral py-20">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">
            Our Achievement
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">

            <div className="text-center">
            <h3 className="text-4xl text-yellow-400 animate-bounce font-bold">5K+</h3>
            <p className="text-gray-300">Delivered Books</p>
            </div>

            <div className="text-center">
            <h3 className="text-4xl text-yellow-400 animate-bounce font-bold">350+</h3>
            <p className="text-gray-300">Partner Sellers</p>
            </div>

            <div className="text-center">
            <h3 className="text-4xl text-yellow-400 animate-bounce font-bold">64</h3>
            <p className="text-gray-300">District Coverage</p>
            </div>

            <div className="text-center">
            <h3 className="text-4xl text-yellow-400 animate-bounce font-bold">100%</h3>
            <p className="text-gray-300">Secure Delivery</p>
            </div>

        </div>
        </div>

        </div>
         {/* Mission */}
            <div className="max-w-4xl mx-auto py-20 px-6">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Mission</h2>

            <p className="text-gray-300 leading-7">
                Our mission is to make book buying, selling and exchanging easier for
                students in every district of Bangladesh. We want to make educational
                books affordable and accessible to every reader.
            </p>
            </div>

       </div>
        
    );
};

export default AnimatedSection;