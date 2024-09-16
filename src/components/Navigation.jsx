"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation"; // Import usePathname

const items = [
  {
    name: "Board",
    link: "/board",
    target: "_self",
  },
  {
    name: "Events",
    link: "/events",
    target: "_self",
  },
  {
    name: "Scrapbook",
    link: "/gallery",
    target: "_self",
  },
  {
    name: "Join Now",
    link: "https://discord.com/invite/T2xVxxMtcx",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const Navigation = () => {
  const pathname = usePathname(); // Get current route

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="w-full flex px-4 py-2 justify-between items-center bg-gardening-green-100"
    >
      <Navbar.Brand>
        <Link
          className="text-gardening-tan-100 text-3xl no-underline font-black"
          href="/"
        >
          <p className="mt-3">UCR Gardening</p>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle
        className="!text-transparent border-0"
        aria-controls="basic-navbar-nav"
        aria-label="Toggle navigation"
      >
        <FaBars className="text-white text-xl" />
      </Navbar.Toggle>

      <Navbar.Collapse className="flex items-center md:justify-end justify-center">
        <Nav className="w-12/12 flex items-center gap-3">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target={item.target}
              rel={item.rel}
              aria-label={item.name}
              className={`no-underline hover:opacity-80 ${
                pathname === item.link ? "underline" : ""
              }`}
            >
              <div className="flex-col items-center">
                {item.name === "Join Now" ? (
                  <div className="bg-gardening-tan-100 px-3 pt-2 pb-1 rounded-full text-gardening-green-100">
                    <div className="text-gardening-green-100 font-black text-xl sm:text-2xl">
                      {item.name}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`text-gardening-tan-100 font-black text-xl sm:text-2xl`}
                  >
                    {item.name}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
