// import React, {useState} from 'react';
// export const Modal=props=>{
//     if(!props.show){
//         return null
//     }
//     const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//     const submit=(e)=>{
//         e.preventDefault();
//         if(!title||!desc){
//           alert("Title or Description of the to-do cannot be empty")
//         }
//         else{
//         props.addTodo(title, desc);
//         setTitle("");
//         setDesc("");
//         }
//       }
//     return(
//         <div className='modal'>
//             <div className='modal-content'>
//                 <div className='modal-header'>
//                     <h4 className='modal-title'>Add a task</h4>
//                 </div>
//                 <div>
//                 <form onSubmit={submit}>
//   <div className="my-3">
//     <label htmlFor="title" className="form-label">To-do Title</label>
//     <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="title"/>
//   </div>
//   <div className="my-3">
//     <label htmlFor="desc" className="form-label">To-do Description</label>
//     <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
//   </div>
//   <button type="submit" Name="btn btn-success btn-sm">Add To-do</button>
// </form>
//                 </div>
//             </div>
//         </div>
//     )
// }