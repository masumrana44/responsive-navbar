import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';
const PhoneBar = () => {
    const [phones,setPhones]=useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const  PhonesLoaded=data.data.data;
            // console.log(PhonesLoaded)
            const phoneData=PhonesLoaded.map(phone=>{

                const parts=phone.slug.split('-');
                //  console.log(parts);
                 const price=parseInt(parts[1]);
                //  console.log(price)
                const singlePhone={
                 name:phone.phone_name,
                 price:price,
                }
                return singlePhone;
            
            }
            )
            setPhones(phoneData)
            
        })
        
    },[])
    console.log(phones)
    return (
        <div className='mt-10'>
           <AreaChart width={500} height={400} data={phones}>
           <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
           <XAxis dataKey='name'/>
           <YAxis/>
           <Tooltip/>
           </AreaChart>
        </div>
    );
};

export default PhoneBar;