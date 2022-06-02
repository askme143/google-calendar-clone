import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Task} from "../schedule/task-slice";


export interface ModalState {
  modalOpen: boolean,
  modalType: "event" | "task",
  tempTask: Task | null
  tempEvent: Event | null
}

const initialState: ModalState = {
  modalOpen: false,
  modalType: "event",
  tempTask: null,
  tempEvent: null,
};

export const modalSlice = createSlice(
    {
      name: "task",
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
        toTaskModal: (state) => {
          state.modalType = "task";
        },
        setTempTask: (state, action: PayloadAction<Task>) =>{
          state.tempTask = action.payload;
        },
        clearTempTask: (state) => {
          state.tempTask = null;
        },
        setTempEvent: (state, action: PayloadAction<Event>) =>{
          state.tempEvent = action.payload;
        },
        clearTempEvent: (state) => {
          state.tempEvent = null;
        },
      },
    },
);

export const {
  openModal,
  closeModal,
  toEventModal,
  toTaskModal,
  setTempTask,
  clearTempTask,
  setTempEvent,
  clearTempEvent,
} = modalSlice.actions;
export default modalSlice.reducer;
