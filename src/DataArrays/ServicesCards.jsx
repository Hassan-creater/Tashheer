import React, { useRef } from 'react'

const ServicesCards = () => {

    const cards = [
        {
            icon: "fa-brands fa-facebook-f",
            heading : "Facebook Marketing",
            para: "Facebook’s most popular advertising model involves running Facebook ads that can be converted into landing pages that offer bundles of products and services. These leads then can be turned into lifelong clients.",
            bg: "bg-[#EDF3FF]",
            hover:"group-hover:bg-[#0057FF]",
            text:"text-[#0057FF]"
        },
        {
            icon: "fa-brands fa-instagram",
            heading: "Instagram Marketing",
            para : "Instagram provides a wide range of prospective for the brands. Instagram has the highest audience engagement rates among all other platforms, 2000% higher than Twitter and 58% higher than Facebook.",
            bg: "bg-[#FEF3EF]",
            hover:"group-hover:bg-[#F45C20]",
            text: "text-[#F45C20]",
        },
        {
            icon: "fa-brands fa-linkedin-in",
            heading: "LinkedIn Marketing",
            para: "LinkedIn is a platform that gives you the opportunity to find high-quality leads, particularly in certain fields. Unlike other platforms that are experts in B2C advertising, LinkedIn focuses on B2B marketing strategy.",
            bg: "bg-[#FBF1FB]",
            hover:"group-hover:bg-[#C13DCD]",
            text: "text-[#C13DCD]"
        },
        {
            icon: "fa-brands fa-youtube",
            heading: "YouTube Video Ads",
            para : "As compared to other social network marketing tools, marketers often ignore YouTube marketing. To some, it is just a normal social media network, while others perceive it as an online video platform.",
            bg: "bg-[#FEF3EF]",
            hover:"group-hover:bg-[#F45C20]",
            text: "text-[#F45C20]",
        },
        {
            icon:"fa-brands fa-x-twitter",
            heading: "Twitter Ads",
            para: "Twitter allows users to connect with both mainstream influencers and different brands or niches. Twitter has 328 million active users and is one of the top lead-generating platforms for businesses.",
            bg: "bg-[#EDF3FF]",
            hover:"group-hover:bg-[#0057FF]",
             text:"text-[#0057FF]"
        },
        {   
            icon:"fa-brands fa-snapchat",
            heading: "Snapchat Marketing",
            para: "Snapchat is unclear whether Instagram’s social video push will overtake Snapchat in the future, but, for now, it’s the most effective advertising platform with the highest user engagement.",
            bg: "bg-[#FBF1FB]",
            hover:"group-hover:bg-[#C13DCD]",
            text: "text-[#C13DCD]"
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


    const refs = cards.map(()=>({
        icon1: useRef(null),
        icon2: useRef(null),
    }))

  return (
    <>
      {cards.map((item, index) => (
        <div  onMouseEnter={()=>{
          handleMouseEnter(refs[index].icon1, refs[index].icon2);
        }} key={index}  className={` page4cards w-full gap-7 md:w-[45%]  xl:w-[30%] lg:w-[45%]  md:h-[422px] rounded-xl  flex flex-col md:gap-6 items-center p-1 cursor-pointer  duration-500 group  `}>
          <div  className={`w-[127px] h-[127px] rounded-full group  ${item.bg} relative flex justify-center items-center text-[2em] overflow-hidden ${item.text}  group-hover:text-white hover:shadow-lg hover:shadow-[${item.bg}]  duration-700 ${item.hover} `}  >
           <i ref={refs[index].icon1} className={`${item.icon} translate-x-0  `} />
           <i  ref={refs[index].icon2} className={`${item.icon} absolute translate-x-[-100px] `} />
          </div>
          <div  className='w-full h-[24px] flex justify-center items-center  text-[20px] font-Mvisby font-bold' >
            <p>{item.heading}</p>
          </div>
          <div className='w-full md:h-[201px]  text-[18px] font-Rvisby flex justify-center items-center p-1 text-center' >
            <p>{item.para}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default ServicesCards
