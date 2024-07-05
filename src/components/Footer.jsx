import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="h-32 flex flex-row bg-gardening-green-100">
      <div className="grow-[7]">
        <div className=" flex flex-col pl-8">
          <p className="font-bold text-white text-lg pb-2 pt-4">
            Join Our Newsletter!
          </p>

          <input
            type="text"
            className="text-xs px-2 py-2 w-64 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="xyz@gmail.com"
          />
        </div>
      </div>

      <div className="grow-[1]">
        <div className=" flex flex-col">
          <p className="font-bold text-white  text-lg pt-4">About Us</p>

          <Link
            href="/board"
            className="font-semibold text-xs text-white  text-md pt-2"
          >
            OUR BOARD
          </Link>

          <Link
            href="/events"
            className="font-semibold text-xs text-white  text-md pt-2"
          >
            EVENTS
          </Link>
        </div>
      </div>

      <div className="grow-[1]">
        <div className="flex flex-col">
          <p className="font-bold text-white  text-lg pt-4">Get in Touch</p>

          <div className="flex flex-row">
            <FontAwesomeIcon
              className="mt-0.5 h-4 w-4 mr-0.5 text-white"
              icon={faInstagram}
            />

            <p className="text-xs text-white pt-1 font-semibold">
              @ucrgardening
            </p>
          </div>

          <div className="flex flex-row">
            <FontAwesomeIcon
              className="mt-0.5 h-4 w-4 text-white mr-1"
              icon={faEnvelope}
            />
            <p className="text-xs text-white pt-1 font-semibold">
              ucrgardening@gmail.com
            </p>
          </div>

          <div className="flex flex-row">
            <FontAwesomeIcon
              className="mt-0.5 h-4 w-4 text-white mr-1"
              icon={faDiscord}
            />
            <p className="text-xs text-white  text-md pt-1 font-semibold">
              Discord Channel
            </p>
          </div>

          <div className="flex flex-row">
            <FontAwesomeIcon
              className="rotate-90 mt-0.5 h-4 w-4 text-white mr-1"
              icon={faLink}
            />
            <p className="text-xs text-white  text-md pt-1 font-semibold">
              Become a Member
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
