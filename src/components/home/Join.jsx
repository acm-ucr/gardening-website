import WhyJoin from "./WhyJoin";
import Link from "next/link";
import Image from "next/image";
import potPlant2 from "@/public/assets/potPlant2.webp";
import join from "@/public/join.webp";

const Join = () => {
  return (
    <>
      <div className="w-full py-10 flex flex-col sm:flex-row justify-around items-center sm:flex-row-reverse">
        <div className="w-full sm:w-2/5">
          <div className="w-[60%] sm:w-[90%] lg:w-[70%] ml-auto mr-auto sm:ml-0 sm:mr-auto">
            <div className="w-full aspect-square rounded-lg border-2 border-gardening-brown-100 bg-gardening-tan-200 overflow-hidden">
              <Image
                src={join}
                alt="group photo"
                className="w-full h-full object-cover"
              />
            </div>
            <Image
              src={potPlant2}
              alt="potPlant2"
              className="w-[25%] -ml-[15%] -mt-[30%]"
            />
          </div>
        </div>

        <div className="w-4/5 sm:w-[45%] flex flex-col items-center sm:items-start">
          <p className="text-4xl sm:text-5xl mt-4 mb-0 font-bold">
            Join UCR Gardening!
          </p>
          <p className="w-4/5 my-3 mb-4 text-lg sm:text-xl font-semibold">
            {
              "We hope to create a safe space for gardeners of all levels. Join our organization and be a part of developing community gardeners in partnership with other students, local nonprofit organizations, and local community activists!"
            }
          </p>
          <Link
            href="https://discord.com/invite/T2xVxxMtcx"
            target="_blank"
            className="pt-2 px-4 text-xl sm:text-3xl font-bold no-underline text-[#212529] border-[2px] border-[#212529] rounded-full duration-300 hover:bg-gardening-green-100 hover:-gardening-green-100 hover:text-white"
          >
            <span className="text-xl sm:text-3xl">JOIN NOW!</span>
          </Link>
        </div>
      </div>
      <WhyJoin />
    </>
  );
};

export default Join;
