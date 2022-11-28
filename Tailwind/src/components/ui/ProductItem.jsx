import React from 'react'
import {FiPlus} from "react-icons/fi"

export default function ProductItem({product}) {
  return (
    <div className='relative bg-white flex gap-y-1 p-3 flex-col items-center text-sm font-semibold'>
      {/*Insıde of productItem we return a button that will appear at top right,
      product image,product's price,product title and product.alt is means gr of products or liters */}
        <button className='transition-colors absolute top-3 -right-0 w-8 h-8 flex items-center justify-center rounded-lg text-brand-color shadow-md hover:border-brand-color border border-gray-200'>
            <FiPlus size={16}/>
            </button>
        <img src={product.image} alt={product.title} />
        <div className=' text-brand-color'>{product.price}</div>
        <div className='text-gray-800'>{product.title}</div>
        <div className='text-gray-500'>{product.alt}</div>
    </div>
  )
}
