import './App.css';
import Header from './components/Header';
import {Footer} from './components/Footer';
import {Todos} from './components/Todos';
import {AddTodo} from './components/AddTodo';
import React,{useState, useEffect} from 'react';
import Modal from "./components/Modal/Modal"
export default function App() {
  const [show, setShow] = useState(false)
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
    else{
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }
  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo=(title, desc)=>{
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno +1;
    }
    const myTodo ={
      sno: sno,
      title:title,
      desc:desc
    }
    setTodos([...todos, myTodo]);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])
  return (
    <div className="App">
      <Header title="To-doz" searchBar="true"></Header>
      {/* <button onClick={()=>setShow(true)}>Add a task</button> */}
      <AddTodo addTodo={addTodo}></AddTodo>
      <Todos todos={todos} onDelete={onDelete}></Todos>
      <Footer></Footer>
    </div>
  );
}

