import React from 'react'

export default function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-[FoundersGrotesk-Semibold] flex justify-between item-center'>
      <div className="logo cursor-pointer">
      <svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="35" fontSize="50" fill="#fff">Ogee</text>
      </svg>
      </div>

      <div className="links flex gap-10 py-3 cursor-pointer">
        {["Services", "Our Work", "About Us", "Insights","Contact Us"].map((item,index)=>
        <a key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-60"}`}>{item}</a>)}
        </div>              
    </div>
  )
}
