const Tips = () => {
  return (
    <div className="p-10 flex items-center justify-around bg-gardening-tan-100">
      <div className="w-96 h-96 bg-gardening-tan-200 border-[3px] border-gardening-brown-100 rounded-lg" />
      <div className="flex flex-col w-2/5">
        <p className="text-5xl font-bold text-center mb-4">
          Some Gardening Tips
        </p>
        <p className="text-2xl font-semibold text-center">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        </p>
      </div>
    </div>
  );
};

export default Tips;
