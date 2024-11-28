import React, { useRef, useState } from 'react'

const Pagination = ({postPerPage, totalPosts,paginate}) => {
    const pagenum = [];

    

    for(let i =1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pagenum.push(i);
        
    }

   

    

  return (
    <>
      <div className='w-full pt-4 pr-10 0 flex justify-center mt-10 items-center pb-4 gap-4' >
        {
            pagenum.map((num,index) => {
                return(
                    <div onClick={(e)=>{
                        
                        paginate(num);
                        
                      
                        
                    }}  key={num} className={`pl-5  pr-5 pt-4 pb-4 bg-[#F45C2C] hover:bg-[#f0a28a] duration-300 flex justify-center items-center rounded-xl  text-white text-[1.1em] cursor-pointer
                    `}>
                       {num}
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Pagination
