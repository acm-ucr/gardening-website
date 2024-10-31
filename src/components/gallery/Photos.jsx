import Image from "next/image";
import Link from "next/link";
import { Scrapbooks } from "@/data/scrapbooks";

const Photos = () => {
  return (
    <div className="p-[3%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Scrapbooks.map((group) => (
          <Link href={`/gallery/${group.id}`} key={group.id}>
            <div className="w-full h-72 overflow-hidden relative cursor-pointer">
              <Image
                src={group.thumbnail}
                alt={`${group.title} Thumbnail`}
                fill // Replaces layout="fill"
                className="object-cover transition duration-300 ease-in-out transform hover:scale-105"
              />
              <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center font-semibold">
                {group.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Photos;
