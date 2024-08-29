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

        // const offset = new Date().getTimezoneOffset() * 60000;
        const data = await response.json();

        // console.log("finding all day", data);
        // const tmp1 = data.items[10];
        //   console.log("hahhhh", tmp1);
        //   console.log("title", tmp1.summary);
        //   console.log("description", tmp1.description);
        //   console.log("start time", tmp1.start);
        //   console.log("end time", tmp1.end);
        //   console.log("location", tmp1.location);

        //   const tmp2 = data.items[6];
        //   console.log("start time 6", tmp2.start);
        //   console.log("end time 6", tmp2.end);

        //   const t1= new Date(tmp1.start.dateTime);

        //   const t2 = new Date(tmp2.start.date);

        //   console.log("edited times, both working", t1, t2);

        const arr = data.items;
        const items = [];

        // What to do now:
        // 1. Two different format for all day event vs non all day event. Handle them differently.
        // 2. Provide default description. If none is given.

        for (let i = 0; i < arr.length; i++) {
          // let tmp4 = arr[i];

          // console.log(tmp4.summary, tmp4.description, tmp4.start, new Date(tmp4.end), new Date(tmp4.location));
          const temp = {
            title: tmp4.summary,
            description:
              tmp4.description !== undefined
                ? tmp4.description
                : "no description",
            start: new Date(tmp4.start.date || tmp4.start.dateTime),
            end: new Date(tmp4.end.date || tmp4.end.dateTime),
          };
          items.push(temp);
        }

        console.log("final event list", items);

        // {
        //   title: "Event 1",
        //   start: new Date(2024, 7, 20, 10, 0),
        //   end: new Date(2024, 7, 21, 11, 0),
        //
        //   summary: "even better event",
        // },

        setEvents(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="mb-5 w-11/12 flex flex-col justify-center items-center">
        <div className="flex flex-row justify-start w-full">
          {" "}
          <div className="text-7xl font-bold"> Calendar </div>
        </div>

        <div className="h-[110vh] w-full relative">
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
  );
};

export default CalendarEvents;
