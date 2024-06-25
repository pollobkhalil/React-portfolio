import React from 'react'
import HeroImage from '../images/HeroImage.webp'
import TD from '../images/TD.webp'
import TP from '../images/TP.webp'

import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div
      className='w-full  pt-11 lg:pt-20 p-5 lg:p-0 bg-cover bg-center flex flex-col lg:flex-row justify-between'
      
    >
      <div className='w-full lg:w-2/4 order-2 lg:order-1 lg:pl-20'>
        <h1 className=' text-center text-3xl lg:text-[80px] lg:text-start text-white leading-snug font-bold'>BAPPY RAHMAN</h1>
        <p className='text-white text-base   text-center lg:text-start lg:text-[22px] lg:w-[70%] py-4 leading-snug font-normal'>
          A Result Driven Real Estate & Online  Marketing Consultant
        </p>
        <div className='flex items-center  justify-center lg:items-start lg:justify-start'>
          <button className="py-2 px-5 my-4  rounded-full text-lg font-normal text-[#101624] border border-[#FEC544] bg-[#FEC544] hover:bg-[#101624] lg:px-10 hover:text-white hover:ease-in-out duration-500">
          <Link to="/ContactMe">Contact me</Link>
        </button>
        </div>
        

        <div className='items-center justify-center'>
          <p className='text-white text-center lg:text-start text-lg my-4'>Co-Founder of:</p>

          <div className='flex w-full items-center justify-center gap-10 lg:flex-row lg:gap-20'>
            <div className='flex flex-col items-center lg:flex-row gap-3'>
              <img className='rounded-full border-2 border-[#FEC544] w-16' src={TD} alt="Triumph Digital Logo" />
              <p className='text-white text-2xl font-medium'>Triumph Digital</p>
            </div>
            <div className='flex flex-col items-center lg:flex-row gap-3'>
              <img className='rounded-full border-2 border-[#FEC544] w-16' src={TP} alt="Another Logo" />
              <p className='text-white text-2xl font-medium'>Triumph Digital</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-2/4 order-1  lg:order-2'>
        <img src={HeroImage} className='w-[85%] mx-auto' alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
