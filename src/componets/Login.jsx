import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContex } from '../provider/AuthProvider';

const Login = () => {
    const emailRef = useRef();
    const { logIn, resetPassword } = use(AuthContex)
    const navigate = useNavigate();
    const location = useLocation();
    const [erromsg, setErromsg] = useState();
    // console.log(location)
    const handleLogin = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        // console.log(
        //     email, password)
        setErromsg('')

        logIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(error => {
                // console.log(error)
                setErromsg(error.code);
            })


    }
    const forgetPasswordHandle = (e)=>{
        
        const email = emailRef.current.value;
      
        resetPassword(email)
        .then(()=>{
            alert('A send email for password reset, please check your password')

        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })   
    }

    return (
        <div>
            <div className='card max-w-sm mx-auto mt-9 shadow-2xl p-4 bg-base-100 '>
                <h1 className='text-3xl font-semibold text-center py-5'>Login  Your account </h1>
                <form onSubmit={handleLogin} className='grid grid-cols-1 space-y-4 px-5'>
                    <label className='label'>Email</label>
                    <input type="text" name="email" ref={emailRef} className='input' required />
                    <label className='label'>Password</label>
                    <input type="password" name="password" className='input' required />
                    <p onClick={forgetPasswordHandle} className='cursor-pointer hover:text-blue-500'>Forget password</p>
                    {erromsg && <p className='text-red-500 '>{erromsg}</p>}
                    <button className='btn btn-neutral mt-4 w-full'>Login</button>
                    <p className='mt-3 font-semibold pb-5'>Have you an account?go <Link to='/auth/register' className='text-blue-600'>Register</Link></p>

                </form>

            </div>

        </div>
    );
};

export default Login;