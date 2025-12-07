import React from 'react';
import bookLogo from '../../assets/Book_Logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to={"/"}>
        <div className='flex items-end '>
            <img src={bookLogo} alt="" />
            
        </div>
        </Link>
    );
};

export default Logo;