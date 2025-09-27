import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../image/logo.png'
const Nav = () => {
  return (
    <div className='flex justify-between px-20 w-full fixed top-0 left-0 z-50 bg-transparent'>
      <div className='flex items-center space-x-2'>
        <img src={logo} alt='logo' className='h-13 mt-2 w-auto object-contain' />
        <span className='bg-gradient-to-tl from-[#1e293b] via-[#6366f1] to-[#71717a] bg-clip-text text-transparent font-semibold text-4xl'>PromptVault</span>
      </div>
      <div className='gap-5 flex justify-center items-center font-medium bg-gradient-to-t from-orange-500 via-blue-500 to-teal-500 text-transparent bg-clip-text'>
        <NavLink to='/'>Sign Up</NavLink>
        <NavLink to='/create-prompt'>Create</NavLink>
        <NavLink to='/personal-prompt'>Prompt</NavLink>
        <NavLink to='/community-prompt'>Community</NavLink>
        <NavLink to='/feature'>Feature</NavLink>
        <NavLink to='/export-store'>Export</NavLink>
        <NavLink to='/profile_and_setting'>Profile</NavLink>
      </div>
    </div>
  )
}

export default Nav