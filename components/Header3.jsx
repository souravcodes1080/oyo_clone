'use client'
import React from 'react'

function Header3() {
  return (
    <div className='bg-gradient-to-r from-red-600 to-red-400 h-65'>
        <div className="p-5">
            <h2 className='text-4xl font-bold p-5 text-white text-center'>Over 157,000 hotels and homes across 35 countries</h2>
            <div className="grid grid-cols-5 my-5 mx-20">
                <input className='col-span-2 h-16 outline-none px-3 text-lg border-r-2 border-gray-300' type="text"  placeholder='Search...'/>
                <input className=' col-span-1 h-16 outline-none px-3 text-lg  border-r-2 border-gray-300' type="text"  placeholder='Search...'/>
                <input className='col-span-1 h-16 outline-none px-3 text-lg' type="text"  placeholder='Search...'/>
                <button className='h-16 col-span-1 px-3 py-2 bg-green-500 text-white text-xl hover:cursor-pointer hover:bg-green-600 '>Search</button>
            </div>
            <div className="flex mx-20 my-5 font-bold">
                <button type='submit' className='h-16 hover:cursor-pointer px-3 py-2 text-white mr-5'>Continue your search</button>
                <button type='submit' className='h-16 hover:cursor-pointer px-3 py-2 text-white  mr-5 hover:bg-black border-2 rounded-xl'>Homestay in India hotels</button>
            </div>
        </div>
    </div>
  )
}

export default Header3