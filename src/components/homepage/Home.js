import React from "react";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="md:mt-[5%] mt-[20%] lg:mt-[4%]">
        <HeroSection />
      </div>
    </div>
  );
}
