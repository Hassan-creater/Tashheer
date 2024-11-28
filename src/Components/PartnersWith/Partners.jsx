import React from 'react'
import fadds from "../../../public/Images/HomePage/facebook_ads-200x200.png";
import tadds from "../../../public/Images/HomePage/Twitter_for_Business-200x200.png";
import gadds from "../../../public/Images/HomePage/Google_Adwords-1-200x200.png";
import iadds from '../../../public/Images/HomePage/Instagram_Ads_Logo-1-200x200.png';
import hadds from '../../../public/Images/HomePage/Hubspot_Ads_Pakistan-200x200.png';
import yadds from '../../../public/Images/HomePage/YouTube_Video_Ads_Logo-200x200.png';

const Partners = () => {
  return (
    <>
       <div className=' w-[100%] md:w-[70%] mt-5 md:mt-12 font-Rvisby text-[16px] text-center flex flex-col gap-7'>
          <p className='head_logo'>We are partnered with major digital platforms</p>
          <div className='w-full cursor-pointer logos h-[90px] flex ' >
            <div className='logo w-1/6 h-full object-fit flex justify-center items-center   duration-300 hover:animate-pulse '>
              <img   src={fadds} alt="Logo Images" width='75%' height="90%" className='hover:w-[90%] duration-500' />
            </div>
            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={gadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[90%] duration-500' />
            </div>

            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={iadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[90%] duration-500' />
            </div>
            
            <div className='logo w-1/6 h-full object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={hadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[90%] duration-500'  />
            </div>
            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={tadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[90%] duration-500' />
            </div>
            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse'>
              <img src={yadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[90%] duration-500'  />
            </div>
          </div>
         </div>
    </>
  )
}

export default Partners
