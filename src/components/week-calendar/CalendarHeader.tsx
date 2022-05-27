import React, {useState} from "react";
import {WeekDay} from "../../data/date-types";
import DateHead from "./DateHead";
import styles from "./CalendarHeader.module.scss";

const initDaysOfWeek = [
  {past: true, selected: false, date: 23, weekDay: "MON" as WeekDay},
  {past: false, selected: true, date: 24, weekDay: "TUE" as WeekDay},
  {past: false, selected: false, date: 25, weekDay: "WED" as WeekDay},
  {past: false, selected: false, date: 26, weekDay: "THU" as WeekDay},
  {past: false, selected: false, date: 27, weekDay: "FRI" as WeekDay},
  {past: false, selected: false, date: 28, weekDay: "SAT" as WeekDay},
  {past: false, selected: false, date: 29, weekDay: "SUN" as WeekDay},
];

const CalendarHeader = () => {
  const [daysOfWeek, setDaysOfWeek] = useState(initDaysOfWeek);

  return (
    <div className={styles.CalendarHeader}>
      <div className={styles.Time}>
        GMT+09
      </div>
      <div className={styles.Day}>
        {
          daysOfWeek.map(
              ({past, selected, date, weekDay}, index) =>
                <DateHead key={index} past={past} selected={selected} date={date} weekDay={weekDay}/>,
          )
        }
      </div>
      <div className={styles.Padding} id="calendar-header-padding"/>
    </div>
  );
};

export default CalendarHeader;
