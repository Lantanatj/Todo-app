import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'



const Home = () => {
    const [todo, setTodo] = useState(null)

    const getdata = ()=>{
        fetch("https://node-todo-app45.herokuapp.com/todo/")
        .then((res) => res.json())
        .then((data)=> setTodo(data.todos))
      }
  
      useEffect(()=>{
            getdata()
  
        
      }, [])
  

  return (
    <div className='todo_body'>
        <div className='mappedItem'>
            {todo &&  <> {todo.map((data)=>(
                <div  key={data._id}>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>

                    <Link to={`/${data._id}`}>Read more</Link>
                    <hr/>
                    
                </div>
            ))}</>}
        </div>
        
    </div>
  )
}

export default Home