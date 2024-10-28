import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";

const Menu = () => {
  return (
    <section className=' w-full bg-[#E5E9F6] lg:py-[35px] py-[10px] lg:px-0 px-2'>
        <Container>
            <div className=" lg:flex">
                <div className="lg:w-[85%]">
                    <ul className='  flex lg:gap-[75px] gap-[9px] '>
                        <li><a className=' font-sans font-bold lg:text-[18px] text-[8px] hover:text-[red]' href="#">Home+</a></li>
                        <li><a className=' font-sans font-bold lg:text-[18px] text-[8px] hover:text-[red]' href="#">Fashion</a></li>       
                        <li><a className=' font-sans font-bold lg:text-[18px] text-[8px] hover:text-[red]' href="#">Travel</a></li>       
                        <li><a className=' font-sans font-bold lg:text-[18px] text-[8px] hover:text-[red]' href="#">Technology</a></li>       
                        <li><a className=' font-sans font-bold lg:text-[18px] text-[8px] hover:text-[red]' href="#">Lifestyle</a></li>       
                        <li><a className=' font-sans font-bold lg:text-[18px] text-[8px] hover:text-[red]' href="#">Features</a></li>       
                        <li><a className=' font-sans font-bold lg:text-[18px] text-[8px] hover:text-[red]' href="#">Education</a></li>       
                        <li><a className=' font-sans font-bold lg:text-[18px] text-[8px] hover:text-[red]' href="#">Pages</a></li>       
                        <li><a className=' font-sans font-bold lg:text-[18px] text-[8px] hover:text-[red]' href="#">Sports</a></li>       
                    </ul>
                </div>
                <div className="lg:w-[15%] flex justify-end lg:gap-[30px] gap-2 lg:pt-0 pt-[6px]">
                <IoSearch className=' lg:text-[40px]'/>
                <FaBars  className=' lg:text-[40px]'/>
                <FaToggleOff  className=' lg:text-[40px]'/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Menu
