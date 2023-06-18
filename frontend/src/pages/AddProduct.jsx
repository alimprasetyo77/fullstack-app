import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormAddProduct from '../components/FormAddProduct'
import { getMe } from '../features/authSlice'
import Layout from './Layout'

const AddProduct = () => {
  return (
    <Layout>
        <FormAddProduct/>
    </Layout>
    )
}

export default AddProduct