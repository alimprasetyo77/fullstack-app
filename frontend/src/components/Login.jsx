import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LoginUser, reset } from '../features/authSlice'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth)
    useEffect(() => {
      if(user || isSuccess) {
        navigate('/dashboard')
      }    
      dispatch(reset())
    }, [user, isSuccess, navigate, dispatch])
    

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(LoginUser({email, password}))
    }
    return (
        <div>
            <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
                <form onSubmit={handleLogin}>
                    <section className="flex w-[30rem] flex-col space-y-10">
                        <div className="text-center text-4xl font-medium">Log In</div>
                        {isError &&  <div className="text-center text-base font-medium text-rose-600"> {message} </div>}
                        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500" >
                            <input type="text" placeholder="Email" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500" >
                            <input type="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" 
                                value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <button type='submit' className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400" >
                            {isLoading ? 'loading...' : 'LOG IN'}
                        </button>

                    </section>
                </form>
            </main>
        </div>
    )
}

export default Login