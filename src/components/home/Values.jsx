const Values = () => {
  return (
    <div className="w-full flex flex-col  items-center bg-gardening-green-100 py-10">
      <p className="text-4xl sm:text-5xl font-bold text-gardening-white-100 mt-3 sm:mt-5 mb-6 sm:mb-10">
        Our Values and Mission
      </p>

      <div className="flex justify-around w-full max-w-6xl mb-4 sm:mb-10">
        <div className="flex flex-col items-center mx-4 mb-6">
          <div className="bg-gardening-white-100 w-30 h-35 p-4 rounded-lg shadow-md transform -rotate-12 mb-4 flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gardening-brown-300 mb-2"></div>
            <p className="text-lg sm:text-xl font-semibold text-gardening-brown-500">
              Seeds
            </p>
          </div>
          <p className="text-3xl sm:text-5xl font-bold text-gardening-white-100 mt-2 sm:mt-4">
            Value
          </p>
        </div>
        <div className="flex flex-col items-center mx-4 mb-6">
          <div className="bg-gardening-white-100 w-30 h-35 p-4 rounded-lg shadow-md transform rotate-12 mb-4 flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gardening-yellow-100 mb-2"></div>
            <p className="text-lg sm:text-xl font-semibold text-gardening-brown-500">
              Seeds
            </p>
          </div>
          <p className="text-3xl sm:text-5xl font-bold text-gardening-white-100 mt-2 sm:mt-4">
            Value
          </p>
        </div>
        <div className="flex flex-col items-center mx-4 mb-6">
          <div className="bg-gardening-white-100 w-30 h-35 p-4 rounded-lg shadow-md transform -rotate-12 mb-4 flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gardening-red-200 mb-2"></div>
            <p className="text-lg sm:text-xl font-semibold text-gardening-brown-500">
              Seeds
            </p>
          </div>
          <p className="text-3xl sm:text-5xl font-bold text-gardening-white-100 mt-2 sm:mt-5">
            Value
          </p>
        </div>
      </div>

      <p className="w-4/5 sm:w-3/5 text-xl sm:text-2xl text-center text-gardening-white-100 sm:-mt-7">
        Our mission is Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};

export default Values;
