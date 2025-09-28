import React, { useState } from 'react'
import image from '../image/landingImage.png'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
 const navigate = useNavigate();

 const RegisterMe = ()=>{
  navigate('/sign-up/register')
 }
  return (
    <div className='min-h-screen w-full bg-[#0f172a] relative'>

      <div className="absolute inset-0 z-0 flex justify-center items-center gap-10 px-20 "
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
         }}>
          
        <div className='bg-gradient-to-tl from-[#1e293b] via-[#6366f1] to-[#71717a] bg-clip-text text-transparent w-1/2 mt-15'>
        <h1 className=' text-[4.5rem] leading-none tracking-tight font-semibold'>Never lose your best prompt again</h1>

        <p className='text-[1.5rem] leading-7 mt-15'>PromptVault helps creators, developers, and marketers easily store, tag, and share their AI prompts.</p>

        <button className='bg-gradient-to-tl from-[#1e293b] via-[#6366f1] to-[#71717a]  px-8 py-3 text-[16px] rounded-full text-white font-semibold mt-15 transition-translate duration-300 hover:text-white hover:scale-105 cursor-pointer fill-white drop-shadow-xl/50'onClick={RegisterMe}>Start Free Vault</button>

      </div>

      <div className=' w-1/2 mt-15 '>
        <img src={image} alt="landing image" className='w-full fill-white drop-shadow-xl/50' />
      </div>
      </div>

    </div>
  )
}

export default LandingPage

// <div className="min-h-screen w-full bg-[#0f172a] relative">
    //   <div
    //     
    //   />

      
    // </div>

