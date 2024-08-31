const CustomEvents = (inEvent) => {
  return (
    <div className="bg-gardening-brown-400 text-center pt-0.5 pb-1">
      <p className="text-sm -mb-1 text-wrap">{inEvent.event.title} </p>
    </div>
  );
};

export default CustomEvents;
