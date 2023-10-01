import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../../redux/features/todos/todsSlice'
import Todo from '../Todo/Todo'
import './Home.css';
import Header from '../Header/Header';


const Home = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.todos)

    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => setIsOpenModal(true);

    const closeModal = () => setIsOpenModal(false);

    const handleIsOpenChange = (newIsOpen) => setIsOpenModal(newIsOpen)


    

    useEffect(() => {
        if (error === null) {
            dispatch(fetchTodos())
        }
    }, [dispatch, error])

    return (
        <div>
            <Header 
                isOpenModal={isOpenModal} 
                openModal={openModal} 
                closeModal={closeModal} 
                onIsOpenChange={handleIsOpenChange}
            >
                Add Todo
            </Header>

            <div className={`max-w-[1240px] mx-auto h-[700px] overflow-y-auto p-2 flex flex-col md:items-center`}>
                {loading ? <p>loading</p> : ''}
                {items?.map((item) => 
                <Todo 
                    key={item.id} 
                    title={item.title} 
                    content={item.content} 
                    todoId={item.id} 
                />)}
            </div>
        </div>
    )
}

export default Home