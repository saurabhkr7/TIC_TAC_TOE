import { useState } from 'react';
import './App.css';
import { Board } from './Components/Board';
function App() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }
  return (
    <div className="App">
      <Board currentPlayer={currentPlayer} changePlayer={() => changePlayer()} ></Board>
    </div>
  );
}

export default App;
