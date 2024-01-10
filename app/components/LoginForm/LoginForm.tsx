'use client'

 import { useFormState, useFormStatus } from "react-dom"
 import { authenticate } from "@/app/lib/action"
 import React from 'react'

 function test() {
    console.log()
 }
 export default function LoginForm() {

    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

   return (
     <form action={dispatch} >
        <div className="flex flex-col bg-slate-500 justify-center items-center rounded-md"> 
           <p className="font-bold text-2xl">Login</p>
           <p className="font-bold text-xl py-2">
            Email
           </p>
           <input className="rounded-md bg-slate-50 p-2 text-slate-900"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                />
            <div className="py-3"/>
            <p className="font-bold text-xl py-2">
            Password
           </p>
            <input className="rounded-md bg-slate-50 p-2 text-slate-900"
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                />
            <LoginButton/>
        </div>
     </form>
  )
 }

 function LoginButton() {
    const { pending } = useFormStatus();
   
    return (
        <button 
        type="submit"
        className="bg-slate-700 rounded-md py-2 px-10 my-5 hover:bg-slate-900 " aria-disabled={pending}>
            Login
        </button>
    );
  }
 