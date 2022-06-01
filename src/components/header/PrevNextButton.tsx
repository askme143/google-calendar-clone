import React from "react";
import {Button} from "react-bootstrap";
import {GrPrevious, GrNext} from "react-icons/gr";
import styles from "./PrevNextButton.module.scss";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store";
import {setDate} from "../../features/date/date-slice";

const WEEK_MILLIS = 7*24*60*60*1000;

const PrevNextButton = () => {
  const date = useSelector((state: RootState) => state.date.date);
  const dispatch = useDispatch();


  const moveNextWeek = () => {
    const newDate = new Date(date.getTime() + WEEK_MILLIS);
    const action = setDate(newDate);
    dispatch(action);
  };

  const movePrevWeek = () => {
    const newDate = new Date(date.getTime() - WEEK_MILLIS);
    const action = setDate(newDate);
    dispatch(action);
  };

  return <div className={styles.PrevNextButton}>
    <Button className={styles.ArrowButton} variant="outline-secondary" onClick={movePrevWeek}><GrPrevious/></Button>
    <Button className={styles.ArrowButton} variant="outline-secondary" onClick={moveNextWeek}><GrNext/></Button>
  </div>;
};

export default PrevNextButton;
