const Upcoming = () => {
  return (
    <div className="my-10 w-11/12 mx-auto text-gardening-brown-100">
      <p className="font-bold text-5xl lg:text-7xl">Upcoming Events</p>

      <div className="w-full flex flex-col lg:flex-row justify-center justify-between">
        <div className="w-full lg:w-[47.5%] flex flex-row mt-[1%] rounded-lg drop-shadow-lg overflow-hidden">
          <div className="w-1/3 flex flex-col justify-center items-center text-3xl md:text-4xl font-bold bg-white">
            <p>JUN</p>
            <p className="text-7xl md:text-8xl">23</p>
            <p className="-my-[6%] md:-my-[6%]">6-8 PM</p>
          </div>
          <div className="w-2/3 font-bold text-gardening-white-100 bg-gardening-yellow-200">
            <div className="m-[5%]">
              <p className="sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                Event Name
              </p>
              <p className="sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
                Location
              </p>
              <p className="sm:text-md md:text-lg lg:text-sm xl:text-lg font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[47.5%] flex flex-row mt-[1%] rounded-lg drop-shadow-lg overflow-hidden">
          <div className="w-1/3 flex flex-col justify-center items-center text-3xl md:text-4xl font-bold bg-white">
            <p>JUN</p>
            <p className="text-7xl md:text-8xl">23</p>
            <p className="-my-[6%] md:-my-[6%]">6-8 PM</p>
          </div>
          <div className="w-2/3 font-bold text-gardening-white-100 bg-gardening-yellow-200">
            <div className="m-[5%]">
              <p className="sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                Event Name
              </p>
              <p className="sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
                Location
              </p>
              <p className="sm:text-md md:text-lg lg:text-sm xl:text-lg font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
