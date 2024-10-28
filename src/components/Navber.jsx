import React from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/Logo.png"
import nav from "../assets/head-ad.png"
import nav3 from "../assets/head-ad3.png"
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare, FaWhatsapp, FaUser  } from "react-icons/fa";


const Navber = () => {
  return (
    <section className=' w-full bg-[#F1F4FF] lg:py-[40px] py-[20px] lg:px-0 px-2'>
     <Container>
        <div className=" lg:flex items-center">
          <div className=" lg:w-[65%] flex items-center">
          <div className=" w-[35%] ">
            <img src={logo} alt="logo" /> 
           </div>
           <div className=" relative w-[120%] flex justify-center  lg:pl-[150px] pl-[30px]">
            <img className=' w-full' src={nav} alt="" />
            <div className=" flex absolute lg:left-[170px] lg:bottom-0  text-[#fff] items-center lg:px-0 px-2">
                <h2 className=' font-pops font-bold lg:text-[40px] text-[14px]'>560x80</h2>
                <h3 className=' font-sans font-medium lg:text-[20px] text-[8px] lg:pl-[20px] pl-[6px]'>Smart & Responsive
                ADVERTISEMENT</h3>
                <img className=' lg:h-[91px] h-[35px] lg:pr-0 pr-[20px]' src={nav3} alt="" />
               <div className=" lg:pr-[40px] lg:pl-[20px] lg:pb-0 pb-[10px]">
               <a href="#" className=' lg:px-[40px] lg:py-[8px] bg-[#868fab] inline-block font-pops font-medium lg:text-[18px] text-[8px] text-[#fff] rounded-lg'> BuyNow</a>
               </div>
            </div>
           </div>
          </div>
           <div className=" lg:w-[35%] items-center lg:pt-0 pt-[10px]">
                        <div className=" flex justify-end items-center lg:gap-[24px] gap-[10px] lg:text-[30px] lg:pl-0 pl-[0px] ">
                            <a target='blank' href="https://www.facebook.com/share/9yKV8w73S7dazz2P/?mibextid=qi2Omg" className=' hover:text-[red]'>
                            <FaFacebookF/></a>
                            <FaTwitter className=' hover:text-[red]'/>
                            <FaLinkedin className=' hover:text-[red]'/>
                            <FaWhatsapp  className=' hover:text-[red]'/>
                            <FaInstagramSquare className=' hover:text-[red]'/>
                            <div className=" lg:px-[14px] px-[4px] lg:py-[14px] py-[4px] bg-[#868fab] rounded-full hover:text-[red]">
                            <FaUser className=' '/>
                            </div>
                    </div>
           </div>
        </div>
     </Container>
    </section>
  )
}

export default Navber
