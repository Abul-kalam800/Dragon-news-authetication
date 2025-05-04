 import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';
 
 const Socialspages = () => {
    return (
        <div>
            <h2 className='font-semibold text-xl'>Login with</h2>
            <button className='btn btn-primary w-full my-2 btn-outline'><FaGoogle></FaGoogle> Login with google</button>
            <button  className='btn btn-secondary w-full my-2 btn-outline'><FaGithub></FaGithub> Login with Github</button>
        </div>
    );
 };
 
 export default Socialspages;