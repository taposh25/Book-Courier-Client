

import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const MyBooks = () => {
  const axiosSecure = useAxiosSecure();
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 8;

  const fetchBooks = () => {
    axiosSecure
      .get(`/books`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      text: "This book will be deleted permanently!",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/books/${id}`)
        .then((res) => {
          Swal.fire("Deleted!", "Book has been deleted!", "success");
          console.log(res);
          fetchBooks();
        });
      }
    });
  };

  
  const paginatedBooks = books.slice(page * limit, (page + 1) * limit);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Books</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {paginatedBooks.map((book) => (
          <div
            key={book._id}
            className="rounded bg-white shadow-lg overflow-hidden"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-gray-500">Author: {book.author}</p>
              <p className="font-bold text-blue-600">Price: ${book.price}</p>

              <button
                onClick={() => handleDelete(book._id)}
                className="btn btn-error btn-sm mt-3"
              >
                Delete Book
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="btn btn-outline"
        >
          Prev
        </button>

        <button
          disabled={(page + 1) * limit >= books.length}
          onClick={() => setPage(page + 1)}
          className="btn btn-outline"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyBooks;
