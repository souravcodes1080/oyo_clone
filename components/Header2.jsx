import React from 'react'

function Header2() {
    const list = [
        {
            name: "Kolkata"
        },
        {
            name: "Bangalore"
        },
        {
            name: "Mumbai"
        },
        {
            name: "Gurgaon"
        },
        {
            name: "Delhi"
        },
        {
            name: "Noida"
        },
        {
            name: "Chennai"
        },
        {
            name: "Hyderabad"
        },
        
    ]
  return (
    <div className='flex px-10 py-2 bg-gray-100 justify-between'>
        {list.map((i)=>{
            return(
                <span key={i.name}>{i.name}</span>
            )
        })}
    </div>
  )
}

export default Header2