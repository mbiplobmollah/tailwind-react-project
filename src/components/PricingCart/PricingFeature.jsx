import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    // console.log(feature)
    return (
        <p className='bg-orange-200 flex gap-2 p-4 rounded-2xl my-2'>
        <CircleCheckBig/> {feature}   
        </p>
    );
};

export default PricingFeature;