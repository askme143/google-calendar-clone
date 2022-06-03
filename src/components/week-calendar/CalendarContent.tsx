import React from "react";
import CalendarSide from "./CalendarSide";
import styles from "./CalendarContent.module.scss";
import CalendarColumn from "./CalendarColumn";
import {ScrollSyncPane} from "react-scroll-sync";
import ScheduleModal from "./schedule-modal/ScheduleModal";
import {getDatesOfWeek} from "../../data/date";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const CalendarContent = () => {
  const date = useSelector((state: RootState) => state.date.value);

  const datesOfWeek = getDatesOfWeek(date);
  const columnList = datesOfWeek.map((date, idx) => {
    return <CalendarColumn key={idx} startOfDay={date}/>;
  });

  return (
    <div className={styles.CalendarContent}>
      <ScrollSyncPane>
        <CalendarSide></CalendarSide>
      </ScrollSyncPane>
      <ScrollSyncPane>
        <div className={styles.CalendarGrid}>
          <div className={styles.Padding}/>
          {columnList}
          <div className={styles.Padding}/>
          <ScheduleModal/>
        </div>
      </ScrollSyncPane>
    </div>
  );
};

export default CalendarContent;
