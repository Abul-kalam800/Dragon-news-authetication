 import React from 'react';
import { Link } from 'react-router';
 
 const NewsDetailsCard = ({news}) => {
    return (
        <div className='p-5 border-base-300 border rounded-2xl'>
           <div className='flex justify-center px-5'>
           <img className='w-full object-cover h-[400px] rounded-xl' src={news.image_url} alt="" />

           </div>  
            <h1 className='text-4xl font-semibold p-5'>{news.title}</h1>
            <p className='p-5'>{news.details}</p>
            <Link to='/' className='btn btn-primary px-6 mx-5'>All news category</Link>
        </div>
    );
 };
 
 export default NewsDetailsCard;