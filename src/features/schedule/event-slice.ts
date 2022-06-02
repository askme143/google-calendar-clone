import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

export interface Event {
  title: string,
  start: Date,
  end: Date,
  allDay: boolean,
}

export interface EventWithId{
  id: string,
  event: Event
}

export interface EventState {
  value: EventWithId[]
}

const initialState: EventState = {
  value: [],
};

export const eventSlice = createSlice(
    {
      name: "event",
      initialState,
      reducers: {
        appendEvent: (state, action: PayloadAction<Event>) => {
          const id = uuidv4();
          const event = action.payload;

          state.value.push({id, event});
        },
        removeEvent: (state, action: PayloadAction<string>) => {
          const removeId = action.payload;
          const index = state.value.findIndex(({id}) => id === removeId );

          state.value.splice(index, 1);
        },
        updateEvent: (state, action: PayloadAction<EventWithId>) => {
          const {id, event} = action.payload;
          const oldEvent = state.value.find((event) => event.id === id);
          if (typeof oldEvent !== "undefined") {
            oldEvent.event = event;
          }
        },
      },
    },
);

export const {appendEvent, removeEvent, updateEvent} = eventSlice.actions;
export default eventSlice.reducer;
