import React from 'react';
import footerLogo from '../img/footer01.png'
import HeaderDropDown from './HeaderDropDown'
import '../css/style.css'

function SideNav({sideNav}) {
    let sideNavList = ['Hardware','Services','News','Shop','Support']
    const sortnav =  sideNavList.map((list)=>{
        return <li className='navList'><a href="#">{list}</a></li>
    })
    return (
        <div className={sideNav?"sidebar sidebar--open":"sidebar"}>
            <img src={footerLogo} alt="footer logo"/>
            <li className='drop-down'><HeaderDropDown/></li>
            {sortnav}
            <input className='search-area' type="text" name="search" placeholder="Search everything..."/>
            <button  className='sign-in-side'>Sign In</button>
        </div>
    )

}

export default SideNav

