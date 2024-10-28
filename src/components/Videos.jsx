import React from 'react'
import Container from './Container'
import Flex from './Flex'
import video from "../assets/video-left.png"
import video1 from "../assets/video-right.png"
import { WiTime3 } from "react-icons/wi";
import { AiTwotoneLike, AiFillDislike   } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { HiDownload, HiOutlineDotsHorizontal  } from "react-icons/hi";


const Videos = () => {
  return (
    <section className=' bg-[#00061D] lg:py-[60px] py-[20px] lg:px-0 px-2'>
        <Container>
        <div className=" ">
          <h2 className=' font-sans font-bold lg:text-[32px] text-[16px] text-[#fff] relative after:absolute after:contain-[""] after:h-[2px] lg:after:w-[93%] after:w-[85%] lg:after:top-[28px] after:top-[14px] after:bg-[#939191]'>Videos</h2>
        </div>
        <div className=' lg:flex'>
             <div className=" lg:w-[60%] pt-[20px]">
                <img className=' w-full' src={video} alt="" />
                <h2 className=' font-sans font-bold lg:text-[26px] text-[14px] text-[#f7f5f5] py-[10px]'>Hedonism and Tailoring: The Women’s Spring 2021 Collections Had It All</h2>
                <div className=" flex justify-between">
                <h3 className=' font-sans font-medium lg:text-[18px] text-[12px] text-[#b2b0b0] flex items-center lg:gap-2 gap-1'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h3>
                <ul className=' flex lg:gap-4 gap-2'>
                    <li className=' flex items-center gap-1 font-sans font-medium lg:text-[20px] text-[10px] text-[#fff]'> <AiTwotoneLike className=' lg:text-[24px]'/> 2.36M</li>
                    <li className=' flex items-center gap-1 font-sans font-medium lg:text-[20px] text-[10px] text-[#fff]'> <AiFillDislike   className=' lg:text-[24px]'/> 520k</li>
                    <li className=' flex items-center gap-1 font-sans font-medium lg:text-[20px] text-[10px] text-[#fff]'> <FaShare    className=' lg:text-[24px]'/> SHARE</li>
                    <li className=' flex items-center gap-1 font-sans font-medium lg:text-[20px] text-[10px] text-[#fff]'> <HiDownload     className=' lg:text-[24px]'/>  SAVE</li>
                    <li className=' flex items-center text-[#fff]'> <HiOutlineDotsHorizontal className=' lg:text-[24px]'/></li>
                </ul>
                </div>
             </div>
            
             <div className=" lg:w-[40%] lg:pl-[40px] lg:pt-[20px] pt-[10px]">
                        <div className=" lg:px-[20px] lg:py-[24px] py-[10px] border-2">
                          <div className="">
                          <div className=" lg:w-[100%] flex lg:px-[20px] px-[10px] lg:py-[10px] py-[4px] hover:bg-[#000D39]">
                                <img className=' lg:w-[20%]' src={video1} alt="" />
                                <div className=" lg:pl-[30px] pl-[10px]">
                                <h3 className=' font-sans font-medium lg:text-[22px] text-[14px] text-[#fff]'>Brings big changes in people's lives.</h3>
                                    <h2 className=' font-sans font-medium lg:text-[18px] text-[12px] text-[#9b9494] flex items-center lg:gap-2 gap-1 py-[5px]'><WiTime3 className=' lg:text-[34px] text-[#fff]' /> July 02, 2021</h2>
                                </div>
                            </div>
                          </div>

                          <div className=" py-[10px]">
                          <div className=" lg:w-[100%] flex lg:px-[20px] px-[10px] lg:py-[10px] py-[4px] hover:bg-[#000D39]">
                                <img className=' lg:w-[20%]' src={video1} alt="" />
                                <div className=" lg:pl-[30px] pl-[10px]">
                                <h3 className=' font-sans font-medium lg:text-[22px] text-[14px] text-[#fff]'>Brings big changes in people's lives.</h3>
                                    <h2 className=' font-sans font-medium lg:text-[18px] text-[12px] text-[#9b9494] flex items-center lg:gap-2 gap-1 py-[5px]'><WiTime3 className=' lg:text-[34px] text-[#fff]' /> July 02, 2021</h2>
                                </div>
                            </div>
                          </div>

                          <div className="">
                          <div className=" lg:w-[100%] flex lg:px-[20px] px-[10px] lg:py-[10px] py-[4px] hover:bg-[#000D39]">
                                <img className=' lg:w-[20%]' src={video1} alt="" />
                                <div className=" lg:pl-[30px] pl-[10px]">
                                <h3 className=' font-sans font-medium lg:text-[22px] text-[14px] text-[#fff]'>Brings big changes in people's lives.</h3>
                                    <h2 className=' font-sans font-medium lg:text-[18px] text-[12px] text-[#9b9494] flex items-center lg:gap-2 gap-1 py-[5px]'><WiTime3 className=' lg:text-[34px] text-[#fff]' /> July 02, 2021</h2>
                                </div>
                            </div>
                          </div>

                          <div className=" py-[10px]">
                          <div className=" lg:w-[100%] flex lg:px-[20px] px-[10px] lg:py-[10px] py-[4px] hover:bg-[#000D39]">
                                <img className=' lg:w-[20%]' src={video1} alt="" />
                                <div className=" lg:pl-[30px] pl-[10px]">
                                <h3 className=' font-sans font-medium lg:text-[22px] text-[14px] text-[#fff]'>Brings big changes in people's lives.</h3>
                                    <h2 className=' font-sans font-medium lg:text-[18px] text-[12px] text-[#9b9494] flex items-center lg:gap-2 gap-1 py-[5px]'><WiTime3 className=' lg:text-[34px] text-[#fff]' /> July 02, 2021</h2>
                                </div>
                            </div>
                          </div>

                          <div className="">
                          <div className=" lg:w-[100%] flex lg:px-[20px] px-[10px] lg:py-[10px] py-[4px] hover:bg-[#000D39]">
                                <img className=' lg:w-[20%]' src={video1} alt="" />
                                <div className=" lg:pl-[30px] pl-[10px]">
                                <h3 className=' font-sans font-medium lg:text-[22px] text-[14px] text-[#fff]'>Brings big changes in people's lives.</h3>
                                    <h2 className=' font-sans font-medium lg:text-[18px] text-[12px] text-[#9b9494] flex items-center lg:gap-2 gap-1 py-[5px]'><WiTime3 className=' lg:text-[34px] text-[#fff]' /> July 02, 2021</h2>
                                </div>
                            </div>
                          </div>
                         
                        </div>
                    </div>
        </div>
        </Container>
    </section>
  )
}

export default Videos
