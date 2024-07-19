import Image from "next/image";
import lamp1 from "@/public/lamp1.webp";
import leaves1 from "@/public/leaves1.webp";
import leaves2 from "@/public/leaves2.webp";

const GroupPic = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center pt-[5%]">
        <Image src={leaves1} alt="leaves1" className="w-[10%] ml-[4%]" />
        <div className="w-[75%] -ml-[2.5%] -mr-[2.5%] rounded-lg border-gardening-brown-100 border-4 bg-gardening-tan-200 z-20 mb-[-3%]">
          <p className="sm:text-2xl md:text-3xl lg:text-5xl xl:text-8xl py-[22%] font-bold text-center text-gardening-white-100">
            Group Picture
          </p>
        </div>
        <Image
          src={leaves2}
          alt="leaves2"
          className="w-[10%] mr-[4%] mt-[10%]"
        />
      </div>
      <div className="w-[15%] flex flex-row items-center -mt-[2%] ml-[50%]">
        <Image src={lamp1} alt="lamp1" className="w-[55%]" />
        <Image
          src={lamp1}
          alt="lamp1"
          className="w-[45%] opacity-60 -mt-[50%]"
        />
      </div>
    </div>
  );
};

export default GroupPic;
