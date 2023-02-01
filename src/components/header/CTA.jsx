import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Скачать Портфолио</a>
        <a href='#contacts' className='btn btn_primary'>Связаться со мной</a>
    </div>
  )
}

export default CTA