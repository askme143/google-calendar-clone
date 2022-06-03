import React from "react";
import {useSelector} from "react-redux";
import {DAY_IN_MILLIS} from "../../data/date";
import {RootState} from "../../store";
import CalendarCell from "./CalendarCell";
import styles from "./CalendarColumn.module.scss";
import EventCell from "./event/EventCell";


const calendarCells = Array(24).fill(0).map((_, idx)=><CalendarCell key={idx}/>);

interface CalendarColumnProp {
  startOfDay: Date
}

const CalendarColumn = ({startOfDay}: CalendarColumnProp) => {
  const userEvents = useSelector((state:RootState) => state.userEvent.value);
  const endOfDay = new Date(startOfDay.getTime() + DAY_IN_MILLIS - 1);

  const eventsOfDay = userEvents.filter((userEvent) => {
    const {start: eventStart, end: eventEnd} = userEvent.event;

    return !(
      eventStart.getTime() > endOfDay.getTime() ||
      eventEnd.getTime() < startOfDay.getTime()
    );
  });
  const eventCells = eventsOfDay.map((userEvent, idx) => {
    return <EventCell key={idx} startOfDay={startOfDay} widthPercent={100} xPercent={0} userEvent={userEvent}/>;
  });

  return (
    <div className={styles.CalendarColumn}>
      {calendarCells}
      {eventCells}
    </div>
  );
};

export default CalendarColumn;
