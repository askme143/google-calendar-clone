import React from "react";
import Header from "../components/header/Header";
import SideBar from "../components/side-bar/SideBar";
import WeekCalendar from "../components/week-calendar/WeekCalendar";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return <div className={styles.MainPage}>
    <Header/>
    <div className={styles.Content}>
      <SideBar/>
      <WeekCalendar/>
    </div>
  </div>;
};

export default MainPage;
