import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const FormAddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [msg, setMsg] = useState('')
    const navigate = useNavigate()

    const addProduct = async  (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/products',{
                name : name,
                price : price
            })
            navigate('/product-list')
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

  return (
    <div>
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <p className='font-medium text-2xl mb-4' >Add Product</p>
                <form onSubmit={addProduct} >
                    <div>
                        <p className='font-medium text-base mb-4 text-rose-600' >{msg}</p>
                    </div>
                    <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]"> Product Name </label>
                        <input type="text" name="name" id="name" placeholder="product name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]" > Price </label>
                        <input type="text" name="price" id="price" placeholder="999" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div>
                        <button type='submit' className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
            </div>
    </div>
  )
}

export default FormAddProduct