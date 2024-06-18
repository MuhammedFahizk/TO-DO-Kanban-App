// import React from 'react'
import { useSelector } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteTask } from '../Redux/TodoSlice';
import { useState } from 'react';
const ListTasks = ({setShowModal}) => {
    const[curIndex, setCurIndex] = useState('')
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks)
    console.log(tasks)
    const categories = ['PENDING', 'PROGRESS', 'COMPLETE']
    const handleDelete = (taskId) => {
        const confirmed = window.confirm("Are you sure you want to delete this?");
        if (confirmed) {
            console.log('is:', taskId);
          dispatch(deleteTask(taskId));
        }
      };
    return (
        <div className="mx-40 my-5 border rounded-lg flex">
            {categories.map((category, ) => (
                <Droppable key={category} droppableId={category}>
                    {(provided) => (
                        <div 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="w-1/3 justify-center"
                        >
                            <h1 className="flex justify-center text-2xl font-mono">{category}</h1>
                            <hr />
                            {tasks.value?.filter((task) => task.status === category)
                                .map((item, itemIndex) => (
                                    <Draggable key={item.id} draggableId={item.id.toString()} index={itemIndex}>
                                        {(provided) => (
                                            <><div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="border m-2 rounded-md p-2 hover:bg-neutral-100 shadow-lg hover:-translate-x-2"
                                                onMouseEnter={() => setCurIndex(item.id)}
                          onMouseLeave={() => setCurIndex(null)}
                                            >
                                                <div className="flex justify-between gap-1">
                                                    <h1 className="font-bold">Task Name:</h1>
                                                    <p>{item.taskName}</p>
                                                </div>
                                                <div className="flex justify-between gap-1">
                                                    <h1 className="font-bold">Description:</h1>
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="flex justify-between gap-1">
                                                    <h1 className="font-bold">Due Date:</h1>
                                                    <p>{item.date}</p>
                                                </div>
                                                <hr />
                                                <div 
                                                     className={
                                                        curIndex === item.id ? 'flex  justify-center  gap-4 py-1 px-4  mx-4 rounded  border-black ':'hidden'
                                                     }>
                                            <MdDelete
                                            onClick={() => handleDelete(item.id)}
                                             className='text-red-500 text-lg hover:text-red-800'
                                             />
                                            <FaPencilAlt
                                            onClick={()=> {setShowModal(true),localStorage.setItem('EditItemId', item.id)}}
                                             className='text-green-300 text-lg hover:text-green-800'/>
                                                </div>
                                            </div>

                                            
                                             
                                                    
                                                
                                            </>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            ))}
        </div>
    )
}

export default ListTasks
