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

  console.log(inEvent);
  return (
    <div className="bg-gardening-red-100 w-full h-full text-center">
      <p className="text-base">{inEvent.event.title}</p>
    </div>
  );
};

export default CustomEvents;
