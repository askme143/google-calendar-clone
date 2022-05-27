import React from "react";
import CalendarContent from "./CalendarContent";
import CalendarHeader from "./CalendarHeader";
import DateHead from "./DateHead";
import styles from "./WeekCalendar.module.scss";

const WeekCalendar = () => {
  return <div className={styles.WeekCalendar}>
    {/* <DateHead past={true} selected={false} date={23} weekDay={"MON"}/>
    <DateHead past={false} selected={true} date={24} weekDay={"TUE"}/>
    <DateHead past={false} selected={false} date={25} weekDay={"WED"}/> */}

    <CalendarHeader></CalendarHeader>
    <CalendarContent></CalendarContent>
  </div>;
};

export default WeekCalendar;
