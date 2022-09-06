import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import Forms from './Forms'



const Details = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState(null)

    const [upd, setUpd] = useState(false)
    const getdata = ()=>{
        // fetch(`http://localhost:5000/todo/${id}`)

        fetch(`https://node-todo-app45.herokuapp.com/todo/${id}/`)
        .then((res) => res.json())
        .then((data)=> setTodo(data))
      }
  
      useEffect(()=>{
            getdata()
  
        
      }, )

    const getDelet = ()=>{
        fetch(`https://node-todo-app45.herokuapp.com/todo/${id}`, {
            method: "DELETE",
        }).then(()=> navigate("/tasks"))
    }


    const updatebutton = () => {
      console.log("wroking");
      setUpd(!upd)

    }

  return (
    <div className='todo_body'>
        Details:
        {todo && (
        <>
            <h1>{todo.title}</h1>
            <p>{todo.body}</p>
            <small>{todo.createdAt}</small>
            <div>
                <button onClick={updatebutton}>update</button>
                <button onClick={getDelet}>delete</button>
            </div>
        </>
        )}
        <div>
        </div>
            {upd  && <div> <Forms data={todo} id={id}/> </div>}
    </div>
  )
}

export default Details