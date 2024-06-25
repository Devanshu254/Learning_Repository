import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleEdit = () => {

  }
  const handleDelete = () => {

  }
  const handleAdd = () => {
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
  }
  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  return (
    <>
    <Navbar/>
      <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]'>
        <div className='addTodo my-5'>
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange = {handleChange} value = {todo} type="text" className='w-1/2'/>
          <button onClick={handleAdd} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6">Add</button>
        </div>

