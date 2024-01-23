import React, { useState } from 'react';
import './App.css'

const players = [{ id: 4, name: 'Ronaldo', category: 'Best Player', Image: 'ronaldofenomeno.jpg' },
  { id: 1, name: 'Messi', category: 'Very good Player', Image: './assets/images/messi.jpg'},
  { id: 2, name: 'Cristiano', category: 'Good Player', Image: './assets/images/cristiano.jpg'},
  { id: 3, name: 'Zidane', category: 'Good Player', Image: './assets/images/zidane.jpg'},
];

function App() {
  const [filter, setFilter] = useState('');

  const filteredPlayers = players.filter((player) =>
    player.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Player List</h1>
      <input
        type="text"
        placeholder="Filter by category"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredPlayers.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;