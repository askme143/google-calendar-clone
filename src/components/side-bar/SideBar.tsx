import React from "react";
import CreateDropdown from "./CreateDropdown";
import MiniCalendar from "./MiniCalendar";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return <div className={styles.SideBar}>
    <CreateDropdown/>
    <MiniCalendar/>
  </div>;
};

export default SideBar;
