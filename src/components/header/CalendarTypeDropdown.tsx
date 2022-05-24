import React from "react";
import {Dropdown} from "react-bootstrap";
import styles from "./CalendarTypeDropdown.module.scss";

const CalendarTypeDropdown = () => {
  return <Dropdown>
    <Dropdown.Toggle className={styles.Toggle} variant="outline-secondary">
      주
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item>일</Dropdown.Item>
      <Dropdown.Item>주</Dropdown.Item>
      <Dropdown.Item>월</Dropdown.Item>
      <Dropdown.Item>연도</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>;
};

export default CalendarTypeDropdown;
