/* eslint-disable no-unused-vars */
import React, { useState } from 'react'




/* eslint-enable no-unused-vars */
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai' // Corrected import path
import { Link } from 'react-scroll'
import logo from '../images/logo.webp';
const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='w-full text-white flex  bg-[#101624]  h-20 mx-auto justify-between lg:justify-around items-center tex-lg px-4 md:px-0'>

           <img src={logo} height={40} width={180} alt="" />

            <ul className=' hidden md:flex'>
               <li className='p-3'> <Link TO="/home"className='nav-link'activeClass='active'>HOME</Link> </li>
               <li className='p-3'> <Link TO="/about"className='nav-link'activeClass='active'>ABOUT</Link> </li>
               <li className='p-3'> <Link TO="/services"className='nav-link'activeClass='active'>SERVICES</Link> </li>
               <li className='p-3'> <Link TO="/testimonials"className='nav-link'activeClass='active'>TESTIMONIALS</Link> </li>
               <li className='p-3'> <Link TO="/birography"className='nav-link'activeClass='active'>BIOGRAPHY</Link> </li>
            </ul>

            
            <button className="px-4 py-2 rounded-full hidden  text-[#101624] border border-[#FEC544] bg-[#FEC544] lg:block hover:bg-[#101624] hover:text-white hover:ease-in-out duration-500 font-medium">
            <Link to="/ContactMe">Contact me</Link>
            </button>


            

            <div onClick={handleNav} className='block bg-[#FEC544] font-bold text-[#101624] p-1 rounded-sm md:hidden z-40'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            <div className={nav ? 'z-40 text-gray-300 fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-200 bg-[#101624] ease-in-out duration-500' : 'fixed left-[-100%]' }>


            <img className='m-4' src={logo} height={40} width={180} alt="" />
            <ul className='p-8 text-2xl'>
               <li className='p-5'> <Link TO="/home">HOME</Link> </li>
               <li className='p-5'> <Link TO="/about">ABOUT</Link> </li>
               <li className='p-5'> <Link TO="/services">SERVICES</Link> </li>
               <li className='p-5'> <Link TO="/testimonials">TESTIMONIALS</Link> </li>
               <li className='p-5'> <Link TO="/birography">BIOGRAPHY</Link> </li>
            </ul>

        

            </div>
           
        </div>
    )
}

export default Navbar
