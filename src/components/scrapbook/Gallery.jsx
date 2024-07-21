import Image from "next/image";
import placeholder from "@/public/catOrangeGardening.webp";

const Gallery = () => {
  return (
    <div className=" p-16">
      <div className=" px-4 py-12 text-gardening-brown-100 text-6xl font-black">
        Scrapbook
      </div>

      <div className=" grid grid-cols-3 gap-y-12 justify-items-center py-7">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="w-full py-1 px-4">
            <Image
              src={placeholder}
              alt={`Gallery image ${index + 1}`}
              className="w-11/12"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
