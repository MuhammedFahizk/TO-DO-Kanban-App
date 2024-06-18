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
        },
        deleteTask: (state, action) => {
            console.log(action.payload);
            state.value = state.value.filter(item =>  {
                return item.id !== action.payload
            
            })
        },
        Edit_task: (state, action) => {
            console.log(action.payload);

const { id,  description, date, taskName } = action.payload;
const task = state.value.find(task => task.id === id);
if (task) {
    task.taskName = taskName
    task.description = description;
    task.date = date;

}
        }
    }
});

export const { create_task, update_task_status, deleteTask, Edit_task} = taskSlice.actions;
export default taskSlice.reducer;
