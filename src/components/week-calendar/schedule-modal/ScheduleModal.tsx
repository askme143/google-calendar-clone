import React, {useRef} from "react";
import {Button, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {closeModal} from "../../../features/modal/schedule-modal-slice";
import {appendEvent, updateEvent} from "../../../features/schedule/user-event-slice";
import {RootState} from "../../../store";
import EventForm from "./EventForm";

import styles from "./ScheduleModal.module.scss";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const ScheduleModal = () => {
  const modalOpen = useSelector((state: RootState) => state.scheduleModal.modalOpen);
  const modalState = useSelector((state: RootState) => state.scheduleModal.modalState);
  const tempEvent = useSelector((state: RootState) => state.scheduleModal.tempEvent);
  const eventId = useSelector((state: RootState) => state.scheduleModal.eventId);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement | null>(null);

  const readOnly = modalState === "read";

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleSave = () => {
    // TODO: Check validity of the tempEvent
    switch (modalState) {
      case "create":
        if (tempEvent) dispatch(appendEvent(tempEvent));
        break;
      case "edit":
        if (tempEvent && eventId) dispatch(updateEvent({id: eventId, event: tempEvent}));
        break;
      case "read":
        break;
    }

    handleClose();
  };


  return (
    <Modal show={modalOpen} onHide={handleClose}
      dialogClassName={styles.Dialog} backdropClassName={styles.Backdrop}
      ref={ref}>
      <Modal.Header className={modalState === "create" ? styles.CreateHeader : styles.Header} closeButton>
        {
          modalState !== "create" ?
          <div className={styles.Buttons}><EditButton/><DeleteButton/></div> :
          <></>
        }
      </Modal.Header>

      <Modal.Body>
        <EventForm/>
      </Modal.Body>

      <Modal.Footer className={styles.Footer}>
        <Button variant="secondary">옵션 더보기</Button>
        <Button variant="primary" onClick={handleSave}>{readOnly ? "닫기" : "저장"}</Button>
      </Modal.Footer>

    </Modal>
  );
};

export default ScheduleModal;
