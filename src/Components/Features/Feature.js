import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
     
    return (
        <div>
             <div className='flex  '>
                <CheckBadgeIcon className='w-7 h-7 text-green-400 ' />
                <p className='text-white '>{feature}</p>
            </div>
          
        </div>
    );
};

export default Feature;