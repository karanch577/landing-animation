import { motion, useInView } from "framer-motion";
import React,{useEffect, useRef, useState } from "react";
import FeatureWrapper from "../FeatureWrapper/FeatureWrapper";
// import "./Header.css"

function Header() {
  const targetRef = useRef(null)
  const targetRef1 = useRef(null)

  const [page, setPage] = useState(0)

  
  const isInView = useInView(targetRef, {
    margin: "-30%"
  })

  const isInView1 = useInView(targetRef1, {
    margin: "-30%"
  })

  useEffect(() => {
    if(isInView) {
      setPage(1)
    console.log(isInView)
    
  } else if( page === 1) {
    setPage(0)
    console.log(isInView)
    }
  }, [isInView, page])

  useEffect(() => {
    if(page === 1) {
    if(isInView1) {
      setPage(2)
    } else {
      setPage(1)
  }
}
  }, [isInView1, page])


  // animation
 
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    
  };
  return (
    <div>
    <div className="sticky top-0 h-[100vh] w-full flex flex-col justify-center">
      <h1 className="text-5xl font-semibold m-6">
        All you need to know about
        <br />
       
        <motion.span
        key={page}
        initial="initial"
        animate="animate"
        transition= {{ duration: 1.2 }}
        exit="exit"
        variants={variants}
        className="split"
      >
        {page === 0 && "Community"}
        {page === 1 && "Pricing"}
        {page === 2 && "Location"}
      </motion.span>
      
        </h1>
      <div className="contact">
        <button className="text-white bg-black rounded-sm mx-7 py-1.5 px-3">
          984447 3355
        </button>
        <button className="text-white bg-black rounded-sm py-1.5 px-3">
          Login to see referral benefit
        </button>
      </div>

      <div className="flex justify-between m-7">
        <FeatureWrapper>
          <p className="text-center">Project Size<br />38 acres, 267 units</p>
        </FeatureWrapper>

        <FeatureWrapper>
          <p className="text-center">BMRDA/ E- Katha</p>
        </FeatureWrapper>

        <FeatureWrapper>
          <p className="text-center">4 & 5 BHK Villas<br />3100 Sft to 4500 Sft</p>
        </FeatureWrapper>

        <FeatureWrapper>
          <p className="text-center">40000 Sft Clubhouse</p>
        </FeatureWrapper>
      </div>
    </div>
    <div ref={targetRef} className="h-[70vh]"></div>
    <div ref={targetRef1} className="h-[70vh]"></div>
    <div className="h-[30vh]"></div>
    </div>
  );
}

export default Header;
