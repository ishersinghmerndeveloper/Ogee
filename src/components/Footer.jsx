import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
    <div className='w-full h-fitcontent mb-[15vw] bg-zinc-900 flex gap-5 border-t-[1px] border-zinc-700'>
        <div className='w-1/2 h-full p-20 flex flex-col justify-between'>
            <div className='heading'>
                <h1 className='uppercase text-[6vw] font-semibold leading-none tracking-tighter -mb-13'>eye</h1>
                <h1 className='uppercase text-[6vw] font-semibold leading-none tracking-tighter -mb-13'>opening</h1>
            </div>
        </div>

            {/* footer div Parent  */}
        <div className='w-1/2'>

            {/* footer div child-1  */}
            <div className='w-1/2 h-full p-20 flex flex-col justify-between'>

            {/* headings div  */}
                <div className="heading">
                    <h1 className='uppercase text-[6vw] font-semibold leading-none tracking-tighter -mb-13'>presentations</h1>
                    
            {/* social media handles  */}

                    <div className='mediahandles mt-10 space-y-4'>
                        <div className='flex text-2xl gap-3 items-center'>
                            <IoLogoInstagram />
                            <a className='block text-xl font-light' href="https://www.instagram.com/"> Instagram</a>
                        </div>

                        <div className='flex text-2xl gap-3 items-center'>
                            <IoLogoFacebook />
                            <a className='block text-xl font-light' href="https://www.facebook.com/?_rdr">Facebook</a>
                        </div>

                        <div className='flex text-2xl gap-3 items-center'>
                            <FaGithub />
                            <a className='block text-xl font-light' href="https://github.com/ishersinghmerndeveloper">Github</a>
                        </div>
                    </div>        
                </div>
            </div>
        </div>
    </div>

    {/* name footer */}
    
    <div className="col-md-6 text-xl text-center">
            <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a  href="https://github.com/ishersinghmerndeveloper" className="text-decoration-underline text-dark fs-5" target="_blank">Isher Singh</a>
            </p>

            <div className='ml-[48vw] pb-10'>
                <a className="text-dark text-2xl" href="https://github.com/ishersinghmerndeveloper" target="_blank">
                <FaGithub />
                </a>
            </div>  
    </div>
    </>      
  )
}
