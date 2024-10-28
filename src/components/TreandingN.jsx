import React from 'react'
import Container from './Container'
import bann from "../assets/part2-1-1.png"
import Flex from './Flex'
import { WiTime3 } from "react-icons/wi";
import { MdCircle } from "react-icons/md";


const TreandingN = () => {
  return (
    <section className=' bg-[#f1efef] lg:py-[60px] py-[20px] lg:px-0 px-2'>
      <Container>
        <div className=" ">
          <h2 className=' font-sans font-bold lg:text-[32px] relative after:absolute after:contain-[""] after:h-[2px] lg:after:w-[85%] after:w-[68%] lg:after:top-[28px] after:top-[14px] after:bg-[#939191]'>Trending News</h2>
        </div>
        <div className=" flex justify-between flex-wrap gap-[40px] lg:pt-[10px]">
          <div className=" relative lg:w-[23%] w-[44%] pt-[20px]">
            <img className=' lg:w-full' src={bann} alt="" />
            <div className=" absolute lg:top-[40px] top-[26px] lg:right-[30px] right-[10px]">
              <a className=' lg:px-[40px] px-[10px] lg:py-[10px] py-[4px] bg-[#10D0FA] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[10px]' href="#">Technology</a>
            </div>
            <div className=" lg:px-[20px] px-[10px] lg:py-[20px] py-[10px] bg-[#fff]">
            <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#262626] flex items-center lg:gap-2 gap-1'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
            <h3 className=' lg:w-[90%] font-sans font-medium lg:text-[22px] text-[10px] text-[#262626]'>The secret to moving this ancient sphinx</h3>
            </div>
          </div>

          <div className=" relative lg:w-[23%] w-[44%] pt-[20px]">
            <img className=' lg:w-full' src={bann} alt="" />
            <div className=" absolute lg:top-[40px] top-[26px] lg:right-[30px] right-[10px]">
              <a className=' lg:px-[40px] px-[10px] lg:py-[10px] py-[4px] bg-[green] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[10px]' href="#">Sports</a>
            </div>
            <div className=" lg:px-[20px] px-[10px] lg:py-[20px] py-[10px] bg-[#fff]">
            <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#262626] flex items-center lg:gap-2 gap-1'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
            <h3 className=' lg:w-[90%] font-sans font-medium lg:text-[22px] text-[10px] text-[#262626]'>The secret to moving this ancient sphinx</h3>
            </div>
          </div>

          <div className=" relative lg:w-[23%] w-[44%] pt-[20px]">
            <img className=' lg:w-full' src={bann} alt="" />
            <div className=" absolute lg:top-[40px] top-[26px] lg:right-[30px] right-[10px]">
              <a className=' lg:px-[40px] px-[10px] lg:py-[10px] py-[4px] bg-[#818EFE] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[10px]' href="#">Worlds</a>
            </div>
            <div className=" lg:px-[20px] px-[10px] lg:py-[20px] py-[10px] bg-[#fff]">
            <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#262626] flex items-center lg:gap-2 gap-1'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
            <h3 className=' lg:w-[90%] font-sans font-medium lg:text-[22px] text-[10px] text-[#262626]'>The secret to moving this ancient sphinx</h3>
            </div>
          </div>
          <div className=" relative lg:w-[23%] w-[44%] pt-[20px]">
            <img className=' lg:w-full' src={bann} alt="" />
            <div className=" absolute lg:top-[40px] top-[26px] lg:right-[30px] right-[10px]">
              <a className=' lg:px-[40px] px-[10px] lg:py-[10px] py-[4px] bg-[#5200FF] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[10px]' href="#">Travel</a>
            </div>
            <div className=" lg:px-[20px] px-[10px] lg:py-[20px] py-[10px] bg-[#fff]">
            <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#262626] flex items-center lg:gap-2 gap-1'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
            <h3 className=' lg:w-[90%] font-sans font-medium lg:text-[22px] text-[10px] text-[#262626]'>The secret to moving this ancient sphinx</h3>
            </div>
          </div>

        </div>
        <div className=" flex justify-center lg:gap-2 gap-1 lg:pt-[50px] pt-[10px]">
                        <MdCircle className=' text-[red] lg:text-[24px]' />
                        <MdCircle className=' text-[#fff] lg:text-[24px]' />
                        <MdCircle className=' text-[#fff] lg:text-[24px]' />
                    </div>
      </Container>
    </section>
  )
}

export default TreandingN
