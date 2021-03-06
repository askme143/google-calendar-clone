import React from "react";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {setTempEventAllDay} from "../../../features/modal/schedule-modal-slice";

import styles from "./TimeForm.module.scss";
import DateContainer from "./DateContainer";
import TimeContainer from "./TimeContainer";

const TimeForm = () => {
  const modalState = useSelector((state: RootState) => state.scheduleModal.modalState);
  const tempEvent = useSelector((state: RootState) => state.scheduleModal.tempEvent);
  const dispatch = useDispatch();

  if (tempEvent === null) return <></>;
  const {allDay} = tempEvent;
  const handleCheck = () => {
    if (modalState !== "read") dispatch(setTempEventAllDay(!allDay));
  };

  return (
    <div className={styles.Form}>
      <div className={styles.FirstRow}>
        <DateContainer isStart={true}/>
        <TimeContainer isStart={true}/>
        <span>-</span>
        <TimeContainer isStart={false}/>
        <DateContainer isStart={false}/>
      </div>
      <div className={styles.SecondRow}>
        <Form.Check type="checkbox" label="종일" id="allday-checkbox"
          disabled={modalState === "read"} checked={allDay} onChange={handleCheck}>
        </Form.Check>
      </div>
    </div>
  );
};

export default TimeForm;
