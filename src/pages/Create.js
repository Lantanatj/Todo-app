import React, {useState} from 'react' 
import {useNavigate} from 'react-router-dom'

function Create (){
  const navigate = useNavigate()
const [title, setTitle] = useState("")
const [body, setBody] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {title, body}
    console.log(data);

    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => console.log("new data added"))
    navigate('/tasks')

  }

  
  return (
    <div className='createPage'>
      Create
      <form action=''>
        <div>
          <input type="text" placeholder='title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
        </div>

        <div>
          <textarea name="" id="" cols="30" rows="10" value={body} onChange={(e)=> setBody(e.target.value)}>
            Enter your todo
          </textarea>
          <br/>
          <button onClick={handleSubmit}>submit</button>
        </div>

      </form>

    </div>
  )
}

export default Create