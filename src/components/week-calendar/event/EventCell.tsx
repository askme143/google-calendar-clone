import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {DAY_IN_MILLIS, makeTimeStr, MINUTE_IN_MILLIS} from "../../../data/date";
import {openReadModal, setEventId, setModalOffset, setTempEvent} from "../../../features/modal/schedule-modal-slice";
import {UserEventWithId} from "../../../features/schedule/user-event-slice";
import styles from "./EventCell.module.scss";

interface EventCellProp {
  startOfDay: Date;
  widthPercent: number;
  xPercent: number;
  userEvent: UserEventWithId;
}

const WIDTH_PADDING_PX = 12;
const HEIGHT_UNIT_PX = 12;
const HEIGHT_UNIT_MILLIS = 15*MINUTE_IN_MILLIS;
const FULL_HEIGHT = DAY_IN_MILLIS/ HEIGHT_UNIT_MILLIS * HEIGHT_UNIT_PX;

const MIN_HEIGHT = 2*HEIGHT_UNIT_PX;
const MAX_TOP = FULL_HEIGHT - MIN_HEIGHT;

function getOffset(from: Date, to: Date) {
  const offset = to.getTime() - from.getTime();
  return offset < 0 ? 0 : offset;
}

function millisToPx(millis: number) {
  return millis / HEIGHT_UNIT_MILLIS * HEIGHT_UNIT_PX;
}

const EventCell = (
    {
      startOfDay,
      widthPercent,
      xPercent,
      userEvent,
    }: EventCellProp,
) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement | null>(null);

  const endOfDay = new Date(startOfDay.getTime() + DAY_IN_MILLIS);
  const width = `calc(${widthPercent}% - ${WIDTH_PADDING_PX}px)`;

  const {title, start: eventStart, end: eventEnd} = userEvent.event;

  const startOffset = getOffset(startOfDay, eventStart);
  const endOffset = getOffset(eventEnd, endOfDay);
  const yStart = millisToPx(startOffset);
  const yEnd = millisToPx(DAY_IN_MILLIS-endOffset);

  const height = yEnd - yStart < MIN_HEIGHT ? MIN_HEIGHT : yEnd - yStart;
  const top = yStart > MAX_TOP ? MAX_TOP : yStart;

  const startStr = makeTimeStr(eventStart.getHours(), eventStart.getMinutes());
  const endStr = makeTimeStr(eventEnd.getHours(), eventEnd.getMinutes());
  const timeStr = `${startStr} ~ ${endStr}`;

  const handleClick = () => {
    const offsetTop = ref.current?.offsetTop ?? 0;
    const parentOffsetTop = ref.current?.parentElement?.getBoundingClientRect().top ?? 0;
    const marginTop = 28;

    const modalY = `min(400px, ${offsetTop + parentOffsetTop - marginTop}px)`;
    let modalX: string = "";
    switch (startOfDay.getDay()) {
      case 1: modalX = "calc((100% - 321px) * 1 / 7 + 301px)"; break;
      case 2: modalX = "calc((100% - 321px) * 2 / 7 + 301px)"; break;
      case 3: modalX = "calc((100% - 321px) * 2 / 7 - 189px)"; break;
      case 4: modalX = "calc((100% - 321px) * 3 / 7 - 189px)"; break;
      case 5: modalX = "calc((100% - 321px) * 4 / 7 - 189px)"; break;
      case 6: modalX = "calc((100% - 321px) * 5 / 7 - 189px)"; break;
      case 7: modalX = "calc((100% - 321px) * 6 / 7 - 189px)"; break;
      case 0: modalX = "calc((100% - 321px) * 7 / 7 - 189px)"; break;
    };

    document.documentElement.style.setProperty("--modal-top", modalY);
    document.documentElement.style.setProperty("--modal-left", modalX);

    console.log(ref.current?.offsetLeft, ref.current?.parentElement?.getBoundingClientRect().left, window.pageYOffset);
    dispatch(setModalOffset({x: modalX, y: modalY}));
    dispatch(setTempEvent(userEvent.event));
    dispatch(setEventId(userEvent.id));
    dispatch(openReadModal());
  };

  return (
    <div
      ref={ref}
      style={{
        width,
        top,
        height,
      }}
      className={styles.EventCell}
      onClick={handleClick}>
      <div className={styles.Title}>{title.length ? title : "(제목 없음)"}</div>
      <div className={styles.Time}>{timeStr}</div>
    </div>);
};

export default EventCell;
