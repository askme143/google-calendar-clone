import React from "react";
import CalendarSide from "./CalendarSide";
import styles from "./CalendarContent.module.scss";
import CalendarColumn from "./CalendarColumn";
import {ScrollSync, ScrollSyncPane} from "react-scroll-sync";

const CalendarContent = () => {
  return (
    <div className={styles.CalendarContent}>
      <ScrollSyncPane>
        <CalendarSide></CalendarSide>
      </ScrollSyncPane>
      <ScrollSyncPane>
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
      </ScrollSyncPane>
    </div>
  );
};

export default CalendarContent;
