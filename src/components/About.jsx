import React from 'react'

export default function About() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full p-20 bg-[#cdea68] rounded-t-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ogee is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className="w-full flex border-t-[1px] pt-10 mt-20 border-[#a1b562]">
          <div classname="w-1/2">
            <h1 className='text-6xl mt-[1vw]'>Our approach:</h1>
            <button className='px-10 py-5 bg-zinc-900 rounded-full text-white mt-[2vw] flex gap-10 items-center uppercase text-xl'>Read More
              <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
          <div className="w-1/2 h-[32vw] bg-[#b0c859] rounded-2xl ml-[25.5vw] bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo.jpg')] bg-cover bg-center">
          </div>
        </div>
    </div>
  )
}
