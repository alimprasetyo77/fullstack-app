import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLists = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const res = await axios.get('http://localhost:5000/users')
        setUsers(res.data)
    }

    const deleteUsers = async (userId) => {
        await axios.delete('http://localhost:5000/users/'+userId)
        getUsers()
    }

  return (
    <div className='pr-8'>
        <Link to={'/user/add'} className='flex justify-between mb-4'>
                <p className='font-normal text-2xl' >List of users</p>
                <button className="uppercase shadow bg-emerald-800 hover:bg-emerald-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-8 rounded-lg">Add User</button>
        </Link>
        <table className="border-collapse w-full">
            <thead>
                <tr>
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">No.</th>
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Email</th>
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Role</th>
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index) => (
                    <tr key={user.uuid}  className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                        <td className="w-full lg:w-auto p-3 text-gray-800  border border-b block lg:table-cell relative lg:static">
                            {index + 1}
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800  border border-b block lg:table-cell relative lg:static">
                            {user.name}
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800  border border-b  block lg:table-cell relative lg:static">
                            {user.email}
                        </td>
                        
                        <td className="w-full lg:w-auto p-3 text-gray-800  border border-b  block lg:table-cell relative lg:static">
                            {user.role}
                        </td>
                    
                        <td className="w-full lg:w-auto p-3 text-gray-800  border border-b  block lg:table-cell relative lg:static">
                            <Link to={'/user/edit/'+user.uuid} className="text-blue-400 hover:text-blue-600 underline">Edit</Link>
                            <Link onClick={() => deleteUsers(user.uuid)} className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserLists