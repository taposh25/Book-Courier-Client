import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer';


const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto bg-gray-400'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default RootLayout;