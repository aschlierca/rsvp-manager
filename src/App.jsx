import { useState } from 'react'
import './App.css'

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Company Picninc RSVP</h1>

      <form>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button type="submit">Add Guest</button>
      </form>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}