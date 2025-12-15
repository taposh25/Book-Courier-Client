import React from 'react';
import { FaLock } from 'react-icons/fa6';
import { Link } from 'react-router';



const Forbidden = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl text-center">
                <div className="card-body items-center">
                    
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-error/10 text-error mb-4">
                        <FaLock className="text-4xl" />
                    </div>

                    <h2 className="card-title text-2xl font-bold text-error">
                        Access Forbidden
                    </h2>

                    <p className="text-gray-500">
                        Sorry! You do not have permission to access this page.
                        This area is restricted for authorized users only.
                    </p>

                    <div className="card-actions mt-6 gap-3">
                        <Link to="/" className="btn btn-primary">
                            Go Home
                        </Link>
                        <Link to="/dashboard" className="btn btn-outline">
                            Dashboard
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Forbidden;
