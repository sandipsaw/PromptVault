// RegisterModal.jsx
import React, { useState , } from "react";
import image from '../image/img1.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { asyncRegisterUser } from "../store/UserAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";


const Register = () => {

  const navigate = useNavigate()
  const SignUp = () => {
    navigate('/')
  }

  const resetHandler = () => {
    seterrorMsg("")
  }


  const handleGoogleSignIn = () =>{
    console.log("helolo");
   window.location.href = 'http://localhost:3000/auth/google'

  }
  
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const [errorMsg, seterrorMsg] = useState("");

  const registerHandler = async (user) => {
    console.log(user);
    const bol = await dispatch(asyncRegisterUser(user))
    console.log(bol);

    if (bol == "User Registered successfully") {
      toast.success("User Registered successfully")
      navigate('/login')
    }

    else if (bol == "user Already exists") {
      seterrorMsg("user Already exists")
    }

    else if (bol == "Passwords do not match") {
      seterrorMsg("Passwords do not match")
    }
    else if (bol == "All fields are required") {
      seterrorMsg("All fields are required")
    }
    reset()
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
        <h2 className="text-2xl font-semibold mb-4 text-white">Create your Account</h2>

        <button
          onClick={() => handleGoogleSignIn()}
          className="flex items-center justify-center gap-2 rounded px-4 py-2 w-full hover:bg-gray-50 hover:text-black  bg-blue-600 text-white"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t"></div>
          <span className="px-2 text-gray-400">or</span>
          <div className="flex-1 border-t"></div>
        </div>

        <form onSubmit={handleSubmit(registerHandler)} className="flex flex-col text-white font-semibold ">

          <input
            {...register('username')}
            type="text"
            placeholder="username"
            className=" border-2 border-white bg-transparent rounded outline-0 p-2 mb-4 w-full"
            onClick={resetHandler}
          />
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
          <input
            {...register('confirmPassword')}
            type="password"
            placeholder="Confirm Password"
            className=" border-2 border-white bg-transparent rounded outline-0 p-2 mb-4 w-full"
            onClick={resetHandler}
          />
          <label>

            <input type="checkbox" className="mr-2" />
            I agree to the <span className="text-blue-900 underline">term of Services</span> and <span className="text-blue-900 underline">Privacy Policy</span>
          </label>
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          <button
            type="submit"
            className="bg-gradient-to-tr from-[#06b6d4] via-[#2563eb] to-[#6366f1] text-white p-2 rounded w-full mt-3 mb-1"
          >
            Register
          </button>
          <p>Already have an Account? <Link to='/login' className="text-blue-900">Login</Link></p>
        </form>


      </div>
    </div>
  );
};

export default Register;
