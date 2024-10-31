"use client"; // Add this to make the component a Client Component

import { useParams } from "next/navigation";
import { Scrapbook } from "@/data/scrapbook";
import Image from "next/image";

const GalleryGroup = () => {
  const { id } = useParams(); // Retrieves the dynamic route parameter
  const group = Scrapbook.find((item) => item.id === id);

  if (!group) {
    return <p>Group not found</p>;
  }

  return (
    <div className="p-[3%]">
      <h1 className="text-gardening-brown-100 text-6xl font-black pl-[2%] pt-[2%]">
        {group.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {group.images.map((imgSrc, index) => (
          <div key={index} className="w-full h-72 overflow-hidden">
            <Image
              src={imgSrc}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGroup;
