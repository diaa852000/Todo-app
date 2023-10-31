import React from 'react'
import { BsCircle, BsCheckCircle, BsFillTrash3Fill, BsPencil } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../../redux/features/todos/todsoThunk';
import {useNavigate } from 'react-router-dom';


const Todo = ({ title, content, todoId, isComplete}) => {
    const navigateTo = useNavigate(); 


    const dispatch = useDispatch();

    const handleIsComplete = () => {
        dispatch(toggleComplete({id:todoId, isComplete: !isComplete}))
    }
    
    
    const handleDelete = () => {
        dispatch(deleteTodo(todoId));
    }

    return (
        <div className='bg-white border-b p-2 text-black md:w-2/3 flex justify-between items-center cursor-pointer hover:bg-gray-100'>
            <div className='flex items-center gap-4'>
                <button 
                    type='button'
                    onClick={handleIsComplete}
                >
                    {isComplete ? <BsCheckCircle className='text-indigo-600'/> : <BsCircle className='text-indigo-600'/>}
                </button>
                <div>
                    <h2 className={`font-semibold text-slate-600 ${isComplete ? 'line-through' : ''}`}>{title}</h2>
                    <p className={`text-slate-500  ${isComplete ? 'line-through' : ''}`}>{content.substring(0,60)}</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <button 
                    type="button" 
                    onClick={() => navigateTo(`/todos/${todoId}`)}
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