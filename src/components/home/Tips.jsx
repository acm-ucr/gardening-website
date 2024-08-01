const Tips = () => {
  return (
    <div className="p-10 flex sm:flex-col items-center  md:items-start md:justify-around md:flex-row md:align-middle ">
      {/* <div className="w-96 h-96 bg-gardening-tan-200 border-[3px] border-gardening-brown-100 rounded-lg"> </div> */}
      <div className="sm:w-44 sm:h-44 md:h-96 md:w-96 bg-gardening-tan-200 border-[3px] border-gardening-brown-100 rounded-lg flex justify-center" />
      <div className="flex flex-col sm:w-3/5 md:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 self-center p-5">
        <p className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold text-center mb-4">
          Some Gardening Tips
        </p>
        <p className="sm:text-md md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-semibold text-center">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        </p>
      </div>
    </div>
  );
};

export default Tips;
