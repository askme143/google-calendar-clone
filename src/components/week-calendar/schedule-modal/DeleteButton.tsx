import React from "react";
import {Button} from "react-bootstrap";
import {MdDeleteOutline} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../../features/modal/schedule-modal-slice";
import {removeEvent} from "../../../features/schedule/user-event-slice";
import {RootState} from "../../../store";
import styles from "./DeleteButton.module.scss";

const DeleteButton = () => {
  const id = useSelector((state: RootState) => state.scheduleModal.eventId);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (id !== null) {
      dispatch(removeEvent(id));
      dispatch(closeModal());
    }
  };

  return <Button className={styles.EditButton} variant="outline-secondary" onClick={handleClick}><MdDeleteOutline/></Button>;
};

export default DeleteButton;
