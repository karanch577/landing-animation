import { useScroll, motion, useTransform } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import FeatureWrapper from "../FeatureWrapper/FeatureWrapper";

function Header2() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, .3], [1, 0]);
 
  return (
    <motion.div ref={ref} className="top-0 h-screen w-full flex flex-col justify-center">
      <h1 className="text-5xl font-semibold m-6">
        All you need to know about
        <br />
        <motion.span style={{opacity}}>the Location</motion.span>
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
          <p className="text-center">Text4</p>
        </FeatureWrapper>

        <FeatureWrapper>
          <p className="text-center">Text5</p>
        </FeatureWrapper>

        <FeatureWrapper>
          <p className="text-center">Text6</p>
        </FeatureWrapper>

        <FeatureWrapper>
          <p className="text-center">Text7</p>
        </FeatureWrapper>
      </div>
    </motion.div>
  );
}

export default Header2;
