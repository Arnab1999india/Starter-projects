import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks : [],
    loading: false,
    error: null
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action){
            state.tasks.push(action.payload);
        },
        removeTask(state, action){
            state.tasks = state.tasks.filter(task => task.id != action.payload);
            
        },
        setLoading(state, action) {
            state.loading = action.payload;
          },
        setError(state, action) {
        state.error = action.payload;
        }
    }
});

export const { addTask, removeTask, setLoading, setError } = taskSlice.actions;
export default taskSlice.reducer