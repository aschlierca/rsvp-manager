export default function GuestList({guests, onRemove}) {
    if (guests.length === 0) {
        return <p>No guests yet. Be the first to RSVP!</p>
    }

    return (
    <ul>
      {guests.map((guest) => (
        <li key={guest.id}>
          {guest.name} - {guest.email}
          <button onClick={() => onRemove(guest.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

