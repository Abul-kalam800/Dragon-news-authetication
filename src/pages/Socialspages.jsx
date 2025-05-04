 import { GoogleAuthProvider } from 'firebase/auth';
import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';
import { AuthContex } from '../provider/AuthProvider';
 
 const Socialspages = () => {
    const {signInwithGoogle} = use(AuthContex);
    const providergoogle = new GoogleAuthProvider();
    const handleGoogle = ()=>{
        console.log('goole sign')
        // googlesign
        signInwithGoogle(providergoogle)
        .then(result=>{
            const user = result.user;
            console.log(user)

        })
        .ctacth(error=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    return (
        <div>
            <h2 className='font-semibold text-xl'>Login with</h2>
            <button  onClick={()=>handleGoogle()} className='btn btn-primary w-full my-2 btn-outline'><FaGoogle></FaGoogle> Login with google</button>
            <button  className='btn btn-secondary w-full my-2 btn-outline'><FaGithub></FaGithub> Login with Github</button>
        </div>
    );
 };
 
 export default Socialspages;