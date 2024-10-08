import Image from "next/image";
import lamp1 from "@/public/assets/lamp1.webp";
import leaves1 from "@/public/assets/leaves1.webp";
import leaves2 from "@/public/assets/leaves2.webp";
import Board from "@/public/board/Board.webp";

const GroupPic = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center pt-[5%]">
        <Image src={leaves1} alt="leaves1" className="w-[10%] ml-[4%]" />
        <div className="w-[75%] -ml-[2.5%] -mr-[2.5%] rounded-lg border-gardening-brown-100 border-4 bg-gardening-tan-200 z-20 mb-[-3%] overflow-hidden">
          <Image
            src={Board}
            alt="Group photo"
            className="w-full h-full object-cover"
          />
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
