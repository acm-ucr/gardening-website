import Image from "next/image";
import placeholder from "@/public/catOrangeGardening.webp";

const Photos = () => {
  return (
    <div className="p-[3%]">
      <p className="text-gardening-brown-100 text-6xl font-black pl-[2%] pt-[2%]">
        Scrapbook
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="w-full">
            <Image
              src={placeholder}
              alt={`Gallery image ${index + 1}`}
              className="w-[95%] pl-[5%] py-[5%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
