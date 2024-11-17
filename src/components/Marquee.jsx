import { motion } from 'framer-motion';
import React from 'react';

export default function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-t-3xl bg-[#004D43]'>
          <div className='border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
              <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ repeat: Infinity, ease: "linear", duration: 10}} className='uppercase text-[20vw] leading-none font-[FoundersGrotesk] font-semibold -mb-[1vw] pt-2 tracking-tight pr-20'>We are Ogee</motion.h1>
              <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ repeat: Infinity, ease: "linear", duration: 10}} className='uppercase text-[20vw] leading-none font-[FoundersGrotesk] font-semibold -mb-[1vw] pt-2 tracking-tight pr-20'>We are Ogee</motion.h1>
          </div>       
    </div>
  );
}
