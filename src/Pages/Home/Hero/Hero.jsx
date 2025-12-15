// import React from "react";
// import heroImg from '../../../assets/heroBook.png'

// const Hero = () => {
//   return (
//     <div className="relative w-full min-h-[85vh] bg-[#070707] text-center px-3 flex flex-col items-center justify-center">

//       <h1 className="text-3xl md:text-5xl text-yellow-500 font-bold mb-4">
//         The Book Lover's Dreamland Awaits!
//       </h1>

//       <p className="text-gray-300 max-w-xl leading-relaxed mb-6 text-sm md:text-lg">
//         Welcome to the ultimate book lover's paradise! Join our community and contribute to a
//         world of stories!
//       </p>

//       <div className="flex gap-2 mb-10">
//         <input type="text" placeholder="Search a book…" className="px-4 py-2 rounded-lg border bg-black border-yellow-600 text-white w-64"/>
//         <button className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded-lg text-black font-semibold">
//           Search
//         </button>
//       </div>

//       <img src={heroImg} className="w-[280px] md:w-[450px]" alt="" />
//     </div>
//   );
// };

// export default Hero;




import React, { useState } from "react";
import heroImg from '../../../assets/heroBook.png';
import axios from "axios";

const Hero = () => {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!searchText.trim()) {
      setBooks([]);
      setSearched(false);
      return;
    }

    const res = await axios.get(
      `http://localhost:3000/books?search=${searchText}`
    );

    setBooks(res.data);
    setSearched(true);
  };

  return (
    <div className="relative w-full min-h-[85vh] bg-[#070707] text-center px-3 flex flex-col items-center justify-center">

      <h1 className="text-3xl md:text-5xl text-yellow-500 font-bold mb-4">
        The Book Lover's Dreamland Awaits!
      </h1>

      <p className="text-gray-300 max-w-xl mb-6">
        Search your favourite book
      </p>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search a book…"
          className="px-4 py-2 rounded-lg border bg-black border-yellow-600 text-white w-64"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-600 px-4 py-2 rounded-lg font-semibold"
        >
          Search
        </button>
      </div>

      {/* 🔽 Result */}
      {searched && (
        books.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {books.map(book => (
              <div key={book._id} className="border border-yellow-600 p-4 rounded">
                <h3 className="text-yellow-500">{book.title}</h3>
                <p className="text-gray-400 text-sm">{book.author}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">❌ No book found</p>
        )
      )}

      <img src={heroImg} className="w-[280px] md:w-[450px] mt-8" alt="" />
    </div>
  );
};

export default Hero;

