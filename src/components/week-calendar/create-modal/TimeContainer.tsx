import React, {useState} from "react";
import {Form, ListGroup} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {makeTimeStr} from "../../../data/date";
import {setTempEventEnd, setTempEventStart} from "../../../features/modal/create-modal-slice";
import {useOutSideClick} from "../../../hooks";
import {RootState} from "../../../store";

import styles from "./TimeContainer.module.scss";

const timeList = Array(96).fill(0).map((_, idx) => {
  const hour = (Math.floor(idx / 4)) % 24;
  const min = (idx % 4) * 15;
  return {hour, min};
});


interface TimeContainerProp {
  isStart: boolean
}

const TimeContainer = ({isStart}: TimeContainerProp) => {
  const [showTimeList, setShowTimeList] = useState(false);
  const tempEvent = useSelector((state:RootState) => state.createModal.tempEvent);
  const dispatch = useDispatch();

  const ref = useOutSideClick<HTMLDivElement>(() => {
    setShowTimeList(false);
  }, ()=>{
    setShowTimeList(true);
  });

  if (!tempEvent) return <></>;

  const date = isStart ? tempEvent.start : tempEvent.end;
  const hour = date.getHours();
  const min = date.getMinutes();

  function onClickItem(date: Date, hour: number, min: number) {
    const newDate = new Date(date.getTime());
    newDate.setHours(hour);
    newDate.setMinutes(min);
    return () => {
      dispatch(isStart ? setTempEventStart(newDate) : setTempEventEnd(newDate));
    };
  }

  const itemList = timeList.map(({hour, min}, idx) => {
    return (
      <ListGroup.Item
        as={"div"}
        className={styles.Item}
        action
        key={idx}
        onClick={onClickItem(date, hour, min)}
      >
        {makeTimeStr(hour, min)}
      </ListGroup.Item>
    );
  });

  return (
    <div className={styles.TimeContainer} ref={ref}>
      <Form.Control className={styles.TimeInput} value={makeTimeStr(hour, min)}/>
      {showTimeList ?
          <ListGroup className={styles.ListGroup}>
            {itemList}
          </ListGroup> :
          <></>}
    </div>
  );
};

export default TimeContainer;
