import React from 'react'
import Container from './Container'
import Flex from './Flex'
import ban1 from "../assets/ban-part1.png"
import ban2 from "../assets/part2-1-1.png"
import ban3 from "../assets/part2-2.png"
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { TiMediaRecord } from "react-icons/ti";
import { WiTime3 } from "react-icons/wi";

const Banner = () => {
  return (
    <section className=' lg:py-[50px] py-[10px] lg:px-0 px-2'>
      <Container>
        <div className=" lg:flex lg:gap-[28px]">
          <div className=" lg:w-[48%] relative">
            <img className=' w-full' src={ban1} alt="" />
            <div className=" ">
              <div className="absolute lg:top-[40px] top-[10px] lg:left-[30px] left-[10px] flex lg:gap-[1px] items-center">
                <TiMediaRecord className=' lg:text-[30px] text-[20px] text-[red]' />
                <TiMediaRecord className=' lg:text-[30px] text-[20px] text-[#E5E9F6]' />
                <TiMediaRecord className=' lg:text-[30px] text-[20px] text-[#E5E9F6]' />
                <TiMediaRecord className=' lg:text-[30px] text-[20px] text-[#E5E9F6]' />
              
              </div>
              <div className=" absolute lg:top-[40px] top-[10px] lg:right-[30px] right-[10px]">
                <a className=' lg:px-[30px] px-[16px] lg:py-[10px] py-[4px] bg-[red] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[14px]' href="#">Fashion</a>
              </div>
              <div className="absolute lg:left-[30px] left-[15px] lg:bottom-[30px] bottom-[10px]">
                <h2 className=' font-sans font-medium lg:text-[22px] text-[14px] text-[#f1eeee] flex items-center gap-2'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                <h3 className=' font-sans font-medium lg:text-[28px] text-[14px] text-[#fff]'> Hedonism and Tailoring: The Women’s Spring 2021 Collections Had It All</h3>
              </div>
            </div>
          </div>
          <div className=" lg:w-[48%]">
            <div className="relative w-full flex lg:gap-[30px] gap-[6px] lg:py-0 py-[8px]">
              <img className=' lg:w-[50%] w-[48%] ' src={ban2} alt="" />
              <div className="">
              <a className=' absolute lg:top-[20px] top-[20px] lg:left-[150px] left-[70px] lg:px-[30px] px-[12px] lg:py-[10px] py-[4px] bg-[#10D0FA] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[12px]' href="#">Technology
              </a>
                <h2 className=' absolute lg:bottom-[70px] bottom-[45px] lg:left-[20px] left-[12px] font-sans font-medium lg:text-[18px] text-[10px] text-[#fff] flex items-center gap-2'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                <h3 className='absolute bottom-[10px] lg:left-[30px] left-[12px] w-[40%]  font-sans font-medium lg:text-[20px] text-[12px] text-[#fff]'> The secret to moving this ancient sphinx</h3>
              </div>

              <img className=' lg:w-[50%] w-[48%] ' src={ban2} alt="" />
              <div className="">
              <a className=' absolute lg:top-[20px] top-[20px] lg:right-[50px] right-[20px] lg:px-[30px] px-[12px] lg:py-[10px] py-[4px] bg-[#5200FF] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[12px]' href="#">Travel
              </a>
                <h2 className=' absolute lg:bottom-[70px] bottom-[45px] lg:right-[200px] right-[74px] font-sans font-medium lg:text-[18px] text-[10px] text-[#fff] flex items-center gap-2'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                <h3 className='absolute bottom-[10px] lg:right-[30px] right-[12px] w-[40%]  font-sans font-medium lg:text-[20px] text-[12px] text-[#fff]'> City of New York on a trip to Arctic Nunavut</h3>
              </div>
             
            </div>
            <div className=" relative lg:pt-[34px]">
              <img className=' w-full' src={ban3} alt="" />
              <div className="">
              <a className=' absolute lg:top-[50px] top-[10px] lg:right-[50px] right-[20px] lg:px-[30px] px-[15px] lg:py-[10px] py-[4px] bg-[#FF005C] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[12px]' href="#">Travel
              </a>
              <h2 className=' absolute bottom-[50px] left-[20px] font-sans font-medium lg:text-[18px] text-[12px] text-[#fff] flex items-center gap-2'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
              <h3 className='absolute bottom-[10px] left-[20px] font-sans font-medium lg:text-[20px] text-[12px] text-[#fff]'> Lifestyle brings big changes in people's lives. Are you ready?</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner
