import React from 'react';
import bookLogo from '../../assets/Book_Logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to={"/"}>
        <div className='flex items-center max-w-16 h-16 '>
            <img src={bookLogo} alt="" />
            <h2>Book Courier</h2>
        </div>
        </Link>
    );
};

export default Logo;