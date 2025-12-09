import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { IoBook } from "react-icons/io5";

;

const PostBook = () => {

  const { register, handleSubmit, reset } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    data.price = parseFloat(data.price);
    data.librarian = user?.email;   // createdAt remove

    Swal.fire({
      title: "Add this book?",
      text: "Please confirm!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/books", data)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Book Added Successfully!",
                timer: 2000,
              });
              reset();
              navigate("/all-books");
            }
          });
      }
    });
  };

  return (
    <div className="p-8 bg-base-200 rounded-xl max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Add a New Book <IoBook />
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">

        <input type="text" {...register("title")} placeholder="Book Title" className="input input-bordered w-full" required />

        <input type="text" {...register("author")} placeholder="Author Name" className="input input-bordered w-full" required />

        <input type="number" {...register("price")} placeholder="Price" className="input input-bordered w-full" required />

        <input type="text" {...register("image")} placeholder="Image URL" className="input input-bordered w-full" required />

        <input type="text" {...register("location")} placeholder="Location" className="input input-bordered w-full" />

        <select {...register("category")} className="select select-bordered w-full">
          <option>Novel</option>
          <option>Story</option>
          <option>Science</option>
          <option>Kids</option>
          <option>Translation</option>
        </select>

        <input type="submit" className="btn btn-secondary mt-4 text-white" value="Add Book" />

      </form>
    </div>
  );
};

export default PostBook;
