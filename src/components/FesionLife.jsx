import React from 'react'
import Container from './Container'
import Flex from './Flex'
import fb from "../assets/fb1.png"
import fb2 from "../assets/fb2.png"
import pb from "../assets/pb-item-music.png"
import { WiTime3 } from "react-icons/wi";
import { RiFolderMusicFill, RiFolderVideoFill } from "react-icons/ri";

const FesionLife = () => {
    return (
        <section className=' lg:py-[60px] py-[20px] lg:px-0 px-2'>
            <Container>
                <Flex className=" lg:w-[60%] justify-between items-center">
                    <div className="">
                        <h2 className='font-sans font-bold lg:text-[28px] text-[12px] relative after:absolute after:contain-[""] after:h-[2px] lg:after:w-[555px] after:w-[170px]  lg:after:top-[25px] after:top-[10px] after:left-[110%] after:bg-[#a19d9d]'>Fashion & Lifestyle</h2>
                        <div className=" "></div>
                    </div>
                    <div className=" relative after:absolute after:contain-[''] after:h-[2px] after:w-full lg:after:top-[30px] after:top-[16px] after:left-0 after:bg-[red]">
                        <h2 className=' font-sans font-medium lg:text-[22px] text-[12px] text-[red]'>View All</h2>
                    </div>
                </Flex>
                <div className=' lg:flex'>
                    <div className=" lg:w-[60%] flex lg:pt-[20px] pt-[10px]">
                        <div className="lg:w-[65%] relative">
                            <img className=' w-full  h-full' src={fb} alt="" />
                            <div className=" absolute lg:top-[40px] top-[10px] right-[30px]">
                                <a className=' lg:px-[40px] px-[10px] lg:py-[10px] py-[2px] bg-[red] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[14px]' href="#">Fashion</a>
                            </div>
                            <div className="absolute left-[30px] lg:bottom-[60px] bottom-[20px]">
                                <h2 className=' font-sans font-medium lg:text-[22px] text-[12px] text-[#fff] flex items-center gap-2'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                                <h3 className=' font-sans font-medium lg:text-[28px] text-[12px] text-[#fff] lg:pt-[20px]'> Hedonism and Tailoring: The Women’s Spring 2021 Collections Had It All</h3>
                            </div>
                        </div>
                        <div className=" lg:w-[35%] w-[100%] lg:pl-[20px] pl-[10px]">
                            <div className=" relative">
                                <img className=' w-full lg:h-[300px]' src={fb2} alt="" />
                                <div className=" absolute lg:top-[30px] top-0 lg:right-[30px] right-[10px]">
                                    <a className=' lg:px-[30px] px-[8px] lg:py-[10px] py-[2px] bg-[red] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[10px]' href="#">Politics</a>
                                </div>
                                <div className=" absolute left-[30px] lg:top-[60%] top-[60%]">
                                    <h2 className=' font-sans font-medium lg:text-[22px] text-[8px] text-[#fff] flex items-center gap-2'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                                    <h3 className=' w-[90%] font-sans font-medium lg:text-[22px] text-[10px] text-[#fff]'>The secret to moving this ancient sphinx</h3>
                                </div>
                            </div>
                            <div className=" relative lg:pt-[20px] pt-[10px]">
                                <img className=' w-full lg:h-[300px]' src={fb2} alt="" />
                                <div className=" absolute lg:top-[30px] top-[10px] lg:right-[30px] right-[10px]">
                                    <a className=' lg:px-[30px] px-[8px] lg:py-[10px] py-[2px] bg-[red] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[10px]' href="#">Politics</a>
                                </div>
                                <div className=" absolute left-[30px] lg:top-[60%] top-[62%]">
                                    <h2 className=' font-sans font-medium lg:text-[22px] text-[8px] text-[#fff] flex items-center gap-2'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                                    <h3 className=' w-[90%] font-sans font-medium lg:text-[22px] text-[10px] text-[#fff]'>The secret to moving this ancient sphinx</h3>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className=" lg:w-[40%] lg:pl-[50px] lg:pt-0 pt-[20px]">
                        <div className=" flex justify-between lg:px-[40px] px-[40px] lg:py-[20px] py-[4px] border-2">
                            <div className=" lg:px-[30px]  lg:py-[12px] hover:bg-[#060027] hover:text-[#fff]">
                                <a className=' font-sans font-medium lg:text-[22px]' href="#">Recent Post</a>
                            </div>
                            <div className=" lg:px-[30px] lg:py-[12px] hover:bg-[#060027] hover:text-[#fff]">
                                <a className=' font-sans font-medium lg:text-[22px]' href="#">Popular Post</a>
                            </div>
                        </div>
                        <div className=" lg:px-[20px] px-[10px] lg:py-[20px] py-[6px] border-2">
                          <div className="">
                          <div className=" w-[100%] flex lg:px-[20px] px-[10px] lg:py-[10px] py-[6px] border-2">
                                <div className=" px-[40px] py-[30px] bg-[#8d9eb7]  lg:h-[100px]"><RiFolderMusicFill className=' text-[50px]' /></div>
                                <div className=" lg:pl-[30px] pl-[10px]">
                                    <a className=' border-b-2 border-[red]  font-sans font-semibold text-[red] lg:text-[20px] text-[14px]' href="#">Fashion</a>
                                    <h2 className=' font-sans font-medium lg:text-[20px] text-[12px] text-[#262626] flex items-center lg:gap-2 gap-1 py-[5px] lg:pt-0 pt-[15px]'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                                    <h3 className=' w-full font-sans font-medium lg:text-[18px] text-[12px] text-[#262626]'>The secret to moving this ancient sphinx</h3>
                                </div>
                            </div>
                          </div>

                          <div className=" lg:py-[10px] py-[4px]">
                          <div className=" w-[100%] flex lg:px-[20px] px-[10px] lg:py-[10px] py-[6px] border-2">
                                <div className=" px-[40px] py-[30px] bg-[#8d9eb7]  lg:h-[100px]"><RiFolderVideoFill className=' text-[50px]' /></div>
                                <div className=" lg:pl-[30px] pl-[10px]">
                                    <a className=' border-b-2 border-[red]  font-sans font-semibold text-[red] lg:text-[20px] text-[14px]' href="#">Lifestyle</a>
                                    <h2 className=' font-sans font-medium lg:text-[20px] text-[12px] text-[#262626] flex items-center lg:gap-2 gap-1 py-[5px] lg:pt-[0px] pt-[15px]'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                                    <h3 className=' w-full font-sans font-medium lg:text-[18px] text-[12px] text-[#262626]'>The secret to moving this ancient sphinx</h3>
                                </div>
                            </div>
                          </div>

                          <div className="">
                          <div className=" w-[100%] flex lg:px-[20px] px-[10px] lg:py-[10px] py-[6px] border-2">
                                <div className=" px-[40px] py-[30px] bg-[#8d9eb7]  lg:h-[100px]"><RiFolderMusicFill className=' text-[50px]' /></div>
                                <div className=" lg:pl-[30px] pl-[10px]">
                                    <a className=' border-b-2 border-[red]  font-sans font-semibold text-[red] lg:text-[20px] text-[14px]' href="#">Technology</a>
                                    <h2 className=' font-sans font-medium lg:text-[20px] text-[12px] text-[#262626] flex items-center lg:gap-2 gap-1 py-[5px] lg:pt-[0px] pt-[15px]'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                                    <h3 className=' w-full font-sans font-medium lg:text-[18px] text-[12px] text-[#262626]'>The secret to moving this ancient sphinx</h3>
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

export default FesionLife
