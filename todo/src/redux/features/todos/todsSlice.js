import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    loading: false,
    error: null,
}
const todosUri = "http://localhost:5000/todos";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    try {
        let response = await axios.get(todosUri);
        return [...response.data]
    } catch (err) {
        throw err;
    }
})

export const addTodo = createAsyncThunk('todos/addTodo', async ({title, content}) => {
    try {
        let response = await axios.post(todosUri, {id: nanoid(), title, content})
        return response.data;
    } catch (err) {
        throw err;
    }
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    try {
        await axios.delete(`${todosUri}/${id}`)
        return id;
    } catch (err) {
        throw err;
    }
})

export const editTodo = createAsyncThunk('todos/editTodo', async ({id, title, content}) => {
    try {
        let response = await axios.put(`${todosUri}/${id}`, {title, content})
        return response.data;
    } catch (err) {
        throw err;
    }
})

const todosSlice = createSlice({
    name: "todos",
    initialState,

    reducers: {},

    extraReducers(builder){
        builder
        //read
        .addCase(fetchTodos.pending, (state) => {
            state.loading = true
        })

        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null
            state.items = action.payload
        })
        
        .addCase(fetchTodos.rejected, (state, action) => {
            state.error = action.error.message;
        })

        //create
        .addCase(addTodo.pending, (state) => {
            state.loading = true
        })

        .addCase(addTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null
            state.items.push(action.payload)
        })
        
        .addCase(addTodo.rejected, (state, action) => {
            state.error = action.error.message;
            
        })

        //delete
        .addCase(deleteTodo.pending, (state) => {
            state.loading = true
        })

        .addCase(deleteTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null
            state.items = state.items.filter((item) => item.id !== action.payload)
        })

        .addCase(deleteTodo.rejected, (state, action) => {
            state.error = action.error.message;
            
        })

        //update
        .addCase(editTodo.pending, (state) => {
            state.loading = true
        })

        .addCase(editTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null
            state.items = state.items.map((todo) => todo.id === action.payload.id ? action.payload : todo)
        })
        
        .addCase(editTodo.rejected, (state, action) => {
            state.error = action.error.message;
            
        })
    }
});


export const selectTodoById = (state, todoId) => state.todos.items.find((todo) => todo.id === todoId)

export default todosSlice.reducer;