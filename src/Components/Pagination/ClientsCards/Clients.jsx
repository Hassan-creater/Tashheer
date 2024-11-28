import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Clients = ({clients}) => {


    useGSAP(()=>{
        gsap.fromTo(".cards",{
            y:20,
            opacity:0,
            delay:1,
            stagger:0.3,
            duration:2,
            scrollTrigger:{
                trigger:".cardspage"
            }
        },{
            y:0,
            opacity:1,
            duration:2,
            stagger:0.5,
            scrollTrigger:{
                trigger:".cardspage"
            }
        })
    })
  return (
    <>
       <div className='w-full  cardspage pt-16 gap-4 xl:gap-1 justify-center items-center xl:p-4  flex flex-wrap'>
        {
            clients.map((clients, index) => {
                return (
                    <div key={index} className='cards  sm:w-[85%] md:w-[45%] lg:w-[450px] lg:h-[550px] xl:w-[305px]  xl:h-[388px] pt-[40px] pb-[40px] rounded-xl pl-[35px] pr-[35px] '>
                    <div className='w-full h-full  rounded-xl hover:shadow-xl hover:shadow-slate-600 duration-500'>
                        <div className='w-full xl:h-[207px]  rounded-xl'>
                            <img src={clients.image} alt={`${clients.name}`} width="100%" height="100%" className='rounded-tl-xl rounded-tr-xl' />
                        </div>
                        <div className='w-full h-[101px] bg-white flex flex-col justify-center items-center gap-2 rounded-bl-xl rounded-br-xl text-center pl-2 pr-2 '>
                            <p className='font-DMsans text-[20px]'>{clients.name}</p>
                            <p className='text-[16px] text-[#0057FF] font-Rvisby'>{clients.para}</p>
                        </div>
                    </div>
                </div>
                )
            })
        }
       
        
       </div>
    </>
  )
}

export default Clients
