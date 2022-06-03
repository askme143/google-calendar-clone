import React from "react";
import {Button, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {clearTempEvent, closeCreateModal} from "../../../features/modal/create-modal-slice";
import {appendEvent} from "../../../features/schedule/user-event-slice";
import {RootState} from "../../../store";
import EventForm from "./EventForm";

import styles from "./ScheduleModal.module.scss";

const ScheduleModal = () => {
  const modalOpen = useSelector((state: RootState) => state.createModal.modalOpen);
  const tempEvent = useSelector((state: RootState) => state.createModal.tempEvent);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearTempEvent());
    dispatch(closeCreateModal());
  };

  const handleSave = () => {
    // TODO: Check validity of the tempEvent
    if (tempEvent) dispatch(appendEvent(tempEvent));
    handleClose();
  };

  return (
    <Modal show={modalOpen} onHide={handleClose} className={styles.Modal}>
      <Modal.Header className={styles.Header} closeButton/>

      <Modal.Body>
        <EventForm/>
      </Modal.Body>

      <Modal.Footer className={styles.Footer}>
        <Button variant="secondary">옵션 더보기</Button>
        <Button variant="primary" onClick={handleSave}>저장</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ScheduleModal;
