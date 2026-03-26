import {getAllProducts, searchProductByQuery} from '@/services/productService'
import Image from 'next/image'
import React from 'react'

const FeaturedProducts = async () => {



const data = await getAllProducts();


  return (
    <div className='products-wrapper'>
      {data.products.map((product, index) => (
        <a key={product.id} className="single-product" href={`/products/${product.id}`}>
          <h2 className='product-title'>{product.title}</h2>
          <Image src={product.images[0]} width="300" height="150" alt={product.title} key={crypto.randomUUID()} className='product-image'/>
        </a>
      ))}
    </div>
  )
}

export default FeaturedProducts

