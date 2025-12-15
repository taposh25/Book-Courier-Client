import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const SocialLogin = () => {
    const {signInGoogle } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleGoogleSignIn = ()=>{
        signInGoogle()
        .then(result=>{
            console.log(result.user);
           
            
             // Create user in the database
          const userInfo = {
            email: result.user.email,
            displayName: result.user.displayName,
             photoURL: result.user.photoURL
          }
          axiosSecure.post('/users',userInfo)
          .then(res=>{
            console.log('user data has been stored', res.data)
             navigate("/");
          })
        })
        .catch(error=>{
            console.log(error)
        })

    }
    return (
        <div>
        {/* google login */}
          <button onClick={handleGoogleSignIn}
          className="border mt-4 py-2 px-4 w-full rounded flex justify-center items-center cursor-pointer gap-3">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5"/>
            Login with Google
          </button>
        </div>
    );
};

export default SocialLogin;