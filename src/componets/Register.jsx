import React, { use, useState } from 'react';
import { Link, useNavigate} from 'react-router';
import { AuthContex } from '../provider/AuthProvider';

const Register = () => {
    
    const [name, setName] = useState();
    const { creatUser,setUser, updatedProfile} = use(AuthContex)
    
    const navigation = useNavigate();
  
   
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photo, email, password)

        if (name.length < 5) {
            return setName('at least five charecto give')
        }

        creatUser(email, password)
            .then(result => {
                const user = result.user;
                // updated profile 
                updatedProfile({displayName: name, photoURL: photo})
                .then(()=>{
                    
                    setUser({...user, displayName: name, photoURL: photo});
                   navigation('/');
                })
                .catch(error=>{
                    console.log(error)
                    setUser(user)
                })

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='card max-w-sm mx-auto mt-5 shadow-2xl p-4 bg-base-100 '>
            <h1 className='text-3xl font-semibold text-center py-5'>Register Your account </h1>
            <form onSubmit={handleRegister} className='grid grid-cols-1 space-y-2 px-5'>
                <label className='label'>Name</label>
                {name && <p className='text-red-300'>{name}</p>}
                <input type="text" name="name" className='input' placeholder='Name' required />
                <label className='label'>Photo</label>
                <input type="text" name="photo" className='input' placeholder='Photo-URL' required/>
                <label className='label'>Email</label>
                <input type="text" name="email" className='input' placeholder='Email' required />
                <label className='label'>Password</label>
                <input type="password" name="password" className='input' placeholder='Password' required />
                <button type='submit' className='btn btn-neutral mt-4 w-full'>Register</button>
                <p className='mt-3 font-semibold pb-5'> Already have you register?go <Link to='/auth/login' className='text-blue-600'>Login</Link></p>

            </form>

        </div>
    );
};
export default Register;