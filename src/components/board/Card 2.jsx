import React from "react";
import Image from "next/image";

const Card = ({ Name, Position, Year, image }) => {
  return (
    <div className="bg-white w-56 h-80 rounded-lg mb-[4%] flex flex-col items-center">
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
