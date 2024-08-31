import Link from "next/link";
import { FaInstagram, FaDiscord, FaLink } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full px-[5%] flex flex-col sm:flex-row justify-between items-start text-white bg-gardening-green-100 py-5 gap-5">
      <div className="flex flex-col ml-">
        <p className="mb-[2%] font-bold text-3xl lg:text-4xl cursor-default">
          Join Our Newsletter!
        </p>
        <input
          type="text"
          className="w-full p-[3%] md:text-lg lg:text-xl text-gray-600 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9]"
          placeholder="Email address"
        />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="mb-[3%] flex flex-col items-start sm:items-start gap-2 min-w-fit">
          <p className="mb-[2%] font-bold text-3xl lg:text-4xl cursor-default">
            About Us
          </p>
          <Link
            href="/board"
            className="font-semibold text-lg text-white no-underline hover:text-gardening-brown-100"
          >
            <span className="hover:text-blue-200">OUR BOARD</span>
          </Link>
          <Link
            href="/events"
            className="font-semibold text-lg text-white no-underline hover:text-gardening-brown-100"
          >
            <span className="hover:text-blue-200">EVENTS</span>
          </Link>
        </div>

        <div className="flex flex-col items-start sm:items-start mr-[5%]">
          <p className="mb-[2%] font-bold text-3xl lg:text-4xl cursor-default">
            Get in Touch
          </p>
          <div className="flex flex-col gap-2">
            <Link
              target="_blank"
              href="https://www.instagram.com/ucrgardening/?hl=en"
              className="flex my-auto font-semibold text-lg text-white no-underline"
            >
              <FaInstagram className="my-auto mr-2 text-3xl" />
              <span className="hover:text-blue-200">@ucrgardening</span>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/ucrgardening/?hl=en"
              className="flex my-auto font-semibold text-lg text-white no-underline hover:text-blue-200"
            >
              <IoMdMail className="my-auto mr-2 text-3xl" />
              <span className="hover:text-blue-200">
                ucrgardening@gmail.com
              </span>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/ucrgardening/?hl=en"
              className="flex my-auto font-semibold text-lg text-white no-underline hover:text-blue-200"
            >
              <FaDiscord className="my-auto mr-2 text-3xl" />
              <span className="hover:text-blue-200">Discord Channel</span>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/ucrgardening/?hl=en"
              className="flex my-auto font-semibold text-lg text-white no-underline hover:text-blue-200"
            >
              <FaLink className="my-auto mr-2 text-3xl" />
              <span className="hover:text-blue-200">Become a Member</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
