import { MdOutlineLocationOn } from "react-icons/md";

const EventCard = ({ Month, Day, Time, EventName, Location, Description }) => {
  return (
    <div className="w-[90%] sm:w-2/5 flex rounded-lg overflow-hidden">
      <div className="w-2/5 py-3 flex flex-col bg-white items-center justify-center">
        <span className="text-2xl font-bold">{Month}</span>
        <span className="text-5xl font-black">{Day}</span>
        <span className="text-2xl font-bold">{Time}</span>
      </div>
      <div className="w-3/5 flex items-center justify-center bg-gardening-yellow-200">
        <div className="w-[90%] py-3 my-auto flex flex-col text-white text-wrap hyphens-auto">
          <span className="text-2xl sm:text-3xl font-black">{EventName}</span>
          <span className="text-lg flex mb-2">
            <MdOutlineLocationOn className="text-2xl -ml-1" />
            <span className="my-auto">{Location}</span>
          </span>
          <span className="text-md sm:text-lg">
            {Description ?? "No description provided"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
