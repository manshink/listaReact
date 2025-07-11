import React from 'react'
import type { Todo } from '../model'
import { CiEdit  } from 'react-icons/ci'
import { MdDeleteForever, MdDone } from 'react-icons/md'
import "./style.css"
import TodoList from '../TodoList'

// corregir arriba, quitar un puntico nada mas hago esto para la racha de github

type Props ={
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
    
    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id===id?{...todo, isDone:!todo.isDone}: todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    // Hola
  
    return (
    <form className='todos_single'>
        {
            todo.isDone?(
                <s className="todos_single--text">
                    {todo.todo}
                </s>
            ):(
                <span className="todos_single--text">
                    {todo.todo}
                </span>
            )
        }

        <div>
            <span className="icon">
                <CiEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
                <MdDeleteForever />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo