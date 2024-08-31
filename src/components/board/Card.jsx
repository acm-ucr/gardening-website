import React from "react";
import Image from "next/image";

const Card = ({ Name, Position, Year, image }) => {
  return (
    <div className="bg-white w-32 md:w-36 lg:w-52 rounded-lg mb-[4%] flex flex-col items-center  lg:-ml-10">
      <Image
        src={image}
        alt="boardPic"
        className="w-[90%] h-[66%] rounded-lg my-[6%] object-cover"
      />
      <div className="font-extrabold text-center mb-[6%]">
        <p className="m-0"> {Name} </p>
        <p className="m-0"> {Position} </p>
        <p className="m-0"> {Year} </p>
      </div>
    </div>
  );
};

export default Card;
