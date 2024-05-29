import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        value: [{}]
    },
    reducers: {
        create_task: (state, action) => {
            state.value.push(action.payload)
        },
        update_task_status: (state, action) => {
            const { id, status } = action.payload;
            // Find the task with the matching id
            const task = state.value.find(task => task.id === id);
            
            // If the task is found, update its status
            if (task) {
                task.status = status;
            }
        }
    }
});

export const { create_task, update_task_status } = taskSlice.actions;
export default taskSlice.reducer;
