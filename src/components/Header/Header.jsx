import { useScroll, motion, useTransform } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import FeatureWrapper from "../FeatureWrapper/FeatureWrapper";

function Header() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, .3], [1, 0]);

  return (
    <div ref={ref} className=" h-screen w-full flex flex-col justify-center">
      <h1 className="text-5xl font-semibold m-6">
        All you need to know about
        <br />
        <motion.span style={{opacity}}>the Community</motion.span>
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
  );
}

export default Header;
