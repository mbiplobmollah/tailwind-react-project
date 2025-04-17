import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCart = ({pricing}) => {
    const {name,price,description,features} = pricing
    return (
        <div  className='flex  flex-col border bg-amber-600 p-4 rounded-2xl mx-4'>
            {/* card header  */}
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body  */}
            <div className='bg-amber-200 p-4 rounded-2xl mt-10 flex-1'>

                <p>{description}</p>
                {
                    features.map((feature,index)=><PricingFeature key={index} feature={feature}></PricingFeature>)
                }
                
            </div>
            <button class="btn my-4 bg-black text-white rounded-2xl w-full">Subscribe</button>
        </div>
    );
};

export default PricingCart;