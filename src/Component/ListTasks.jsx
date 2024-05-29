// import React from 'react'
import { useSelector } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const ListTasks = () => {
    const tasks = useSelector((state) => state.tasks)
    console.log(tasks)
    const categories = ['PENDING', 'PROGRESS', 'COMPLETE']
  
    return (
        <div className="mx-40 my-5 border rounded-lg flex">
            {categories.map((category, catIndex) => (
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
                                            <div 
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="border m-2 rounded-md p-2 hover:bg-neutral-100 shadow-lg hover:-translate-x-2"
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
                                            </div>
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
