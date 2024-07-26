"use client";
import GroupPic from "@/components/board/GroupPic";
import { BoardData } from "@/data/board.js";
import Card from "@/components/board/Card";
const Board = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="flex flex-col justify-center items-center text-gardening-brown-100 font-black text-6xl my-[4%]">
        Meet the Team!
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 grid-flow-row gap-x-36 gap-y-10">
          {BoardData.map((CARD, index) => (
            <Card
              Name={CARD.Name}
              Position={CARD.Position}
              image={CARD.image}
              Year={CARD.Year}
              key={index}
              custom={index * 0.1}
            />
          ))}
        </div>
      </div>
      <GroupPic />;
    </div>
  );
};

export default Board;
