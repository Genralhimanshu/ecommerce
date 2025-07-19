import React, { useEffect } from 'react';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client6 from '../assets/client6.png';
import google from '../assets/google.jpg';
import apple from '../assets/apple.jpg';
import pay1 from '../assets/pay-1.jpg';
import pay2 from '../assets/pay-2.jpg';
import pay3 from '../assets/pay-3.jpg';
import pay4 from '../assets/pay-4.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    if (AOS) {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out',
      });
      AOS.refresh();
    }
  }, []);

  return (
    <div id='contact' className='w-full flex flex-col justify-center items-center'>
      {/* 1st box */}
      <div data-aos="zoom-in" data-aos-delay="100" className='w-full bg-themepurple lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10'>
        <img src={client1} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
        <img src={client2} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
        <img src={client3} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
        <img src={client4} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
        <img src={client5} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
        <img src={client6} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
      </div>

      {/* 2nd box */}
      <div className='w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-4 grid-cols-1 justify-between items-start lg:gap-3 gap-10'>
        {/* About Section */}
        <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-start gap-10'>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 className='text-themepurple text-4xl font-bold underline italic'>Electra Shop</h1>
            <p className='text-gray-500 text-justify'>
              Electra Shop is a leading online shopping platform that offers a wide range of products from electronics, home appliances, and more. <br />
              We provide a seamless shopping experience to our customers with our easy-to-navigate website.
            </p>
            <h1 className='text-black text-[42px] font-semibold leading-[50px] text-center capitalize'>Get In Touch</h1>
          </div>
          <div className='flex flex-col justify-center items-start gap-10'>
            <h1 className='text-black text-xl font-semibold capitalize'>Happy Shopping</h1>
            <div className='flex justify-center items-start gap-4'>
              <img src={google} alt="Google Play" />
              <img src={apple} alt="Apple Store" />
            </div>
          </div>
        </div>

        {/* Useful Links Section */}
        <div data-aos="zoom-in" data-aos-delay="100">
          <h1 className='text-black text-xl font-semibold capitalize'>Useful Links</h1>
          <ul className='m-8 flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-500 text-sm hover:text-black transition duration-300'>Home</li>
            <li className='text-gray-500 text-sm hover:text-black transition duration-300'>Shop</li>
            <li className='text-gray-500 text-sm hover:text-black transition duration-300'>Support</li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div data-aos="zoom-in" data-aos-delay="100">
          <h1 className='text-black text-xl font-semibold capitalize'>Customer Service</h1>
          <ul className=' m-8 flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-500 text-sm hover:text-black transition duration-300'>FAQ</li>
            <li className='text-gray-500 text-sm hover:text-black transition duration-300'>Returns</li>
            <li className='text-gray-500 text-sm hover:text-black transition duration-300'>Contact Us</li>
          </ul>
        </div>

        {/* Additional Links Section */}
        <div data-aos="zoom-in" data-aos-delay="100">
          <h1 className='text-black text-xl font-semibold capitalize'>Additional Links</h1>
          <ul className='m-8 flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-500 text-sm hover:text-black transition duration-300'>Privacy Policy</li>
            <li className='text-gray-500 text-sm hover:text-black transition duration-300'>Terms of Service</li>
            <li className='text-gray-500 text-sm hover:text-black transition duration-300'>Site Map</li>
          </ul>
        </div>
      </div>

      {/* Newsletter and Payment Section */}
      <div className='w-full lg:px-20 px-5 py-[40px] bg-gray-100'>
        <hr className='border-t border-gray-300 py-3' />
        <div className='w-full flex lg:flex-row flex-col justify-between items-center lg:gap-4 gap-10'>
          <div className='lg:w-[20%] w-full flex justify-center items-center gap-4'> 
            <img src={pay1} alt="Payment Method 1" className='w-[50px] rounded-lg' />
            <img src={pay2} alt="Payment Method 2" className='w-[50px] rounded-lg' />
            <img src={pay3} alt="Payment Method 3" className='w-[50px] rounded-lg' />
            <img src={pay4} alt="Payment Method 4" className='w-[50px] rounded-lg' />
          </div>
          <div className='lg:w-[60%] w-full flex lg:flex-row flex-col justify-center items-center gap-4 flex-grow'>
            <h1 className='text-black font-semibold text-2xl'>Subscribe to Our Newsletter</h1>
            <input type="email" placeholder='Enter your email' className='lg:w-auto w-full capitalize px-6 py-3 rounded-l-lg' />
            <button className='bg-themepurple lg:w-auto w-full text-white hover:bg-themeyellow px-6 py-3 rounded-r-lg font-semibold'>Subscribe</button>
          </div>
        </div> 

        {/* Copyright Section */}
        <div className='w-full lg:px-20 px-5 py-[40px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
          <p className='text-gray-500 text-sm'>© 2025 Electra Shop. All Rights Reserved.</p>
        </div>
      </div>
      {/* scroll to top button */}
      <button className='fixed bottom-5 right-5 bg-themepurple hover:bg-themeyellow text-white px-4 py-2 rounded-lg' onClick={() => window.scrollTo(0, 0)}>Back to Top</button>
    </div>
  );
};

export default Footer;