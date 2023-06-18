import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormEditProduct from '../components/FormEditProduct'
import { getMe } from '../features/authSlice'
import Layout from './Layout'

const EditProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isError, user} = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])
    
    useEffect(() => {
        if(isError) {
        navigate('/')
        }
        if(user && user.role !== 'admin') {
            navigate('/dashboard')
        }
    }, [isError, user, dispatch])
  return (
    <Layout>
        <FormEditProduct/>
    </Layout>
    )
}

export default EditProduct