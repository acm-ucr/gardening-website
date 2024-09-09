"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

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
  },
];

const Navigation = () => {
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
      >
        <FaBars className="text-white text-xl" />
      </Navbar.Toggle>

      <Navbar.Collapse className="flex items-center md:justify-end justify-center">
        <Nav className="w-12/12 flex items-center">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              passHref
              target={item.target}
              className="no-underline hover:opacity-80"
            >
              <Nav.Link className="py-2 px-4">
                <div className="flex-col items-center">
                  {item.name === "Join Now" ? (
                    <div className="bg-gardening-tan-100 px-3 py-2 rounded-full text-gardening-green-100">
                      <div className="text-gardening-green-100 font-black text-xl">
                        {item.name}
                      </div>
                    </div>
                  ) : (
                    <div className="text-gardening-tan-100 font-black text-xl">
                      {item.name}
                    </div>
                  )}
                </div>
              </Nav.Link>
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
