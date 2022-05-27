import React from "react";
import styles from "./CalendarSide.module.scss";

const CalendarSide = () => {
  return (
    <div className={styles.CalendarSide}>
      <div className={styles.TimeBlock}><span></span></div>
      <div className={styles.TimeBlock}><span>오전 1시</span></div>
      <div className={styles.TimeBlock}><span>오전 2시</span></div>
      <div className={styles.TimeBlock}><span>오전 3시</span></div>
      <div className={styles.TimeBlock}><span>오전 4시</span></div>
      <div className={styles.TimeBlock}><span>오전 5시</span></div>
      <div className={styles.TimeBlock}><span>오전 6시</span></div>
      <div className={styles.TimeBlock}><span>오전 7시</span></div>
      <div className={styles.TimeBlock}><span>오전 8시</span></div>
      <div className={styles.TimeBlock}><span>오전 9시</span></div>
      <div className={styles.TimeBlock}><span>오전 10시</span></div>
      <div className={styles.TimeBlock}><span>오전 11시</span></div>
      <div className={styles.TimeBlock}><span>오후 12시</span></div>
      <div className={styles.TimeBlock}><span>오후 1시</span></div>
      <div className={styles.TimeBlock}><span>오후 2시</span></div>
      <div className={styles.TimeBlock}><span>오후 3시</span></div>
      <div className={styles.TimeBlock}><span>오후 4시</span></div>
      <div className={styles.TimeBlock}><span>오후 5시</span></div>
      <div className={styles.TimeBlock}><span>오후 6시</span></div>
      <div className={styles.TimeBlock}><span>오후 7시</span></div>
      <div className={styles.TimeBlock}><span>오후 8시</span></div>
      <div className={styles.TimeBlock}><span>오후 9시</span></div>
      <div className={styles.TimeBlock}><span>오후 10시</span></div>
      <div className={styles.TimeBlock}><span>오후 11시</span></div>
    </div>
  );
};

export default CalendarSide;
