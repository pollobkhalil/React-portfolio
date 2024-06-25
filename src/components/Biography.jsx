import React from 'react';
import { motion } from 'framer-motion';
import biographyImg from '../images/biographyImg.webp';

const Biography = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly down)
      animate={{ opacity: 1, y: 0 }} // Animation state (fully visible and in place)
      transition={{ duration: 0.8, ease: 'easeOut' }} // Animation transition configuration
      className='w-full bg-cover py-20 lg:px-20'
      id='Biography'
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='text-white p-5 text-center py-3 text-[40px] lg:text-[60px] font-bold'
      >
        BIOGRAPHY
      </motion.h1>

      <div className='flex flex-col md:flex-row items-start justify-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='w-full md:w-2/5 p-4'
        >
          <motion.img
            src={biographyImg}
            alt='About'
            className='rounded-lg shadow-lg'
           
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='w-full md:w-1/2 p-4 flex flex-col justify-center items-start'
        >
          <motion.p
            className='text-lg mb-4 text-justify text-[#9EA4B0]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Bappy Rahman holds a Bachelor’s degree in International Business Management and an MBA
            in Hospitality and Tourism Management. Since moving to Thailand, he has gained extensive
            experience in various sales roles within the business sector.
            <br />
            <br />
            Originally from Bangladesh, Bappy relocated to Thailand to pursue Business Studies at
            Assumption University in Bangkok. This decision perfectly blended his passion for
            tourism and his desire to learn about different cultures. He quickly integrated with his
            diverse group of fellow students worldwide.
          </motion.p>
          <motion.button
            className='py-2 px-5 my-4 rounded-full text-lg font-normal text-[#101624] border border-[#FEC544] bg-[#FEC544] hover:bg-[#101624] lg:px-10 hover:text-white hover:ease-in-out duration-500'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact me
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Biography;
