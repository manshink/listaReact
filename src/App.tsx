import React, { useState } from 'react';
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList';
import type { Todo } from './model';
import {DndContext} from '@dnd-kit/core';



const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  }




  return (
    <>
      <DndContext onDragEnd={() => {}}>
      <div className="App">


      <span className="heading">Taskify</span>
      <InputField todo = {todo} setTodo = {setTodo} handleAdd={handleAdd} />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
      
      </div>
      </DndContext>
    </>
  )
}

export default App
