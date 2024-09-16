"use client";
import { BoardData } from "@/data/board.js";
import Card from "@/components/board/Card";
import GroupPic from "@/components/board/GroupPic";
import Graphic from "./Graphic";

const Board = () => {
  return (
    <div className="w-5/6 mx-auto relative z-0">
      <p className="my-10 text-7xl font-bold text-gardening-brown-100">
        Meet the Team!
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-2  md:grid-cols-4 grid-flow-row gap-x-10 gap-y-20 md:gap-x-16 lg:gap-x-32 lg:gap-y-24 mb-10">
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
      <GroupPic />
      <Graphic />
    </div>
  );
};

export default Board;
