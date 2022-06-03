import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserEvent} from "../schedule/event-slice";


export interface ModalState {
  modalOpen: boolean,
  modalType: "event",
  editingTime: boolean,
  tempEvent: UserEvent | null
}

const initialState: ModalState = {
  modalOpen: false,
  modalType: "event",
  editingTime: false,
  tempEvent: null,
};

export const modalSlice = createSlice(
    {
      name: "modal",
      initialState,
      reducers: {
        openModal: (state) => {
          state.modalOpen = true;
        },
        closeModal: (state) => {
          state.modalOpen = false;
        },
        toEventModal: (state) => {
          state.modalType = "event";
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
  openModal,
  closeModal,
  toEventModal,
  setTempEvent,
  clearTempEvent,
  setTempEventTitle,
  setTempEventAllDay,
  setTempEventStart,
  setTempEventEnd,
} = modalSlice.actions;
export default modalSlice.reducer;
