import React from 'react'
import comingSoonData from '../data/comingSoonData'
import SoonCard from './SoonCard'
const ComingSoon = () => {
    const soonCards = comingSoonData.map(item => {
        return (
            <SoonCard className='new-card'
                key={item.id}
                item={item}
            />
        )
    }) 

  return (
    <div className='coming-soon-container'>
      <h2 className='comingSoon-title'>Coming soon</h2>
      <p className='comingSoon-des'>Amazing new experiences are just aroun the courner</p>
      <div className='comingSoon-card'>
        {soonCards}
      </div>
    </div>
  )
}

export default ComingSoon
