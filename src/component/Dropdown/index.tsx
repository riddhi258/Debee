import React from 'react';
import Dropdown from '@/component/Dropdown/Item/index';
import RangeSlider from '../Multi-Slider/App/Apps';

import { Option } from '@/types';

// const option1: React.ReactNode[] = [<RangeSlider />];
const option1: Option[] = [{label: 'Select Price Range', component: <RangeSlider /> }];
const option2: Option[] = ['Baby', 'Baby Boxes + Layettes', 'Hospital Cuddle Box™', 'The Modern Layette', 'Baby Clothing', 'Dresses', 'Jackets + Outerwear', 'One Pieces, Rompers + Bodysuits', 'Pajamas', 'Pants + Leggings', 'Shirts + Tops', 'Shorts', 'Sweaters + Sweatshirts', 'Swimsuits', 'Baby Collections', 'Better together', 'Cute & Comfy', 'Mix & Match Magic', 'Spring Bloom', 'Baby Gifts', 'Baby Shower Gifts', 'Hospital + Homecoming Gifts', 'Outfits + Bundles', 'Shop by Size', '0–3M', '12–18M', '3–6M', '6–9M', '9–12M', 'Newborn', 'Baby Boy', 'Baby Girl', 'Boys', 'Boys Clothing', 'Coats and jackets', 'Jeans', 'Shirts', 'Shorts', 'Sweaters, jackets', 'Sweatshirts', 'T-shirts', 'Trousers', 'Boys Collections', 'Better together', 'Cute & Comfy', 'Mix & Match Magic', 'Spring Bloom', 'Shop by Size', '2-8 Y', 'Clothing', 'All in ones', 'Baby Clothes', 'Baselayers', 'Bottoms', 'Clothing OUTLET', 'Clothing Sets', 'Coats & Jackets', 'Coveralls', 'Dresses', 'Find Your Inspiration', 'Fleece', 'New Arrivals - Children"s Clothes', 'Rainwear', 'Shellwear', 'Shorts', 'Ski Pants & Snow Bibs', 'Skirts', 'Sleepwear', 'Suits', 'Sweaters & Knitwear', 'Tops', 'Underwear', 'UV-Clothing & Swimwear', 'Gifts', 'Baby Bibs', 'Swaddles', 'Girls', 'Girls Clothing', 'Coats and jackets', 'Dresses, skirts', 'Sets', 'Sweatshirts, sweaters', 'T-shirts', 'Trousers, jeans, leggins', 'Underwear, body suits', 'Girls Collections', 'Better together', 'Cute & Comfy', 'Mix & Match Magic', 'Spring Bloom', 'Newborn (0m-3m)', 'Newborn Sets', 'Standard Shop', 'Boys', 'Girls', 'Uncategorized'].map(label => ({ label }));;
const option3: Option[] = ['Better together', 'Cute & Comfy', 'Mix & Match Magic', 'Spring Bloom',].map(label => ({ label }));
const option4: Option[] = ['A Happy Brand', 'Babblarna', 'Calvin Klein', 'DKNY', 'Fabric Flavours', 'H&M', 'Marc Jacobs', 'Ralph Lauаren', 'Zara'].map(label => ({ label }));
const option5: Option[] = ['brown', 'floral', 'grey', 'leopard print', 'light green', 'light orange', 'lime', 'orange', 'white', 'white gray', 'white on dots', 'blue', 'pink', 'purple', 'green', 'yellow', 'white blue'].map(label => ({ label }));
const option6: Option[] = ['0-3M', '0-6M', '12-18M', '18M(12-18M)'].map(label => ({ label }));
const option7: Option[] = ['Default sorting', 'Sort by popularity', 'Sort by average rating', 'Sort by latest', 'Sort by price: low to high', 'Sort by price: high to low'].map(label => ({ label }));


const App: React.FC = () => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className="flex ">
        <Dropdown options={option1} text={['Price Range']} />
      </div>
      <div className="flex ">
        <Dropdown options={option2} text={['Category']} />
      </div>
      <div className="flex">
        <Dropdown options={option3} text={['Collection']} />
      </div>
      <div className="flex ">
        <Dropdown options={option4} text={['Brand']} />
      </div>
      <div className="flex justify-center items-center">
        <Dropdown options={option5} text={['Color']} />
      </div>
      <div className="flex ">
        <Dropdown options={option6} text={['Size']} />
      </div>
      <div className="flex  md:hidden ">
        <Dropdown options={option7} text={['Sort']} />
      </div>
    </div>

  );
};

export default App;

