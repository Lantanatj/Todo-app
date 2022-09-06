import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'


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
    <div >
        <div className='mappedItem'>
            {todo &&  <> {todo.map((data)=>(
                <div className='todo_body' key={data._id}>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>

                    <Link to={`/${data._id}`}>Read more</Link>
                    <hr/>
                    
                </div>
            ))}</>}
        </div>
        <Footer/>
    </div>
  )
}

export default Home