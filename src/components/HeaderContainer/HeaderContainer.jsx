import React, { useEffect } from "react";
import Header from "../Header/Header";
import Header1 from "../Header1/Header1";
import Header2 from "../Header2/Header2";
import Hero from "../Hero/Hero";



function HeaderContainer() {
  
  return (
    <div className="">
        <Header />
        <Header1 />
        {/* <Header2 /> */}
        {/* <Hero /> */}
    </div>
  );
}

export default HeaderContainer;
