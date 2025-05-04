 import React from 'react';
import User from './User';
import { Outlet } from 'react-router';
 
 const Authentication = () => {
    return (
        <div className='bg-base-200 min-h-svh'>
            <div className='w-11/12 mx-auto py-5 '>

           <User></User>
           <Outlet></Outlet>
            </div>
        </div>
    );
 };
 
 export default Authentication;