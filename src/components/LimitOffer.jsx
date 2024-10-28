import React from 'react'
import Container from './Container'
import lban from "../assets/banner-ad.png"
import bann from "../assets/ban-ad.png"

const LimitOffer = () => {
  return (
    <section className=''>
        <Container>
        <div className=" relative flex justify-center">
                <img className=' w-[60%]' src={lban} alt="" />
                <div className="">
                  <h2 className=' lg:w-[20%] w-[30%] absolute lg:top-[50px] top-[4px] lg:left-[22%] left-[75px] font-sans font-medium lg:text-[22px] text-[8px] text-[#fff]'>Smart & Responsive
                  ADVERTISEMENT</h2>
                  <h1 className='  w-[15%] absolute lg:top-[40px] top-[4px] lg:left-[38%] left-[150px] font-sans font-medium lg:text-[28px] text-[8px] text-[#fff]'>Get 35% Off
                  Limited Offer</h1>
                  <img src={bann} alt="" className=' absolute top-[0px] lg:right-[34%] right-[35%] lg:w-0 w-[10%] h-full'/>
                  <a className=' lg:px-[36px] px-[4px] lg:py-[10px] bg-[red] rounded-lg font-sans font-semibold text-[#fff] lg:text-[20px] text-[8px] absolute lg:top-[48px] top-[10px] lg:right-[22%] right-[21%]' href="#">Shop Now</a>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default LimitOffer
