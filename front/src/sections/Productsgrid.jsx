import React from 'react'
import { useEffect } from 'react';
import { MdAddShoppingCart,MdOutlineRemoveRedEye } from 'react-icons/md'
import { FaStar, FaHeart } from 'react-icons/fa';
import { products } from  '../export.js';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Productsgrid = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);
  return (
    <div id="products" className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-themepurple text-xl font-semibold '>Browse Collection</h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[42px] font-semibold leading-[50px] text-center'>Trending Products</h1>
      <div data-aos="zoom-in" data-aos-delay="300" className=' w-full grid  lg:grid-cols-4 grid-cols-1 gap-10 justify-center items-center mt-10'>
      {
  products.map((item, index) => (
    <div id="product-box" key={index} className='flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative'>
      <img src={item.img} alt={item.name} className='w-full h-[200px] object-cover' />
      <div id="icons" className='flex justify-center items-center gap-3 absolute top-[20px]'>
        <div className='bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white'>
          <MdOutlineRemoveRedEye />
        </div>
        <div className='bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white'>
          <FaHeart />
        </div>
        <div className='bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white'>
          <MdAddShoppingCart />
        </div>
      </div>
      <h1 className="text-lg text-gray-400 font-semibold">{item.category}</h1>
      <h3 className="text-lg text-black font-semibold">{item.name}</h3>
      <h1 className="text-sm text-themepurple text-gray-400">{item.price}</h1>
      
        <div className="w-full mt-2">
        <hr />
        <div className='flex justify-between items-center gap-6 mt-3'>
          <div className='flex justify-start items-center gap-1'>
            <FaStar className='text-themepurple' />
            <FaStar className='text-themepurple' />
            <FaStar className='text-themepurple' />
            <FaStar className='text-themepurple' />
            <FaStar className='text-themepurple' /> 

          </div>
          <button className='bg-green-500 text-white px-4 py-2 rounded-lg text-[13px]'>SALE 14%</button> 

        </div>
        
      </div>
    </div> 
  ))
}
      </div>
      <button data-aos="zoom-in" data-aos-delay="400" className='bg-themepurple hover:bg-themeyellow text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-8'>VIEW MORE</button>
    </div>
  )
}

export default Productsgrid
