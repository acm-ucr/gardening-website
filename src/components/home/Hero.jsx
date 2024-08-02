import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-end p-40 relative">
      <div className="absolute right-0 w-[35%] h-full bg-gardening-red-200 rounded-l-full z-[-1]"></div>
      <div className="absolute right-0 w-96 h-[90%] bg-gardening-red-100 rounded-l-full z-[-1]"></div>
      <div className="md:w-[30vw] md:h-[30vw] w-[40vw] h-[40vw] bg-gardening-tan-200 border-[3px] p-4 border-gardening-brown-100 rounded-lg z-30"></div>
    </div>
  );
};

export default Hero;
