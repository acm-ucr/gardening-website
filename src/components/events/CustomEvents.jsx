const CustomEvents = (inEvent) => {
  // To whoever that needs to deal with this component:
  // The format of the "inEvent" is the same format as whatever event you're passing into the calendar.
  // as of right now with "dummy events, it is":
  // {
  //   title: "Event 1",
  //   start: new Date(2024, 7, 20, 10, 0),
  //   end: new Date(2024, 7, 21, 11, 0),
  //   location: "WCH",
  //   summary: "even better event",
  // },

  return (
    <div className="bg-gardening-brown-400 text-center py-0.5 border-4 border-red-500">
      <p className="text-sm -mb-1 text-wrap">{inEvent.event.title} </p>
    </div>
  );
};

export default CustomEvents;
