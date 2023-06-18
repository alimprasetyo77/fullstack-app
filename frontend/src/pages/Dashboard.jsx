import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Content from '../components/Content'
import { getMe } from '../features/authSlice'
import Layout from './Layout'

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isError} = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])
  
  useEffect(() => {
    if(isError) {
      navigate('/')
    }
  }, [isError, dispatch])
  

  return  (
    <div className='bg-gray-200 font-sans h-screen w-full pr-8'>
      <Layout>{<Content/>}</Layout>
    </div>
  )
}

export default Dashboard