import React from "react";
import {Button} from "react-bootstrap";
import {MdOutlineEdit} from "react-icons/md";
import {useDispatch} from "react-redux";
import {startEdit} from "../../../features/modal/schedule-modal-slice";
import styles from "./EditButton.module.scss";

const EditButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(startEdit());
  };

  return <Button className={styles.EditButton} variant="outline-secondary" onClick={handleClick}><MdOutlineEdit/></Button>;
};

export default EditButton;
