import React from 'react'
import type { Todo } from '../model'
import { CiEdit  } from 'react-icons/ci'
import { MdDeleteForever, MdDone } from 'react-icons/md'
import "./style.css"

type Props ={
    todo: Todo;
    todos: Todo[];
    setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <form className='todos_single'>
        <span className="todos_single--text">
            {todo.todo}
        </span>
        <div>
            <span className="icon">
                <CiEdit />
            </span>
            <span className="icon">
                <MdDeleteForever />
            </span>
            <span className="icon">
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo