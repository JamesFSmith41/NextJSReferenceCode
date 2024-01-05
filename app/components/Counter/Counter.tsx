import React from 'react'
import { CounterButton } from './CounterButton'

export const Counter = () => {
  return (
    <div className='mx-10 my-10 p-3 bg-slate-700 align-text-top text-center rounded-md'>
      <p className='text-xl font-bold'>Counter</p>
      <CounterButton/>
    </div>
  )
}
