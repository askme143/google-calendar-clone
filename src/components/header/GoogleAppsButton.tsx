import React from "react";
import {Button} from "react-bootstrap";
import {IoApps} from "react-icons/io5";
import styles from "./GoogleAppsButton.module.scss";

const GoogleAppsButton = () => {
  return <Button className={styles.GoogleAppsButton}><IoApps color="black"/></Button>;
};

export default GoogleAppsButton;
