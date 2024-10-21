import Image from "next/image";
import Person1 from "@/public/assets/Person1.webp";
import potPlant1 from "@/public/assets/potPlant1.webp";
import potPlant3 from "@/public/assets/potPlant3.webp";

const Hero = () => {
  return (
    <div className="relative pt-20 flex justify-around">
      <div className="w-1/2">
        <p className="mb-0 ml-[10%] md:ml-[25%] text-[5vw] md:text-[4vw] font-black">
          Welcome to
        </p>
        <p className="mb-0 ml-[30%] md:ml-[40%] text-[7vw] md:text-[6vw] font-black text-gardening-brown-100">
          UCR
        </p>
        <p className="mb-0 ml-[30%] md:ml-[40%] text-[7vw] -mt-5 md:text-[6vw] font-black text-gardening-brown-100">
          Gardening!
        </p>

        <div className="w-full flex mx-auto justify-center">
          <Image src={Person1} alt="" className="w-[15%] md:w-[10%] mt-1" />
          <Image src={potPlant3} alt="" className="w-[20%] md:w-[15%] mt-1" />
          <Image src={potPlant1} alt="" className="w-[15%] md:w-[10%] mt-1" />
        </div>
      </div>

      <div className="w-1/2">
        <div className="w-[70%] md:w-[60%] mx-auto aspect-square border-[2px] rounded-lg border-gardening-brown-100 bg-gardening-tan-200"></div>
      </div>

      {/* red cicle */}
      <div className="flex flex-col justify-center">
        <div className="overflow-visible w-[11rem] h-[110%] sm:w-[30%] sm:h-[110%] lg:w-[30%] lg:h-[110%] bg-gardening-red-100 border-gardening-red-200 border-l-[20px] border-y-[20px] lg:border-l-[40px] lg:border-y-[25px] rounded-l-full absolute right-0 z-[-1]" />
      </div>
    </div>
  );
};

export default Hero;
