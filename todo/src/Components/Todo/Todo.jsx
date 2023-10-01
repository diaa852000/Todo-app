import React, { useState } from 'react'
import { BsCircle, BsCheckCircle, BsFillTrash3Fill, BsPencil } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, selectTodoById, updateTodo } from '../../redux/features/todos/todsSlice';
import {useNavigate } from 'react-router-dom';


const Todo = ({ title, content, todoId}) => {
    const navigateTo = useNavigate(); 
    const {items} = useSelector((state) => state.todos)

    const [isComplete, setIsComplete] = useState(false);

    const dispatch = useDispatch();
    const todo = useSelector((state) => selectTodoById(state, todoId))

    const handleComplete = () => {
        setIsComplete(!isComplete)
    }
    
    
    const handleDelete = () => {
        dispatch(deleteTodo(todoId));
    }

    // const editTodo = (todoId) => {
    //     let todo = items.find((todo) => todo.id === todoId)
    //     console.log(todo)
    // }


    return (
        <div className='bg-white border-b p-2 text-black md:w-2/3 flex justify-between items-center cursor-pointer hover:bg-gray-100'>
            <div className='flex items-center gap-4'>
                {/* <button 
                    type='button'
                    onClick={handleComplete}
                >
                    {isComplete ? <BsCheckCircle className='text-indigo-600'/> : <BsCircle className='text-indigo-600'/>}
                </button> */}
                <div>
                    <h2 className='font-semibold text-slate-600'>{title}</h2>
                    <p className='text-slate-500'>{content.substring(0,60)}</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <button 
                    type="button" 
                    onClick={() => navigateTo(`/todos/${todoId}`)}
                    // onClick={() => editTodo(todoId)}
                    className='text-indigo-600 bg-slate-200 h-6 w-6 flex items-center justify-center rounded-md shadow-sm py-3 z-1'
                >
                    <span><BsPencil/></span>
                </button>

                <button 
                    type="button" 
                    onClick={handleDelete}
                    className='text-indigo-600 bg-slate-200 h-6 w-6 flex items-center justify-center rounded-md shadow-sm py-3'
                >
                    <span><BsFillTrash3Fill/></span>
                </button>
            </div>
        </div>
    )
}

export default Todo