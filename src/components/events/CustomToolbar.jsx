import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const CustomToolbar = (event) => {
  return (
    <div className="text-5xl font-semibold flex flex-col sm:flex-row justify-between items-center pt-4 pb-3 w-full text-gardening-green-100">
      <div className="w-full sm:w-auto text-5xl lg:text-7xl justify-self-start font-bold text-gardening-brown-100">
        Calendar
      </div>
      <div className="flex gap-3 mr-5">
        <BsArrowLeft
          onClick={() => {
            event.onNavigate("PREV");
          }}
          className="hover:cursor-pointer hover:opacity-50 duration-300 text-3xl sm:text-4xl"
        />
        <span className="text-3xl sm:text-5xl">
          {monthNames[event.date.getMonth()]} {event.date.getFullYear()}
        </span>
        <BsArrowRight
          onClick={() => {
            event.onNavigate("NEXT");
          }}
          className="hover:cursor-pointer hover:opacity-50 duration-300 text-3xl sm:text-4xl"
        />
      </div>
    </div>
  );
};

export default CustomToolbar;
