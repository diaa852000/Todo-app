import React, { useState } from 'react'
import TodoModal from '../TodoModal/TodoModal';

const Header = ({children, openModal, closeModal, isOpenModal, onIsOpenChange}) => {
    const todoStatus = [
        {status: "all", name : "all"},
        {status: "completed", name : "completed"},
        {status: "incompleted", name : "incompleted"}
    ]

    const handleOpenModal = () => {
        openModal()
        onIsOpenChange(true)
    };
    
    const handleCloseModal = () => {
        closeModal();
        onIsOpenChange(false)
    };
    

    return (
        <div className='max-w-[1240px] mx-auto px-2 py-2 md:py-5'>
            <h1 className='uppercase font-poppins font-semibold text-2xl text-center my-3 text-gray-500'>{children}</h1>
            <div className='flex justify-evenly md:justify-evenly items-center'>
                <button 
                    onClick={handleOpenModal}
                    type='button' 
                    className='capitalize text-white font-poppins font-medium text-sm px-2 py-1  rounded-md border-2 border-transparent transition-all duration-200 ease-in-out
                    bg-indigo-500 shadow-md hover:bg-white hover:text-indigo-500 hover:outline-indigo-500 hover:border-indigo-500 active:scale-95'
                >
                    add task
                </button>
                
                <input 
                    type="text" 
                    name="search" 
                    placeholder='search' 
                    className='shadow-sm rounded-md  py-1 '
                />
                
                <div>
                    <label htmlFor="todostatus"></label>
                    <select aria-labelledby="todoStatus" className='cursor-pointer capitalize text-gray-500  
                    w-36 font-poppins font-medium text-sm px-2 py-1 my-1 rounded-md transition-all duration-200 ease-in-out'>
                        {
                            todoStatus.map(status => <option 
                                key={status.status} 
                                className='cursor-pointer' 
                                value={status.status} 
                            >
                                {status.name}
                            </option>)
                        }
                    </select>
                </div>
            </div>
            <TodoModal onClose= {handleCloseModal} isOpen={isOpenModal}/>
        </div>
    )
}

export default Header