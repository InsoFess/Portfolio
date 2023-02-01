import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {

  const data = [
    {id:1, image: IMG1, title:'Это название элемента портфолио1', github:'https://github.com', demo:'https://dribbble.com/Alien_pixels'},
    {id:2, image: IMG2, title:'Это название элемента портфолио2', github:'https://github.com', demo:'https://dribbble.com/Alien_pixels'},
    {id:3, image: IMG3, title:'Это название элемента портфолио3', github:'https://github.com', demo:'https://dribbble.com/Alien_pixels'},
    {id:4, image: IMG4, title:'Это название элемента портфолио4', github:'https://github.com', demo:'https://dribbble.com/Alien_pixels'},
    {id:5, image: IMG5, title:'Это название элемента портфолио5', github:'https://github.com', demo:'https://dribbble.com/Alien_pixels'},
    {id:6, image: IMG6, title:'Это название элемента портфолио6', github:'https://github.com', demo:'https://dribbble.com/Alien_pixels'},
  ]

  return (
    <section id='portfolio'>
      <h5>Мои недавние работы</h5>
      <h2>Портфолио</h2>
      <div className='container portfolio__container'>
      {
        data.map(({id,image, title, github, demo}) => {
          return(
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
          
        </article>
          )
        })
      }
       
      </div>
    </section>
  )
}

export default Portfolio