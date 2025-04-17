import React, { use } from 'react';
import PricingCart from '../PricingCart/PricingCart';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise)


    return (
        <div>
            <div>
            <h2 className='text-5xl'>Get our Membership</h2>
            <div className='grid gap-8 md:grid-cols-2'>
                {/* {
                  pricingData.map(pricing=><PricingCart key={pricing.id} pricing={pricing}></PricingCart>)  
                } */}
                {
                    pricingData.map(pricing=><DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default PricingOptions;