import React from 'react'
import { CONTACT_DATA } from '../../constants/api'
import { ContactItem, Slider } from '../../molecules'
import {SwiperSlide} from 'swiper/react'
import { useWindowSize } from '../../../hooks/useWindowSize'

const Contacts = () => {

    const {
        isMobile
    } = useWindowSize()

  return (
    <div className='my-10'>
        <div className='px-10 lg:px-20 mb-10  flex justify-center items-center'>
            <h2 className='text-4xl text-white font-bold'>
                Contacts
            </h2>
        </div>
        <Slider
        style={isMobile ? {paddingLeft: 40, paddingRight: 40} :{paddingLeft: 80, paddingRight: 80}} 
        spaceBetween={10}
        breakpoints={{
            640: {
                slidesPerView: 1.3
            },
            1200: {
                slidesPerView: 3.4
            },
            2000: {
                slidesPerView: 5.4
            }
        }}>
            {CONTACT_DATA.map((contact, key) => (
                <SwiperSlide key={key}>
                    <ContactItem {...contact} />
                </SwiperSlide>
            ))}
        </Slider>
    </div>
  )
}

export default Contacts