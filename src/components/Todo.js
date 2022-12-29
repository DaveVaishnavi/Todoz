import React from "react"
import { Todos } from "./Todos"
export const Todo=({todo, onDelete})=>{
    return(
        <div>
            <div class="card">
            <div class="card-header">
    Task no. {todo.sno +1}
  </div>
  <div class="card-body">
    <h5 class="card-title">{todo.title}</h5>
    <p class="card-text">{todo.desc}</p>
    <button className="btn btn-sm btn-success" onClick={()=>{onDelete(todo)}}>Completed</button>
  </div>
</div>
        </div>
    )
}