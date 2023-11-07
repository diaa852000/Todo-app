import React, { useState } from 'react'
import TodoModal from '../TodoModal/TodoModal';
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { searchTodo } from '../../redux/features/todos/todsSlice';
import { useEffect } from 'react';

const Header = ({ children, openModal, closeModal, isOpenModal, onIsOpenChange}) => {
    const [searchData, setSearchData] = useState("")

    const dispatch = useDispatch();

    const handleOpenModal = () => {
        openModal()
        onIsOpenChange(true)
    };

    const handleCloseModal = () => {
        closeModal();
        onIsOpenChange(false)
    };

    useEffect(() => {
        dispatch(
            searchTodo(searchData)
        )
    }, [searchData])

    return (
        <div className='max-w-[1240px] mx-auto px-2 py-2 md:py-5'>
            <h1 className='uppercase font-poppins font-semibold text-2xl text-center mt-3 mb-5 text-gray-500 dark:text-white'>{children}</h1>
            <div className='flex justify-center items-center'>
                <input
                    type='search'
                    name="search"
                    placeholder='search'
                    className='shadow-sm rounded-lg w-full md:w-2/5 placeholder:translate-y-[-1px] placeholder:text-lg dark:text-black'
                    onChange={(e) => setSearchData(e.target.value)}
                />
                <button
                    onClick={handleOpenModal}
                    type='button'
                    className='capitalize text-white font-poppins font-medium text-sm w-10 h-10 flex justify-center items-center rounded-full 
                        border-2 border-transparent transition-all duration-200 ease-in-out bg-indigo-500 shadow-md hover:bg-white hover:text-indigo-500
                        hover:outline-indigo-500 hover:border-indigo-500 active:scale-105 fixed bottom-20 right-[5%] md:right-[8%] 2xl:right-[20%]'
                >
                    <AiOutlinePlus className='h-5 w-5' />
                </button>
            </div>
            <TodoModal onClose={handleCloseModal} isOpen={isOpenModal} />
        </div>
    )
}

export default Header