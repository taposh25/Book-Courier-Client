
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router";


const MyOrders = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Fetch all orders of logged-in user
  const { data: orders = [], isLoading, refetch } = useQuery({
    queryKey: ["orders", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?email=${user.email}`);
      return res.data;
    }
  });

  // Cancel Order Handler
  const handleCancel = async (orderId) => {
    const result = await Swal.fire({
      title: "Cancel Order?",
      text: "Are you sure you want to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/orders/${orderId}`);
        if (res.data.deletedCount || res.data.success) {
          Swal.fire("Cancelled", "Order cancelled successfully", "success");
          refetch(); // Refresh orders
        } else {
          Swal.fire("Error", "Failed to cancel order", "error");
        }
      } catch (err) {
        Swal.fire("Error", "Failed to cancel order", "error");
        console.log(err);
      }
    }
  };

  if (isLoading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">You have no orders yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {orders.map(order => (
            <div
              key={order._id}
              className="card card-side bg-base-100 shadow-md hover:shadow-lg transition-all"
            >
              <figure className="w-48 p-3">
                <img
                  src={order.bookImage}
                  alt={order.bookTitle}
                  className="w-full h-32 object-cover rounded"
                />
              </figure>

              <div className="card-body">
                <h3 className="font-semibold">{order.bookTitle}</h3>

                <p className="text-sm text-gray-600">
                  Price: BDT {order.price}
                </p>

                <p className="text-sm">
                  Status: <span className="font-medium">{order.status}</span>
                </p>

                <p className="text-sm">
                  Payment:{" "}
                  <span className="font-medium">{order.paymentStatus}</span>
                </p>

                {/* Buttons */}
                <div className="card-actions">

                  {/* Pay Now button only when pending + not paid */}
                  {order.status === "pending" && order.paymentStatus !== "paid" && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-sm btn-neutral">
                        Pay Now
                      </button>
                    </Link>
                  )}

                  {/* Cancel Button only when pending */}
                  {order.status === "pending" && (
                    <button
                      onClick={() => handleCancel(order._id)}
                      className="btn btn-sm btn-ghost"
                    >
                      Cancel
                    </button>
                  )}

                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;


