import React from "react";
import {Button} from "react-bootstrap";
import {GiHamburgerMenu} from "react-icons/gi";
import styles from "./DrawerButton.module.scss";

const DrawerButton = () => {
  return <Button className={styles.DrawerButton}>
    <GiHamburgerMenu color="black"/>
  </Button>;
};

export default DrawerButton;
