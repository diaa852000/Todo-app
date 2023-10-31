import { createSlice } from "@reduxjs/toolkit";
import * as _thunks from './todsoThunk'

const initialState = {
    items: [],
    loading: false,
    error: null,
    searchData: []
}

const todosSlice = createSlice({
    name: "todos",
    initialState,

    reducers: {
        searchTodo: (state, action) => {
            state.searchData = action.payload;
        }
    },

    extraReducers(builder){
        builder

        .addCase(_thunks.fetchTodos.pending, (state) => {
            state.loading = true
        })
        .addCase(_thunks.fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null
            state.items = action.payload
        })
        .addCase(_thunks.fetchTodos.rejected, (state, action) => {
            state.error = action.error.message;
        })

        .addCase(_thunks.addTodo.pending, (state) => {
            state.loading = true
        })
        .addCase(_thunks.addTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null
            state.items.push(action.payload)
        })
        .addCase(_thunks.addTodo.rejected, (state, action) => {
            state.error = action.error.message;
            
        })

        .addCase(_thunks.deleteTodo.pending, (state) => {
            state.loading = true
        })
        .addCase(_thunks.deleteTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null
            state.items = state.items.filter((item) => item.id !== action.payload)
        })
        .addCase(_thunks.deleteTodo.rejected, (state, action) => {
            state.error = action.error.message;
            
        })

        .addCase(_thunks.editTodo.pending, (state) => {
            state.loading = true
        })
        .addCase(_thunks.editTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null
            state.items = state.items.map((todo) => todo.id === action.payload.id ? action.payload : todo)
        })
        .addCase(_thunks.editTodo.rejected, (state, action) => {
            state.error = action.error.message;
        })

        .addCase(_thunks.toggleComplete.fulfilled, (state, action) => {
            let index = state.items.findIndex(item => item.id === action.payload.id);
            state.items[index].isComplete = action.payload.isComplete;
        })
    }
});


export const selectTodoById = (state, todoId) => state.todos.items.find((todo) => todo.id === todoId)
export const {searchTodo} = todosSlice.actions;

export default todosSlice.reducer;