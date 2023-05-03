import React from 'react'
import logo from '../img/main-logo.png'
import HeaderDropDown from './HeaderDropDown'
import menu from '../img/burger-menu.png'
import '../css/style.css'
const Header = ({openSideBar}) => {

let navList = ['Hardware','Services','News','Shop','Support']
const nav =  navList.map((list)=>{
    return <li className='navList'><a href="#">{list}</a></li>
})

  return (
    <header className='main-header'>
      <div className='max-width-header'>
       <div className='top-header'>
        <img src={logo} alt="main-logo"/>
        <input type="text" name="search"  placeholder="Search everything..."/>
        <button  className='sign-in'>Sign In</button>
        <button className='menu' onClick={openSideBar}><img src={menu} alt=""/></button>
       </div>
        <div className='lower-header'>
            <ul>
              <li><HeaderDropDown/></li>
              {nav}
            </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
