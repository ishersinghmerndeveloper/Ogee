import React from 'react'

export default function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-20'>
        <div className="cardcontainer h-[55vh] w-1/2">
            <div className="card relative rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center">
                <svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
                    <text x="10" y="44" fontSize="60" fill='#cdea68'>Ogee</text>
                </svg>
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full uppercase hover:underline'>hey</button>
               
            </div>
        </div>

        <div className=" cardcontainer  h-[55vh] w-1/2 flex gap-5">
            <div className="card relative rounded-xl w-full h-full bg-[#192826] flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full uppercase hover:underline'>rating 5.0 on clutch</button>
            </div>
            <div className="card relative rounded-xl w-full h-full bg-[#192826] flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full uppercase hover:underline'>business bootcamp alumni</button    >    
            </div>         
        </div>
    </div>
  )
}
