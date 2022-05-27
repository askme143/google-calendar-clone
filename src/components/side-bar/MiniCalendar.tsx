import React from "react";

import {format} from "date-fns";
import {DayPicker} from "react-day-picker";
import "react-day-picker/dist/style.css";

const MiniCalendar = () => {
  const [selected, setSelected] = React.useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  return (
    <DayPicker
      // locale={"kr-KR" as unknown as Locale}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
};

export default MiniCalendar;
