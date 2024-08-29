import Card from "@/components/events/EventCard";
import { EventData } from "@/data/event.js";

const Upcoming = () => {
  return (
    <div className="my-10 w-11/12 mx-auto text-gardening-brown-100 flex">
      <div className="my-10 w-11/12 mx-auto text-gardening-brown-100">
        <p className="font-bold text-5xl lg:text-7xl">Upcoming Events</p>
        {EventData.map((CARD, index) => (
          <Card
            Month={CARD.Month}
            Day={CARD.Day}
            Time={CARD.Time}
            EventName={CARD.EventName}
            Location={CARD.Location}
            Description={CARD.Description}
            key={index}
            custom={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
