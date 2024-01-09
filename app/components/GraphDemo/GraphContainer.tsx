'use client'
import React from 'react'
import ResizableBox from "./ResizableBox";
import useDemoConfig from "./useDemoConfig";
import { AxisOptions, Chart } from "react-charts";
import  Graph  from './Graph'

export const GraphContainer = () => {
  return (
    <div className='flex flex-col bg-slate-700 p-10 text-center rounded-md items-center'>
        <div>
            <p className='font-bold text-slate-200'>Graph Demo</p>    
        </div>
        <div className='flex flex-col p-10'>
            <p>Test</p>
            <Graph/>
        </div>
    </div>
  )
}
