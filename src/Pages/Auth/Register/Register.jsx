// 


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import registerImg from "../../../assets/login_Img.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="grid md:grid-cols-2 h-screen">

      {/* Left Side */}
      <div className="bg-white flex items-center justify-center">
        <img src={registerImg} className="w-[85%]" />
      </div>

      {/* Right Side */}
      <div className="bg-[#0c0c0c] text-white flex items-center justify-center px-10">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Create Your Account
          </h1>

          <p className="text-sm leading-6 mb-6 text-gray-300">
            Join the ultimate book community, publish your books 
            and start exploring a world of endless stories.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true })}
              className="w-full bg-[#dbcb6e] py-3 px-4 rounded text-black"
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}

            {/* Photo */}
            <input
              type="file"
              {...register("photo", { required: true })}
              className="w-full bg-[#dbcb6e] py-3 px-4 rounded text-black"
            />
            {errors.photo && <p className="text-red-500 text-sm">Photo is required</p>}

            {/* Email */}
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email", { required: true })}
              className="w-full bg-[#dbcb6e] py-3 px-4 rounded text-black"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}

            {/* Password */}
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,}$/
                })}
                className="w-full bg-[#dbcb6e] py-3 px-4 rounded text-black"
              />

              <span
                className="absolute right-4 top-3 cursor-pointer text-black text-xl"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirm", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match"
                })}
                className="w-full bg-[#dbcb6e] py-3 px-4 rounded text-black"
              />

              <span
                className="absolute right-4 top-3 cursor-pointer text-black text-xl"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            {errors.confirm && (
              <p className="text-red-500 text-sm">{errors.confirm.message}</p>
            )}

            <button className="w-full bg-yellow-500 py-2 rounded font-semibold">
              REGISTER
            </button>
          </form>

          <p className="mt-4 text-sm">
            Already have an account?
            <Link className="text-yellow-400" to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
