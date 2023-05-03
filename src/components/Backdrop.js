import React from 'react'

const Backdrop = ({sideNav,closeSideNav}) => {
  return (
    <div className={sideNav?"backdrop backdrop--open":"backdrop"} onClick={closeSideNav}>
      
    </div>
  )
}

export default Backdrop
