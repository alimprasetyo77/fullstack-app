import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductLists from '../components/ProductLists'
import { getMe } from '../features/authSlice'
import Layout from './Layout'

const Products = () => {
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
  

  return (
    <Layout>
        <ProductLists/>
    </Layout>
  )
}

export default Products