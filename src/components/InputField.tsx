import React, { useRef } from 'react'
import './style.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e: React.FormEvent) => void;
}

const InputField: React.FC<Props>= ({todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement> (null);

  return (
    <form action="" className="input" onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur();
      }}>
        
        <input 
            ref={inputRef}
            type="input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder='Enter a task' 
            className='input_box' 
        />
        
        <button className='input_submit' type='submit'>
            Go
        </button>
    </form>
  )
}

export default InputField