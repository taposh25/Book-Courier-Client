// import React, { useEffect, useState } from "react";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// const AllBooks = () => {
//   const axiosSecure = useAxiosSecure();
//   const [books, setBooks] = useState([]);
//   const [visible, setVisible] = useState(8); // initially show 8 books

//   useEffect(() => {
//     axiosSecure.get("/books")
//       .then(res => setBooks(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleSeeMore = () => {
//     setVisible(prev => prev + 8); // show 8 more each click
//   };

//   return (
//     <div className="p-8 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6 text-center">All Books</h2>

//       {books.length === 0 ? (
//         <p className="text-center">No books available</p>
//       ) : (
//         <>
//           <div className="grid md:grid-cols-3 gap-6">
//             {books.slice(0, visible).map(book => (
//               <div key={book._id} className="border rounded p-4 shadow hover:shadow-lg transition">
//                 <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded mb-4" />
//                 <h3 className="font-bold text-lg">{book.title}</h3>
//                 <p className="text-gray-600">Author: {book.author}</p>
//                 <p>Price: ${book.price}</p>
//                 <p>Category: {book.category}</p>
//                 {book.location && <p>Location: {book.location}</p>}
//               </div>
//             ))}
//           </div>

//           {visible < books.length && (
//             <div className="text-center mt-6">
//               <button 
//                 onClick={handleSeeMore} 
//                 className="btn btn-primary"
//               >
//                 See More
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default AllBooks;




import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router";

const AllBooks = () => {
  const axiosSecure = useAxiosSecure();
  const [books, setBooks] = useState([]);
  const [visible, setVisible] = useState(8); 

  useEffect(() => {
  
    axiosSecure.get("/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error("Error fetching books:", err)); 
  }, [axiosSecure]); 

  const handleSeeMore = () => {
    setVisible(prev => prev + 8);
  };
  
  // Placeholder for a proper Add to Cart handler
  // const handleAddToCart = (bookId) => {
  //     console.log(`Adding book with ID: ${bookId} to cart`);
  //     // Implement your cart logic here (e.g., dispatching an action, API call)
  // }

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      {/* Page Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-primary-focus">
        Explore All Books Here
      </h2>

      {books.length === 0 ? (
        <p className="text-center text-xl text-gray-500">No books available at the moment.</p>
      ) : (
        <>
          {/* Card Grid - Mobile: 2 cols, Tablet/Laptop: 4 cols */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {books.slice(0, visible).map(book => (
            
              <div 
                key={book._id} 
                className="card bg-base-100 border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Card Image */}
                <figure className="h-48 pt-4 px-4 overflow-hidden">
                
                    <img 
                        src={book.image} 
                        alt={book.title} 
                        className="w-full h-full object-contain rounded-sm"
                    />
                </figure>

                {/* Card Body and Details */}
                <div className="card-body p-3 sm:p-4 text-center items-center">
                  
                  {/* Title (Bold and slightly larger) */}
                  <h3 className="text-sm sm:text-lg font-bold leading-tight mt-1 mb-1">
                    {book.title}
                  </h3>

                  {/* Author */}
                  <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                    {book.author}
                  </p>

                  {/* Category and Price */}
                  <div className="text-xs sm:text-sm my-1 text-center">
                    <p className="font-medium text-secondary">
                        Category: {book.category}
                    </p>
                    <p className="font-extrabold text-lg text-primary mt-1">
                        Rs. {book.price} /-
                    </p>
                  </div>
                  
                  
                  <p className="text-xs text-success-content mt-1">
                      {book.location ? `Available at: ${book.location}` : 'Available across all branches'}
                  </p>


                  {/* Add to Cart Button */}
                  <div className="card-actions justify-center w-full mt-3">
                    {/* <button 
                      onClick={() => handleAddToCart(book._id)} 
                      className="btn btn-sm btn-ghost border border-gray-300 hover:bg-gray-100 normal-case w-full text-sm"
                    >
                      <IoCartOutline /> Add to Cart
                    </button> */}

                <Link to={`/dashboard/books/${book._id}`}>
                <button className="btn mt-3 ">View Details</button>
              </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          {visible < books.length && (
            <div className="text-center mt-12">
              <button 
                onClick={handleSeeMore} 
                className="btn btn-secondary btn-wide tracking-widest"
              >
                See More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllBooks;