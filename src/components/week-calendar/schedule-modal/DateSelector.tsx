import React, {useEffect, useState} from "react";

import {DayPicker} from "react-day-picker";
import {useDispatch, useSelector} from "react-redux";
import {setDate} from "../../../features/date/date-slice";
import {isSameWeek} from "../../../data/date";
import {setTempEventEnd, setTempEventStart} from "../../../features/modal/schedule-modal-slice";
import {RootState} from "../../../store";

interface DateSelectorProp {
  isStart: boolean,
  date: Date,
}

const DateSelector = ({isStart, date}: DateSelectorProp) => {
  const modalState = useSelector((state: RootState)=>state.scheduleModal.modalState);
  const [month, setMonth] = useState<Date>();
  const dispatch = useDispatch();

  useEffect(() => {
    setMonth(date);
  }, []);


  const onSelectDate = (newDate: Date | undefined) => {
    if (newDate) {
      if (modalState === "create" && !isSameWeek(newDate, date)) {
        dispatch(setDate(newDate));
      }
      newDate.setHours(date.getHours());
      newDate.setMinutes(date.getMinutes());

      dispatch(isStart ? setTempEventStart(newDate) : setTempEventEnd(newDate));
    }
  };


  return (
    <DayPicker
      mode="single"
      selected={date}
      month={month}
      onSelect={onSelectDate}
      onMonthChange={setMonth}
      showOutsideDays
    />
  );
};

export default DateSelector;
