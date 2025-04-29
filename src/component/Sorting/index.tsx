import React from 'react';
import Dropdown from '@/component/Dropdown/Item/index';
import { Option } from '@/types';

const option1: Option[] = ['Default sorting','Sort by popularity','Sort by average rating','Sort by latest','Sort by price: low to high','Sort by price: high to low'].map(label => ({ label }));

const Sorting: React.FC = () => {
  return (
    <div className='flex flex-col space-y-2 relative'>
      <div className="flex justify-center   items-center absolute right-5 z-10 bg-white">
      <Dropdown options={option1} text={['Sort']} />
    </div>
    </div>
  );
};

export default Sorting;

