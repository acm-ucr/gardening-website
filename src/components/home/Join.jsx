import WhyJoin from "./WhyJoin";
import Link from "next/link";
import Image from "next/image";
import potPlant2 from "@/public/potPlant2.webp";

const Join = () => {
  return (
    <div className="flex-col">
      <div className="flex flex-col items-center sm:flex-row-reverse justify-around pt-[5%]">
        <div className="w-[40%] mr-[5%]">
          <div className="w-full aspect-square rounded-lg border-2 sm:border-2 md:border-[3px] lg:border-4 border-gardening-brown-100 bg-gardening-tan-200" />
          <Image
            src={potPlant2}
            alt="potPlant2"
            className="w-[25%] -ml-[15%] -mt-[30%]"
          />
        </div>

        <div className="w-[60%] flex flex-col items-center mx-[5%]">
          <p className="my-3 text-3xl sm:text-5xl font-bold">
            Join UCR Gardening!
          </p>
          <p className="w-3/4 my-2 text-lg sm:text-2xl font-semibold text-center">
            {
              "Get involved by Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          </p>
          <Link
            href="https://discord.com/invite/T2xVxxMtcx"
            className="w-[75%] md:w-[50%] mt-5 mb-5 pt-3 text-2xl md:text-4xl font-bold text-center self-center border-2 border-black rounded-full"
          >
            JOIN NOW!
          </Link>
        </div>
      </div>
      <WhyJoin />
    </div>
  );
};

export default Join;
