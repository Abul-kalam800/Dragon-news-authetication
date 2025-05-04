 import React from 'react';
 import logo  from '../assets/logo.png';
import { format } from 'date-fns';
 const Header = () => {
    const result = format(new Date(),'eeee dd MMMM yyyy')
    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-5'>
         <img className='w-[400px]' src={logo} alt="" />
         <p className='text-accent'>Journalism Without Fear or Favour</p>
         <p>{result}</p>
        </div>
    );
 };
 
 export default Header;