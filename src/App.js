import { useState } from "react"

function App() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo === "") {
      return
    }
    setToDos((currentArray) => [toDo, ...currentArray])
    setToDo("")
  }
  const onDelete =(event) =>{
    console.log(event.target.value)
    setToDos((currentArray) => [...currentArray].splice(event.target.value,1))
  }
  console.log(toDos)
  return (

    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your todo..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li value={index }onClick={onDelete} key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
