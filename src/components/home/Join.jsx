import Plant1 from "@/public/Plant1.webp";
import Image from "next/image";

const Join = () => {
  return (
    <div className="w-full flex justify-around bg-gardening-tan-100 relative">
      <div className="flex flex-col w-2/5">
        <p className="text-3xl font-semibold">Join UCR Gardening!</p>
        <p className="my-3">
          {
            "Get involved by Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        </p>
        <p className="border-2 border-black rounded-full p-2 px-5 text-center mx-auto inline-block">
          JOIN NOW!
        </p>
        {/* <Link href="https://google.com" target="_blank"></Link> */}
      </div>

      <div className="w-2/5 h-[150px] my-auto bg-gardening-tan-200 border-2 border-black rounded-lg"></div>

      <Image
        src={Plant1}
        alt="Plant"
        className="h-24 w-16 absolute bottom-0 left-[52%]"
      />
    </div>
  );
};

export default Join;
