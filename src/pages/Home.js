import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HashLoader from 'react-spinners/HashLoader'



const Home = () => {
    const [todo, setTodo] = useState(null)
    const [loading, setLoading] = useState(false)

    const getdata = () => {
        fetch("https://node-todo-app45.herokuapp.com/todo/")
            .then((res) => res.json())
            .then((data) => setTodo(data.todos))
    }

    useEffect(() => {

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 7000)

        getdata()


    }, [])
   

    return (


        <div className="App">
            {
                loading ?

                    <div className="loaders">
                        <HashLoader
                            className='loader'
                            size={50}
                            background='transparent'
                            color={"#3d2c8d"}
                            loading={loading}
                        />
                    </div>
                    :
                    <div className='todo_body'>
                        <div className='mappedItem'>
                            {todo && <> {todo.map((data) => (
                                <div key={data._id}>
                                    <h1>{data.title}</h1>
                                    <p>{data.body}</p>

                                    <Link to={`/${data._id}`}>Read more</Link>
                                    <hr />

                                </div>
                            ))}</>}
                        </div>

                    </div>
            }

        </div>
    )
}

export default Home