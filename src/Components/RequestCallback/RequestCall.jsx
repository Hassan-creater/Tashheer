import React from 'react'

import smedianetwork from "../../../public/Images/HomePage/social_media_networks_pakistan.jpg";

const RequestCall = () => {
  return (
    <>
       <div className='w-full Page7 pt-[29em] relative sm:pt-4 overflow-hidden  flex justify-center items-center lg:pb-17 xl:pb-0 pb-[10em] lg:mb-0 bg-cardImg2 bg-no-repeat bg-cover bg-center '>
        <img className=' hidden sm:flex md:scale-[2.5] sm:scale-[2.9] xl:scale-[1.45]' src={smedianetwork} alt="Social Media network" width="70%" height="50%" />
        <div className=' page7Content absolute top-0 left-0 w-[100%] h-full bg-[rgba(0,79,234,0.6)]  pl-7 md:pr-[6em] pr-[2em] lg:pr-[35%] pt-14'>
          <div className='flex items-center text-[30px] md:text-[30px] lg:text-[40px] font-Visby text-white'>
            <p>Consult to an Expert for free </p>
          </div>
          <div className='flex items-center text-[16px] font-Rvisby mt-3 text-white'>
            <p>No need to pay or sign a contract. Our digital ninjas are available for a free audit of your current social media standings. They will evaluate the score of your website, social media, and search engine visibility in an hour. On the basis of that report, they will give you suggestions and a plan.</p>
          </div>
          <div className='flex gap-4 mt-8 flex-col sm:flex-row '>
            <input type="number" placeholder='Insert your mobile number..*' className='w-[309px] sm:w-[480px] h-[70px] rounded-xl pl-4 ' />
            <div className='w-[309px] sm:w-[209px]  h-[71px]  rounded-xl flex justify-center md:text-[18px] font-Mvisby text-white bg-[#F45C20] items-center hover:bg-[#FFF0EB] hover:text-[#F45C20] duration-300 cursor-pointer'>
              <p>Request a Call Back</p>
            </div>
          </div>
          <div className='text-white font-Rvisby text-[14px] mt-2'>
            <p>We ensure you privacy of your phone number, website , and analyzed data</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestCall
