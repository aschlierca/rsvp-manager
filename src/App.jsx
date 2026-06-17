import { useState } from 'react'
import './App.css'

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuest] = useState([])

  function handleSubmit(e) {
    e.preventDefault();

    const newGuest = {
      id: Date.now(),
      name: name,
      email: email,
    };

    setGuest([...guests, newGuest]);
    setName("");
    setEmail("");
  }

  return (
    <div>
      <h1>Company Picninc RSVP</h1>

      <form onSubmit={handleSubmit}>
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

      <h2>Guest List</h2>
      {guests.map(guest => (
        <p key={guest.id}>
          {guest.name} {guest.email}
        </p>
      ))}
      
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}