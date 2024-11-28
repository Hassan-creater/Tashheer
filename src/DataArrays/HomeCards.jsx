


  

   import { useRef } from "react";
 


   const CardsHome = () => {
    
    const cards = [
      {
        icon: "fa-solid  fa-bullhorn ",
        icon2:  "fa-solid fa-bullhorn",
        heading: "Social Media Marketing",
        content:
          "Effective social media marketing campaigns are formulated by the far-reaching insights of our diligent professionals. It will help to increase your leads constructively and meeting the sale targets.",
    
        bg: "bg-[#EDF3FF]",
        text : "text-[#0057FF]",
        hover : "group-hover:bg-[#0057FF]",
        
        
      },
    
      {
        icon: "fa-solid fa-arrow-pointer" ,
        icon2: "fa-solid fa-arrow-pointer",
        heading: "Pay Per Click (PPC)",
        content:
          "The optimized pay-per-click services in Pakistan show the ropes for extensive benefits that get the better of sale goals, leading your way toward leverage revenue by living up to your exceed objectives.",
        
        bg: "bg-[#FEF3EF]",
        text: "text-[#F45C20] ",
         hover : "group-hover:bg-[#F45C20]",
        
        
      },
      {
        icon: "fa-solid fa-chart-line" ,
        icon2: "fa-solid fa-chart-line" ,
        heading: "Leads Generation",
        content:
          "Our in-depth market research can find an efficient strategy for generating potential leads quickly. The campaign plan distributes the budget on brand awareness, social media, video ads, and PPC.",
        bg: "bg-[#FBF1FB]",
        text: "text-[#C13DCD] ",
         hover : "group-hover:bg-[#C13DCD]",
        
      },
      {
        icon: "fa-solid  fa-network-wired",
        icon2: "fa-solid  fa-network-wired",
        heading: "Content Marketing",
        content:
          "We can’t ignore the importance of Content marketing in Pakistan. It’s a valuable strategy to get an organic audience and leads. We have experts to design, produce and distribute related content to the target customer base.",
    
          bg: "bg-[#EDF3FF]",
          text: "text-[#0057FF]",
           hover : "group-hover:bg-[#0057FF]",
          
          
      },
      {
        icon: "fa-brands fa-youtube",
        icon2: "fa-brands fa-youtube",
        heading: "YouTube Marketing",
        content:
          "Videos ads are impactful and helps to make clientage quickly. We do short-video ad production for advertising on YouTube and social media platforms. Consult with our video team to see your ad.",
          bg: "bg-[#F1FBF3]",
          text:"text-[#3DCD5C] ",
           hover : "group-hover:bg-[#3DCD5C]",
           
          
      },
      {
        icon: "fa-solid fa-cart-shopping",
        icon2: "fa-solid fa-cart-shopping",
        heading: "E-commerce Marketing",
        content:
          "Boost your online store with our eCommerce marketing in Pakistan. Whatever products or shop you have, Tashheer will design a powerful social media campaign to advertise your business online.",
          bg: "bg-[#EDF3FF]",
          text : "text-[#0057FF] ",
           hover : "group-hover:bg-[#0057FF]",
           
          
      },
      {
        icon:"fa-solid fa-magnifying-glass ",
        icon2: "fa-solid fa-magnifying-glass ",
        heading: "Search Engine Marketing",
        content:
          "We increase your website exposure by expanding superior visibility and profound searchability in the search engine search results. Your website will be analyzed and enhanced by the SEM team.",
          bg: "bg-[#FEF3EF]",
          text: 'text-[#F45C20]',
           hover : "group-hover:bg-[#F45C20]",
          
          
      },
      {
        icon: "fa-solid fa-rectangle-ad ",
        icon2: "fa-solid fa-rectangle-ad ",
        heading: "Digital Display Advertising",
        content:
          "Reach a big audience by placing digital marketing ads on websites with a high volume of visitors. Tashheer is partnered with top-visited websites in Pakistan and can give you the best advertisement space.",
          bg: "bg-[#F1FBF3]",
          text : "text-[#3DCD5C] ",
           hover : "group-hover:bg-[#3DCD5C]",
           
          
      },
    ];

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


    return(
      <div className=' page3 w-full md:pt-0 lg:pt-[10.5em]   pl-7 pr-7 pb-7 flex flex-wrap gap-14 mb-10 md:pb-0 md:gap-8 justify-center xl:pt-10'>
        
      {cards.map((item, index) => (
        <div onMouseEnter={()=>{
          handleMouseEnter(refs[index].icon1, refs[index].icon2);
        }}  key={index}  className={` page3cards w-full gap-7 md:w-[45%] group xl:w-[277px] lg:w-[45%]  md:h-[422px] rounded-xl  flex flex-col md:gap-6 items-center p-1 cursor-pointer  duration-500   `}>
          <div  className={`w-[127px] h-[127px] rounded-full group  ${item.bg} relative flex justify-center items-center text-[2em] overflow-hidden ${item.text}  group-hover:text-white hover:shadow-lg hover:shadow-[${item.bg}]  duration-700 ${item.hover} `}  >
           <i ref={refs[index].icon1} className={`${item.icon} translate-x-0  `} />
           <i  ref={refs[index].icon2} className={`${item.icon} absolute translate-x-[-100px] `} />
          </div>
          <div  className='w-full h-[24px] flex justify-center items-center  text-[20px] font-Mvisby' >
            <p>{item.heading}</p>
          </div>
          <div className='w-full md:h-[201px]  text-[18px] font-Rvisby flex justify-center items-center p-1 text-center' >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    
  </div>
    )
  }
  

 
  export default CardsHome