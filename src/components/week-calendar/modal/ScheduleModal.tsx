import React from "react";
import {Button, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {clearTempEvent, clearTempTask, closeModal} from "../../../features/modal/modal-slice";
import {RootState} from "../../../store";
import EventForm from "./EventForm";

import styles from "./ScheduleModal.module.scss";

const ScheduleModal = () => {
  const modalOpen = useSelector((state: RootState) => state.modal.modalOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearTempEvent());
    dispatch(clearTempTask());
    dispatch(closeModal());
  };

  return (
    <Modal show={modalOpen} onHide={handleClose} className={styles.Modal}>
      <Modal.Header className={styles.Header} closeButton/>

      <Modal.Body>
        <EventForm/>
      </Modal.Body>

      <Modal.Footer className={styles.Footer}>
        <Button variant="secondary">옵션 더보기</Button>
        <Button variant="primary">저장</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ScheduleModal;
