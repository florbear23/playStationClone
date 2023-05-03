
import './css/style.css';
import React from 'react'
import Header from './components/Header';
import Slider from './components/Slider';
import ComingSoon from './components/ComingSoon';
import img01 from "./img/slider-01.jpg"
import NewRealease from './components/NewRealease';
import GamingProduct from './components/GamingProduct';
import Blog from './components/Blog';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import Backdrop from './components/Backdrop';



function App() {

  const slides = [
    {
      src: img01,
      title: 'A platform that offers the ultimate competitive gaming experience',
      description: 'PlayStation has revolutionized the gaming industry with its innovative hardware, immersive gaming experiences, and commitmentto pushing the boundaries of whats possible in gaming',
      button:"Buy Now!!",
    },
    {
      src: 'https://4kwallpapers.com/images/walls/thumbs_3t/4913.jpg',
      title: 'A platform that offers the ultimate competitive gaming experience',
      description: 'PlayStation has revolutionized the gaming industry with its innovative hardware, immersive gaming experiences, and commitmentto pushing the boundaries of whats',
      button:"Buy Now!!",
    },
    {
      src: 'https://4kwallpapers.com/images/walls/thumbs_3t/4913.jpg',
      title: 'Welcome to Slide 3',
      description: 'This is the third slide',
      button:"Buy Now!!",
    },
  ];

  const [sideNav , setSiteNav] = React.useState(false)
  const toggleSidebar =()=>{
    setSiteNav((prevState) => !prevState)
  }


  return (
    <div className="App">
      <Backdrop sideNav={sideNav} closeSideNav={toggleSidebar}/>
      <SideNav sideNav={sideNav}/>
      <Header openSideBar={toggleSidebar}/>
      <Slider slides={slides}/>
      <NewRealease/>
      <ComingSoon/>
      <GamingProduct/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
