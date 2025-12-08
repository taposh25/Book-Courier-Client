import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router';

const SocialLogin = () => {
    const {signInGoogle } = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = ()=>{
        signInGoogle()
        .then(result=>{
            console.log(result);
            navigate("/")
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