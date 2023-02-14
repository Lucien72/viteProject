import { useState } from 'react'
import './App.css'

const props = ["name", "email", "tel",];
const opts = { multiple: true };

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

  const contact = () => {
    if (supported) {
        getContacts().then(r => console.log(r))
    }
  }
  
  async function getContacts() {
    try {
        const contacts = await navigator.contacts.select(props, opts);
        setTestContact([...testContact, ...contacts])
    } catch (ex) {
        // Handle any errors here.
    }
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
      <button onClick={() => contact()}>Contact</button>      
    </div>
  )
}

export default App;