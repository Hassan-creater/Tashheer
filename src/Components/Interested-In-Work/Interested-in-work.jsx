import React from 'react'

const Interested_in_work = ({color,bg}) => {
  return (
    <>
       <div className={`mt-[3em] xl:mt-8 page5  w-full  bg-blend-multiply ${bg}  bg-Iskyline bg-cover bg-center bg-no-repeat text-white `}  >
              <div className='w-full mx-auto flex flex-col items-center  pl-7 pr-7 pb-7 pt-10' style={{backgroundColor:`${color}`}}>
              <i className="fa-brands fa-whatsapp text-[5em] text-white"></i>
              <div className='w-[100%] pt-2  flex justify-between items-center mt-4'>
                <div className='hidden sm:block sm:w-[27%]  md:w-[33%] h-[1px] bg-white'></div>
                <div className='w-full  sm:w-[39%] pt-1 text-[15px] md:text-[24px] flex justify-center items-center font-Rvisby font-bold'>
                  <p>Interested in Working Together?</p>
                </div>
                <div className='hidden sm:block sm:w-[27%] md:w-[33%] h-[1px]  bg-white'></div>
              </div>
              <div className='w-full sm:w-[67%] pt-1 text-[18px] font-Rvisby leading-[29px] text-center mt-7 md:mt-0 '>
                <p>Call our UAN to start a project. We offer a free audit of your current social media standings.
                Means no fee, no contract for any consultancy. We have a WhatsApp on the same UAN number.</p>
              </div>

              <p className='text-[42px] sm:text-[55px] font-Mvisby mt-3'>03-111-55-77-44</p>
              </div>
            </div>
    </>
  
  )}
export default Interested_in_work