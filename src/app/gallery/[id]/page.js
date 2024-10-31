"use client";

import { useParams } from "next/navigation";
import { Scrapbooks } from "@/data/scrapbooks";
import Image from "next/image";

const GalleryGroup = () => {
  const { id } = useParams();
  const group = Scrapbooks.find((item) => item.id === id);

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
          <div
            key={index}
            className="relative w-full h-64 max-w-sm mx-auto overflow-hidden"
          >
            <Image
              src={imgSrc}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGroup;
