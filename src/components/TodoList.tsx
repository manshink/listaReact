import React from 'react';
import type { Todo } from '../model';
import "./style.css"
import SingleTodo from './SingleTodo';
import {DndContext} from '@dnd-kit/core';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList" >

      {
        (provided) => (
          <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
        <span className="todos__heading">
          Active Tasks
        </span>
        {
          todos.map((todo) => (
             <SingleTodo 
                todo = {todo} 
                key= {todo.id} 
                todos={todos} 
                setTodos ={setTodos} 
                />
          ))
        }
      </div>
        )
      }

      <div className="todos">
        <span className="todos__heading">
          Active Tasks
        </span>
        {
          todos.map((todo) => (
             <SingleTodo 
                todo = {todo} 
                key= {todo.id} 
                todos={todos} 
                setTodos ={setTodos} 
                />
          ))
        }
      </div>
      </Droppable>
      <div className="todos remove">
<span className="todos__heading">
          completed Tasks
        </span>
        {
          todos.map((todo) => (
             <SingleTodo 
                todo = {todo} 
                key= {todo.id} 
                todos={todos} 
                setTodos ={setTodos} 
                />
          ))
        }
      </div>
    </div>
  )
}

export default TodoList