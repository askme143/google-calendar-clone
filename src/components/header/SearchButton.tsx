import React from "react";
import {Button} from "react-bootstrap";
import {BiSearch} from "react-icons/bi";
import styles from "./SearchButton.module.scss";

const SearchButton = () => {
  return <Button className={styles.SearchButton} variant="outline-primary"><BiSearch color="black"/></Button>;
};

export default SearchButton;
