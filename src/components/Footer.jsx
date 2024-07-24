import Link from "next/link";
import { FaInstagram, FaDiscord, FaLink } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full bg-gardening-green-100 py-5">
      <div className="flex flex-col sm:flex-row px-5 text-white mt-3">
        <div className="flex grow-[8] justify-center sm:justify-start">
          <div className="flex flex-col">
            <p className="mb-3 font-bold text-4xl">Join Our Newsletter!</p>

            <input
              type="text"
              className="mb-5 p-2 text-gray-600 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9]"
              placeholder="Email address"
            />
          </div>
        </div>

        <div className="flex grow-[2] justify-around sm:justify-around text-xl sm:text-3xl">
          <div className="flex flex-col">
            <p className="font-bold">About Us</p>

            <Link
              href="/board"
              className="mt-2 font-semibold text-sm sm:text-lg"
            >
              OUR BOARD
            </Link>

            <Link
              href="/events"
              className="mt-2 font-semibold text-sm sm:text-lg"
            >
              EVENTS
            </Link>
          </div>

          <div className="flex flex-col">
            <p className="font-bold">Get in Touch</p>

            <div className="flex flex-row mt-2 align-end">
              <FaInstagram className="mr-2" />
              <a
                href="https://www.instagram.com/ucrgardening/?hl=en"
                className="font-semibold text-lg"
              >
                @ucrgardening
              </a>
            </div>

            <div className="flex flex-row mt-2 align-end">
              <IoMdMail className="mr-2" />
              <a
                href="mailto:ucrgardening@gmail.com"
                className="font-semibold text-lg"
              >
                ucrgardening@gmail.com
              </a>
            </div>

            <div className="flex flex-row mt-2 align-end">
              <FaDiscord className="mr-2" />
              <a
                href="https://discord.gg/rnsKpb8DfB"
                className="font-semibold text-lg"
              >
                Discord Channel
              </a>
            </div>

            <div className="flex flex-row mt-2 align-end">
              <FaLink className="mr-2" />
              <a
                href="https://highlanderlink.ucr.edu/organization/gardenclubn"
                className="font-semibold text-lg"
              >
                Become a Member
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;