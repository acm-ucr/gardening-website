import Link from "next/link";
import { FaInstagram, FaDiscord, FaLink } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full bg-gardening-green-100">
      <div className="flex flex-col md:flex-row text-white">
        <div className="w-full md:w-[50%] flex justify-center md:justify-start mt-[5%] md:mx-[5%]">
          <div className="w-auto mb-[5%] flex flex-col">
            <p className="mb-[5%] font-bold text-3xl lg:text-4xl xl:text-5xl">
              Join Our Newsletter!
            </p>
            <input
              type="text"
              className="w-full p-[3%] md:text-lg lg:text-xl text-gray-600 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9]"
              placeholder="Email address"
            />
          </div>
        </div>

        <div className="w-full md:w-[50%] flex flex-row mb-[3%] md:my-[2.5%]">
          <div className="w-[50%] flex flex-col text-xl lg:text-3xl xl:text-4xl ml-[10%] md:ml-0">
            <p className="font-bold whitespace-nowrap">About Us</p>

            <Link
              href="/board"
              className="mt-2 font-semibold text-sm sm:text-lg hover:text-blue-200"
            >
              OUR BOARD
            </Link>

            <Link
              href="/events"
              className="mt-2 font-semibold text-sm sm:text-lg hover:text-blue-200"
            >
              EVENTS
            </Link>
          </div>

          <div className="w-[60%] flex flex-col text-xl lg:text-3xl xl:text-4xl mr-[5%]">
            <p className="font-bold">Get in Touch</p>

            <div className="flex flex-row mt-2 align-end hover:text-blue-200">
              <FaInstagram className="mr-2" />
              <Link
                target="_blank"
                href="https://www.instagram.com/ucrgardening/?hl=en"
                className="lg:font-semibold text-base md:text-base lg:text-xl xl:text-2xl"
              >
                @ucrgardening
              </Link>
            </div>

            <div className="flex flex-row mt-2 align-end hover:text-blue-200">
              <IoMdMail className="mr-2" />
              <Link
                target="_blank"
                href="mailto:ucrgardening@gmail.com"
                className="lg:font-semibold text-base md:text-base lg:text-xl xl:text-2xl"
              >
                ucrgardening@gmail.com
              </Link>
            </div>

            <div className="flex flex-row mt-2 align-end hover:text-blue-200">
              <FaDiscord className="mr-2" />
              <Link
                target="_blank"
                href="https://discord.gg/rnsKpb8DfB"
                className="font-semibold text-lg "
              >
                Discord Channel
              </Link>
            </div>

            <div className="flex flex-row mt-2 align-end hover:text-blue-200">
              <FaLink className="mr-2" />
              <Link
                target="_blank"
                href="https://highlanderlink.ucr.edu/organization/gardenclub"
                className="lg:font-semibold text-base md:text-base lg:text-xl xl:text-2xl"
              >
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
