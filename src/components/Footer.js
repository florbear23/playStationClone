import React from 'react'
import footerLogo from '../img/footer01.png'
import footerIcon01 from "../img/footer-icon01.png"
import footerIcon02 from "../img/footer-icon02.png"
import footerIcon03 from "../img/footer-icon03.png"

const Footer = () => {
    const titleFooter = ['About','Product','Values','Support','Resources']
    const aboutList =['About SIE','Carriers','PlayStaion Studios','Corporate']
    const aboutDis =  aboutList.map((Aboutlist)=>{
        return <li><a href="#">{Aboutlist}</a></li>
    })

    const productList = ['PS5','PS4','PS VR','PS Plus','Accessories','Games']
    const productDis = productList.map((Productlist)=>{
        return <li><a href="#">{Productlist}</a></li>
    })

    const valueList = ['Environment','Accessibility','Online safety','Diversity,equity']
    const valuetDis = valueList.map((valuelist)=>{
        return <li><a href="#">{valuelist}</a></li>
    })

    const supportList = ['Support hun','PlayStation safety','PSN Status','PlayStation Repairs','Password Reset','Manuels']
    const supporttDis = supportList.map((supportlist)=>{
        return <li><a href="#">{supportlist}</a></li>
    })

    const resourcesList = ['PSN terms of service','PS Store cancel policy','Age ratings','Health warning','Developers','Glossery']
    const resourcestDis = resourcesList.map((resourceslist)=>{
        return <li><a href="#">{resourceslist}</a></li>
    })
  return (
    <div className='footer-main-container'>
      <div className='footer-max-container'>
        <div className='footer-left'>
            <img src={footerLogo} alt="footer logo"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel justo id augue commodo vulputate sed ac turpis. Integer vel dolor nec sapien lacinia malesuada a eget lacus..</p>
            <div className='footer-details'>
                <h2>Get in Touch with Us</h2>
                <ul className='footer-list'> 
                    <li><span><img src={footerIcon01} alt="icon"/></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li><span><img src={footerIcon02} alt="icon"/></span> 0000-00000-000</li>
                    <li><span><img src={footerIcon03} alt="icon"/></span> Support@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className='footer-right'>
            <div className='footer-nav-list'>
                <h2>{titleFooter[0]}</h2>
                <ul>
                    {aboutDis}
                </ul>
            </div>
            <div className='footer-nav-list'>
                <h2>{titleFooter[1]}</h2>
                <ul>
                    {productDis}
                </ul>
            </div>
            <div className='footer-nav-list'>
                <h2>{titleFooter[2]}</h2>
                <ul>
                    {valuetDis}
                </ul>
            </div>
            <div className='footer-nav-list'>
                <h2>{titleFooter[3]}</h2>
                <ul>
                    {supporttDis}
                </ul>
            </div>
            <div className='footer-nav-list'>
                <h2>{titleFooter[4]}</h2>
                <ul>
                    {resourcestDis}
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
