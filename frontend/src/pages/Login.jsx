// RegisterModal.jsx
import React from "react";
import image from '../image/img1.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const SignUp = () =>{
    navigate('/sign-up')
  }

  return (
    <div className="fixed inset-0 bg-blue/80 backdrop-blur-sm flex justify-center items-center z-50 fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50">

      <div className="bg-gradient-to-b from-indigo-500/100 via-blue-500/50 to-indigo-500/100 backdrop-blur-xl rounded-lg p-8 w-2/5 relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={SignUp}
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-white">Login to Prompt Vault</h2>
        <form className="flex flex-col text-white font-semibold ">
          
          <input
            type="email"
            placeholder="Email Address"
            className=" border-2 border-white bg-transparent rounded outline-0 p-2 mb-4 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className=" border-2 border-white bg-transparent rounded outline-0 p-2 mb-4 w-full"
          />
          
          <Link className="text-right">Forget Password</Link>
          
            <button
              type="submit"
              className="bg-gradient-to-tr from-[#06b6d4] via-[#2563eb] to-[#6366f1] border border-blue-500 text-white p-2 rounded w-full mt-3 mb-1"
            >
              Register
            </button>
           <p>Don't have an Account? <Link to='/sign-up/register' className="text-blue-900">register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
