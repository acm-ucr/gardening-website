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
import Modal from "./Modal";
import Upcoming from "./Upcoming";
import Link from "next/link";

const mLocalizer = momentLocalizer(moment);
const CalendarEvents = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);

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
          <div className="w-[80%] text-center">
            <p className="my-4 text-xl md:text-3xl font-black">
              Check our Instagram, &nbsp;
              <Link
                target="_blank"
                href="https://www.instagram.com/ucrgardening/?hl=en"
                className="no-underline text-[#212529] hover:underline hover:text-gardening-green-100"
              >
                @ucrgardening
              </Link>
              ,&nbsp; for links and addition info!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalendarEvents;
