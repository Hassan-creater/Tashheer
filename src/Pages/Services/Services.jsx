import React, { useRef } from 'react'
import fadds from "../../../public/Images/HomePage/facebook_ads-200x200.png";
import tadds from "../../../public/Images/HomePage/Twitter_for_Business-200x200.png";
import gadds from "../../../public/Images/HomePage/Google_Adwords-1-200x200.png";
import iadds from '../../../public/Images/HomePage/Instagram_Ads_Logo-1-200x200.png';
import hadds from '../../../public/Images/HomePage/Hubspot_Ads_Pakistan-200x200.png';
import yadds from '../../../public/Images/HomePage/YouTube_Video_Ads_Logo-200x200.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import smmp from "../../../public/Images/ServicesPage/Social-Media-Marketing-in-Pakistan-600x578.jpg";
import ScrollTrigger from 'gsap/ScrollTrigger';




import Typewriter from 'typewriter-effect';
import ServicesCards from '../../DataArrays/ServicesCards';
import paksmap from "../../../public/Images/ServicesPage/Pakistan_social_map.jpg";
import RequestCall from '../../Components/RequestCallback/RequestCall';
import Whatsapp from '../../Components/Whatsapp/Whatsapp';
import ScrollArrow from '../../Components/ScrollArrow/ScrollArrow';
import Interested_in_work from '../../Components/Interested-In-Work/Interested-in-work';


gsap.registerPlugin(ScrollTrigger);
const Services = () => {

  

    useGSAP(()=>{
        gsap.from(".text",{
            y:20,
            opacity:0,
            delay:0.5,
            duration:1,
            stagger:0.3
        })

        gsap.fromTo(".img",{
            scale:0,
            opacity:0,
            delay:0.4,
            duration:1,
            scrollTrigger:{
             trigger:'.page2'
            }
        },{
            scale:0.78,
            delay:0.6,
            duration:1,
            opacity:1,
            scrollTrigger:{
                trigger:".page2"
            }
        })

        gsap.from('.page2text',{
            x:50,
            opacity:0,
            delay:0.6,
            duration:1,
            scrollTrigger:{
                trigger:".page2"
            }
        })

        gsap.from(".text3",{
          opacity:0,
          y:10,
          delay:0.8,
          duration:1,
          scrollTrigger:{
            trigger:".page3"
          }
        })


        gsap.fromTo(".page4cards",{
          y:500,
          opacity:0,
        },{
          y:0,
          opacity:1,
          duration:0.1,
          delay:1,
          stagger:0.25,
          scrollTrigger:{
            trigger:".page4"
          }
        })

        gsap.from(".page4text",{
          opacity:0,
          y:40,
          delay:0.3,
          duration:1,
          stagger:0.3,
          scrollTrigger:{
            trigger:".page4"
          }
        })

        gsap.from(".page5",{
          opacity:0,
          y:50,
          delay:0.5,
          duration:1.5,
          scrollTrigger:{
            trigger: ".page5"
          }
        })

        gsap.from(".page6img",{
          opacity:0,
          x:-30,
          delay:0.5,
          duration:2,
          scrollTrigger:{
            trigger:".page6"
          }
        })

        gsap.from(".page6text",{
          opacity:0,
          x:30,
          delay:0.5,
          duration:2,
          scrollTrigger:{
            trigger:".page6"
          }
        })


        gsap.from(".page7text",{
          opacity:0,
          y:50,
          delay:0.4,
          duration:1,
          stagger:0.3,
          scrollTrigger:{
            trigger:".page7"
          }
        })

        gsap.from(".page7cards",{
          opacity:0,
          x:-20,
          delay:0.7,
          duration:2.5,
          stagger:0.3,
          scrollTrigger:{
            trigger:".page7"
          }
        })

        gsap.from(".page7btn",{
          opacity:0,
          x:20,
          delay:0.7,
          duration:2,
          scrollTrigger:{
            trigger:'.page7'
          }
        })

        gsap.from(".page9text",{
          opacity:0,
          y:40,
          delay:0.5,
          duration:1,
          stagger:0.3,
          scrollTrigger:{
            trigger:".page9"
          }
        })

        gsap.from(".page9box",{
          opacity:0,
          y:40,
          delay:0.5,
          duration:1,
          scrollTrigger:{
            trigger:".page9"
          }
        })
    })


    // box 1

    const box = useRef(null);
    const plus = useRef(null);
    const minus = useRef(null);


    const showfaq = ()=>{
      box.current.style.height = "245px",
      plus.current.style.display = "none",
      minus.current.style.display = "flex"
    }

    const hidefaq = ()=>{
      box.current.style.height = '55px',
      plus.current.style.display = "flex",
      minus.current.style.display = "none"
    }
    
    // box 2
    const box2 = useRef(null);
    const plus2 = useRef(null);
    const minus2 = useRef(null);


    const showfaq2 = ()=>{
      box2.current.style.height = "370px",
      plus2.current.style.display = "none",
      minus2.current.style.display = "flex"
    }

    const hidefaq2 = ()=>{
      box2.current.style.height = '55px',
      plus2.current.style.display = "flex",
      minus2.current.style.display = "none"
    }

    // box 3
    const box3 = useRef(null);
    const plus3 = useRef(null);
    const minus3 = useRef(null);


    const showfaq3 = ()=>{
      box3.current.style.height = "300px",
      plus3.current.style.display = "none",
      minus3.current.style.display = "flex"
    }

    const hidefaq3 = ()=>{
      box3.current.style.height = '55px',
      plus3.current.style.display = "flex",
      minus3.current.style.display = "none"
    }

    // box 4
    const box4 = useRef(null);
    const plus4 = useRef(null);
    const minus4 = useRef(null);


    const showfaq4 = ()=>{
      box4.current.style.height = "245px",
      plus4.current.style.display = "none",
      minus4.current.style.display = "flex"
    }

    const hidefaq4 = ()=>{
      box4.current.style.height = '55px',
      plus4.current.style.display = "flex",
      minus4.current.style.display = "none"
    }

    // box 5 
    const box5 = useRef(null);
    const plus5 = useRef(null);
    const minus5 = useRef(null);


    const showfaq5 = ()=>{
      box5.current.style.height = "245px",
      plus5.current.style.display = "none",
      minus5.current.style.display = "flex"
    }

    const hidefaq5 = ()=>{
      box5.current.style.height = '55px',
      plus5.current.style.display = "flex",
      minus5.current.style.display = "none"
    }

    // box 6
    const box6 = useRef(null);
    const plus6 = useRef(null);
    const minus6 = useRef(null);


    const showfaq6 = ()=>{
      box6.current.style.height = "245px",
      plus6.current.style.display = "none",
      minus6.current.style.display = "flex"
    }

    const hidefaq6 = ()=>{
      box6.current.style.height = '55px',
      plus6.current.style.display = "flex",
      minus6.current.style.display = "none"
    }

    // box 7
    const box7 = useRef(null);
    const plus7 = useRef(null);
    const minus7 = useRef(null);


    const showfaq7 = ()=>{
      box7.current.style.height = "245px",
      plus7.current.style.display = "none",
      minus7.current.style.display = "flex"
    }

    const hidefaq7 = ()=>{
      box7.current.style.height = '55px',
      plus7.current.style.display = "flex",
      minus7.current.style.display = "none"
    }

    // box 8
    const box8 = useRef(null);
    const plus8 = useRef(null);
    const minus8 = useRef(null);


    const showfaq8 = ()=>{
      box8.current.style.height = "245px",
      plus8.current.style.display = "none",
      minus8.current.style.display = "flex"
    }

    const hidefaq8 = ()=>{
      box8.current.style.height = '55px',
      plus8.current.style.display = "flex",
      minus8.current.style.display = "none"
    }

    const data = [
      {
          icon:"fa-solid fa-down-left-and-up-right-to-center",
          heading : "Efficiently Targets The Traffic",
          para : "The top-of-the-line professionals at Tashheer digital use geo-targeting and social media optimization in order to Revolutionize your traffic and improve search rankings.",
          hover : "group-hover:bg-black",
      },
      {
        icon : "fa-solid fa-chart-pie",
        heading :"Generate Leads And Boosts Brand Recognition",
        para : "The masterminds of Tashheer digital marketing significantly create contests for the followers to enhance the company’s engagement.",
        hover : "group-hover:bg-black",
      },
      {
        icon : "fa-solid fa-user-plus",
        heading : "	Get Your Hands On More Customers",
        para : "Even more, we create engaging content and launch result-driven SMM campaigns, thereby elevating your products and services which ultimately gives high ROI.",
        hover : "group-hover:bg-black",
      },
      {

        icon : "fa-solid fa-user-check",
        heading: "	Manages Customer Relations And Credibility",
        para: "Our strategic thinkers strive round the clock to foster lifetime relations with our most clients. We respond to their questions, create giveaways to help you build trust.",
        hover : "group-hover:bg-black",
      },
      {
        icon : "fa-solid fa-heart",
        heading: "	Enhanced Brand Loyalty",
        para : "Our credentialed management cares about the customer’s satisfaction and regularly interacts with them. Thereby making your business more loyal and authoritative.",
        hover : "group-hover:bg-black",
      },
      {
        icon : "fa-solid fa-thumbs-up",
        heading: "Creative Content For Social Media Marketing",
        para : "We post well-written, future-proofed, and result-oriented content on social media to boost your presence and loyalty in the field.",
        hover : "group-hover:bg-black",
      }
    ]


  

  return (
    <div className='w-full pt-[4.2em] -500 pb-5 relative'>
      <Whatsapp/>
      <ScrollArrow/>
        {/* page 1 */}
      <div className='w-[80%] xl:w-[60%] text-[19px] text-[#0057FF] text-center flex flex-col items-center gap-4 font-Rvisby mx-auto'>
        <p className="text">Start getting orders, leads,and customers today!</p>
        <h2 className='font-Visby text-[42px] text-black leading-[1em] text'>Social Media Marketing Company in Paksitan that converts quickly</h2>
        <p className='text-[18px] font-Rvisby text-black mt-8 text '>We make a social media strategy that gives results not in months but in days. Our team of digital enthusiasts helps your business to grow quickly in Pakistani market with a loyal clientage over social media platforms.</p>


        <div className=' w-[100%] md:w-[85%] mt-2 font-Rvisby text-[16px] text-center flex flex-col gap-7 text '>
          
          <div className='w-full cursor-pointer logo h-[90px] flex ' >
            <div className='logo w-1/6 h-full object-fit flex justify-center items-center   duration-300 hover:animate-pulse '>
              <img   src={fadds} alt="Logo Images" width='75%' height="90%" className='hover:w-[85%] duration-500' />
            </div>
            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={gadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[75%] duration-700' />
            </div>

            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={iadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[78%] duration-700' />
            </div>
            
            <div className='logo w-1/6 h-full object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={hadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[78%] duration-700'  />
            </div>
            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={tadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[78%] duration-700' />
            </div>
            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse'>
              <img src={yadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[78%] duration-700'  />
            </div>
          </div>
         </div>
      </div>


      {/* page 2 */}
       <div className='page2 pt-10 mt-5 w-full pb-10 md:pb-10 lg:pb-10 flex flex-col md:flex-row'>
        <div className='  md:w-[50%] xl:w-[40%] flex justify-center items-center   md:pl-5 '>
            <img src={smmp} alt="social media marketing in pakistan" width="100%" height="100%" className='scale-[0.78] img' />
        </div>
        <div className=' w-[85%] mx-auto md:w-[50%] xl:w-[60%]   font-Rvisby pt-[3.3em] flex flex-col gap-[1.2em] md:pr-7 page2text'>
            <p className='text-[19px] text-[#0057FF]'>
            Tashheer digital strategy helps you attain more</p>
            <h3 className='font-bold text-[23px] leading-[31px] '>Do you want to drive more traffic to increase your business recognition and sales in Pakistan with little to no cost?</h3>
            <p className='text-[16px] leading-[26px] mt-5'>Social media marketing is a powerful way of promoting your unique content using various social media marketing tools. Indeed, social media marketing in Pakistan is substantial to reshape consumer behavior and turn the wheel of fortune on your side. You can use these platforms to be up-to-date with the needs and demands of your <span className='font-bold'>potential customers</span> . Subsequently, you can socially interact with them and discover exclusive deals through data gathered by platforms.</p>
            <div className='text-white text-[14px] bg-[#F45C2C] hover:bg-[#FFF0EB] hover:text-[#F45C2C] duration-500 rounded-lg w-[240px] h-[43px] flex justify-center items-center cursor-pointer mt-5 font-Rvisby font-semibold'>
                <p>Got a project? Contact us!</p>
            </div>
        </div>
       </div>


       {/* page 3 */}
       <div className='w-full page3  pt-[25em] pb-[35em] sm:pb-[15em]  bg-skyline bg-fixed top-0 bg-cover bg-no-repeat bg-center  flex  items-center bg-orange-300 relative bg-blend-multiply'>
        <div className='bg-Services page3text pt-[25em] pb-[35em]  sm:pb-[15em] absolute top-0 left-0 w-full'></div>
        <div className='w-full sm:w-[85%] xl:w-[60%] pt-2  absolute top-[5em] left-5  sm:left-[4em] text-white flex flex-col '>
            <p  className='text-[18px] font-Rvisby text3 '>Expect Greater and Effective Results</p>
            <p className='text-[38px] text3 font-Visby text-yellow-300 mt-5'>
              <Typewriter
                 options={{
                  loop:true
                 }}
                 onInit={(typewriter)=>{
                     typewriter
                     .typeString("Efficient")
                     .pauseFor(500)
                     .deleteAll()
                     .typeString("Powerful")
                     .pauseFor(500)
                     .deleteAll()
                     .typeString("Effective")
                     .start()
                 }}
              />
            </p>
            <h3 className='text-[38px] font-Visby text3'>Social Media Marketing</h3>
            <p className='w-full pr-[3em] text-[18px] font-Rvisby text3 leading-[29px] mt-7'>Since traditional marketing has been rooted for ages in Pakistan. Therefore, some companies are quite uncertain about the idea of SMM. Initially, social media platforms were constructed to smooth the communication path, but they gradually evolved as a platform for business holders. Furthermore, <span className='font-bold'>effective SMM</span>  tools open your business to a vital variety of loyal customer circles. With versatile people comes a variety of needs and a variety of thoughts. Moreover, constructive SMM provides you sustenance to meet your target audience and learn more about them.</p>
            <div className='text-[#F45C2C] text3 text-[14px]  bg-[#FFF0EB] hover:bg-[#F45C2C] hover:text-white duration-500 rounded-lg w-[225px] h-[43px] flex justify-center items-center cursor-pointer font-Rvisby font-semibold mt-10'>
                <p >Request Free Consultation</p>
            </div>
        </div>
       </div>


       {/*page 4  */}
        <div className='w-full pt-[8em] xl:pt-14  page4'>
          <div className='w-[80%] xl:w-[60%] mx-auto  text-center text-[16px] sm:text-[19px] font-Rvisby '>
          <p className='text-[#0057FF] page4text'>Take Full Benefit of Pakistani Audience on Social Platforms</p>  
           <h1 className='text-[27px] sm:text-[42px] font-Visby mt-5 page4text'>Social Media Marketing Company in Pakistan</h1>
           <p className='mt-6 page4text'>There are several social media platforms that you can use to promote your business in Pakistan. It includes Facebook, Instagram, Twitter, YouTube, Snapchat, and many others. We provide complete Social media marketing serivces in Pakistan for wide range of industries and business sectors.</p>
          </div>

          <div className='w-full pt-[10em] xl:pt-10 gap-5  mx-auto flex flex-wrap justify-center '>
            <ServicesCards/>
          </div>
         
        </div>  

            <Interested_in_work color={"rgba(55,110,221,0.6)"} bg={"bg-blue-400"}/>

            {/* page 6 */}
            <div className='w-full pt-14 page6  flex flex-col sm:flex-col-reverse xl:flex-row'>
              <div className='w-full xl:w-[45%] page6img  flex justify-center xl:justify-end '>
                <img src={paksmap} alt="Pakistan social map " width="100%" height="100%" className='scale-[0.9] xl:scale-[0.8] xl:w-[80%] sm:w-[50%] ' />
              </div>
              <div className='w-[80%] mx-auto xl:w-[55%] pt-4 page6text xl:pr-[15em] flex flex-col items-center text-center xl:text-start xl:items-start'>
                <p className='text-[18px] font-Rvisby text-[#0057FF]'>Powerful Social Media Campaigns Produces Effective Results</p>
                <p className='text-[27px] sm:text-[32px] leading-[43px] font-Visby'>How Tashheer Uniquely Creates a Winning Social Media Strategy for your Business?</p>
                <p className='text-[18px] font-Rvisby leading-[29px] mt-8'>According to Social Media Examiners, about 96% of the companies are currently using SMM services to boost success opportunities. But 85% of these participants are unaware of the tools which are best to use. Knowing the latest tools and trends in SMM is the key of winning best results. With Tashheer digital marketing, you can get your hands on the most fruit-bearing SMM packages. The innovation-driven team of Tashheer digital marketing Endeavours to uplift social media marketing in Pakistan.</p>
                {/* btn */}
                <div className='text-white text-[14px] bg-[#F45C2C] hover:bg-[#FFF0EB] hover:text-[#F45C2C] duration-500 rounded-lg w-[240px] h-[43px] flex justify-center items-center cursor-pointer mt-10 font-Rvisby '>
                <p>Learn more about our Strategy</p>
            </div>
              </div>
            </div>


            {/* page 7 */}
            <div className='w-full page7 pt-[5em] pb-[5em] bg-[#F1F6FF] mt-[2em] flex  justify-center items-center'>
              <div className='w-[73%] pt-3 '>
                <div className='w-full pt-2  text-[19px] font-Rvisby'>
                  <p className='text-[#0057FF] page7text'>We help you to improve your online recognition</p>
                  <p className='text-[30px] sm:text-[42px] font-Visby leading-[40px] sm:leading-[57px] mt-7 page7text'>What Tashheer Promise with it’s SMM Campaigns?</p>
                  <p className='text-[18px] leading-[29px] mt-5 page7text'>There are several social media platforms that you can use to promote your business in Pakistan. It includes Facebook, Instagram, Twitter, YouTube, Snapchat, and many others. While planning and implementing the strategy which Tashheer designed for you:</p>
                </div>
               
                <div className='w-full flex flex-wrap  justify-between gap-14  lg:gap-7 pt-14'>
                   {
                    data.map((item,index)=>(
                      <div className='w-full lg:w-[48%] pt-1 page7cards flex flex-col gap-2 group cursor-pointer'>
                    <div className='w-full   flex justify-between  items-center'>
                      <div className={`w-[2em] h-[2em] rounded-full bg-[#5479F7] text-white flex justify-center items-center ${item.hover}  duration-500 `}>
                        <i className={`${item.icon}`}></i>
                      </div>
                      <div className='w-[80%] sm:w-[87.5%] font-Mvisby text-[20px] pt-1  leading-[25px]'>
                        <p>{item.heading}</p>
                      </div>
                    </div>
                    <div className='w-full font-Rvisby  text-[13px] flex mt-1'>
                      <p>{item.para}</p>
                    </div>
                  </div>
                    ))
                   }
                  
                  
                  
                 
                </div>
                <div className='text-white text-[14px] bg-[#F45C2C] hover:bg-[#FFF0EB] hover:text-[#F45C2C] duration-500 rounded-lg w-[220px] h-[43px] flex justify-center items-center cursor-pointer lg:mt-5 font-Rvisby mt-10 page7btn'>
                <p>Let's Speak to Start Today</p>
            </div>
              </div>
            </div>

            {/* page 8 */}
            <RequestCall/>

            {/* page 9  */}
            <div className='w-full page9 pt-[3em]  '>
              <div className='w-[80%] sm:w-[60%] mx-auto text-center'>
              <h1 className='text-[30px] sm:text-[42px] font-Visby page9text'>Any Question?</h1>
              <p className='text-[18px] font-Rvisby leading-[29px] mt-5 page9text'>Still, question in mind? check below for general FAQs or contact us directly by visiting contact page.</p>
              </div>

              <div className='w-full pt-14  flex flex-wrap justify-evenly gap-2 pb-3 page9box'>

                <div ref={box} className='w-[90%] sm:w-[40%] lg:w-[45%]  overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100'>
                  <div onClick={()=>{
                    showfaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} ref={plus} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq} ref={minus} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>
                  <p onClick={()=>{
                    showfaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} className='text-[14px] lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer'>What is social media marketing?</p>
                  <p onClick={hidefaq} className='text-[12px] pr-5 lg:text-[15px] md:leading-[24px] font-Rvisby absolute top-[5em] left-4 text-slate-500'>Basically, SMM is the use of social networks and micro-blogging platforms to market and advertise a company’s products and services. Social media marketing helps you to reach your desired audience digitally. This audience is targeted through marketing campaigns that convert into orders, leads, and customers.</p>
                </div>

                <div ref={box2} className='w-[90%] sm:w-[40%] lg:w-[45%] h-[55px] overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100'>
                  <div onClick={()=>{
                    showfaq2();
                    hidefaq();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} ref={plus2} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq2} ref={minus2} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>

                  <p onClick={()=>{
                    showfaq2();
                    hidefaq();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} className='text-[12px] lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer '>How to manage social media for a company?</p>
                  <p onClick={hidefaq2} className='text-[10px] lg:text-[15px] md:leading-[24px] font-Rvisby absolute top-[5em] left-4 text-slate-500'>In order to build your brand and engage with the target audience, the social media management of your business is crucial. 8 steps to follow if you want to manage social media for your company:
                    <ul className='font-bold mt-4'>
                      <li>
                      . Know your brand
                      </li>
                      <li>
                      . Identify your goals
                      </li>
                      <li>
                      . Know who you’re trying to reach
                      </li>
                      <li>
                      . Create profiles on all popular social media networks
                      </li>
                      <li>
                      . Produce quality content
                      </li>
                      <li>
                       . Engage with the audience
                      </li>
                      <li>
                      . Develop ads
                      </li>
                      <li>
                      . Evaluate your performance
                      </li>
                    </ul>
                 </p>
                </div>


                <div ref={box3} className='w-[90%] sm:w-[40%] lg:w-[45%] h-[55px] overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100 '>
                  <div onClick={()=>{
                    showfaq3();
                    hidefaq();
                    hidefaq2();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} ref={plus3} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq3} ref={minus3} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>
                  <p onClick={()=>{
                    showfaq3();
                    hidefaq();
                    hidefaq2();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} className='text-[12px] pr-2  lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer'>How to do promote your business digitally in Pakistan?</p>
                  <p onClick={hidefaq3} className='text-[12px] lg:text-[15px] md:leading-[24px] font-Rvisby absolute top-[5em] left-4 pr-[2em] text-slate-500 '>It’s easy to start with social media marketing in Pakistan. All you need is to create social handles for your company or business. After that, you have to keep posting related content to engage your audience. In this way, you will have a community of loyal fan-base. Social media campaigns are planned and boosted to get more attention for your brand. These campaigns are optimized with respect to age, sex, area, interest, etc. The ROI depends on how perfectly you have managed to optimize a campaign.</p>
                </div>
                
                <div ref={box4} className=' w-[90%] sm:w-[40%] lg:w-[45%] h-[55px] overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100'>
                  <div onClick={()=>{
                    showfaq4();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} ref={plus4} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq4} ref={minus4} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>
                  <p onClick={()=>{
                    showfaq4();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} className='text-[12px] lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer'>How to get into social media marketing?</p>
                  <p onClick={hidefaq4} className='text-[12px] lg:text-[15px] lg:leading-[24px] font-Rvisby absolute top-[5em] left-4 text-slate-500'>Today, businesses cannot afford to ignore social media marketing. With the increased use of social media platforms by millions of people around the world, businesses don’t hesitate to pay even in 6 figures for an expert social media marketer. So, if you want to get into the social media marketing business, begin with getting the clients from freelancing platforms. Eventually, it can help you grow your portfolio and land you a job at one of the big companies.</p>
                </div>

                <div ref={box5} className=' w-[90%] sm:w-[40%] lg:w-[45%] h-[55px] overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100'>
                  <div onClick={()=>{
                    showfaq5();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} ref={plus5} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq5} ref={minus5} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>
                  <p onClick={()=>{
                    showfaq5();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} className='text-[12px] lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer'>How to advertise your buisness online?</p>
                  <p onClick={hidefaq5} className='text-[12px] lg:text-[15px] md:leading-[24px] font-Rvisby absolute top-[5em] left-4 pr-[3em] text-slate-500'>You can do SMM advertisements by knowing your business objectives and the needs of your target audience. It’s simple to kick off social media advertising.<i>Ad Manager</i>  Tool on Facebook and other social media platforms helps you to create an marketing campaign.</p>
                </div>

                <div ref={box6} className='w-[90%] sm:w-[40%] lg:w-[45%] h-[55px] overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100'>
                  <div onClick={()=>{
                    showfaq6();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq7();
                    hidefaq8();
                  }} ref={plus6} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq6} ref={minus6} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>
                  <p onClick={()=>{
                    showfaq6();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq7();
                    hidefaq8();
                  }} className='text-[12px] lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer'>How much do social media marketers make per hour?</p>
                  <p onClick={hidefaq6} className='text-[12px] lg::text-[15px] lg:leading-[24px] font-Rvisby absolute top-[5em] left-4 text-slate-500'>There isn’t any solid data available for social media marketers’ pay per hour. In the United States, social media marketers make an average of $21 per hour, which is almost the same for each state of the USA. However, wages differ from country to country, not only for social media marketers but for all workers. Depending on where you are, Pakistan, Canada, the UK, India, and other countries will have different wages.</p>
                </div>


                <div ref={box7} className='w-[90%] sm:w-[40%] lg:w-[45%] h-[55px] overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100'>
                  <div onClick={()=>{
                    showfaq7();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq8();
                  }} ref={plus7} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq7} ref={minus7} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>
                  <p onClick={()=>{
                    showfaq7();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq8();
                  }} className='text-[12px] lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer'>What is social media marketing specialist?</p>
                  <p onClick={hidefaq7} className='text-[12px] lg:text-[15px] md:leading-[24px] font-Rvisby absolute top-[5em] left-4 text-slate-500'>A social media specialist is the one, who creates, manages, and runs social media strategy for a company or clients. This term is often interchangeable with <i>
                  Social Media Manager</i> . With more companies and businesses using social media to advertise their services, jobs for this designation are increasing.</p>
                </div>


                <div ref={box8} className='w-[90%] sm:w-[40%] lg:w-[45%] h-[55px] overflow-hidden duration-500 relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100'>
                  <div onClick={()=>{
                    showfaq8();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                  }} ref={plus8} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq8} ref={minus8} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>
                  <p onClick={()=>{
                    showfaq8();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                  }} className='text-[12px] lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer'>Why do we need social media?</p>
                  <p onClick={hidefaq8} className='text-[12px] lg:text-[15px] md:leading-[24px] font-Rvisby absolute top-[5em] left-4 text-slate-500'>The social media platform is a fantastic way for marketers to reach and engage potential customers since it enables them to do so through Twitter, LinkedIn, Instagram, Facebook, and even on emerging platforms like Tik Tok. By following a powerful social media strategy, marketers can create compelling content and engage audiences.</p>
                </div>


                

                
                
              </div>
              
            </div>
    </div>
  )
}

export default Services
