import React from "react";

const Hero = () => {
  return (
    <div className="relative py-20 flex justify-around">
      <div className="my-auto">
        <p className="text-2xl md:text-6xl font-black">Welcome to</p>
        <div className="text-4xl md:text-8xl text-gardening-brown-100 font-black ml-[30%] md:ml-[13%]">
          <p>UCR</p>
          <p>Gardening!</p>
        </div>
      </div>

      <div className="w-2/5 h-[30vw] border-[2px] rounded-lg border-gardening-brown-100 bg-gardening-tan-200 opacity-50"></div>

      {/* <div className="w-2/5 h-[100%] -mt-20 bg-gardening-red-100 border-gardening-red-200 border-l-[20px] border-y-[20px] rounded-l-full absolute right-0 z-[-1]" /> */}
      <div className="flex flex-col justify-center">
        <div className="overflow-visible w-[11rem] h-[110%] sm:w-[30%] sm:h-[110%] lg:w-[30%] lg:h-[110%] bg-gardening-red-100 border-gardening-red-200 border-l-[20px] border-y-[20px] lg:border-l-[40px] lg:border-y-[25px] rounded-l-full absolute right-0 z-[-1]" />
      </div>
    </div>
  );
};

export default Hero;
