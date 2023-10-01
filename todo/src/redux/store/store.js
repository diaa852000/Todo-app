import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../features/todos/todsSlice'


const store = configureStore({
    reducer:{
        todos: todosReducer,
    }
});

export default store;