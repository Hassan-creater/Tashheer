import React from 'react'

import { useRef } from 'react';

const AgencyCards = () => {
  
    const cards = [
        {
          icon : "fa-solid fa-bullhorn",
          heading :"Brand Awareness",
          para :"Tashheer can create awareness of you brand in the masses with a tailored plan",
          text : "text-[#0057FF]",
          bg : "group-bg-[#01153D]"
        },

        {
          icon : "fa-solid fa-download",
          heading :"Orders & Leads",
          para :"Reach your desired audience and get tons of leads, orders and customers.",
          text : "text-[#F45C20]",
          bg : "group-bg-[#321610]"
        },
        {
            icon :"fa-solid fa-tag",
            heading : "Brand Management",
            para : "Brand or re-brand your existing company with our best strategists available.",
            text : "text-[#39C056]",
            bg : "group-bg-[#0D2D1C]"
        },
        {
            icon :"fa-solid fa-pencil",
            heading: "Creative Design",
            para : "Creative designs by TAshheer will help you to stand out among other competitors.",
            text : "text-[#FFA700]",
            bg : "group-bg-[#34250A]"
        },
        {
            icon : "fa-solid fa-cloud",
            heading : "Content Creation",
            para : "We produce amazing textual, pictorial, and video content for our clients.",
            text : "text-[#20B8F4]",
            bg : "group-bg-[#07293B]"
        },
        {
            icon :"fa-solid fa-house",
            heading : "Digital Consultancy",
            para : "No contract, no fee is charged by our digital media marketing advisors.",
            text : "text-[#CD3DAD]",
            bg : "group-bg-[#2A102D]"
        }



    ]


    const handleMouseEnter = (iconRef1, iconRef2) => {
        if (!iconRef1.current || !iconRef2.current) return; // Safety check
      
        // Reset positions
        iconRef1.current.style.transition = "none";
        iconRef2.current.style.transition = "none";
        iconRef1.current.style.transform = "translateX(0)";
        iconRef2.current.style.transform = "translateX(-100px)";
      
        // Trigger reflow
        void iconRef1.current.offsetWidth;
      
        // Apply hover effect
        iconRef1.current.style.transition = "transform 0.5s ease";
        iconRef2.current.style.transition = "transform 0.5s ease";
        iconRef1.current.style.transform = "translateX(100px)";
        iconRef2.current.style.transform = "translateX(0)";
      };
      
  
      const refs = cards.map(() => ({
        icon1: useRef(null),
        icon2: useRef(null),
      }));
  

  return (
    <div className=' page3 w-full md:pt-0 lg:pt-[10.5em]   pl-7 pr-7 pb-7 flex flex-wrap gap-14 mb-10 md:pb-0 md:gap-8 justify-center xl:pt-10'>
        
    {cards.map((item, index) => (
      <div onMouseEnter={()=>{
        handleMouseEnter(refs[index].icon1, refs[index].icon2);
      }}  key={index}  className={` page3cards w-full gap-7 md:w-[45%]  xl:w-[30%] lg:w-[45%]  md:h-[370px] rounded-xl  flex flex-col md:gap-6 items-center p-1 cursor-pointer group  duration-500  text-white `}>
        <div  className={`w-[127px] h-[127px] rounded-full group  ${item.bg} relative flex justify-center items-center text-[2em] overflow-hidden ${item.text}  group-hover:text-white hover:shadow-lg hover:shadow-[${item.bg}]  duration-700 ${item.hover} `}  >
         <i ref={refs[index].icon1} className={`${item.icon} translate-x-0  `} />
         <i  ref={refs[index].icon2} className={`${item.icon} absolute translate-x-[-100px] `} />
        </div>
        <div  className='w-full h-[24px] flex justify-center items-center  text-[20px] font-Mvisby' >
          <p>{item.heading}</p>
        </div>
        <div className='w-full md:h-[100px]  text-[18px] font-Rvisby flex justify-center items-center p-1 text-center' >
          <p>{item.para}</p>
        </div>
      </div>
    ))}
  
</div> 
  )
}

export default AgencyCards
