 import React from 'react';
import Socialspages from '../pages/Socialspages';
import Qzone from './Qzone';
import FindUs from './FindUs';
 
 const Righaside = () => {
    return (
        <div className='sticky top-12'>
           <Socialspages></Socialspages>
           <FindUs></FindUs>
           <Qzone></Qzone>
        </div>
    );
 };
 
 export default Righaside;