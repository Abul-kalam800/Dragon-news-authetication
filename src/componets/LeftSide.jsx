 import React, { Suspense } from 'react';
import Categoris from '../pages/Categoris';
import Loding from './Loding';
 
 const LeftSide = () => {
    return (
        <div className='sticky top-5'>
            <Suspense fallback={<Loding></Loding>}>

            <Categoris></Categoris>
            </Suspense>
        </div>
    );
 };
 
 export default LeftSide;