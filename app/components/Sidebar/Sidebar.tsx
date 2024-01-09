'use client'
import Link from 'next/link'
import React, { useState } from "react";

const Sidebar = () => {
  const [effect, setEffect] = useState(false);

  return (
    <div className="p-1 m-1 h-90">
        <p className="font-bold"> Sidebar</p>
        <div className='flex flex-col h-90 p-1 bg-slate-400 rounded-md space-y-2'>
            <Link href="/dynamicTestPage" className="border-1 border-slate-300 rounded-md hover:bg-slate-500 p-1">
                Dynamic Test Page
            </Link>
            <Link href="/users" className="border-1 border-slate-300 rounded-md hover:bg-slate-500 p-1">
                User Profile
            </Link>
            <Link href="/users" className="border-1 border-slate-300 rounded-md hover:bg-slate-500 p-1">
                User Profile
            </Link>
            <Link href="/users" className="border-1 border-slate-300 rounded-md hover:bg-slate-500 p-1">
                User Profile
            </Link>
        </div>
    </div>
  )
}

export default Sidebar