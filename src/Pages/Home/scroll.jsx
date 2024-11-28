import { useEffect, useRef } from "react";

function ScrollToggle({ top }) {
  const lastScrollY = useRef(0); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        
        top.current.style.display = "block"; 
      } else {
        top.current.style.display = "none"; 
      }

      lastScrollY.current = currentScrollY; // Update the last scroll position
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [top]);

  return null; // No UI rendering
}

export default ScrollToggle;
