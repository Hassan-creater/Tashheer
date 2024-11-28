import React from 'react'
import skill from "../../../public/Images/BlogPage/Skills-to-Thrive-in-social-media-management-800x420.jpg"

const BlogsPagination = ({blogs}) => {
 

    
  

  return (
    <>
    {
        blogs.map((item,index)=>{
            return(
                <div key={index} className='w-[95%] sm:w-[45%] lg:w-[30%] mt-5 pt-1  flex'>
                <div className='w-[33%] pt-2 flex justify-center items-center'>
                   <img src={item.img} alt="Skills logo" />
                </div>
                <div className='w-[67%] pt-2  flex flex-col pr-[3em]'>
                   <p className='text-[12px] font-Rvisby text-[#2061DF]'>{item.read}</p>
                   <div className='bg-[#2061DF] w-[13em] text-[12px] font-Rvisby text-white flex justify-center items-center mt-2'>
                      <p>{item.des}</p>
                   </div>
                   <h4 className='w-full pr-8 mt-2 hover:text-[#F45C2C] cursor-pointer duration-300'>{item.head}</h4>
                </div>
               </div>
            )
        })
    }
   
    </>
  )
}

export default BlogsPagination
