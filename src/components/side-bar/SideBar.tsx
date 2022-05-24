import React from "react";
import MakeButton from "./MakeDropdown";
import MiniCalendar from "./MiniCalendar";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return <div className={styles.SideBar}>
    <MakeButton/>
    <MiniCalendar/>
  </div>;
};

export default SideBar;
