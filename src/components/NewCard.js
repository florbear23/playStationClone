import React from 'react'


const NewCard = (props) => {
  return (
    <div>
       <div className='card-container'>
            <img src={props.item.coverImg} className="card--image" />
            <h2 className='card-title'>{props.item.title}</h2>
            <p className='card-genre'>{props.item.genre}</p>
            <p className='card-ratings'>Ratings {props.item.stats.rating}</p>
            <p className='card-price'>${props.item.price}</p>
        </div>
    </div>
  )
}

export default NewCard
