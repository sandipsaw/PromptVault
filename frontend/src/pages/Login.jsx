// RegisterModal.jsx
import React from "react";
import image from '../image/img1.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import {asyncLoginUser} from '../store/UserAction'
import {useDispatch} from 'react-redux'
import { useState } from "react";
import {toast} from 'react-toastify'

const Login = () => {
  const navigate = useNavigate()
  const SignUp = () =>{
    navigate('/')
  }

  const resetHandler = () =>{
    seterrorMsg("")
  }
  const {register,reset,handleSubmit} = useForm();
  const dispatch = useDispatch();
  const [errorMsg, seterrorMsg] = useState("")

  const loginSubmitHandler = async(user) =>{
    console.log(user);
    const bol = await dispatch(asyncLoginUser(user))
    console.log(bol);
    if(bol == "User looged in successfully"){
      toast.success("User looged in successfully")
      reset()
      navigate('/feature')
    }
    else if(bol == "All fields are required"){
      seterrorMsg("All fields are required")
    }
    else if(bol == "Invalid password"){
      seterrorMsg("Invalid password")
    }
    else if(bol == "User not found!"){
      seterrorMsg("User not found. Please register first.")
    }
    
    
  }
  return (
    <div className="fixed inset-0 bg-blue/80 backdrop-blur-sm flex justify-center items-center z-50 fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50">

      <div className="bg-gradient-to-b from-indigo-500/100 via-blue-500/50 to-indigo-500/100 backdrop-blur-xl rounded-lg p-8 lg:w-2/5 w-3/4 relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={SignUp}
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-white">Login to Prompt Vault</h2>
        <form onSubmit={handleSubmit(loginSubmitHandler)} className="flex flex-col text-white font-semibold ">
          
          <input
            {...register('email')}
            type="email"
            placeholder="Email Address"
            className=" border-2 border-white bg-transparent rounded outline-0 p-2 mb-4 w-full"
            onClick={resetHandler}
          />
          <input
            {...register('password')}
            type="password"
            placeholder="Password"
            className=" border-2 border-white bg-transparent rounded outline-0 p-2 mb-4 w-full"
            onClick={resetHandler}
          />
          
          <Link className="text-right">Forget Password</Link>
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            <button
              type="submit"
              className="bg-gradient-to-tr from-[#06b6d4] via-[#2563eb] to-[#6366f1] border border-blue-500 text-white p-2 rounded w-full mt-3 mb-1"
            >
              Login
            </button>
           <p>Don't have an Account? <Link to='/register' className="text-blue-900">register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
