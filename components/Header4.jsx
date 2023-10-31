'use client'
import Image from 'next/image'
import React from 'react'

function Header4() {
  return (
    <div className='flex my-14 border border-gray-300 rounded-lg py-5'>
    <div className="flex justify-between w-full">
       
        <div className='flex'>
            <Image src={"/flame.svg"} width={100} height={100} alt='flame' className='w-14 h-14 mx-10' />
        <div>
            <p className='text-bold text-xl'>Get access to exclusive deals</p>
            <p className='text-gray-500'>Only the best deals reach your inbox</p>
        </div>
        </div>
        
       

        <div className='mx-10'>
            <input type="email" placeholder='e.g.,example@john.com' className=' h-12 w-72 outline-none px-3 py-2 border border-gray-300 rounded-md' />
            <button className='bg-red-600 text-white rounded-lg px-3 py-2 mx-4 w-36 h-12'>Notify Me</button>
        </div>
    </div>
    </div>
  )
}

export default Header4