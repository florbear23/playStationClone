import React from 'react'
import ProductCardData from '../data/productData'
import ProductCard from './ProductCard'

const GamingProduct = () => {

    const ProductCards = ProductCardData.map(item => {
        return (
            <ProductCard className='product-cards'
                key={item.id}
                item={item}
            />
        )
    })    

  return (
    <div className='productFull'>
      <div className='product-container'>
        <h2>Gaming Product</h2>
        <p>Experience an all-new generation of incredible products.</p>
        <div className='card-product'>
            {ProductCards}
        </div>
      </div>
    </div>
  )
}

export default GamingProduct
