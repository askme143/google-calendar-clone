/* eslint-disable max-len */
import React from "react";
import {Button} from "react-bootstrap";
import styles from "./TodayButton.module.scss";
import {useDispatch} from "react-redux";
import {setDate} from "../../features/date/date-slice";

const TodayButton = () => {
  const dispatch = useDispatch();

  const setToday = () => {
    const todayDate = new Date();
    const action = setDate(todayDate);
    dispatch(action);
  };

  return <Button className={styles.TodayButton} variant="outline-secondary" onClick={setToday}>오늘</Button>;
};

export default TodayButton;
