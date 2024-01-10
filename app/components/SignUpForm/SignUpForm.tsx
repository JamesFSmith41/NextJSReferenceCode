'use client'

 import { useFormState, useFormStatus } from "react-dom"
 import { signup } from "@/app/lib/action"
 import React from 'react'

 
 export default function SignUpForm() {

    const [errorMessage, dispatch] = useFormState(signup, undefined);
   return (
     <form action={dispatch} >
        <div className="flex flex-col bg-slate-500 justify-center items-center rounded-md"> 
           <p className="font-bold text-2xl">Sign Up</p>
           <p className="font-bold text-xl py-2">
            Username
           </p>
           <input className="rounded-md bg-slate-50 p-2 text-slate-900"
                id="username"
                type="text"
                name="username"
                placeholder="Enter a username"
                required
                />
            <div className="py-3"/>
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
            <SignUpButton/>
        </div>
     </form>
  )
 }

 function SignUpButton() {
    const { pending } = useFormStatus();
   
    return (
        <button 
        type="submit"
        className="bg-slate-700 rounded-md py-2 px-10 my-5 hover:bg-slate-900 " aria-disabled={pending}>
            Sign Up
        </button>
    );
  }
 