import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaCloudSun, FaRegCalendarCheck  } from "react-icons/fa6";

const Header = () => {
  return (
    <div className=' w-full bg-[#000D39] py-[20px] lg:px-0 px-2'>
      <Container>
        <Flex className=" items-center">
          <div className="lg:w-[10%]">
                <a href="#" className=' lg:px-[40px] px-[8px] lg:py-[4px] bg-[#868fab] inline-block font-pops font-medium lg:text-[22px] text-[10px] text-[#fff] rounded-lg'> Trading</a>
            </div>
            <div className=" w-[50%]  lg:ml-[60px] ml-[20px] ">
                <h3 className=' font-pops font-medium lg:text-[22px] text-[10px] text-[#fff]'> Every success is helped by someone behind the people</h3>
            </div>
            <div className=" w-[40%] text-[#fff] lg:flex lg:justify-end lg:gap-[20px]">
                <h2 className=' font-pops font-medium lg:text-[24px] text-[10px] flex items-center gap-2'><FaCloudSun className=' lg:text-[28px]'/>Dhaka 36°</h2>
                <h2 className=' font-pops font-medium lg:text-[22px] text-[10px] flex lg:items-center gap-2'> <FaRegCalendarCheck className=' lg:text-[20px]'/> Monday - July 2, 2021</h2>
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header
