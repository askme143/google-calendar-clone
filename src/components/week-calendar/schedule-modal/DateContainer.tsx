import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {useSelector} from "react-redux";
import {dayNumToWeekDay, toKorWeekDay} from "../../../data/date";
import {useOutSideClick} from "../../../hooks";
import {RootState} from "../../../store";

import styles from "./DateContainer.module.scss";
import DateSelector from "./DateSelector";

interface DateContainerProp {
  isStart: boolean
}

function makeDateStr(date: Date) {
  return `${date.getMonth() + 1}월 ${date.getDate()}일 (${toKorWeekDay(dayNumToWeekDay(date.getDay()) ?? "MON")}요일)`;
}

const DateContainer = ({isStart}: DateContainerProp) => {
  const modalState = useSelector((state: RootState) => state.scheduleModal.modalState);
  const tempEvent = useSelector((state: RootState) => state.scheduleModal.tempEvent);
  const ref = useOutSideClick<HTMLDivElement>(
      ()=>setShowCalendar(false),
      ()=>setShowCalendar(true),
  );
  const [showCalendar, setShowCalendar] = useState(false);


  if (tempEvent === null) return <></>;

  const {start, end} = tempEvent;
  const date = isStart ? start : end;
  const dateStr = makeDateStr(date);
  const readOnly = modalState === "read";

  return (
    <div className={styles.DateContainer} ref={ref}>
      <Form.Control className={styles.DateInput} value={dateStr} onChange={()=>{}} readOnly={readOnly}/>
      { showCalendar && !readOnly ?
            <div className={styles.DateSelector}>
              <DateSelector isStart={isStart} date={date}/>
            </div> :
            null
      }
    </div>
  );
};

export default DateContainer;
