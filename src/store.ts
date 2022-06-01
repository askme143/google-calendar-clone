import {configureStore} from "@reduxjs/toolkit";
import dateReducer from "./features/date/date-slice";

export const store = configureStore(
    {
      reducer: {
        date: dateReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    },
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
