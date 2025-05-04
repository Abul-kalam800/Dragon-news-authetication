import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='text-xl font-bold my-8'>Find us on</h1>
            <div >
                <p className='flex gap-7 border border-base-300 p-4 hover:text-blue-500 hover:font-bold cursor-pointer items-center'> <span><FaFacebookF></FaFacebookF></span> facebook </p>
                <p className='flex gap-7 border border-base-300 p-4 hover:text-blue-500 hover:font-bold cursor-pointer items-center'> <span><FaTwitter></FaTwitter></span>twitter </p>
                <p className='flex gap-7 border border-base-300 p-4 hover:text-blue-500 hover:font-bold cursor-pointer items-center'> <span><FaInstagram></FaInstagram></span>Instagram </p>
            </div>
        </div>
    );
};

export default FindUs;