import Image from 'next/image'
import React from 'react'
import Block from '@/components/Block'

function Header1() {
  return (
    <div className='flex justify-between items-center h-24 px-5 border-b-2 border-gray-300'>
        <Image src={"/logo.png"} alt='oyo' width={200} height={200} className='w-24 h-24'/>
        <div className="flex h-full">
        <Block title={'Become a Member'} para={'Additional 10% off on stays'}/>
        <Block title={'OYO for Business'} para={'Trusted by 5000 corporates'}/>
        <Block title={'List your Property'} para={'Start earning in 30 mins'}/>
        <Block title={'0123-45678'} para={'Call us to Book now'}/>

        <div className="flex items-center px-3">
        <Image src={"/vercel.svg"} alt='logo' width={200} height={200} className='w-10 h-10 mr-5'/>
        <h3>Login / Signup</h3>
        </div>
        </div>
        
    </div>
  )
}

export default Header1