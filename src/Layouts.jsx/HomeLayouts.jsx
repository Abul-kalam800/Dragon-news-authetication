
import React from 'react';
import Navbar from '../componets/Navbar';
import Header from '../componets/Header';
import User from '../componets/User';
import LeftSide from '../componets/LeftSide';
import { Outlet, useNavigate } from 'react-router';
import Righaside from '../componets/Righaside';
import Qzone from '../componets/Qzone';
import Loding from '../componets/Loding';

const HomeLayouts = () => {
    const {state}= useNavigate();
    return (
        <div>
            <Header></Header>
            {import.meta.env.VITE_name}
            <header className=' w-11/12 mx-auto my-3 space-y-9'>
                <Navbar></Navbar>
            </header>
               <nav className='w-11/12 mx-auto my-3 sticky top-0'>
                <User></User>
               </nav>
            <main className='w-11/12 mx-auto  grid grid-cols-12 my-3'>
                <aside className='col-span-3'>
                  {state=="loding"? <Loding></Loding>: <LeftSide></LeftSide>}  
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 '>
                    <Righaside></Righaside>
                   
                </aside>
            </main>

        </div>
    );
};

export default HomeLayouts;