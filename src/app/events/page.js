import CalendarEvents from "@/components/events/CalendarEvents";
import Upcoming from "@/components/events/Upcoming";

const Page = () => {
  return (
    <div className="flex flex-col">
      <Upcoming />
      <CalendarEvents />
    </div>
  );
};

export default Page;
