import React from "react";
import {Button} from "react-bootstrap";
import styles from "./PreferenceButton.module.scss";
import {AiOutlineSetting} from "react-icons/ai";

const PreferenceButton = () => {
  return <Button className={styles.PreferenceButton} variant="outline-secondary">
    <AiOutlineSetting color="black"/>
  </Button>;
};

export default PreferenceButton;
