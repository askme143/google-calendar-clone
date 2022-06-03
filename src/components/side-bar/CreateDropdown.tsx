import React from "react";
import {Dropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import styles from "./CreateDropdown.module.scss";
import {openCreateModal, setTempEvent} from "../../features/modal/schedule-modal-slice";
import {RootState} from "../../store";
import {getAlignedDate, HOUR_IN_MILLIS, synchTime} from "../../data/date";

const MakeButton = () => {
  const date = useSelector((state: RootState) => state.date.value);
  const dispatch = useDispatch();

  const onClickCreateEvent = () => {
    const startDate = getAlignedDate(synchTime(date));

    const endDate = new Date(startDate.getTime() + HOUR_IN_MILLIS);

    dispatch(setTempEvent({
      title: "",
      start: startDate,
      end: endDate,
      allDay: false,
    }));
    dispatch(openCreateModal());
  };

  return (
    <Dropdown>
      <Dropdown.Toggle id={styles["create-dropdown"]}>
        <svg width="36" height="36" viewBox="0 0 36 36">
          <path fill="#34A853" d="M16 16v14h4V20z">
          </path><path fill="#4285F4" d="M30 16H20l-4 4h14z">
          </path><path fill="#FBBC05" d="M6 16v4h10l4-4z">
          </path><path fill="#EA4335" d="M20 16V6h-4v14z">
          </path><path fill="none" d="M0 0h36v36H0z">
          </path>
        </svg>
        만들기
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#" onClick={onClickCreateEvent}>이벤트</Dropdown.Item>
        <Dropdown.Item href="#">할 일</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MakeButton;
