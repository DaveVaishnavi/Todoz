import React from "react"
import {Todo} from "./Todo";
export const Todos=(props)=>{
    let myStyle={
        minHeight:"70vh",
        margin: "40px auto"
    }
    return(
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">All I need to do</h3>
            {props.todos.length===0?"I am all set! Nothing to do!":
            props.todos.map((todo)=>{
                return (
                <>
                <Todo key={todo.sno} todo={todo} onDelete={props.onDelete}/>
                <hr></hr>
                </>
                )
            })}
        </div>
    )
}