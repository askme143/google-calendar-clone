/* eslint-disable max-len */
import React from "react";
import {Button} from "react-bootstrap";
import styles from "./TodayButton.module.scss";

const TodayButton = () => {
  return <Button className={styles.TodayButton} variant="outline-secondary">오늘</Button>;
};

export default TodayButton;
