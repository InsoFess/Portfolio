import React from 'react'
import './header.css'
import CTA from './CTA'
import MAN from '../../assets/man1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Привет, меня зовут</h5>
        <h1>Федотов Михаил</h1>
        <h5 className='text-light'>Frontend Разработчик</h5>
        <CTA />
        <HeaderSocials /> 
        <div className='me'>
          <img src={MAN} alt='man'/> 
        </div>
        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header