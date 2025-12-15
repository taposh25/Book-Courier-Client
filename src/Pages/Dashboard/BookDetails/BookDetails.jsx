
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
// import bookImg from "../../../assets/bookImage.png";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth(); 

  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1) fetch single book
  const { data: book = {}, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books/${id}`);
      
      return res.data;
    },
    enabled: !!id,
  });

  // 2) Order mutation
  const orderMutation = useMutation({
    mutationFn: async (orderPayload) => {
      const res = await axiosSecure.post("/orders", orderPayload);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["orders", user?.email]);
      setIsModalOpen(false);
      Swal.fire({
        icon: "success",
        title: "Order placed!",
        text: "Your order is created and is pending. Payment status: unpaid.",
        timer: 2000,
        showConfirmButton: false,
      });
    },
    onError: (err) => {
      Swal.fire("Error", err?.response?.data?.error || "Failed to place order", "error");
    },
  });

  // 3) Form
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: user?.displayName || "",
      userEmail: user?.email || "",
      phone: "",
      address: "",
    },
  });

  const onSubmit = (formData) => {
    if (!user) {
      Swal.fire("Please login", "You need to login to place an order.", "warning");
      return;
      
    }

    const payload = {
      bookId: id,
      bookTitle: book.title,
      bookImage: book.image,
      price: book.price,
      userEmail: user.email,
      name: user.displayName || formData.name,
      phone: formData.phone,
      address: formData.address,
      // server also sets status/paymentStatus/createdAt, but safe to add here
      status: "pending",
      paymentStatus: "unpaid",
    };

    // confirm dialog
    Swal.fire({
      title: `Place order for "${book.title}"?`,
      html: `Price: <strong>Rs. ${book.price}</strong>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, place order",
    }).then((result) => {
      if (result.isConfirmed) {
        orderMutation.mutate(payload);
        reset(); // reset form
      }
    });
  };

  if (isLoading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto bg-base-200 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT - Image */}
        <div className="bg-white p-6 rounded shadow-md">
          <img src={book.image} alt={book.title} className="w-full object-cover rounded" />
        </div>

        {/* RIGHT - Info */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{book.title}</h1>
          <p className="text-lg font-bold text-gray-600">by {book.author}</p>

          <div className="flex items-center gap-4 mt-3">
            <span className="badge badge-outline">Category: {book.category}</span>
            {book.location && <span className="text-sm text-success">Available at: {book.location}</span>}
          </div>

          <div className="mt-4 text-3xl font-extrabold text-yellow-600">Rs. {book.price}</div>

          <div className="flex gap-3 mt-6">
            <button onClick={() => setIsModalOpen(true)} className="btn btn-secondary">
              Order Now
            </button>
            <button onClick={() => window.print()} className="btn btn-ghost">
              Print
            </button>
          </div>

          <div className="mt-6 bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2">About this book</h3>
            <p className="text-gray-700 leading-relaxed">{book.aboutThisBook || book.details || "No description available."}</p>
          </div>
        </div>
      </div>

      {/* Modal (DaisyUI) */}
      {isModalOpen && (
        <div className="modal modal-open z-50">
          <div className="modal-box max-w-xl">
            <h3 className="font-bold text-lg">Place Order for <span className="font-semibold">{book.title}</span></h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              {/* Name (readonly) */}
              <div>
                <label className="label"><span className="label-text">Name</span></label>
                <input
                  type="text"
                  
                  {...register("name")}
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>

              {/* Email (readonly) */}
              <div>
                <label className="label"><span className="label-text">Email</span></label>
                <input
                  type="email"
                 
                  {...register("userEmail")}
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="label"><span className="label-text">Phone Number</span></label>
                <input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  {...register("phone", { required: "Phone is required", minLength: { value: 8, message: "Enter valid phone" } })}
                  className="input input-bordered w-full"
                />
                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
              </div>

              {/* Address */}
              <div>
                <label className="label"><span className="label-text">Address</span></label>
                <textarea
                  {...register("address", { required: "Address is required" })}
                  className="textarea textarea-bordered w-full"
                  placeholder="Delivery address"
                />
                {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address.message}</p>}
              </div>

              <div className="modal-action">
                <button type="button" onClick={() => { setIsModalOpen(false); reset(); }} className="btn btn-ghost">Cancel</button>

                <button type="submit" className={`btn btn-neutral ${orderMutation.isLoading ? "loading" : ""}`}>
                  {orderMutation.isLoading ? "Placing..." : "Pleace Order"}
                  
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
