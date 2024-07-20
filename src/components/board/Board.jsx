"use client";
import GroupPic from "@/components/board/GroupPic";

const Board = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="text-white text-6xl flex flex-col justify-center items-center my-[4%]">
        Meet the Team!
      </div>
      <div className="flex justify-center">
        <div class="grid grid-cols-4 grid-flow-row gap-x-36 gap-y-10">
          <div className="bg-white w-56 h-80 rounded-lg mb-[4%] flex flex-col items-center">
            <div className=" bg-gardening-tan-200 w-[90%] h-[66%] rounded-lg my-[6%]">
              {" "}
            </div>
            <div className="font-extrabold"> Name </div>
            <div className="font-extrabold"> Position </div>
            <div className="font-extrabold"> Year </div>
          </div>
          <div className="bg-white w-56 h-80 rounded-lg mb-[4%] flex flex-col items-center">
            <div className=" bg-gardening-tan-200 w-[90%] h-[66%] rounded-lg my-[6%]">
              {" "}
            </div>
            <div className="font-extrabold"> Name </div>
            <div className="font-extrabold"> Position </div>
            <div className="font-extrabold"> Year </div>
          </div>
          <div className="bg-white w-56 h-80 rounded-lg mb-[4%] flex flex-col items-center">
            <div className=" bg-gardening-tan-200 w-[90%] h-[66%] rounded-lg my-[6%]">
              {" "}
            </div>
            <div className="font-extrabold"> Name </div>
            <div className="font-extrabold"> Position </div>
            <div className="font-extrabold"> Year </div>
          </div>
          <div className="bg-white w-56 h-80 rounded-lg mb-[4%] flex flex-col items-center">
            <div className=" bg-gardening-tan-200 w-[90%] h-[66%] rounded-lg my-[6%]">
              {" "}
            </div>
            <div className="font-extrabold"> Name </div>
            <div className="font-extrabold"> Position </div>
            <div className="font-extrabold"> Year </div>
          </div>
          <div className="bg-white w-56 h-80 rounded-lg mb-[4%] flex flex-col items-center">
            <div className=" bg-gardening-tan-200 w-[90%] h-[66%] rounded-lg my-[6%]">
              {" "}
            </div>
            <div className="font-extrabold"> Name </div>
            <div className="font-extrabold"> Position </div>
            <div className="font-extrabold"> Year </div>
          </div>
          <div className="bg-white w-56 h-80 rounded-lg mb-[4%] flex flex-col items-center">
            <div className=" bg-gardening-tan-200 w-[90%] h-[66%] rounded-lg my-[6%]">
              {" "}
            </div>
            <div className="font-extrabold"> Name </div>
            <div className="font-extrabold"> Position </div>
            <div className="font-extrabold"> Year </div>
          </div>
          <div className="bg-white w-56 h-80 rounded-lg mb-[4%] flex flex-col items-center">
            <div className=" bg-gardening-tan-200 w-[90%] h-[66%] rounded-lg my-[6%]">
              {" "}
            </div>
            <div className="font-extrabold"> Name </div>
            <div className="font-extrabold"> Position </div>
            <div className="font-extrabold"> Year </div>
          </div>
          <div className="bg-white w-56 h-80 rounded-lg mb-[4%] flex flex-col items-center">
            <div className=" bg-gardening-tan-200 w-[90%] h-[66%] rounded-lg my-[6%]">
              {" "}
            </div>
            <div className="font-extrabold"> Name </div>
            <div className="font-extrabold"> Position </div>
            <div className="font-extrabold"> Year </div>
          </div>
        </div>
      </div>
      <GroupPic />;
    </div>
  );
};

export default Board;
