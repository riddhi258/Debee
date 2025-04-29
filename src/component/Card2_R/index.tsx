import React from 'react'
import Image from 'next/image'
import Item5 from '@/Img/ImgR/t.jpg'
import Item6 from '@/Img/path-1.png'
import Item7 from '@/Img/ImgR/icons8-pin-50.png'
import Item8 from '@/Img/ImgR/icons8-message-32.png'
import Button from '@/component/Button'
import Msg from '@/Img/icons8-message-100.png'
import Pin from '@/Img/icons8-pin-96.png'
type Props = {}

const Categories = (props: Props) => {
  return (

    <div className=' flex w-full justify-center items-center flex-wrap pl-16 pr-16'>
      <div className=' bg-[#f7f7f7] rounded-tl-[85px]  rounded-br-[85px] p-5 m-5 h-96 w-80 flex flex-col justify-center items-center md:flex-1 flex-wrap'>
        <Image src={Msg} alt='Msg' height={60} width={60} className='flex m-2' />
        <p className='flex text-center font-bold text-xl m-2'>Newsletter</p>
        <p className='flex text-center font-light text-xs pl-10 pr-10 m-2'>Subscribe to receive updates access to exclusive deals, and  more</p>
        <div className='inline-flex h-auto'>
          <input type='email' placeholder='Your Email Address' className='flex flex-wrap w-32 shrink rounded-lg text-xs pl-3 border-1 m-2' />
          <Button text="Send" className='text-xs px-4 py-2 m-2' />
        </div>
        <br />
        <br />
      </div>
      <div className='bg-[#e8eeef] relative rounded-br-[95px] md:m-5 max-[767px]:my-5 h-96 w-80 flex md:flex-1 flex-wrap'>
        <Image src={Item5} alt='Baby Img' className='rounded-br-[95px] size-full object-cover' />
        <Image src={Item6} alt='Dots' height={50} width={50} className='absolute top-0 left-1/2 object-cover' />
      </div>
      <div className=' bg-[#f7f7f7] rounded-tl-[85px]  rounded-br-[85px] p-5 md:m-5 max-[767px]:my-5 h-96 w-80 flex flex-col justify-center items-center md:flex-1 flex-wrap'>
        <Image src={Pin} alt='Pin' height={60} width={60} className='flex m-2' />
        <p className='flex text-center font-bold text-xl m-2 '>Find us</p>
        <p className='flex text-center font-light text-xs mt-2'>7310 Fieldstone Lane <br />Brooklyn, NY 11220 </p>
        <p className='flex text-center font-light text-xs mb-2'> Mon – Fri: 9am – 3pm</p>
        <Button text="Get Direction" className='py-2 m-2' />
      </div>
    </div>
  )
}

export default Categories
// min-[767px]
// max-[850px]