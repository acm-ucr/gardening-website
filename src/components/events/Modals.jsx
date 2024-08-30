import { AiOutlinePlus } from "react-icons/ai";

const Modal = ({ event, setEvent }) => {
  return (
    <div className="font-playfair absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] md:w-[50vw] bg-gardening-yellow-100 z-10 drop-shadow-lg rounded-2xl">
      <div className={`flex justify-between items-center ${event.color}`}>
        <p
          className={` m-0 py-2 md:py-3 px-3 md:px-4 text-lg md:text-2xl text-white`}
        >
          {event.title}
        </p>
        <AiOutlinePlus
          onClick={() => setEvent(null)}
          className="text-black rotate-45 p-0 hover:scale-110 duration-300 hover:text-gardening-tan-100 hover:cursor-pointer text-3xl m-3"
        />
      </div>
      <div className="p-3 bg-white rounded-bl-2xl rounded-br-2xl">
        {event.allDay ? (
          <p>All day</p>
        ) : (
          <div className="pl-2 text-xl font-black">
            <p className="mx-0 my-1">
              {event.start.toLocaleTimeString().split(":")[0]}&nbsp;to&nbsp;
              {event.end.toLocaleTimeString().split(":")[0]}&nbsp;
              {event.end.toLocaleTimeString().split(":")[2].split(" ")[1]}
            </p>
            <p className="mx-0 my-1">No location specified</p>
            <p className="mx-0 my-1">No description specified</p>
          </div>
        )}
        {/* <div className="md:text-lg text-sm p-2">{event.summary}</div> */}
      </div>
    </div>
  );
};

export default Modal;
