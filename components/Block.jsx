import Image from 'next/image'
import React from 'react'

function Block({title, para}) {
  return (
    <div className='w-60 h-full flex items-center px-3  border-r border-gray-300'>
        <Image src={"/vercel.svg"} alt='logo' width={200} height={200} className='w-10 h-10 mr-5'/>
        <div>
            <h3 className='font-bold'>{title}</h3>
            <p className='text-gray-400 text-sm line-clamp-1'>{para}</p>
        </div>
    </div>
  )
}

export default Block