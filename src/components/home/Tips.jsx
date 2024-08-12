const Tips = () => {
  return (
    <div className="py-10 flex flex-col items-center sm:justify-around md:flex-row">
      <div className="w-56 h-56 lg:h-96 lg:w-96 bg-gardening-tan-200 border-[3px] border-gardening-brown-100 rounded-lg" />
      <div className="p-5 flex flex-col w-4/5 md:w-3/5 lg:w-2/5 text-center md:text-right">
        <p className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">
          Some Gardening Tips
        </p>
        <p className="text-md md:text-xl lg:text-2xl font-semibold">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        </p>
      </div>
    </div>
  );
};

export default Tips;
