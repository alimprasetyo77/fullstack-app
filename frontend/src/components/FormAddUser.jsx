import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const FormAddUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] =  useState('')
    const [confPassword, setConfPassword] =  useState('')
    const [role, setRole] = useState('')
    const [msg, setMsg] = useState('')
    const navigate = useNavigate()
    
    const addUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/users',{
                name : name,
                email : email,
                password : password, 
                confPassword : confPassword,
                role : role
            })
            navigate('/user-list')
        } catch (error) {
            if(error.response) {
                const message = error.response.data.msg
                setMsg(message)
            }
        }
        
    }


  return (
    <div>
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
            <p className='font-medium text-2xl mb-4' >Add users</p>
                <form onSubmit={addUser}>
                    <div>
                        <p className='font-medium text-base mb-4 text-rose-600' >{msg}</p>
                    </div>
                <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]"> Name </label>
                    <input type="text" name="name" id="name" placeholder="Full Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]" > Email Address </label>
                    <input type="email" name="email" id="email" placeholder="example@domain.com" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]" > Password </label>
                    <input type="password" name="password"  placeholder="password" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]" > Confirm Password </label>
                    <input type="password" name="password"  placeholder="confirm password" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                </div>

                <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]" > Role </label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                        <option value={'admin'} >Admin</option>
                        <option value={'user'} >User</option>
                    </select>
                </div>


                <div>
                    <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" >
                    Submit
                    </button>
                </div>
                </form>
            </div>
            </div>
    </div>
  )
}

export default FormAddUser