import { motion, useAnimation } from 'framer-motion';
import React from 'react';

export default function Features() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover= (index) => {
        cards[index].start({y: "0%"})
    }
    
  return (
    <div className='w-full py-20'>
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-6">
            <h1 className='text-8xl pb-14 tracking-tight'>Featured Projects</h1>
        </div>

        <div className='px-20'>
            <div className="cards w-full flex gap-10 mt-36">

                  <motion.div onHoverStart={()=>handleHover(0)} className="cardcontainer relative w-1/2 h-[75vh]">
                      <h1 className='absolute flex text-[#cdea68] overflow-hidden left-full z-[9] leading-none tracking-tighter -translate-x-1/2 -translate-y-1/2 top-1/2 text-8xl uppercase'>
                            {"cardboard spaceship".split('').map((item,index)=>
                            <motion.span initial={{y: "100%"}} animate={cards[0]} className='inline-block'> {item} </motion.span>)}                                
                      </h1>
                      <div className='card w-full h-full rounded-xl overflow-hidden'>
                          <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"/>
                      </div>
                  </motion.div>

                <div className="cardcontainer  relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex text-[#cdea68] overflow-hidden right-full z-[9] leading-none tracking-tighter translate-x-1/2 translate-y-1/2 top-1/2 text-8xl uppercase'>
                            {"AH2 & Matt Horn".split('').map((item,index)=>
                            <span className='inline-block'> {item} </span>)}                              
                        </h1>
                    <div className='card w-full h-full  rounded-xl overflow-hidden '>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" />
                    </div>
                </div>
            </div>
        </div>  

    </div>
  );
}
