import { useState } from 'react'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [ToDoList] = useState([])

  const handleChange = (e) => {
    setNewTodo(e.target.value)
  }

  const insert = () => {
    ToDoList.push(newTodo)
    setNewTodo('')
  }

  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <label htmlFor="List">À Faire</label>
        <div>
        <input 
          type="text" 
          id="List" 
          name="List"
          value={newTodo}
          onChange={handleChange}
        />
        </div>
      </div>
      <button onClick={() => insert()}>Ajouter</button>
      {ToDoList.map(e => <div>{e}</div>)}
      
    </div>
  )
}

export default App;