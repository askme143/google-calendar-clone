import React from "react";
import CalendarSide from "./CalendarSide";
import styles from "./CalendarContent.module.scss";
import CalendarColumn from "./CalendarColumn";

const CalendarContent = () => {
  return (
    <div className={styles.CalendarContent}>
      <CalendarSide></CalendarSide>
      <div className={styles.CalendarGrid}>
        <div className={styles.Padding}/>
        <CalendarColumn/>
        <CalendarColumn/>
        <CalendarColumn/>
        <CalendarColumn/>
        <CalendarColumn/>
        <CalendarColumn/>
        <CalendarColumn/>
        <div className={styles.Padding}/>
      </div>
    </div>
  );
};

export default CalendarContent;
