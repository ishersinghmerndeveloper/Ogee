import React from 'react'

export default function Footer() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5'>
        <div className='w-1/2 h-full p-20 flex flex-col justify-between'>
            <div className='heading'>
                <h1 className='uppercase text-[6vw] font-semibold leading-none tracking-tighter -mb-13'>eye-</h1>
                <h1 className='uppercase text-[6vw] font-semibold leading-none tracking-tighter -mb-13'>opening</h1>
            </div>
            <h3 className='text-[1.5vw]'>Ogee</h3>
        </div>

        <div className='w-1/2'>
            <div className='w-1/2 h-full p-20 flex flex-col justify-between'>
                <div className="heading">
                    <h1 className='uppercase text-[6vw] font-semibold leading-none tracking-tighter -mb-13'>presentations</h1>
                    <div className='mediahandles mt-10'>
                        <a className='block text-xl font-light' href="www.instagram.com">Instagram</a>
                        <a className='block text-xl font-light' href="www.facebook.com">Facebook</a>
                        <a className='block text-xl font-light' href="www.linkdin.com">Linkdin</a>
                    </div>        
                </div>
            </div>
        </div>
    </div>
  )
}
