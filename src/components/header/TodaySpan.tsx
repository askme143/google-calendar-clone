import React from "react";
import styles from "./TodaySpan.module.scss";
import {RootState} from "../../store";
import {useSelector} from "react-redux";

const TodaySpan = () => {
  const date = useSelector((state: RootState) => state.date.value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return <span className={styles.TodaySpan}>{year}년 {month}월</span>;
};

export default TodaySpan;
