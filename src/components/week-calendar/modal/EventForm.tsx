import React from "react";
import {Button, Form} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../../store";
import {setTempEventTitle} from "../../../features/modal/modal-slice";
import {AiOutlineClockCircle} from "react-icons/ai";
import TimeForm from "./TimeForm";

import styles from "./EventForm.module.scss";


const EventForm = () => {
  const tempEvent = useSelector((state: RootState) => state.modal.tempEvent);
  const dispatch = useDispatch();

  const title = tempEvent?.title ?? "";
  const onChangeTitle = (title: string) => {
    dispatch(setTempEventTitle(title));
  };
  return (
    <Form className={styles.Form}>
      <div/>
      <div className={`${styles.TitleItem}`}>
        <Form.Control placeholder="제목 추가" value={title} onChange={(event) =>{
          onChangeTitle(event.target.value);
        }}></Form.Control>
      </div>
      <div/>
      <div className={styles.ModalTypeItem}>
        <Button variant="primary">이벤트</Button>
        <Button variant="outlined-secondary">할 일</Button>
        <Button variant="outlined-secondary">알림</Button>
      </div>
      <div className={styles.LeftContainer}>
        <AiOutlineClockCircle/>
      </div>
      <div>
        <TimeForm/>
      </div>
    </Form>
  );
};

export default EventForm;
