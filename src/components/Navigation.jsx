"use client";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
// import Image from "next/image";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar className="bg-gardening-green-100 p-5 flex justify-between items-center shadow-lg">
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
        <Nav className="w-full flex items-center gap-x-20 font-lg text-gardening-white-100 text-2xl">
          <Link href="/board">Board</Link>
          <Link href="/events">Calendar</Link>
          <Link href="/scrapbook">Scrapbook</Link>
          <Link
            href="/scrapbook"
            className="bg-gardening-white-00 text-gardening-green-100 font-bold rounded-full pt-1 px-3"
          >
            Join Now
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
