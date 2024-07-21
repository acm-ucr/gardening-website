import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-screen my-auto min-h-full flex flex-col items-center">
      <p className="m-0 text-5xl font-black">404 Page Not Found</p>
      <div className="flex justify-center md:justify-start mt-4">
        <Link
          href="/"
          className="bg-gardening-green-100 text-gardening-tan-100 rounded-lg px-3 py-2 no-underline hover:opacity-75 text-2xl"
        >
          Return To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
