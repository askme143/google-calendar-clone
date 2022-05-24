import React from "react";
import {Button} from "react-bootstrap";
import {GrPrevious, GrNext} from "react-icons/gr";
import styles from "./PrevNextButton.module.scss";


const PrevNextButton = () => {
  return <div className={styles.PrevNextButton}>
    <Button className={styles.ArrowButton} variant="outline-secondary"><GrPrevious/></Button>
    <Button className={styles.ArrowButton} variant="outline-secondary"><GrNext/></Button>
  </div>;
};

export default PrevNextButton;
