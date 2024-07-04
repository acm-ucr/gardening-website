const Tips = () => {
  return (
    <div className="min-h-screen flex items-center justify-around bg-gardening-tan-100 p-10">
      <div className="flex items-center space-x-10">
        <div className="w-96 h-96 bg-gardening-tan-200 border-2 border-black rounded-lg flex items-center justify-center"></div>
        <div className="flex flex-col w-96">
          <p className="text-5xl font-bold text-center mb-4">
            Some Gardening Tips
          </p>
          <p className="text-lg text-center">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tips;
