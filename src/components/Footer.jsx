import Link from "next/link";
import { getInTouch } from "@/data/footerLinks.js";
import { aboutUs } from "@/data/footerLinks.js";
import { CiShare1 } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="w-full px-[5%] flex flex-col sm:flex-row justify-between items-start text-white bg-gardening-green-100 py-5 gap-5">
      <div className="flex flex-col ml-">
        <Link
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSehu3p6UycFVJ6SmSPQL1Foi2r_fuvODGsnqk_4o_aBmbzZqw/viewform?usp=sf_link"
          className="flex gap-2 text-white text-3xl lg:text-4xl font-semibold no-underline duration-150 hover:scale-105"
        >
          Join Our Newsletter!
          <CiShare1 className="mb-2" />
        </Link>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="mb-[3%] flex flex-col items-start sm:items-start gap-2 min-w-fit">
          <p className="mb-[2%] font-bold text-3xl lg:text-4xl cursor-default">
            About Us
          </p>
          <div className="flex flex-col gap-2">
            {aboutUs.map((link, index) => (
              <div key={index} className="flex items-center text-white">
                <Link
                  href={link.href}
                  className="flex items-center text-white text-lg font-semibold no-underline duration-150 hover:scale-105"
                >
                  <span>{link.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-start mr-[5%]">
          <p className="mb-[2%] font-bold text-3xl lg:text-4xl cursor-default">
            Get in Touch
          </p>
          <div className="flex flex-col gap-2">
            {getInTouch.map((link, index) => (
              <div key={index} className="flex items-center text-white">
                <Link
                  target={link.target}
                  href={link.href}
                  className="flex items-center text-white text-lg font-semibold no-underline duration-150 hover:scale-105"
                >
                  <link.icon className={`${link.iconStyle}`} />
                  <span>{link.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
