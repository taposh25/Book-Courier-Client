import React from "react";
import { useForm } from "react-hook-form";
import logImg from '../../../assets/login_Img.png'
import { Link, useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const{signInUser} = useAuth();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log('form data', data);
    signInUser(data.email, data.password)
    .then(result=>{
        console.log(result.user);
        navigate("/")
    })
    .catch(error=>{
        console.log(error);
    })
  };

  return (
    <div className="grid md:grid-cols-2 h-screen">
      
      {/* Left image */}
      <div className="bg-white flex items-center justify-center">
        <img src={logImg } className="w-[85%]" />
      </div>

      {/* Right Form */}
      <div className="bg-[#0c0c0c] text-white flex items-center justify-center px-10">
        
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Welcome to Book Courier!
          </h1>

          <p className="text-sm leading-6 mb-6 text-gray-300">
            Discover a seamless way to sell your books and unlock exclusive benefits.  
            Enjoy a hassle-free experience & save valuable time.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-yellow-400">
            Login to Your Account!
          </h2>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">

            {/* Email */}
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email", { required: true })}
              className="w-full bg-[#dbcb6e] py-3 px-4 rounded text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}

            {/* Password */}
            <input
              type="password"
              placeholder="Enter Password"
              {...register("password", { required: true })}
              className="w-full bg-[#dbcb6e] py-3 px-4 rounded text-black"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}

            <p className="text-right text-sm hover:text-yellow-400 cursor-pointer">
              Forgot Password?
            </p>

            <button className="w-full bg-yellow-500 py-2 rounded font-semibold">
              LOGIN
            </button>
          </form>

          {/* create acc */}
          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <Link className="text-yellow-400" to="/register">
              Create an account
            </Link>
          </p>

        <SocialLogin></SocialLogin>

                    

        </div>
      </div>
    </div>
  );
};

export default Login;
