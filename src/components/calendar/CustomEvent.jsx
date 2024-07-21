const CustomEvent = ({ event }) => {
  return (
    <div className="bg-swim-blue-200 text-center text-white text-xl font-bold h-7 flex items-center justify-center">
      <p className="m-0 text-black bg-[#C5D5B9]">{event.summary}</p>
    </div>
  );
};

export default CustomEvent;
