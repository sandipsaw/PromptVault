import React from 'react'
import { asyncGetUser } from '../store/UserAction'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const Profile = () => {
  const [user, setuser] = useState("")
  const dispatch = useDispatch()
  
  const getuser = async()=>{
    console.log("hello");
    
    const bol = await dispatch(asyncGetUser())
    console.log(bol.username);
    setuser(bol)
  }
  return (
    <div className='w-full'>
      <button className='px-8 mt-20' onClick={getuser}>get User</button>
      <h1 className='text-8xl font-semibold mt-20'>Welcome back <span className='text-gray-500 '>{user.username}</span></h1>

    </div>
  )
}

export default Profile