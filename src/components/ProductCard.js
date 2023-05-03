import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='product-cards'>
        <img src={props.item.img} className="card--image" />
        <h2 className='product-title'>{props.item.title}</h2>
        <p className='product-description'>{props.item.discription}</p>

        <div className='container-product'>
            <div className='product-left'>
                <p className='product-ratings'>Ratings {props.item.rating}</p>
                <p className='product-price'>${props.item.price}</p>
            </div>
            <div className='product-right'>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
