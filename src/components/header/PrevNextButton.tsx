import React from "react";
import {Button} from "react-bootstrap";
import {GrPrevious, GrNext} from "react-icons/gr";
import styles from "./PrevNextButton.module.scss";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store";
import {setDate} from "../../features/date/date-slice";
import {movePrevWeek, moveNextWeek} from "../../data/date";

const PrevNextButton = () => {
  const date = useSelector((state: RootState) => state.date.value);
  const dispatch = useDispatch();

  const onClickPrev = () => {
    const action = setDate(movePrevWeek(date));
    dispatch(action);
  };
  const onClickNext = () => {
    const action = setDate(moveNextWeek(date));
    dispatch(action);
  };

  return <div className={styles.PrevNextButton}>
    <Button className={styles.ArrowButton} variant="outline-secondary" onClick={onClickPrev}><GrPrevious/></Button>
    <Button className={styles.ArrowButton} variant="outline-secondary" onClick={onClickNext}><GrNext/></Button>
  </div>;
};

export default PrevNextButton;
