import React, { Fragment } from 'react';

export default function Navbar() {
  return (
    <fragment>

    {/* <div className='fixed z-[999] w-full px-20 py-8 font-[FoundersGrotesk-Semibold] flex justify-between item-center'>
        <div className="logo cursor-pointer">
            <svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="35" fontSize="50" fill="#fff">Ogee</text>
            </svg>
        </div>

        <div className="links flex gap-10 py-3 cursor-pointer">
            {["Services", "Our Work", "About Us", "Insights","Contact Us"].map((item,index)=>
            <a key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-60"}`}>{item}</a>)}
        </div>              
    </div> */}
   
    <div className='fixed z-[999] w-full px-20 py-8 font-[FoundersGrotesk-Semibold] flex justify-between item-center'>
        <div className='w-1/2'>
          <a className='text-[#fff] text-5xl' href="">Ogee</a>
        </div>

        <div className='w-1/2 flex gap-10 whitespace-nowrap text-[#fff] text-[1.1vw]'>
          <a href="">Service</a>
          <a href="/">Our Work</a>
          <a href="/">About Us</a>
          <a href="/">Insights</a>
        </div>

        <div className='whitespace-nowrap text-[#fff] text-[1.1vw]'>
          <a href="">Contact Us</a>
        </div>
    </div>

    </fragment>
  )
}
