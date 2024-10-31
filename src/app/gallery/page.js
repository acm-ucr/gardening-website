// "@/app/gallery/page.js"
import Photos from "@/components/gallery/Photos";

const Page = () => {
  return (
    <div className="p-[3%]">
      <h1 className="text-gardening-brown-100 text-6xl font-black pl-[2%] pt-[2%]">
        Scrapbook Gallery
      </h1>
      <Photos />
    </div>
  );
};

export default Page;
