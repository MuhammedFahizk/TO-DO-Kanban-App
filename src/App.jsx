
import './App.css'
import Head from './Component/Head'

import ListTasks from './Component/ListTasks';
import { DragDropContext } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux';
import { update_task_status } from './Redux/TodoSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks);
  function onDragEnd(result) {
    const { destination, draggableId } = result;
    if (!destination) return


    const task = tasks.value.find(task => task.id == draggableId)
    console.log('result:', task)

    if (task) {
      dispatch(update_task_status({ id: task.id, status: destination.droppableId }))
      console.log(task.id);
    }
  }
  return (
    < >
        <DragDropContext onDragEnd={onDragEnd}>

      <div className="App">
        <Head/>
        <ListTasks/>
        </div>
        </DragDropContext>
    </>
  )
}

export default App
