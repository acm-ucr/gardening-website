import WhyJoin from "./WhyJoin";
import Link from "next/link";
import Image from "next/image";
import potPlant2 from "@/public/potPlant2.webp";

const Join = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:flex-row-reverse">
        <div className="w-full md:w-1/2 pt-10 my-auto flex flex-col items-center sm:items-start">
          <div className="w-[60%] md:w-[80%] lg:w-[60%] sm:ml-10 lg:self-center">
            <div className="w-full aspect-square rounded-lg border-2 border-gardening-brown-100 bg-gardening-tan-200" />
            <Image
              src={potPlant2}
              alt="potPlant2"
              className="w-[25%] -ml-[15%] -mt-[30%]"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 my-auto py-10">
          <div className="w-3/4 mx-auto flex flex-col">
            <p className="text-4xl sm:text-4xl md:text-6xl font-bold">
              Join UCR Gardening!
            </p>
            <p className="mt-5 text-lg sm:text-xl lg:text-2xl font-semibold">
              {
                "Get involved by Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
            </p>
            <Link
              href="https://discord.com/invite/T2xVxxMtcx"
              target="_blank"
              className="w-[50%] md:w-[60%] mt-5 pt-6 pb-3 text-2xl md:text-5xl font-bold text-center self-center border-2 border-gardening-brown-100 rounded-full transition hover:text-white hover:bg-gardening-brown-100 hover:duration-300 ease-in-out"
            >
              JOIN NOW!
            </Link>
          </div>
        </div>
      </div>
      <WhyJoin />
    </>
  );
};

export default Join;
