import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

export interface Task {
  title: string,
  start: Date,
  allDay: boolean
}

export interface TaskWithId{
  id: string,
  task: Task
}

export interface TaskState {
  value: TaskWithId[]
}

const initialState: TaskState = {
  value: [],
};

export const taskSlice = createSlice(
    {
      name: "task",
      initialState,
      reducers: {
        appendTask: (state, action: PayloadAction<Task>) => {
          const id = uuidv4();
          const task = action.payload;

          state.value.push({id, task});
        },
        removeTask: (state, action: PayloadAction<string>) => {
          const removeId = action.payload;
          const index = state.value.findIndex(({id}) => id === removeId );

          state.value.splice(index, 1);
        },
        updateTask: (state, action: PayloadAction<TaskWithId>) => {
          const {id, task} = action.payload;
          const oldTask = state.value.find((task) => task.id === id);
          if (typeof oldTask !== "undefined") {
            oldTask.task = task;
          }
        },
      },
    },
);

export const {appendTask, removeTask, updateTask} = taskSlice.actions;
export default taskSlice.reducer;
