import React, { use } from 'react';
import { NavLink } from 'react-router';

const catagoriesPromies = fetch('/categories.json').then(res => res.json());
const Categoris = () => {
    const categorisData = use(catagoriesPromies);
  

    return (
        <div>
            <h1 className='font-semibold text-xl' >All Category :({categorisData.length})</h1>
            <div className='grid grid-cols-1 mt-5 gap-7'>
                {
                    categorisData.map(category=>
                        
                        <NavLink  key={category.id}
                        className="btn bg-base-100 border-0  hover:bg-base-200  font-semibold text-accent"
                        to={`/catagories/${category.id}`}>
                            
                            {category.name}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Categoris;