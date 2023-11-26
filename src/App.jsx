import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  const winner = calculateWinner(squares);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }
    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setIsNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
