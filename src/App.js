import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Game from './components/Game';

function App() {

  const [input, setInput] = useState("");
  const [api, setApi] = useState([]);
  console.log(input);

  const searchGames = () => {

    if (input != "") {
      axios.get(`https://www.cheapshark.com/api/1.0/games?title=${input}`)
      .then(res=>setApi(...api, res.data))
    }
    setApi([]);
  }

  return (
    <div className="App">

      <h1>Játék kereső</h1>
      <input type="text" placeholder="Írd be a játék nevét..." value={input} onChange={(e) => {
        setInput(e.target.value)
      }} />
      <button onClick={searchGames}>Keresés</button>
      {
        api.map(game =>{
          return <Game id={game.gameID} cheapest={game.cheapest} external={game.external} thumb={game.thumb}/>
        })
      }
    </div>
  );
}

export default App;
