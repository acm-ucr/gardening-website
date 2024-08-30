import React from "react";
import Image from "next/image";
import Person1 from "@/public/Person1.webp";
import PotPlant1 from "@/public/PotPlant1.webp";
import PotPlant3 from "@/public/PotPlant3.webp";

const Hero = () => {
  return (
    <div className="relative py-20 flex justify-around mb-40">
      <div className="my-auto">
        <p className="text-1xl md:text-5xl lg:text-6xl font-black">
          Welcome to
        </p>
        <div className="text-2xl md:text-6xl lg:text-8xl text-gardening-brown-100 font-extrabold font-black ml-[30%] md:ml-[13%]">
          <p>UCR</p>
          <p>Gardening!</p>
        </div>
      </div>

      <div className="w-2/5 h-[30vw] border-[2px] rounded-lg border-gardening-brown-100 bg-gardening-tan-200 relative -right-20 lg:-right-32 xl:-right-48"></div>

      <div className="w-[30vw] md:w-[30vw] h-[60vw] md:h-[60vw] -mt-10 bg-gardening-red-100 border-gardening-red-200 border-l-[10px] md:border-l-[20px] border-y-[20px] md:border-y-[40px] rounded-l-full absolute right-0 top-12 md:-top-10 z-[-1]"></div>

      <div className="relative w-1/6"></div>
      <div className="flex flex-row gap-0 sm:gap-1 absolute -bottom-40 left-10 overflow-x-hidden ">
        <Image
          src={Person1}
          alt="Person"
          className="w-full h-36 md:h-40 lg:h-48 xl:h-56 object-contain"
        />
        <Image
          src={PotPlant3}
          alt="Potted Plant"
          className="w-full h-36 md:h-40 lg:h-48 xl:h-56 object-contain mr-5"
        />
        <Image
          src={PotPlant1}
          alt="Potted Plant"
          className="w-full h-36 md:h-40 lg:h-48 xl:h-56 object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
