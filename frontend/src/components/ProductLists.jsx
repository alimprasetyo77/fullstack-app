import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductLists = () => {
    const [products , setProducts] = useState([])
    useEffect(() => {
        getProducts()        
    }, [])
    
    const getProducts = async () => {
        const res = await axios.get('http://localhost:5000/products')
        setProducts(res.data)
    }

    const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:5000/products/${productId}`)
        getProducts()
    }
    return (
        <div className="focus:outline-none pr-8">
            <div className='flex justify-between mb-4'>
                <p className='font-normal text-2xl' >List of products</p>
                <Link to={'/product/add'}>
                <button className="uppercase shadow bg-emerald-800 hover:bg-emerald-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-6 rounded-lg ">Add Product</button>
                </Link>
            </div>
            <div className="mx-auto container">
                <div className="flex flex-wrap justify-start gap-4 ">
                    {products.map((product) => (
                        <div key={product.uuid} className="bg-gray-200 rounded shadow-lg">
                            <div  className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                                <div className='pt-2' >
                                    <img alt="person capturing an image" src="data:image/jpeg;base64,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"  className="focus:outline-none w-full h-44 rounded" />
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <h2  className="focus:outline-none text-lg font-semibold">{product.name}</h2>
                                        <h2  className="focus:outline-none text-lg font-semibold">${product.price}</h2>
                                    </div>
                                    <p  className="focus:outline-none text-xs text-gray-600 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                    <p  className="focus:outline-none text-xs text-gray-600 mt-3">Created By {product.user.name}</p>

                                </div>
                                <div className='flex justify-end gap-2 my-2 w-full' >
                                    <Link to={`/product/edit/${product.uuid}`}>
                                    <button className="uppercase shadow bg-cyan-800 hover:bg-cyan-700 focus:shadow-outline focus:outline-none text-white text-xs py-1 px-7 rounded-full">edit</button>
                                    </Link>
                                    <button onClick={() => deleteProduct(product.uuid)} className="uppercase shadow bg-rose-800 hover:bg-rose-700 focus:shadow-outline focus:outline-none text-white text-xs py-1 px-7 rounded-full">remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default ProductLists