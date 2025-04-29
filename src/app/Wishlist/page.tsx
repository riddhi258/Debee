import Image from 'next/image'
import Nav from '@/component/Nav_Exp'
import Img from '@/Img/ImgC/1_1.png'
import Footer from '@/container/Footer'

import Wish_item from '@/component/Wish_item'
import Empty from '@/component/Wish_Empty'

export default function Home() {
  return (
    <main className=''>
      <div className="relative flex z-20">
        <Nav></Nav>
      </div>

      <center>
        <div className="w-full md:w-3/4 lg:w-3/4 self-center justify-center h-auto  lg:mt-40">
          <h1 className='text-6xl font-playpen' >Wishlist</h1>
          <Empty />
        </div>
      </center>
      <div>
        <Footer />
      </div>

    </main>
  )
}