import Image from "next/image";
import tableLamp from "@/public/assets/tableLamp.webp";
import potPlant4 from "@/public/assets/potPlant4.webp";
import sitting from "@/public/assets/sitting.webp";

const Graphic = () => {
  return (
    <div className="w-full">
      <div className="flex ml-[20%] sm:ml-[30%] gap-2 sm:gap-3">
        <Image src={tableLamp} alt="" className="w-[15%] sm:w-[10%]" />
        <Image src={potPlant4} alt="" className="w-[15%] sm:w-[10%]" />
        <Image src={sitting} alt="" className="w-[20%] sm:w-[15%]" />
      </div>
    </div>
  );
};

export default Graphic;
