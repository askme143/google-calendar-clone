import React from "react";
import {Button} from "react-bootstrap";
import {WeekDay} from "../../data/date-types";
import styles from "./DateHead.module.scss";


interface DateHeadProp {
  past: boolean;
  selected: boolean;
  date: number;
  weekDay: WeekDay;
}

const toKorWeekDay = (weekDay: WeekDay) => {
  switch (weekDay) {
    case "SUN": {return "일";}
    case "MON": {return "월";}
    case "TUE": {return "화";}
    case "WED": {return "수";}
    case "THU": {return "목";}
    case "FRI": {return "금";}
    case "SAT": {return "토";}
  }
};

const DateHead = ({past, selected, date, weekDay}: DateHeadProp) => {
  const korWeekDay = toKorWeekDay(weekDay);

  return <div className={`${styles.DateHead} ${selected ? styles.Selected : (past ? styles.Past : "")}`}>
    <span className={styles.WeekDay}>{korWeekDay}</span>
    <Button><span>{`${date}`}</span></Button>
  </div>;
};

export default DateHead;
