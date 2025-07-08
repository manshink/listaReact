import './App.css'
import InputField from './components/InputField'
import React, { useState } from 'react';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  console.log(todo)

  return (
    <>
      <div className="App">


      <span className="heading">Taskify</span>
      <InputField todo = {todo} setTodo = {setTodo} />

      </div>
    </>
  )
}

export default App
