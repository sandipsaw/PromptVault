import React, { useEffect } from 'react'
import { asyncGetUser } from '../store/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const Profile = () => {
  const [user, setuser] = useState("")
  const dispatch = useDispatch()
  const data=useSelector((state)=>state.user.userData)
  console.log(data);
  
  
  const getuser = async()=>{
    console.log("hello");
    
    const bol = await dispatch(asyncGetUser())
    console.log(bol);
    setuser(bol)
  }



  useEffect(() => {
    dispatch(asyncGetUser())
  }, [])

  return (
    <div className='w-full'>
      <button className='px-8 mt-20' onClick={getuser}>get User</button>
      <h1 className='text-8xl font-semibold mt-20'>Welcome back <span className='text-gray-500 '>{data}</span></h1>

    </div>
  )
}

export default Profile