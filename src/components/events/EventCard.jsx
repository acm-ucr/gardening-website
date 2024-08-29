//import React from "react";
const EventCard = ({ Month, Day, Time, EventName, Location, Description }) => {
  return (
    <div className="w-full flex flex-row lg:flex-row justify-between">
      <div className="w-full lg:w-[47.5%] flex flex-row mt-[1%] rounded-lg drop-shadow-lg overflow-hidden">
        <div className="w-1/3 flex flex-col justify-center items-center text-3xl md:text-4xl font-bold bg-white pt-1">
          <p>{Month}</p>
          <p className="text-7xl md:text-8xl">{Day}</p>
          <p className="-my-[6%] md:-my-[6%]">{Time}</p>
        </div>
        <div className="w-2/3 font-bold text-gardening-white-100 bg-gardening-yellow-200">
          <div className="m-[5%]">
            <p className="sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
              {EventName}
            </p>
            <p className="sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
              {Location}
            </p>
            <p className="sm:text-md md:text-lg lg:text-sm xl:text-lg font-normal">
              {Description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
