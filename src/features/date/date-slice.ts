import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface DateState {
  value: Date
}

const initialState: DateState = {
  value: new Date(),
};

export const dateSlice = createSlice(
    {
      name: "date",
      initialState,
      reducers: {
        setDate: (state, action: PayloadAction<Date>) => {
          state.value = action.payload;
        },
      },
    },
);

export const {setDate} = dateSlice.actions;
export default dateSlice.reducer;
