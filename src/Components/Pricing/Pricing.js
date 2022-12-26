import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption=[
        {id:1,name:'Free',price:0,features:[
            'EveryThing on Free',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai feature',
            'Ajaira Feature'
        ]},
        {id:2,name:'Medium',price:9.923,features:[
            'EveryThing on Free',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai feature',
            'Ajaira Feature'
        ]},
        {id:3,name:'Premimum',price:12.45,features:[
            'EveryThing on Free',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai feature',
            'Ajaira Feature'
        ]},
        {id:4,name:'Extra Premimum',price:100,features:[
            'EveryThing on Free',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai feature',
            'Ajaira Feature'
        ]},
        {id:5,name:'Extra Ordinary Premimum',price:500,features:[
            'EveryThing on Free',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai feature',
            'Ajaira Feature'
        ]},
        {id:6,name:'Extra High Quility',price:1000,features:[
            'EveryThing on Free',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai feature',
            'Ajaira Feature'
        ]}
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-green-400 p-10 text-white'>Best Deal of the Town</h2>
           <div className='grid grid-cols-3 gap-3 '>
           {
                pricingOption.map(option=><PricingOption key={option.id} option={option} />)
            }
           </div>
        </div>
    );
};

export default Pricing;