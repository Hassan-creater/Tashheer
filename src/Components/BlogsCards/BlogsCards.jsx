import React from 'react'

const BlogsCards = ({w,img,read,des,heading,para}) => {
  return (
    <div className={`w-[95%]  sm:w-[45%]  lg:${w}  pt-10 border-[1.4px] rounded-lg pb-5 pl-10 pr-10`}>
    <div className='w-full  '>
       <img src={img} alt="skills logo" className='scale-[0.9]' />
    </div>
    <div className='w-full mt-16'>
    <p className='w-full text-[13px] font-Rvisby text-[#2061DF] mt-3'>{read}</p>
    <div className='p-1 bg-[#2061DF] w-[15em] text-white flex justify-center items-center text-[12px] mt-1'>
       <p>{des}</p>
    </div>
    <p className='text-[22px] font-DMsans mt-4 hover:text-[#E86E1E] duration-300 cursor-pointer'>{heading}</p>
    <p className='text-[15px] font-Rvisby mt-4'>{para}</p>

    <div className='w-[7em] pt-2 pb-2 rounded-lg mt-6 flex justify-center items-center border-[1.5px] cursor-pointer hover:border-orange-500 hover:text-orange-500 duration-300 border-e-slate-400'>
    <p>Read more</p>
     </div>
    </div>
 </div>
  )
}

export default BlogsCards
