import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-400 h-70'>
        <div className="flex justify-between items-center mx-20 py-8 border-b ">
            <div className='flex items-center'>
                <h2 className='text-bold text-5xl text-white mr-5'>
                    OYO
                </h2>
                <p className='text-bold text-xl text-white mr-5'>World's leading Chain of Hotels</p>
            </div>
            <div>
            <p className='text-bold text-xl text-white  '>Join our network and grow your business!</p>  
            </div>
        </div>
       

        <div className="flex justify-between items-center mx-20 py-8 ">
            <div className='flex items-center'>
                <div className="border-2 rounded-full w-7 h-7 mr-2"></div>
                <div className="border-2 rounded-full w-7 h-7 mr-2"></div>
                <div className="border-2 rounded-full w-7 h-7 mr-2"></div>
                <div className="border-2 rounded-full w-7 h-7 mr-2"></div>
            </div>
            <div>
            <p className=' text-white  '>2013-2022 © Oravel Stays Limited</p>  
            </div>
        </div>
    </div>
  )
}

export default Footer