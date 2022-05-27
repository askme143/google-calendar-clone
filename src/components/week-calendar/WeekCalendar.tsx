import React from "react";
import {ScrollSync} from "react-scroll-sync";
import CalendarContent from "./CalendarContent";
import CalendarHeader from "./CalendarHeader";
import styles from "./WeekCalendar.module.scss";

const WeekCalendar = () => {
  return <ScrollSync>
    <div className={styles.WeekCalendar}>
      <CalendarHeader></CalendarHeader>
      <CalendarContent></CalendarContent>
    </div>
  </ScrollSync>;
};

export default WeekCalendar;
