import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { WiTime3 } from "react-icons/wi";
import mpn from "../assets/mpn-right-left.png"
import mpnr from "../assets/mpn-right-right.png"
import lban from "../assets/banner-ad.png"

const PopularNews = () => {
    return (
        <section className=' bg-[#F9FAFF] lg:py-[50px] py-[15px] lg:px-0 px-2'>
            <Container>
                <div className=" lg:flex items-center">
                    <div className="lg:w-[35%]">
                        <h2 className=' font-sans font-bold lg:text-[32px] text-[14px]'>Most Popular News</h2>
                        <h3 className=' font-sans font-medium lg:text-[28px] text-[12px] lg:pt-[25px]'>Top Stories</h3>
                    </div>
                    <div className="lg:w-[65%] bg-[#E5E9F7] rounded-lg lg:px-[20px] px-[10px] lg:py-[20px] py-[4px]">
                        <ul className=' flex justify-between items-center lg:px-[10px]'>
                            <li className=' font-sans font-medium lg:text-[22px] text-[12px] hover:text-[red]  items-center '>All</li>
                            <li className=' font-sans font-medium lg:text-[22px] text-[12px] hover:text-[red]'>Travel</li>
                            <li className=' font-sans font-medium lg:text-[22px] text-[12px] hover:text-[red]'>Lifestyle</li>
                            <li className=' font-sans font-medium lg:text-[22px] text-[12px] hover:text-[red]'>Fashion</li>
                            <li className=' font-sans font-medium lg:text-[22px] text-[12px] hover:text-[red]'>Tecnology</li>
                            <li className=' font-sans font-medium lg:text-[22px] text-[12px] hover:text-[red]'>Sports</li>
                        </ul>
                    </div>
                </div>
                <div className=' lg:flex'>
                    <div className="lg:w-[35%] lg:pt-[20px] pt-[10px] lg:pr-[40px]">
                        <div className="">
                            <div className=" bg-[#fff] lg:py-[40px] py-[10px] pl-[30px] rounded-xl">
                                <h2 className=' font-sans font-medium lg:text-[22px] text-[14px] text-[#666565] flex items-center gap-2'><WiTime3 className=' lg:text-[24px] text-[red]' /> July 02, 2021</h2>
                                <h3 className=' w-[80%] font-sans font-medium lg:text-[24px] text-[15px] text-[#262626]'>The secret to moving this ancient sphinx</h3>
                            </div>
                        </div>
                        <div className=" py-[10px]">
                            <div className=" bg-[#fff] lg:py-[40px] py-[10px] pl-[30px] rounded-xl">
                                <h2 className=' font-sans font-medium lg:text-[22px] text-[14px] text-[#666565] flex items-center gap-2'><WiTime3 className=' lg:text-[24px] text-[red]' /> July 02, 2021</h2>
                                <h3 className=' w-[80%] font-sans font-medium lg:text-[24px] text-[15px] text-[#262626]'>The secret to moving this ancient sphinx</h3>
                            </div>
                        </div>
                        <div className="">
                            <div className=" bg-[#fff] lg:py-[40px] py-[10px] pl-[30px] rounded-xl">
                                <h2 className=' font-sans font-medium lg:text-[22px] text-[14px] text-[#666565] flex items-center gap-2'><WiTime3 className=' lg:text-[24px] text-[red]' /> July 02, 2021</h2>
                                <h3 className=' w-[80%] font-sans font-medium lg:text-[24px] text-[15px] text-[#262626]'>The secret to moving this ancient sphinx</h3>
                            </div>
                        </div>
                        <div className=" pt-[10px]">
                            <div className=" bg-[#fff] lg:py-[40px] py-[10px] pl-[30px] rounded-xl">
                                <h2 className=' font-sans font-medium lg:text-[22px] text-[14px] text-[#666565] flex items-center gap-2'><WiTime3 className=' lg:text-[24px] text-[red]' /> July 02, 2021</h2>
                                <h3 className=' w-[80%] font-sans font-medium lg:text-[24px] text-[15px] text-[#262626]'>The secret to moving this ancient sphinx</h3>
                            </div>
                        </div>
                       
                    </div>
                  <div className=" flex lg:w-[60%]">
                  <div className=" lg:w-[40%] w-[35%] lg:pt-[50px] pt-[15px]">
                        <div className="">
                            <img className=' w-full' src={mpn} alt="" />
                            <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#666565] flex items-center gap-2 lg:pt-[20px] lg:py-0 py-[4px]'><WiTime3 className=' lg:text-[24px] text-[red] ' /> July 02, 2021</h2>
                            <h3 className=' w-[80%] font-sans font-medium lg:text-[24px] text-[12px] text-[#262626]'>New York on a trip to Arctic Nunavut of City</h3>
                        </div>
                        <div className=" lg:pt-[50px]">
                            <img className=' w-full' src={mpn} alt="" />
                            <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#666565] flex items-center gap-2 lg:pt-[20px]'><WiTime3 className=' lg:text-[24px] text-[red]' /> July 02, 2021</h2>
                            <h3 className=' w-[80%] font-sans font-medium lg:text-[24px] text-[12px] text-[#262626]'>New York on a trip to Arctic Nunavut of City</h3>
                        </div>
                    </div>
                    <div className=" w-[75%] lg:pt-[50px] pt-[15px] lg:pl-[40px] pl-[8px]">
                        <img className=' w-full lg:h-[80%]' src={mpnr} alt="" />
                        <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#666565] flex items-center gap-2 lg:py-[20px] py-[4px]'><WiTime3 className=' lg:text-[24px] text-[red]' /> July 02, 2021</h2>
                        <h3 className=' w-[80%] font-sans font-medium lg:text-[24px] text-[12px] text-[#262626]'>Lifestyle brings big changes inpeople lives. Are you ready?</h3>
                    </div>
                  </div>
                </div>
              
            </Container>
        </section>
    )
}

export default PopularNews
