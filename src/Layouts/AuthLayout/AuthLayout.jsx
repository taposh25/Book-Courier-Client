import React from 'react';

import { Outlet } from 'react-router';

import Logo from '../../component/Logo/Logo';

const AuthLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Logo></Logo>
            <div className='flex items-center'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
              
            </div>
        </div>
    );
};

export default AuthLayout;