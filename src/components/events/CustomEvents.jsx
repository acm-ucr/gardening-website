const CustomEvents = (inEvent) => {
  return (
    <div className="bg-gardening-brown-400 text-center pt-0.5 pb-1">
      <p className="w-[95%] mx-auto text-[1.75vw] md:text-[1vw] leading-none md:leading-normal pb-[.3vh] -mb-1 text-wrap">
        {inEvent.event.title}
      </p>
    </div>
  );
};

export default CustomEvents;
