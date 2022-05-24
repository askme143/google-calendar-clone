import React from "react";
import {Button} from "react-bootstrap";
import {GrCircleQuestion} from "react-icons/gr";
import styles from "./SearchButton.module.scss";

const SupportButton = () => {
  return <Button className={styles.SearchButton} variant="outline-secondary"><GrCircleQuestion/></Button>;
};

export default SupportButton;
