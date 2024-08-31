"use client";
import React from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState, useEffect } from "react";
import "./index.css";
import CustomToolbar from "./CustomToolbar";
import CustomEvents from "./CustomEvents";
import CustomEventWrapper from "./CustomEventWrapper";
import Modal from "./Modals";
import Upcoming from "./Upcoming";

const mLocalizer = momentLocalizer(moment);
const CalendarEvents = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);
  // const dummyEvents = [
  //   {
  //     title: "Event 2",
  //     start: new Date(2024, 6, 20, 10, 0),
  //     end: new Date(2024, 6, 21, 11, 0),
  //     location: "WCH",
  //     summary: "the best event",
  //   },
  //   {
  //     title: "Event 1",
  //     start: new Date(2024, 7, 20, 10, 0),
  //     end: new Date(2024, 7, 21, 11, 0),
  //     location: "WCH",
  //     summary: "even better event",
  //   },
  //   {
  //     title: "Event 3",
  //     start: new Date(2024, 7, 20, 10, 0),
  //     end: new Date(2024, 7, 20, 12, 0),
  //     location: "WCH",
  //     summary: "even better event",
  //   },
  // ];

  useEffect(() => {
    const startDate = new Date(
      new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000
    ).toISOString();
    const endDate = new Date(
      new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
    ).toISOString();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${startDate}&timeMax=${endDate}`
        );
        const data = await response.json();

        console.log("finding all day", data);

        const arr = data.items;
        const items = [];

        for (let i = 0; i < arr.length; i++) {
          const tmp4 = arr[i];
          const temp = {
            title: tmp4.summary,
            description: tmp4.description,
            start: new Date(tmp4.start.date || tmp4.start.dateTime),
            end: new Date(tmp4.end.date || tmp4.end.dateTime),
            location: tmp4.location,
          };
          items.push(temp);
        }

        console.log("final event list", items);

        setEvents(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Upcoming events={events} />
      <section className="w-full flex justify-center items-center flex-col">
        <div className="mb-5 w-11/12 flex flex-col justify-center items-center relative">
          <div className="h-[90vh] w-full relative">
            <Calendar
              className="w-full m-0 p-0 text-3xl"
              date={date}
              onNavigate={(newDate) => {
                setDate(newDate);
              }}
              events={events}
              localizer={mLocalizer}
              defaultView="month"
              views={["month"]}
              components={{
                toolbar: CustomToolbar,
                event: CustomEvents,
                eventWrapper: CustomEventWrapper,
              }}
              onSelectEvent={(event) => setEvent(event)}
            />
          </div>

          {event && <Modal event={event} setEvent={setEvent} />}
        </div>
      </section>
    </>
  );
};

export default CalendarEvents;
