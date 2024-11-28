import React from 'react'


const BlogSlidesCards = ({img,read,heading,para}) => {

   
  return (
    
    <>
    <div className='w-[700px]  h-full  pt-2  flex justify-center items-center border-r border-slate-300 overflow-hidden'>
    <img src={`${img}`} alt="skills to thrive" width="100%" height="100%" className='scale-[1.1]  ' />
</div>
<div className='w-[700px] h-full  pt-2 flex flex-col justify-center   pl-7'>
    <div className='w-full pt-1 flex flex-col sm:flex-row  gap-5'>
        <div className='sm:w-[60%] flex justify-center items-center bg-[#0057FF] pt-2 pb-2 text-[8px]  md:text-[10px] lg:text-[13px] text-white '>
            <p>Catogries: Digital Marketing Strategis</p>
        </div>
        <div className='w-[50%] sm:w-[25%] h-full flex justify-center items-center pt-2 pb-2 bg-[#0057FF] text-[10px] lg:text-[13px] text-white'>
            <p>{read}</p>
        </div>
    </div>
    <p className='text-[12px] sm:text-[20px] lg:text-[30px] sm:leading-[40px] font-DMsans mt-3 hover:text-[#E86E1E] duration-300 cursor-pointer'>{heading}</p>
    <p className='text-[9px] sm:text-[12px] lg:text-[17px] font-Rvisby  mt-5'>{para}</p>
    <div className='w-[7em] pt-2 pb-2 rounded-lg mt-6 flex justify-center items-center border-[2.5px] cursor-pointer hover:border-orange-500 hover:text-orange-500 duration-300 border-e-slate-400'>
        <p>Read more</p>
    </div>
</div>
       
           
            
</>
   
  )
}

export default BlogSlidesCards
