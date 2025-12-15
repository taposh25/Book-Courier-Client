
import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const Rider = () => {
   
    const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRiderApplication = (data) => {
    // console.log("Rider Data:", data);
    axiosSecure.post("/riders",data)
    .then(res=>{
      if(res.data.insertedId){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
      }
     
    })
  
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Rider Registration Form
      </h2>

      <form onSubmit={handleSubmit(handleRiderApplication)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Full Name */}
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            className="input input-bordered w-full"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            {...register("email", { required: "Email is required" })}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1">Phone Number</label>
          <input
            className="input input-bordered w-full"
            {...register("phone", { required: "Phone is required" })}
          />
        </div>

        {/* Age */}
        <div>
          <label className="block mb-1">Age</label>
          <input
            type="number"
            className="input input-bordered w-full"
            {...register("age", { required: "Age is required", min: 18 })}
          />
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="block mb-1">Vehicle Type</label>
          <select
            className="select select-bordered w-full"
            {...register("vehicle", { required: true })}
          >
            <option value="">Select</option>
            <option value="bike">Bike</option>
            <option value="cycle">Cycle</option>
            <option value="car">Car</option>
          </select>
        </div>

        {/* License Number */}
        <div>
          <label className="block mb-1">License Number</label>
          <input
            className="input input-bordered w-full"
            {...register("license", { required: "License is required" })}
          />
        </div>

        {/* Address (Full Width) */}
        <div className="md:col-span-2">
          <label className="block mb-1">Address</label>
          <textarea
            className="textarea textarea-bordered w-full"
            {...register("address", { required: "Address is required" })}
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-4">
          {/* <button className="btn btn-neutral px-10">Register Rider</button> */}
      
             <button className="btn btn-secondary px-10">
                        Rider Register
                        
          </button>
        
        </div>
      </form>
    </div>
  );
};

export default Rider;
