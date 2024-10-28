import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { MdCircle } from "react-icons/md";
import ban from "../assets/part2-1-1.png"
import { WiTime3 } from "react-icons/wi";


const News = () => {
    return (
        <section className=' lg:px-0 px-2'>
            <Container>
                <Flex className=" justify-between items-center">
                    <div className="">
                        <h2 className='font-sans font-bold lg:text-[32px] text-[12px] relative after:absolute after:contain-[""] after:h-[2px] lg:after:w-[1000px] after:w-[180px]  lg:after:top-[25px] after:top-[10px] after:left-[110%] after:bg-[#a19d9d]'>Todays Top News</h2>
                        <div className=" "></div>
                    </div>
                    <div className=" flex lg:gap-4 gap-1 lg:pr-[100px]">
                        <MdCircle className=' text-[red] lg:text-[24px] text-[10px]' />
                        <MdCircle className=' text-[#E5E9F6] lg:text-[24px] text-[10px]' />
                        <MdCircle className=' text-[#E5E9F6] lg:text-[24px] text-[10px]' />
                        <MdCircle className=' text-[#E5E9F6] lg:text-[24px] text-[10px]' />
                    </div>
                </Flex>
                <Flex className=" lg:gap-4 gap-2 py-[30px] flex-wrap">
                    <div className=" relative lg:w-[24%] w-[48%]">
                        <img className=' w-full lg:h-[280px]' src={ban} alt="" />
                        <div className=" absolute lg:top-[30px] top-[10px] lg:right-[30px] right-[20px]">
                        <a className=' lg:px-[30px] px-[14px] lg:py-[10px] py-[4px] bg-[#8b22a8] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[12px]' href="#">Feshion</a>
                        </div>
                        <div className="absolute lg:left-[30px] left-[10px] bottom-[0px]">
                            <h2 className=' font-sans font-medium lg:text-[22px] text-[12px] text-[#fff] flex items-center gap-2'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                            <h3 className=' w-[90%] font-sans font-medium lg:text-[22px] text-[12px] text-[#fff]'>The secret to moving this ancient sphinx</h3>
                        </div>
                    </div>
                    <div className=" relative lg:w-[24%] w-[48%]">
                        <img className=' w-full lg:h-[280px]' src={ban} alt="" />
                        <div className=" absolute lg:top-[30px] top-[10px] lg:right-[30px] right-[20px]">
                        <a className=' lg:px-[30px] px-[14px] lg:py-[10px] py-[4px] bg-[#0085FF] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[12px]' href="#">Politics</a>
                        </div>
                        <div className="absolute lg:left-[30px] left-[10px] bottom-[0px]">
                            <h2 className=' font-sans font-medium lg:text-[22px] text-[12px] text-[#fff] flex items-center gap-2'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                            <h3 className=' w-[90%] font-sans font-medium lg:text-[22px] text-[12px] text-[#fff]'>The secret to moving this ancient sphinx</h3>
                        </div>
                    </div>
                    <div className=" relative lg:w-[24%] w-[48%]">
                        <img className=' w-full lg:h-[280px]' src={ban} alt="" />
                        <div className=" absolute lg:top-[30px] top-[10px] lg:right-[30px] right-[20px]">
                        <a className=' lg:px-[30px] px-[14px] lg:py-[10px] py-[4px] bg-[red] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[12px]' href="#">Education</a>
                        </div>
                        <div className="absolute lg:left-[30px] left-[10px] bottom-[0px]">
                            <h2 className=' font-sans font-medium lg:text-[22px] text-[12px] text-[#fff] flex items-center gap-2'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                            <h3 className=' w-[90%] font-sans font-medium lg:text-[22px] text-[12px] text-[#fff]'>The secret to moving this ancient sphinx</h3>
                        </div>
                    </div>
                    <div className=" relative lg:w-[24%] w-[48%]">
                        <img className=' w-full lg:h-[280px]' src={ban} alt="" />
                        <div className=" absolute lg:top-[30px] top-[10px] lg:right-[30px] right-[20px]">
                        <a className=' lg:px-[30px] px-[14px] lg:py-[10px] py-[4px] bg-[#3625b0c8] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[12px]' href="#">Travel</a>
                        </div>
                        <div className="absolute lg:left-[30px] left-[10px] bottom-[0px]">
                            <h2 className=' font-sans font-medium lg:text-[22px] text-[12px] text-[#fff] flex items-center gap-2'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                            <h3 className=' w-[90%] font-sans font-medium lg:text-[22px] text-[12px] text-[#fff]'>The secret to moving this ancient sphinx</h3>
                        </div>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default News
