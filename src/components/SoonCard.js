import React from 'react'

const SoonCard = (props) => {
  return (
    <div className='card-soon-container'>
       <img src={props.item.img} className="card--image" />
       <h2 className='card-title'>{props.item.title}</h2>
    </div>
  )
}

export default SoonCard
