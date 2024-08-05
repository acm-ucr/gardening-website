"use client";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
// import Image from "next/image";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar className="bg-gardening-green-100 p-5 flex justify-between items-center shadow-lg w-full">
      <Navbar.Brand>
        <Link
          onClick={() => setSelected("")}
          eventkey="1"
          // className="p-0 flex items-center gap-2"
          href="/"
        >
          {/* <Image
            className="flex justify-between w-auto object-left font-extrabold text-4xl text-gardening-tan-100"
            src={logo}
            alt="UCR Gardening"
          /> */}
          <p className="text-gardening-white-100 text-3xl font-black">
            UCR Gardening
          </p>
        </Link>
      </Navbar.Brand>

      <Navbar.Collapse className="items-center md:justify-end justify-center">
        <Nav className="flex w-full text-gardening-white-100 text-xl flex-col font-black p-5 md:p-0 md:flex-row md:gap-x-8">
          <Link href="/board" className="py-2 px-3">
            Board
          </Link>
          <Link href="/events" className="py-2 px-3">
            Calendar
          </Link>
          <Link href="/gallery" className="py-2 px-3">
            Scrapbook
          </Link>
          <Link
            href="/gallery"
            className="py-2 px-5 bg-gardening-white-100 text-gardening-green-100 rounded-full"
          >
            Join Now
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
