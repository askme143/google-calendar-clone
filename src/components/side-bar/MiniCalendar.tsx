import React, {useEffect, useState} from "react";

import {format} from "date-fns";
import {DayPicker} from "react-day-picker";
import "./MiniCalendar.scss";
import {useSelector, useDispatch} from "react-redux";
import {setDate} from "../../features/date/date-slice";
import {RootState} from "../../store";

const MiniCalendar = () => {
  const [month, setMonth] = useState<Date>();
  const date = useSelector((state:RootState) => state.date.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setMonth(date);
  }, [date]);

  const onSelectDate = (date: Date | undefined) => {
    if (date) {
      dispatch(setDate(date));
    }
  };

  const footer = <p>You picked {format(date, "PP")}.</p>;

  return (
    <DayPicker
      mode="single"
      selected={date}
      month={month}
      onSelect={onSelectDate}
      onMonthChange={setMonth}
      footer={footer}
      showOutsideDays
    />
  );
};

export default MiniCalendar;
