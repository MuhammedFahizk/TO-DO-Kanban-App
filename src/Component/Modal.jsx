import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Edit_task } from '../Redux/TodoSlice';
import { useSelector } from 'react-redux';

const Modal = ({setShowModal}) => {
  const {tasks} = useSelector((state) => state)
const editItemId = localStorage.getItem('EditItemId')
const data = tasks.value.filter((a) => a.id == editItemId)
console.log(data, editItemId);
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        id: data[0].id,
        taskName: data[0].taskName,
        description:data[0].description,
        date: data[0].date,
        status: data[0].status
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
          ...formData,
        };
        dispatch(Edit_task(newTask));
        setShowModal(false)
        setFormData({
          id: '',
          taskName: '',
          description: '',
          date: '',
          status: 'PENDING'
        });
      };
  return (

    
    <><div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                          Edit Task
                      </h3>
                      <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() =>{  setShowModal(false) }}
                      >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                          </span>
                      </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                  <div>
          <form
            className="border    rounded-lg p-2 flex gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter Task Name"
              name="taskName"
              className="border rounded-md p-2"
              value={formData.taskName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Enter Task Description"
              name="description"
              className="border rounded-md p-2"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              placeholder="Pick The Date"
              name="date"
              className="border rounded-md p-2 px-10"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <button 
           
            type="submit" className="bg-green-200 px-10 rounded hover:bg-green-600">
              Submit
            </button>
          </form>
        </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                      >
                          Close
                      </button>
                      
                  </div>
              </div>
          </div>
      </div><div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>

)
}

export default Modal

