import React from "react";
import {Button} from "react-bootstrap";
import {toKorWeekDay, WeekDay} from "../../data/date";
import styles from "./DateHead.module.scss";


interface DateHeadProp {
  past: boolean;
  today: boolean;
  date: number;
  weekDay: WeekDay;
}

const DateHead = ({past, today, date, weekDay}: DateHeadProp) => {
  const korWeekDay = toKorWeekDay(weekDay);

  return (
    <div className={`${styles.DateHead} ${today ? styles.Selected : (past ? styles.Past : "")}`}>
      <span className={styles.WeekDay}>{korWeekDay}</span>
      <Button><span>{`${date}`}</span></Button>
    </div>
  );
};

export default DateHead;
