'use client'
import React from 'react'

interface str {
  name: string;
}

export const ListItem = (itemName : str) => {
  const day = new Date().getDate().toString();
  const month = new Date().getMonth().toString()
  const year = new Date().getFullYear().toString()
  const date = day + "/" + month + "/" + year;

  return (
    <div className="bg-slate-300 p-3 m-2 flex flex-row rounded-md hover:bg-slate-200 items-end justify-end">
        <p className="font-bold text-xl">{itemName.name}</p>
        <p className="font-bold text-xl">{date}</p>
        <button className="bg-slate-800 hover:bg-slate-600 ml-2 px-3"> Test</button>
    </div>
  )
}
