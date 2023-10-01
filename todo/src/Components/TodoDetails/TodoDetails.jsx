import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../../redux/features/todos/todsSlice";
import { useEffect } from "react";




const TodoDetails = () => {
    const { id } = useParams()

    const navigateTo = useNavigate();

    const [updateTodo, setUpdateTodo] = useState(null);
    

    const dispatch = useDispatch();
    const {items} = useSelector((state) => state.todos);
    
    
    useEffect(() => {
        if(id){
            const singleTodo = items.filter((todo) => todo.id === id);
            setUpdateTodo(singleTodo[0]);
        }
    },[])

    const newData = (e) => {
        setUpdateTodo({...updateTodo, [e.target.name] : e.target.value});
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(editTodo(updateTodo))
        navigateTo('/')
    }

    return (
        <div className="h-screen max-w-[1240px] mx-auto flex flex-col justify-center items-center">
            
            <h1 className="uppercase text-gray-600 font-bold drop-shadow-xl text-xl">edit task</h1>

            <form onSubmit={handleUpdate} className="w-1/2 mx-auto flex flex-col gap-2 p-2">
                <div>
                    <label htmlFor="title" className="block my-1 pl-1 capitalize text-gray-700 font-medium">title</label>
                    <input
                        type="text"
                        id="title"
                        className="rounded-md w-full"
                        onChange={newData}
                        value={updateTodo && updateTodo.title}
                        name="title"
                    />
                </div>

                <div>
                    <label htmlFor="content" className="block my-1 pl-1 capitalize text-gray-700 font-medium">content</label>
                    <input
                        type="text"
                        id="content"
                        className="rounded-md w-full"
                        onChange={newData}
                        value={updateTodo && updateTodo.content}
                        name="content"

                    />
                </div>

                <button type="submit" className="capitalize bg-indigo-500 mx-auto p-2  rounded-md shadow-md text-white font-semibold my-2" >edit task</button>
            </form>
        </div>
    ) 
}

export default TodoDetails;
