import React from 'react'
import ScrollToggle from '../../Pages/Home/scroll'

const ScrollArrow = () => {

    const top = React.useRef(null); 

    const handleScroll = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  return (
    <>
    <ScrollToggle top={top}/>
    <div onClick={handleScroll}  ref={top} className=' hidden fixed duration-500 cursor-pointer top pt-3 pb-2
     pl-5 pr-5 bg-slate-700 bottom-0 right-[8em] rounded-tl-lg rounded-tr-lg z-20  justify-center items-center text-white '>
   <i className="fa-solid fa-angle-up"></i>
    </div>
    </>
  )
}

export default ScrollArrow
