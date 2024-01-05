'use client';
import React from 'react'
import {useState } from 'react';

export const CounterButton = () => {
  
    const [count, setCount]  = useState(0);
    function AddCount() {
        setCount(count + 1);
    }

  return (
    <div className='p-1 bg-slate-500 rounded-md'>
    <p className='text-center font-bold text-xl'>{count}</p>
    <button className='text-center font-bold text-xl bg-slate-600 p-3 rounded-md'
        onClick={AddCount}>Add</button>
    </div>
  )
}
