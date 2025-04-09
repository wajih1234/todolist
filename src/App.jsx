import { useState } from "react";
import "./styles.css"
import {NewTodoForm} from "./NewTodoForm"

export  default function App() {
 
 
  const [todos,setTodos]=useState([])


   
   function addTodo(title){
  setTodos(currentTodos =>{
    return [
    ...currentTodos,
    {id:crypto.randomUUID(),title,completed:
      false},

      ]

    })}

  
    function toggleTodo(id, completed) {
      setTodos(currentTodos => {
        return currentTodos.map(todo => {
          if (todo.id === id) {
            todo.completed=completed
            return { ...todo, completed }
          }
  
          return todo
        })
      })
    }
    function deleteTodo(id) {
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
      })
    }
  

  return (<>


        <NewTodoForm  onSubmit={addTodo} />
        <h1 className="header">to do list</h1>
        <ul  className="list">
        {todos.length === 0     && "NO TODOS"}
         {todos.map(todo => {
          return (
             <li key={todo.id} >
           
            <label >
            {todo.title}
            <input type="checkbox"  checked={todo.completed}
            onChange={e => toggleTodo(todo.id, e.target.checked)}
              
            />
            </label>
            <button  onClick={()=>deleteTodo(todo.id)}     className="btn">delete</button>
           </li>
        )})}
          
        </ul>

        </>)
}


