import WhyJoin from "./WhyJoin";
import Link from "next/link";

const Join = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-around py-10">
        <div className="w-full md:w-2/5 flex flex-col">
          <p className="my-3 text-3xl md:text-5xl font-bold">
            Join UCR Gardening!
          </p>
          <p className="my-2 text-lg md:text-2xl m-auto font-semibold">
            {
              "Get involved by Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          </p>
          <Link
            href="https://discord.com/invite/T2xVxxMtcx"
            className="w-[75%] md:w-[50%] mt-5 pt-3 text-2xl md:text-4xl font-bold text-center self-center border-2 border-black rounded-full"
          >
            JOIN NOW!
          </Link>
        </div>

        <div className="w-full md:w-[30%] mt-5 md:mt-0">img here</div>
      </div>

      <WhyJoin />
    </div>
  );
};
export default Join;
