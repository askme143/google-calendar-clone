import {configureStore} from "@reduxjs/toolkit";
import dateReducer from "./features/date/date-slice";
import modalReducer from "./features/modal/modal-slice";
import eventReducer from "./features/schedule/event-slice";
import taskReducer from "./features/schedule/task-slice";

export const store = configureStore(
    {
      reducer: {
        date: dateReducer,
        modal: modalReducer,
        event: eventReducer,
        task: taskReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    },
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
