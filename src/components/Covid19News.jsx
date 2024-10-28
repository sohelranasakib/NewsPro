import React from 'react'
import Container from './Container'
import Flex from './Flex'
import covid from "../assets/covid-top.png"
import covidd from "../assets/covid-item.png"
import coviddd from "../assets/covid-send.png"
import { WiTime3 } from "react-icons/wi";
import { FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Covid19News = () => {
    return (
        <section className=' lg:py-[80px] py-[40px] lg:px-0 px-2'>
            <Container>
                <div className=" lg:flex w-[100%] justify-between items-center">
                    <div className=" lg:w-[70%]">
                        <h2 className='font-sans font-bold lg:text-[28px] text-[16px] relative after:absolute after:contain-[""] after:h-[2px] lg:after:w-[850px] after:w-[238px] lg:after:top-[25px] after:top-[14px] after:bg-[#a19d9d]'>Covid-19 News
                        </h2>
                        <div className=" "></div>
                    </div>
                    <div className=" lg:w-[30%] lg:top-0 top-[200px] relative after:absolute after:contain-[''] after:h-[2px] lg:after:w-[80%] after:w-[78%] lg:after:top-[22px] after:top-[12px] lg:after:left-[24%] after:left-[20%] after:bg-[#a19d9d]">
                        <h2 className=' font-sans font-bold lg:text-[26px] text-[14px]'>Follow us</h2>
                    </div>
                </div>
                <div className=' lg:flex'>
                    <div className=" lg:w-[70%] flex lg:py-[40px]">
                        <img className=' lg:w-[80%] w-[40%]' src={covid} alt="" />
                        <div className=" lg:pl-[30px] pl-[10px]">
                            <a className=' lg:px-[30px] px-[10px] lg:py-[10px] py-[4px] bg-[#0085FF] rounded-lg inline-block font-sans font-semibold text-[#fff] lg:text-[20px] text-[12px]' href="#">
                                Covid-19</a>
                            <h2 className=' font-sans font-medium lg:text-[22px] text-[12px] text-[#262626] flex items-center gap-2 lg:py-[10px] py-[5px]'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                            <h3 className=' w-[90%] font-sans font-bold lg:text-[28px] text-[10px] text-[#262626]'>Hedonism and Tailoring: The Women’s Spring 2021 Collections Had It All</h3>
                            <p className=' font-sans font-medium lg:text-[24px] text-[10px] text-[#817e7e] lg:pt-[10px] pt-[4px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className=" lg:w-[30%] py-[40px]">
                        <div className=" w-[100%] h-[70px]  bg-[#0075E0]">
                            <div className=" flex items-center gap-[50px]">
                                <div className="">
                                    <h2 className=' px-[30px] py-[20px] bg-[whitesmoke] rounded-r-full'> <FaFacebook className=' text-[30px] text-[red]' /></h2>
                                </div>
                                <h2 className=' font-sans font-semibold text-[28px]'>12M Followers</h2>
                            </div>
                        </div>
                        <div className=" py-[10px]">
                            <div className=" w-[100%] h-[70px]  bg-[#8201AF]">
                                <div className=" flex items-center gap-[50px]">
                                    <div className="">
                                        <h2 className=' px-[30px] py-[20px] bg-[whitesmoke] rounded-r-full'> <FaTwitter className=' text-[30px] text-[red]' /></h2>
                                    </div>
                                    <h2 className=' font-sans font-semibold text-[28px]'>16M Followers</h2>
                                </div>
                            </div>
                        </div>
                        <div className=" w-[100%] h-[70px]  bg-[#00B2FF]">
                            <div className=" flex items-center gap-[50px]">
                                <div className="">
                                    <h2 className=' px-[30px] py-[20px] bg-[whitesmoke] rounded-r-full'> <FaInstagramSquare className=' text-[30px] text-[red]' /></h2>
                                </div>
                                <h2 className=' font-sans font-semibold text-[28px]'>10k Followers</h2>
                            </div>
                        </div>
                        <div className=" py-[10px]">
                            <div className=" w-[100%] h-[70px]  bg-[#00669F]">
                                <div className=" flex items-center gap-[50px]">
                                    <div className="">
                                        <h2 className=' px-[30px] py-[20px] bg-[whitesmoke] rounded-r-full'> <FaLinkedinIn className=' text-[30px] text-[red]' /></h2>
                                    </div>
                                    <h2 className=' font-sans font-semibold text-[28px]'>8M Followers</h2>
                                </div>
                            </div>
                        </div>
                        <div className=" w-[100%] h-[70px]  bg-[red]">
                            <div className=" flex items-center gap-[50px]">
                                <div className="">
                                    <h2 className=' px-[30px] py-[20px] bg-[whitesmoke] rounded-r-full'> <FaYoutube className=' text-[30px] text-[red]' /></h2>
                                </div>
                                <h2 className=' font-sans font-semibold text-[28px]'>12k Subscribes</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' lg:flex'>
                    <div className=" lg:w-[65%]">
                        <div className=" flex">
                            <div className=" lg:w-[50%] flex">
                                <img className=' lg:w-[60%] w-[50%] lg:h-[160px]' src={covidd} alt="" />
                                <div className=" lg:pl-[20px] pl-[10px]">
                                    <a className=' border-b-2 border-[blue]  font-sans font-semibold text-[blue] lg:text-[20px] text-[12px]' href="#">covid 19</a>
                                    <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#7c7979] flex items-center lg:gap-2 gap-1 lg:py-[10px]'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                                    <h3 className=' w-[90%] font-sans font-semibold lg:text-[24px] text-[10px] text-[#262626]'>Bangladesh reports record Covid-19 deaths</h3>
                                </div>
                            </div>
                            <div className=" lg:w-[50%] flex lg:pl-0 pl-[4px]">
                                <img className=' lg:w-[60%] w-[50%] lg:h-[160px]' src={covidd} alt="" />
                                <div className=" lg:pl-[20px] pl-[10px]">
                                    <a className=' border-b-2 border-[red]  font-sans font-semibold text-[red] lg:text-[20px] text-[12px]' href="#">covid 19</a>
                                    <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#7c7979] flex items-center lg:gap-2 gap-1 lg:py-[10px]'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                                    <h3 className=' w-[90%] font-sans font-semibold lg:text-[24px] text-[10px] text-[#262626]'>Bangladesh reports record Covid-19 deaths</h3>
                                </div>
                            </div>
                        </div>

                        <div className=" flex py-[10px]">
                            <div className=" lg:w-[50%] flex">
                                <img className=' lg:w-[60%] w-[50%] lg:h-[160px]' src={covidd} alt="" />
                                <div className=" lg:pl-[20px] pl-[10px]">
                                    <a className=' border-b-2 border-[blue]  font-sans font-semibold text-[blue] lg:text-[20px] text-[12px]' href="#">covid 19</a>
                                    <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#7c7979] flex items-center lg:gap-2 gap-1 lg:py-[10px]'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                                    <h3 className=' lg:w-[90%] font-sans font-semibold lg:text-[24px] text-[10px] text-[#262626]'>Bangladesh reports record Covid-19 deaths</h3>
                                </div>
                            </div>
                            <div className=" lg:w-[50%] flex lg:pl-0 pl-[4px]">
                                <img className=' lg:w-[60%] w-[50%] lg:h-[160px]' src={covidd} alt="" />
                                <div className=" lg:pl-[20px] pl-[10px]">
                                    <a className=' border-b-2 border-[red]  font-sans font-semibold text-[red] lg:text-[20px] text-[12px]' href="#">covid 19</a>
                                    <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#7c7979] flex items-center lg:gap-2 gap-1 lg:py-[10px]'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                                    <h3 className=' lg:w-[90%] font-sans font-semibold lg:text-[24px] text-[10px] text-[#262626]'>Bangladesh reports record Covid-19 deaths</h3>
                                </div>
                            </div>
                        </div>

                        <div className=" flex">
                            <div className=" lg:w-[50%] flex">
                                <img className=' lg:w-[60%] w-[50%] lg:h-[160px]' src={covidd} alt="" />
                                <div className=" lg:pl-[20px] pl-[10px]">
                                    <a className=' border-b-2 border-[blue]  font-sans font-semibold text-[blue] lg:text-[20px] text-[12px]' href="#">covid 19</a>
                                    <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#7c7979] flex items-center lg:gap-2 gap-1 lg:py-[10px]'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                                    <h3 className=' lg:w-[90%] font-sans font-semibold lg:text-[24px] text-[10px] text-[#262626]'>Bangladesh reports record Covid-19 deaths</h3>
                                </div>
                            </div>
                            <div className=" lg:w-[50%] flex lg:pl-0 pl-[4px]">
                                <img className=' lg:w-[60%] w-[50%] lg:h-[160px]' src={covidd} alt="" />
                                <div className=" lg:pl-[20px] pl-[10px]">
                                    <a className=' border-b-2 border-[red]  font-sans font-semibold text-[red] lg:text-[20px] text-[12px]' href="#">covid 19</a>
                                    <h2 className=' font-sans font-medium lg:text-[22px] text-[10px] text-[#7c7979] flex items-center lg:gap-2 gap-1 lg:py-[10px]'><WiTime3 className=' lg:text-[34px]' /> July 02, 2021</h2>
                                    <h3 className=' lg:w-[90%] font-sans font-semibold lg:text-[24px] text-[10px] text-[#262626]'>Bangladesh reports record Covid-19 deaths</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=" lg:w-[35%]">
                      <div className=" lg:px-[30px] px-[10px] lg:py-[30px] py-[8px] bg-[#F9F9F9]">
                      <div className=" text-center">
                            <div className=" flex justify-center lg:pt-[50px] pt-[10px]">
                            <img className=' bg-[#dfa6a6] px-[15px] py-[15px] rounded-full ' src={coviddd} alt="" />
                            </div>
                            <h2 className=' font-sans font-semibold lg:text-[36px] text-[20px] pt-[15px]'>Subscribe To Our Weekly Newsletter</h2>
                            <h4 className=' font-sans font-medium lg:text-[26px] text-[16px] text-[#8d8989] py-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h4>
                            <input className=' lg:h-[60px] h-[40px] border-2 border-[#262626]  lg:w-[60%] w-[50%] px-3 rounded-lg mt-[10px] outline-none' type="email" placeholder=' your email..'/>
                           <div className=" py-[20px]">
                           <a className=' font-sans font-semibold lg:text-[24px]  text-[#fff] lg:py-[14px] py-[8px] lg:px-[35px] px-[38px] p-[63px]  border-2 bg-[#ec3b3b]  rounded-lg inline-block'>subscribe</a>
                           </div>
                        </div>
                      </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Covid19News
