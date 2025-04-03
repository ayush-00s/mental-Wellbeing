import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignIn = () => {
  
  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Email || !Password ) {
      alert("Check Your username or Password again!!")
      return;
    }

    navigate("/Home");
  }

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/SignUp');
  };

  return (
  <div className="min-h-screen flex flex-col md:flex-row bg-gray-50"> 
    <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="font-bold text-3xl mb-6 text-center">
            Welcome Back
          </h1>

         <form onSubmit={handleSubmit} className="space-y-4">
          <div>
          <label className="font-medium text-sm block mb-1 text-gray-700">
            Username or Email    
          </label>
          <input
          className="bg-white text-gray-600 p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition "
          placeholder="Shraddha@gmail.com"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          /> 
          </div>

          <div>
          <h3 className="text-sm font-normal mr-auto mb-1">Password</h3>
          <input
          type="password"
          className="bg-white text-gray-600 p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="••••••••"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          /> 
          </div>
          
          <button 
          className="bg-blue-600 text-white font-medium text-sm w-full py-3 px-4 rounded-md hover:bg-blue-700 transition mt-4 flex justify-center items-center">
            Continue
          </button>
          
         </form>
            <p className="text-sm mt-3 text-center">
            Don't have an account?{" "}
            <span 
             className="text-blue-600 cursor-pointer"
             onClick={handleButtonClick}
            >
              SignUp
            </span>
          </p>
        </div>  
      </div>
    <div className="bg-gradient-to-r from-cyan-500 to-fuchsia-300 w-3/5 rounded-tl-4xl rounded-bl-4xl">
        <motion.img
          src="/assets/walking_animation.gif"
          className="h-auto lg:max-w-2xl"
        />
    </div>
  </div>
  )
}

export default SignIn
