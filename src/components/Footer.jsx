import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full py-5 flex justify-between text-white bg-gardening-green-100">
      <div className="w-2/6 ml-10">
        <p className="text-3xl">Join Our Newsletter!</p>
        <input
          type="text"
          className="bg-gray-300 rounded-lg text-xl text-black"
        ></input>
      </div>

      <div className="w-2/5 mr-10 flex justify-around">
        <div className="flex flex-col">
          <p className="text-3xl">About Us</p>
          <Link href="/board">Our Board</Link>
          <Link href="/events">Events</Link>
        </div>

        <div className="flex flex-col">
          <p className="text-3xl">Get in Touch</p>
          <Link
            href="https://www.instagram.com/ucrgardening/"
            target="_blank"
            className="flex"
          >
            <FaInstagram />
            @ucrgardening
          </Link>
          <Link
            href="mailto: ucrgardening@gmail.com"
            target="_blank"
            className="flex"
          >
            <FaInstagram />
            ucrgardening@gmail.com
          </Link>
          <Link
            href="https://discord.gg/Z2e5Y7yfHj"
            target="_blank"
            className="flex"
          >
            <FaInstagram />
            Discord
          </Link>
          <Link
            href="https://highlanderlink.ucr.edu/organization/gardenclub"
            target="_blank"
            className="flex"
          >
            <FaInstagram />
            Highlander Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
