import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Harry")
  const [form, setForm] = useState({email: "", phone: ""})
  const handleClick = ()=>{
    alert("Hey! I am clicked.")
  }
const handleMouseOver = () => {
    alert("Hey! I am clicked again.")
  }
  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value});
    console.log(form)
  }
