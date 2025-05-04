 import React from 'react';
 import swimingImg from '../assets/swimming.png'
 import classImg from '../assets/class.png'
 import playgroundImg from '../assets/playground.png'
 
 const Qzone = () => {
    return (
        <div className='grid grid-cols-1 gap-6 mt-6'>
            <div>
                <img src={swimingImg} alt="swimming" />
            </div>
            <div>
                <img src={classImg} alt="swimming" />
            </div>
            <div>
                <img src={playgroundImg} alt="playgroud" />
            </div>
        </div>
    );
 };
 
 export default Qzone;