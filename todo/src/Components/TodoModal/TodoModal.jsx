import React, { useState } from "react";
import { HiMiniXMark } from 'react-icons/hi2'
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/features/todos/todsoThunk";

const TodoModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch();

  if (!isOpen) return null;


  const handleSubmitModal = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        addTodo({
          title: title,
          content: content
        })
      )
      setTitle('');
      setContent('');
    }
    onClose();
  }


  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]">
      <div className="fixed top-[50%] md:left-[50%] md:transform md:translate-x-[-50%] translate-y-[-50%] 
        md:w-[500px] mx-auto w-full rounded-md shadow-md flex flex-col gap-2 p-2  items-center z-[2] bg-white">

        <button type="button" onClick={onClose} className="cursor-pointer text-gray-600 self-end">
          <HiMiniXMark className="w-6 h-6" />
        </button>

        <h1 className="uppercase text-gray-600 font-bold drop-shadow-xl text-xl">add task</h1>

        <form onSubmit={handleSubmitModal} className="w-full flex flex-col gap-2 p-2">
          <div>
            <label htmlFor="title" className="block my-1 pl-1 capitalize text-gray-700 font-medium">title</label>
            <input 
              type="text" 
              id="title" 
              className="rounded-md w-full" 
              onChange={(e) => setTitle(e.target.value)} 
              value={title} 
            />
          </div>

          <div>
            <label htmlFor="content" className="block my-1 pl-1 capitalize text-gray-700 font-medium">content</label>
            <input 
              type="text" 
              id="content" 
              className="rounded-md w-full" 
              onChange={(e) => setContent(e.target.value)} 
              value={content} 
            />
          </div>

          <button type="submit" className="capitalize bg-indigo-500 mx-auto p-2  rounded-md shadow-md text-white font-semibold my-2" >add task</button>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;
