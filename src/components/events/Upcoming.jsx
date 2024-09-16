import EventCard from "@/components/events/EventCard";

const NUM_CARDS = 2;
const dateNow = new Date();
const pastEventsFilter = (event) => event.start >= dateNow;
const eventsComparator = (event1, event2) => {
  if (event1.start < event2.start) return -1;
  else if (event1.start > event2.start) return 1;
  else return 0;
};

const Upcoming = ({ events }) => {
  const orderedEvents = events.filter(pastEventsFilter).sort(eventsComparator);
  console.log(
    "orderedEvents",
    orderedEvents.map((e) => e.start)
  );
  const eventsToShow = orderedEvents.slice(
    0,
    Math.min(NUM_CARDS, orderedEvents.length)
  );
  console.log("eventsToShow", eventsToShow);
  return (
    <div className="my-10 w-11/12 mx-auto text-gardening-brown-100">
      <p className="font-bold text-5xl lg:text-7xl">Upcoming Events</p>

      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-4">
        {eventsToShow.length > 0 ? (
          eventsToShow.map((event, index) => (
            <EventCard
              Month={event.start.toLocaleString("en-US", { month: "short" })}
              Day={event.start.getDate()}
              Time={event.start.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
              EventName={event.title}
              Location={event.location}
              Description={event.description}
              key={index}
              custom={index * 0.1}
            />
          ))
        ) : (
          <p className="w-[70%] m-0 text-xl md:text-3xl text-center font-semibold">
            {"No events sprouting yet, but we'll be planting new ideas soon!"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Upcoming;
