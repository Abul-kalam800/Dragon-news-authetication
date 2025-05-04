import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userNav  from '../assets/user.png'
import { AuthContex } from '../provider/AuthProvider';

const User = () => {
   const {user,logOut} = use(AuthContex)
   const logOutHandle = ()=>{
  
     logOut()
     .then(result=>{
        // console.log(result)
        alert("log out sucessfully")
     })
     .catch(error=>{
        console.log(error)
     })
   }
    return (
        <div className='flex justify-between items-center sticky top-0'>
            <div className=''> {user && user.email} </div>
            <div className='nav flex items-center gap-6'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/carrer'>Carrer</NavLink>
            </div>
            <div className='user flex items-center gap-4'>
                <img className='w-full h-12' src={`${user? user.photoURL: userNav}`} alt="user" />
                {user? <Link onClick={logOutHandle} className='btn btn-secondary px-9'> Logout</Link>:
                
                
                <Link to='/auth/login' className='btn btn-secondary px-9'>Login</Link>
                }
            </div>
        </div>
    );
};

export default User;