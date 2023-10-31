import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";


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
        let response = await axios.post(todosUri, {id: nanoid(), title, content, isComplete: false})
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

export const toggleComplete = createAsyncThunk('todos/toggleComplete', async ({id, isComplete}) => {
    try {
        let response = await axios.patch(`${todosUri}/${id}`, {isComplete})
        return response.data;
    } catch (err) {
        throw err;
    }
}) 