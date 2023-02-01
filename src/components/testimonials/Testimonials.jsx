import React  from "react";
import './testimonials.css'
import AVT1 from '../../assets/AVT1.jpg'
import AVT2 from '../../assets/AVT2.jpg'
import AVT3 from '../../assets/AVT3.jpg'
import AVT4 from '../../assets/AVT4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {

  const data = [
    {avatar: AVT1, name: 'Sam Ling', review: 'odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus'},
    {avatar: AVT2, name: 'John Neki', review: 'cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices'},
    {avatar: AVT3, name: 'Vince Klark', review: 'molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat'},
    {avatar: AVT4, name: 'Kate Bush', review: 'id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl'},
  ]

  return (
    <section id='testimonials'>
      <h5>Отзывы клиентов</h5>
      <h2>Рекомендации</h2>

      <Swiper className='container testimonials__container'  // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
      }} 
      
      
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      {
        data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide className='testimonial' key={index}>
                <div className='client__avatar'>
                  <img src={avatar} alt='avatar1' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
        
        
      </Swiper>
    </section>
  )
}

export default Testimonials