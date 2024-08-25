import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full my-14 mx-auto text-center font-black text-gardening-brown-100">
      <p className="m-0 text-7xl md:text-9xl">Error 404</p>
      <p className="w-[80%] mx-auto mb-5 text-xl md:text-3xl">
        {"We can't seem to find the page you're looking for."}
      </p>
      <Link
        href="/"
        className="px-3 pt-2 pb-1 text-xl md:text-3xl no-underline text-gardening-tan-100 bg-gardening-green-100 rounded-lg hover:opacity-75"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
