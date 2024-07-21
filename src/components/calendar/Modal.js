import { AiOutlinePlus } from "react-icons/ai";

const Modal = ({ events, setEvents }) => {
  return (
    <div className="text-white fixed left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[30vw] bg-tag-green-200 z-10 drop-shadow-sm p-2 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="py-2 px-3 text-4xl font-bold">{events.summary}</p>
        <AiOutlinePlus
          onClick={() => setEvents(null)}
          className="rotate-45 p-0 hover:scale-110 duration-300 hover:cursor-pointer text-2xl 2xl:text-3xl m-3"
        />
      </div>
      <div className="p-3 text-xl">
        <p className="m-0 pl-2 font-bold">{events.location}</p>
        <p className="m-0 pl-2 italic">{events.start.toString()}</p>
        <p className="m-0 pl-2 italic">{events.end.toString()}</p>
        <div className="text-sm p-2">
          {events.description?.replace(events.description.split(" ")[0], "")}
        </div>
      </div>
    </div>
  );
};

export default Modal;
