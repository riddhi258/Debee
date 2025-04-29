'use client';

import React, { Fragment, useState } from 'react';

import { Option } from '@/types';

const Dropdown: React.FC<{ options: Option[], text: string[] }> = ({ options, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mx-auto">
      <div className="border-b-2 border-dashed">
        <div
          className="flex justify-between py-4 cursor-pointer"
          onClick={toggleDropdown}
        >
          <h3 className="text-md font-semibold">{text}</h3>
          <svg
            className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
            viewBox="0 0 24 24"
          >
            <path
              d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        {isOpen && (
          <div className=" border-t">
            <div className="">
              {options.map((option, index) => (
                <Fragment key={index}>
                  <label className="flex">
                    {option.component ? (
                      option.component
                    ) : (
                      <input
                        type="checkbox"
                        className='pl-0 ml-0'
                        // Your existing checkbox handling logic here...
                      />
                    )}
                    <span className="ml-4 p-1 items-center text-sm text-gray-700">{option.label}</span>
                  </label>
                </Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
