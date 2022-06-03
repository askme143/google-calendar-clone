import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

export interface UserEvent {
  title: string,
  start: Date,
  end: Date,
  allDay: boolean,
}

export interface UserEventWithId{
  id: string,
  event: UserEvent
}

export interface UserEventState {
  value: UserEventWithId[]
}

const initialState: UserEventState = {
  value: [],
};

export const userEventSlice = createSlice(
    {
      name: "userEvent",
      initialState,
      reducers: {
        appendEvent: (state, action: PayloadAction<UserEvent>) => {
          const id = uuidv4();
          const event = action.payload;

          state.value.push({id, event});
        },
        removeEvent: (state, action: PayloadAction<string>) => {
          const removeId = action.payload;
          const index = state.value.findIndex(({id}) => id === removeId );

          state.value.splice(index, 1);
        },
        updateEvent: (state, action: PayloadAction<UserEventWithId>) => {
          const {id, event} = action.payload;
          const oldEvent = state.value.find((event) => event.id === id);
          if (typeof oldEvent !== "undefined") {
            oldEvent.event = event;
          }
        },
      },
    },
);

export const {appendEvent, removeEvent, updateEvent} = userEventSlice.actions;
export default userEventSlice.reducer;
