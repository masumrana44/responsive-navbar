
import React from 'react';
import Feature from '../Features/Feature';
 
const PricingOption = ({option}) => {
     
    return (
        <div className=' rounded-md p-5 border bg-indigo-200 mt-5  relative'>
            <div>
               <h5 className='text-6xl font-bold inline-table text-white' >{option.name}</h5>
               <span className='text-2xl text-white '>/mon</span>
               <p>Price:{option.price}</p>
            </div>
           
           <div>
            {
            option.features.map((feature,idx)=><Feature key={idx} feature={feature}/>)
            }
           </div>
           <div className=''>
                <button className='border bg-green-400 w-60  p-2 rounded-lg' type="">Buy Now</button>
            </div>
        </div>
    );
};

export default PricingOption;