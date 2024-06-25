import React from 'react'
import { motion } from 'framer-motion'
import aboutImg from '../images/aboutImg.webp'

const About = () => {
  return (
    <motion.div
      className='w-full bg-cover py-20 lg:px-20'
      id='about'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className='text-white p-5 text-center py-3 text-[40px] lg:text-[60px] font-bold'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        ABOUT BAPPY RAHMAN
      </motion.h1>

      <motion.div
        className='flex flex-col md:flex-row items-start justify-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className='w-full md:w-2/5 p-4'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <img
            src={aboutImg}
            alt='About'
            className='rounded-lg shadow-lg'
          />
        </motion.div>
        <motion.div
          className='w-full md:w-1/2 p-4 flex flex-col justify-center items-start'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <p className='text-lg mb-4 text-justify text-[#9EA4B0]'>
            Bappy Rahman is a seasoned Real Estate & Online Marketing
            Consultant with over a decade of industry experience.
            Specializing in Real Estate Investment in Thailand and Online
            Marketing, Bappy has consistently helped companies and
            individuals achieve outstanding results. His expertise and
            strategic insights have positioned him as a trusted advisor in
            the field. Whether guiding real estate investments or crafting
            impactful online marketing strategies, Bappy Rahman’s proven
            track record speaks for itself.
          </p>

          <p className='text-base font-normal mb-2 text-white'>
            Email:{' '}
            <a
              href='mailto:example@example.com'
              className='text-white hover:text-[#FEC544]'
            >
              bappy@triumphpropertythailand.com
            </a>
          </p>
          <p className='text-base text-white font-normal mb-2'>
            Address:{' '}
            <a
              href='https://maps.app.goo.gl/GPGD9pk1UtVGJs2f6'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-[#FEC544]'
            >
              33, Interchange 21, Room 3336 Sukhumvit Road, Khlong Toei Nuea,
              Watthana, Bangkok 10110
            </a>
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='py-2 px-5 my-4 rounded-full text-lg font-normal text-[#101624] border border-[#FEC544] bg-[#FEC544] hover:bg-[#101624] lg:px-10 hover:text-white hover:ease-in-out duration-500'
          >
            Contact me
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About