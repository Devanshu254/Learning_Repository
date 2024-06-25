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

