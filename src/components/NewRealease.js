import React from 'react'
import newRealeaseData from "../data/newRealeaseData"
import NewCard from './NewCard'


const NewRealease = () => {

   const cards = newRealeaseData.map(item => {
        return (
            <NewCard className='new-card'
                key={item.id}
                item={item}
            />
        )
    })          
  return (
    <div className='new--realease'>
      <h2>New releases</h2>
      <p>Great PS5 and PS4 games available now</p>
      <div className='card-new-realease'>
        {cards}
      </div>
    </div>
  )
}

export default NewRealease
