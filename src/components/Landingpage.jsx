import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6';
import { HiArrowNarrowUp } from "react-icons/hi";


export default function Landingpage() {
  return (

    // PARENT DIV OF ALL
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>

    {/*DIV CONTAINER OF TEXTSTRUCTURE----*/}
        <div className="textstructure mt-52 px-20 font-[FoundersGrotesk-Semibold]">
            {["We create"," eye-opening", "presentations"].map((item,index)=>{
                return (
                    <div className="masker"> 
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration: 1 }} className=' mr-[1vw] w-[8vw] h-[5vw] -top-[1.2vw] bg-red-500 rounded-md'></motion.div>)}  
                            <h1 className='pt-[2vw] -md-[1vw] uppercase text-[7vw] leading-[.70] font-[FoundersGrotesk-Semibold] tracking-tighter'>{item}</h1>
                        </div>                
                    </div>
                    );
                })}  
        </div>

    {/* DIV OF OTHER SPECIFICATION-------*/}
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-20 py-5">
            {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>
            <p className='text-lg font-light tracking-tight leading-none'>{item}</p>)}
        
        <div className='start flex items-center gap-3'>
        <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase cursor-pointer">Start the project</div>
        <div className='w-10 h-10 border-[2px] border-zinc-500 rounded-full flex items-center justify-center cursor-pointer'>
            <span className='rotate-[45deg]'>
            <FaArrowUpLong/>
            </span>
        </div>
        </div>
        </div>
    </div>
  );
}
