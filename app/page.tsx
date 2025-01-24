import Home from "./components/HeroSection";
import BestOfAirMax from "./components/BestOfAirMax";
import SHOES from "./shoes/page";
import Featured from "./components/Featured";
import GearUp from "./components/GearUp";
import DontMiss from "./components/DontMiss";
import TheEssentials from "./components/TheEssentials";
import React from "react";


const HomePage = () => {
  return (
    <div>
      <Home/>
      <BestOfAirMax/>
      <SHOES/>
      <Featured/>
      <GearUp/>
      <DontMiss/>
      <TheEssentials/>
      
      </div>
      );
    };
    export default HomePage;