import React from "react";

const Directions = () => {
  return (
    <div className="py-14 flex flex-col justify-center items-center bg-gardening-brown-200">
      {/* only have to fix the responsiveness for the title */}
      {/* "text-white font-extrabold text-6xl" --> original text of code */}
      <div className="text-white font-extrabold lg:text-6xl md:text-4xl sm:text-2xl">
        How to get to Our Garden
      </div>
      <div className="h-96 w-[85%] bg-gardening-tan-200 my-[2%] border-2 border-gardening-brown-100 rounded-lg"></div>
    </div>
  );
};

export default Directions;
