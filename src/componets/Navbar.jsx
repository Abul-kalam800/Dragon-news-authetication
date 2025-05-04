 import React from 'react';
 import Marquee from "react-fast-marquee";
 const Navbar = () => {
    return (
        <div className='flex items-center gap-9 bg-base-200 p-4'>
            <div className='bg-primary px-4 py-2 text-base-100'>Latest</div>
          <Marquee className='gap-9 'speed={100} pauseOnHover={true}>
            
            <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            <p className='font-bold'>Bangladesh's Export Earnings Show Strong Growth in Q1 2025</p>
            <p className='font-bold'>Bangladesh National Football Team Prepares for Upcoming International Friendly</p>

          </Marquee>
        </div>
    );
 };
 
 export default Navbar;