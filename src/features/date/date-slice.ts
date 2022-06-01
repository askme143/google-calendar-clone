import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface DateState {
  date: Date
}

const initialState: DateState = {
  date: new Date(),
};

export const dateSlice = createSlice(
    {
      name: "date",
      initialState,
      reducers: {
        setDate: (state, action: PayloadAction<Date>) => {
          state.date = action.payload;
        },
      },
    },
);

export const {setDate} = dateSlice.actions;
export default dateSlice.reducer;
