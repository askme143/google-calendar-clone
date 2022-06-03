import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserEvent} from "../schedule/user-event-slice";


export interface ScheduleModalState {
  offsetX: string,
  offsetY: string,
  modalState: "create" | "read" | "edit",
  modalOpen: boolean,
  modalType: "event",
  eventId: string | null,
  tempEvent: UserEvent | null
}

const initialState: ScheduleModalState = {
  offsetX: "301px",
  offsetY: "120px",
  modalState: "create",
  modalOpen: false,
  modalType: "event",
  eventId: null,
  tempEvent: null,
};

export const modalSlice = createSlice(
    {
      name: "scheduleModal",
      initialState,
      reducers: {
        setModalOffset: (state, action: PayloadAction<{x: string, y:string}>) =>{
          state.offsetX = action.payload.x;
          state.offsetY = action.payload.x;
        },
        openReadModal: (state) => {
          state.modalState = "read";
          state.modalOpen = true;
        },
        openCreateModal: (state) => {
          state.modalState = "create";
          state.modalOpen = true;
        },
        closeModal: (state) => {
          state.eventId = null;
          state.tempEvent = null;
          state.modalOpen = false;
        },
        startEdit: (state) => {
          if (state.modalState === "read") {
            state.modalState = "edit";
          }
        },
        toEventModal: (state) => {
          state.modalType = "event";
        },
        setEventId: (state, action: PayloadAction<string>) =>{
          state.eventId = action.payload;
        },
        setTempEvent: (state, action: PayloadAction<UserEvent>) =>{
          state.tempEvent = action.payload;
        },
        clearTempEvent: (state) => {
          state.tempEvent = null;
        },
        setTempEventTitle: (state, action: PayloadAction<string>) => {
          if (state.tempEvent !== null) {
            state.tempEvent.title =action.payload;
          }
        },
        setTempEventAllDay: (state, action: PayloadAction<boolean>) => {
          if (state.tempEvent !== null) {
            state.tempEvent.allDay = action.payload;
          }
        },
        setTempEventStart: (state, action : PayloadAction<Date>) => {
          if (state.tempEvent !== null) {
            state.tempEvent.start = action.payload;
          }
        },
        setTempEventEnd: (state, action : PayloadAction<Date>) => {
          if (state.tempEvent !== null) {
            state.tempEvent.end = action.payload;
          }
        },
      },
    },
);

export const {
  setModalOffset,
  openReadModal,
  openCreateModal,
  closeModal,
  startEdit,
  toEventModal,
  setEventId,
  setTempEvent,
  clearTempEvent,
  setTempEventTitle,
  setTempEventAllDay,
  setTempEventStart,
  setTempEventEnd,
} = modalSlice.actions;
export default modalSlice.reducer;
