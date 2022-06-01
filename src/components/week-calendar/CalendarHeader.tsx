import React, {useState} from "react";
import {WeekDay} from "../../data/date-types";
import DateHead from "./DateHead";
import styles from "./CalendarHeader.module.scss";
import {ScrollSyncPane} from "react-scroll-sync";

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
        <span>GMT+09</span>
      </div>
      <ScrollSyncPane>
        <div className={styles.Day}>
          <div className={styles.Padding} />
          {
            daysOfWeek.reduce((acc, {past, selected, date, weekDay}, index) => {
              acc.push(<DateHead key={index*2 + 1} past={past} selected={selected} date={date} weekDay={weekDay}/>);
              acc.push(<div key={index*2 + 2} className={styles.Divider}><div/></div>);
              return acc;
            }, [<div key={0} className={styles.Divider}><div/></div>])
          }
          <div className={styles.Padding} />
        </div>
      </ScrollSyncPane>
      <div className={styles.Margin} />
    </div>
  );
};

export default CalendarHeader;
