'use client';

import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { UserList } from './UserList'

interface User {
    name?: string;
    email?: string;
}

export const AddUser = () => {
    const [users, setUsers] = useState<Array<User>>([{name: "Test Name", email: "Test Email"}]);



  return (
    <div className='bg-slate-300 m-4 text-center text-slate-700 font-bold text-xl pb-1 px-2 rounded-md'>
        Add User
        <UserList {...users}/>
        <form
        onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
                email: { value: string };
                name: { value: string };
            };
            console.log(target.name.value);
            console.log(target.email.value);
            setUsers([
                ...users,
                {name: target.name.value, email: target.email.value}]);
        }}
    >
        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6 bg-slate-400 p-2 rounded-md">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required/>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>
            </div>
        </div>
        <button type="submit" className="text-white bg-gray-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-700 hover:bg-gray-400 dark:focus:ring-blue-800">Submit</button>
    </form>
    </div>
  )
}
