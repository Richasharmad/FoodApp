import React from 'react';
import ShimmerDetailsCard from './ShimmerDetailsCard';

const ShimmerDetails = () => {
  return (
    <div className='mx-2 md:mx-40 xl:mx-80 '>
      <div className='flex flex-wrap justify-center'>
        <ShimmerDetailsCard />
        <ShimmerDetailsCard />
        <ShimmerDetailsCard />
        <ShimmerDetailsCard />
        <ShimmerDetailsCard />
        <ShimmerDetailsCard />
        <ShimmerDetailsCard />
        <ShimmerDetailsCard />
        <ShimmerDetailsCard />
      </div>
    </div>
  );
};

export default ShimmerDetails;
