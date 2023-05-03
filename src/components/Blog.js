import React from 'react'
import blogImg from '../img/blog-01.jpg'
import blogImg1 from '../img/blog-02.jpg'
import blogImg2 from '../img/blog-03.jpg'
import blogImg3 from '../img/blog-04.jpg'
import blogImg4 from '../img/blog-05.jpg'


const Blog = () => {

  const blogPic = [blogImg1,blogImg2,blogImg3,blogImg4]
  const blogPicCard =  blogPic.map((list)=>{
    return <div className='blog-news'> <img src={list} alt="blog card"/></div>
})

  return (
    <div className='blog-main-container'>
      <div className='blog-max-container'>
        <h2>The latest news from PlayStation Blog</h2>
        <div className='blog-card-container'>
            <div className='blog-left'>
                <div className='blog-main-card'>
                    <div className='img-blog'>
                        <img src={blogImg} alt=""/>
                    </div>
                    <h2>Horizon Forbidden West delayed to February 18th,2022</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel justo id augue commodoLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel justo id augue commodoLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel justo id augue commodo</p>
                </div>
            </div>
            <div className='blog-right'>
               {blogPicCard}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
