import React, {useState} from 'react'

function Forms({data,id}) {

  console.log(data.title);


  const [title, setTitle] = useState(data.title)
  const [body, setBody] = useState(data.body)

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {title, body}
    console.log(data);

    fetch(`http://localhost:5000/todo/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => window.location.reload())
  

  }

  return (
    <div>
      <form action="">

      <input type="text"  value={title} onChange={(e)=> setTitle(e.target.value)}/>
       <br/>

      <textarea name="" id="" cols="30" rows="10" value={body} onChange={(e)=> setBody(e.target.value)}>
            Enter your todo
          </textarea>

      </form>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Forms