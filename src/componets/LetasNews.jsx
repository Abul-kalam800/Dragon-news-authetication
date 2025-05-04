import React from 'react';

const LetasNews = ({newscategory }) => {
    return (
        <div className='flex justify-center gap-x-7 font-bold '>
           {newscategory.title}
        </div>
    );
};

export default LetasNews;