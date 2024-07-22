// import GroupPic from "@/components/board/GroupPic";

const Board = () => {
  return (
    // <div>
    //   Board
    //   <GroupPic />
    // </div>

    // <div className = "w-full h-3/4 rounded-full bg-gardening-brown-200">

    // </div>

    <div className="h-full w-full">
      <div className="h-svh w-full flex flex-col justify-around bg-gardening-red-100 border-gardening-brown-200 border-b-8 border-l-8 border-r-8 rounded-br-full rounded-bl-full">
        <p className="text-3xl font-semibold font-serif text-center text-gardening-white-100 py-4">
          Meet The Team!
        </p>

        <div className="w-full flex justify-between ">
          {/* <div className="w-1/6 h-2/4 z-auto flex flex-col items-center rounded-md bg-gardening-white-100 py-4">
            <div className="w-3/4 h-3/4 bg-gardening-tan-200 rounded-md mb-2.5"></div>
            <p className="text-xl font-semibold text-gardening-blue-100">Name</p>
            <p className="text-xl font-semibold text-gardening-blue-100">
              Position
            </p>
            <p className="text-xl font-semibold text-gardening-blue-100">Year</p>
          </div> */}

          <div className="w-1/6 h-2/4 z-auto flex flex-wrap items-center justify-center rounded-md bg-gardening-white-100 py-4">
            <div className="w-3/4 h-3/4 bg-gardening-tan-200 rounded-md mb-2.5"></div>
            <p className="text-xl font-semibold text-gardening-blue-100">
              Name
            </p>
            <p className="text-xl font-semibold text-gardening-blue-100">
              Position
            </p>
            <p className="text-xl font-semibold text-gardening-blue-100">
              Year
            </p>
          </div>

          <div className="w-1/6 h-2/4 z-auto flex flex-col items-center justify-center rounded-md bg-gardening-white-100 py-4">
            <div className="w-3/4 h-3/4 bg-gardening-tan-200 rounded-md mb-2.5"></div>
            <p className="text-xl font-semibold text-gardening-blue-100">
              Name
            </p>
            <p className="text-xl font-semibold text-gardening-blue-100">
              Position
            </p>
            <p className="text-xl font-semibold text-gardening-blue-100">
              Year
            </p>
          </div>

          <div className="w-1/6 h-2/4 z-auto flex flex-col items-center justify-center rounded-md bg-gardening-white-100 py-4">
            <div className="w-3/4 h-3/4 bg-gardening-tan-200 rounded-md mb-2.5"></div>
            <p className="text-xl font-semibold text-gardening-blue-100">
              Name
            </p>
            <p className="text-xl font-semibold text-gardening-blue-100">
              Position
            </p>
            <p className="text-xl font-semibold text-gardening-blue-100">
              Year
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-around"></div>
    </div>
  );
};

export default Board;
