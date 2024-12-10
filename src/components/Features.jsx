import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';


export default function Features() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({y: "0"})
    }

    const handleHoverEnd = (index) => {
        cards[index].start({y: "100%"})
    }
    
  return (
    <>
    <div className='w-full py-20'>
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-6">
            <h1 className='text-8xl pb-14 tracking-tight'>Featured Projects</h1>
        </div>

        <div className='containerone px-20'>

            <div className='container flex item-center gap-[12vw]'>
                <div className='w-full'>
                    <div className=" px-10 py-2 mt-10 -mb-10 border-zinc-400 font-light text-xl uppercase">Cardboard Spaceship</div>
                </div>
                <div className='w-full'>
                    <div className=" px-10 py-2 mt-10 -mb-10 border-zinc-400 font-light text-xl uppercase">AH2 & Matt Horn</div>
                </div>
            </div>
            
            <div className="cards w-full flex gap-10 mt-14">
                
                  <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)}  className="cardcontainer relative w-1/2 h-[75vh]">
                      <h1 className='absolute flex text-[#cdea68] overflow-hidden left-full z-[9] leading-none tracking-tighter -translate-x-1/2 -translate-y-1/2 top-1/2 text-8xl uppercase'>
                            {"cardboard spaceship".split("").map((item,index)=>
                            <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02 }} className='inline-block'> {item} </motion.span>)}                                
                      </h1>
                      <div className='card w-full h-full rounded-xl overflow-hidden'>
                          <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"/>
                      </div>
                  </motion.div>

                  <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex text-[#cdea68] overflow-hidden right-full z-[9] leading-none tracking-tighter translate-x-1/2 -translate-y-1/2 top-1/2 text-8xl uppercase'>
                            {"AH2 & Matt Horn".split("").map((item,index)=>
                            <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02 }} className='inline-block'> {item} </motion.span>)}                            
                        </h1>
                        <div className='card w-full h-full  rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" />
                        </div>
                  </motion.div>

            </div>
        </div> 

        <div className='containertwo px-20 mt-10'>

            {/* headings  */}

            <div className='container flex item-center gap-[12vw]'>
                <div className='w-full'>
                    <div className=" px-10 py-2 mt-10 -mb-10 border-zinc-400 font-light text-xl uppercase">fyde</div>
                </div>
                <div className='w-full'>
                    <div className=" px-10 py-2 mt-10 -mb-10 border-zinc-400 font-light text-xl uppercase">vise</div>
                </div>
            </div>
            
            {/* cards */}
            
            <div className="cards w-full flex gap-10 mt-14">
                
                  <motion.section onHoverStart={()=> handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)}  className="cardcontainer relative w-1/2 h-[75vh]">
                      <h1 className='absolute flex text-[#cdea68] overflow-hidden left-full z-[9] leading-none tracking-tighter -translate-x-1/2 -translate-y-1/2 top-1/2 text-8xl uppercase'>
                            {"fyde".split("").map((item,index)=>
                            <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02 }} className='inline-block'> {item} </motion.span>)}                                
                      </h1>
                      <div className='card w-full h-full rounded-xl overflow-hidden'>
                          <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"/>
                      </div>
                  </motion.section>

                  <motion.section onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex text-[#cdea68] overflow-hidden right-full z-[9] leading-none tracking-tighter translate-x-1/2 -translate-y-1/2 top-1/2 text-8xl uppercase'>
                                {"vise".split("").map((item,index)=>
                            <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02 }} className='inline-block'> {item} </motion.span>)}                            
                        </h1>
                        <div className='card w-full h-full  rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" />
                        </div>
                  </motion.section>
            </div>
        </div>
    </div>
    </>
  );
}
