import WhyJoin from "./WhyJoin";
import Link from "next/link";

const Join = () => {
  return (
    <div className="p-10 flex-col items-center justify-around bg-gardening-tan-1oo">
      <div className="flex justify-center">
        <div className="w-2/5">
          <p className="text-5xl font-bold text-left mb-4 ">
            Join UCR Gardening!
          </p>
          <p className="text-2xl font-semibold text-left mr-10 mb-10">
            Get involved by Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex">
            <Link
              href="https://discord.com/invite/T2xVxxMtcx"
              className="border-2 border-black rounded-full pb-2.5 pt-5 w-2/5 text-4xl font-bold text-center justify-center mx-auto mb-10 "
            >
              JOIN NOW!
            </Link>
          </div>
        </div>
      </div>

      <WhyJoin />
    </div>
  );
};
export default Join;
