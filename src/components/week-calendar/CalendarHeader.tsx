import React from "react";
import DateHead from "./DateHead";
import styles from "./CalendarHeader.module.scss";
import {ScrollSyncPane} from "react-scroll-sync";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {compareWithToday, dayNumToWeekDay, getDatesOfWeek} from "../../data/date";

const CalendarHeader = () => {
  const date = useSelector((state: RootState) => state.date.value);

  const datesOfWeek = getDatesOfWeek(date);
  const headProps = datesOfWeek.map((date) => {
    const compareResult = compareWithToday(date);
    return {
      past: compareResult < 0,
      today: compareResult === 0,
      date: date.getDate(),
      weekDay: (dayNumToWeekDay(date.getDay()) ?? "SUN"),
    };
  });

  return (
    <div className={styles.CalendarHeader}>
      <div className={styles.Time}>
        <span>GMT+09</span>
      </div>
      <ScrollSyncPane>
        <div className={styles.Day}>
          <div className={styles.Padding} />
          {
            headProps.reduce((acc, {past, today, date, weekDay}, index) => {
              acc.push(<DateHead key={index*2 + 1} past={past} today={today} date={date} weekDay={weekDay}/>);
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
