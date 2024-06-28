import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between bg-gardening-green-100">
      <p>UCR Gardening</p>
      <div className="w-1/5 flex justify-around">
        <Link href="/board">Board</Link>
        <Link href="/events">Calendar</Link>
        <Link href="/gallery">Scrapbook</Link>
        <Link
          href="/gallery"
          className="bg-gardening-white-100 text-gardening-green-100 font-bold rounded-full p-2"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
