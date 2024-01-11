'use client'
import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm';
import { useState } from 'react';
import { sign } from 'crypto';
import SignUpForm from '../components/SignUpForm/SignUpForm';


const LoginPage = () => {
    const [signup, setSignUp] = useState(false);

  return (
    <main>
        <div className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 ">
               {signup ? <SignUpForm/> : <LoginForm/>}
               <button className="bg-slate-800 rounded-md p-2 hover:bg-slate-600" 
               onClick={() => setSignUp(!signup)}>
                {signup ? "Login" : "Sign Up"}
            </button>
            </div>
        
        </div>
    </main>
  )
}

export default LoginPage;