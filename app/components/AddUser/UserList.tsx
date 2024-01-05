import React from 'react'
import { useState } from 'react'

interface User {
    name?: string;
    email?: string;
}

export const UserList = (users:User[]) => {

  return (
    <table className="table table-bordered">
    <thead>
        <tr className='text-slate-700'>
            <th>Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {Object.entries(users).map(user => 
        <tr key={user[0]}>
            <td>{user[1].name}</td>
            <td>{user[1].email}</td>
        </tr>)}
    </tbody>
</table>
  )
}
