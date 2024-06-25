import React, { useState } from 'react';

import { RiHomeGearLine } from 'react-icons/ri';
import { TbHomeStats, TbHomeCheck } from 'react-icons/tb';
import { MdOutlineCampaign } from 'react-icons/md';
import { GoLaw } from 'react-icons/go';
import { FaDigitalOcean } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Includes = [
  {
    icon: RiHomeGearLine,
    title: 'Property Management',
    description: 'Comprehensive property management services to handle everything from tenant relations to maintenance, ensuring your property is well-maintained and profitable.',
  },
  {
    icon: TbHomeStats,
    title: 'Real Estate Appraisal',
    description: 'Professional property valuation services to determine the accurate market value of your real estate for buying, selling, or investment purposes.',
  },
  {
    icon: MdOutlineCampaign,
    title: 'Real Estate Marketing',
    description: 'Promoting your property with effective marketing strategies to attract buyers, renters, or investors quickly and efficiently. So that your market grows straight.',
  },
  {
    icon: TbHomeCheck,
    title: 'Finding The Right Real Estate',
    description: 'Helping you find the perfect property to meet your personal or business needs, whether it\'s a home, office space, or investment. Right choice right investment.',
  },
  {
    icon: GoLaw,
    title: 'Property LAW',
    description: 'Providing expert legal advice and support for all aspects of real estate transactions, ensuring compliance and protecting your interests.',
  },
  {
    icon: FaDigitalOcean,
    title: 'Digital Marketing',
    description: 'Leveraging digital platforms to enhance your real estate business\'s online presence and reach a broader audience. So that you can achieve what you need.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Consultancy = () => {
  const [consultancyIncludes, setConsultancyIncludes] = useState(0);

  return (
    <div className='w-full bg-cover py-20  ' id='services' >
      <h1 className='text-white text-center text-[40px] lg:text-[60px] font-bold'>MY CONSULTANCY INCLUDES</h1>
      <div className='w-full px-6 lg:px-24 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 '>

        {Includes.map((include, index) => (
          <motion.div 
            key={index} 
            className='bg-[#101624] p-5 flex flex-col items-center justify-start rounded-lg w-full h-[321px] border border-[#FEC544] shadow-md transition-shadow hover:shadow-xl hover:shadow-[#FEC544]/50'
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className='rounded-full mt-5 w-[100px] h-[100px] bg-[#070D1B] flex items-center justify-center '>
              <include.icon className='text-white text-5xl hover:text-[#FEC544]' />
            </div>
            <p className='mt-4 text-xl font-bold text-white text-center'>
              {include.title}
            </p>
            <p className='mt-2 text-center text-white'>
              {include.description}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Consultancy;
