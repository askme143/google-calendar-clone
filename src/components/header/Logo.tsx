import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  const today = new Date().getDate();
  const src = `https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${today}_2x.png#`;

  return <div className={styles.Logo}>
    <img src={src}/>
    <span>캘린더</span>
  </div>;
};

export default Logo;
