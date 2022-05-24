import React from "react";
import DrawerButton from "./DrawerButton";
import Logo from "./Logo";
import TodayButton from "./TodayButton";
import PrevNextButton from "./PrevNextButton";
import TodaySpan from "./TodaySpan";
import SearchButton from "./SearchButton";
import SupportButton from "./SupportButton";
import PreferenceButton from "./PreferenceButton";
import GoogleAppsButton from "./GoogleAppsButton";
import Profile from "./Profile";

import styles from "./Header.module.scss";
import CalendarTypeDropdown from "./CalendarTypeDropdown";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Left}>
        <DrawerButton/>
        <Logo/>
      </div>
      <div className={styles.Mid}>
        <TodayButton/>
        <PrevNextButton/>
        <TodaySpan/>
        <SearchButton/>
        <SupportButton/>
        <PreferenceButton/>
        <CalendarTypeDropdown/>
      </div>
      <div className={styles.Right}>
        <GoogleAppsButton/>
        <Profile/>
      </div>
    </div>
  );
};

export default Header;
