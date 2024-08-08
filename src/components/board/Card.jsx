import React from "react";
import Image from "next/image";

const Card = ({ Name, Position, Year, image }) => {
  return (
    <div className="bg-white w-32 h-52 md:w-36 md:h-52 lg:w-52 lg:h-72 rounded-lg mb-[4%] flex flex-col items-center  lg:-ml-10">
      <Image
        src={image}
        alt="boardPic"
        className="w-[90%] h-[66%] rounded-lg my-[6%]"
      />
      <div className="font-extrabold"> {Name} </div>
      <div className="font-extrabold"> {Position} </div>
      <div className="font-extrabold"> {Year} </div>
    </div>
  );
};

export default Card;
