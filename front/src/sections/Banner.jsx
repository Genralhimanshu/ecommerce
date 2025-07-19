import React, { useEffect } from 'react';
import deal from '../assets/deal-bg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
  useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out',
      });
      AOS.refresh();
    }, []);
  return (
    <div className='w-full lg:px-20 px-5 py-[80px]'>
      <div data-aos="zoom-in" data-aos-delay="200" className='w-full h-[300px] rounded-lg bg-cover bg-center  flex flex-col justify-center items-center gap-3' style={{ backgroundImage: `url(${deal})` }}>
        <h1 className='text-themeyellow font-semibold text-xl'>Get the best deals</h1>
        <h1 className='text-white font-bold text-[42px] leading-[50px] text-center p-4'>Deal of the day</h1>
      </div>
    </div>
  )
}

export default Banner
