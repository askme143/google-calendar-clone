import {configureStore} from "@reduxjs/toolkit";
import dateReducer from "./features/date/date-slice";
import scheduleModalReducer from "./features/modal/schedule-modal-slice";
import userEventReducer from "./features/schedule/user-event-slice";

export const store = configureStore(
    {
      reducer: {
        date: dateReducer,
        scheduleModal: scheduleModalReducer,
        userEvent: userEventReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    },
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
