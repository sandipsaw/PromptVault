import React, { useState } from 'react'
import image from '../image/landingImage.png'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const navigate = useNavigate();

  const RegisterMe = () => {
    navigate('/register')
  }
  return (
    <div className='min-h-screen w-full bg-[#0f172a] relative px-4 md:px-10 lg:px-20'>

      <div className="absolute inset-0 z-0 flex justify-center items-center px-4 md:px-10 lg:px-20 flex-col md:flex-row gap-4 md:gap-10"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}>

        <div className='bg-gradient-to-tl from-[#1e293b] via-[#6366f1] to-[#71717a] bg-clip-text text-transparent lg:w-1/2 md:w-full w-full text-center md:text-left '>
          <h1 className=' lg:text-7xl md:text-4xl text-3xl leading-none tracking-tight font-semibold lg:mt-1 md:mt-10 mt-5'>Never lose your best prompt again</h1>

          <p className='lg:text-2xl md:text-xl text:lg leading-none lg:leading-7 lg:mt-20 md:mt-10 mt-5'>PromptVault helps creators, developers, and marketers easily store, tag, and share their AI prompts.</p>

          <div className='hidden md:block'>
            <button className='bg-gradient-to-tl from-[#1e293b] via-[#6366f1] to-[#71717a]  px-8 py-3 text-[16px] rounded-full text-white font-semibold lg:mt-20 md:mt-10 mt-5  transition-translate duration-300 hover:text-white hover:scale-105 cursor-pointer fill-white drop-shadow-xl/50' onClick={RegisterMe}>Start Free Vault</button>
          </div>

        </div>

        <div className=' lg:w-1/2 md:w-full w-full '>
          <img src={image} alt="landing image" className='w-full fill-white drop-shadow-xl/50 ' />
          <div className='md:hidden block text-center'>
            <button className='bg-gradient-to-tl from-[#1e293b] via-[#6366f1] to-[#71717a]  px-5 py-2 text-[14px] rounded-full text-white font-semibold lg:mt-20 md:mt-10 mt-5  transition-translate duration-300 hover:text-white hover:scale-105 cursor-pointer fill-white drop-shadow-xl/50' onClick={RegisterMe}>Start Free Vault</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage


