import Image from "next/image";
import { Scrapbook } from "@/data/scrapbook";

const Photos = () => {
  return (
    <div className="p-[3%]">
      <p className="text-gardening-brown-100 text-6xl font-black pl-[2%] pt-[2%]">
        Scrapbook
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {Scrapbook.map((imgSrc, index) => (
          <div
            key={index}
            className="w-[95%] h-[300px] my-3 overflow-hidden flex items-center justify-center"
          >
            <Image
              src={imgSrc}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
