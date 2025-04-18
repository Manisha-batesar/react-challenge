import React from 'react'
import articleImage from '../../assets/illustration-article.svg'
import AuthorImg from '../../assets/image-avatar.jpg'
import './Card.css'

const Card = () => {
  return (
    <div className='card'>
    <div className='articalImg'>
      <img src={articleImage} alt='article-image'/>
    </div>


    <div className='cardContent'>
      <span>Learning</span>
    </div>


    <div className='cardPublished'>
      <p>Published 21 Dec 2023</p>
    </div>


    <div className='cardHeading'>
      <h6>HTML & CSS foundations</h6>
      <p>These Languages are the backbon of every website, defining structure, content, and presentation.</p>
    </div>

    <div className='cardAuthor'>
      <img src={AuthorImg}/>
      <p> <span className='author'>Greg Hooper</span></p>
    </div>


  </div>
  
  )
}

export default Card