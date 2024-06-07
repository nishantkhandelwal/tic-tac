import Square from "./Square";
import {
  buttonStyle,
  boardStyle,
  instructionsStyle,
  containerStyle,
} from "../styles/styles";

const Board = ({
  board,
  isXnext,
  winner,
  gameOver,
  handleSquareClick,
  handleRest,
}) => {
  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        <span>
          {!gameOver && !winner ? "Next Player: " + (isXnext ? "X" : "O") : ""}
        </span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        <span>
          {gameOver && !winner
            ? "Game Over"
            : winner
            ? "Winner: " + winner
            : ""}
        </span>
      </div>
      <button style={buttonStyle} onClick={handleRest}>
        Reset
      </button>
      <div style={boardStyle}>
        {board.map((playerMark, idx) => (
          <Square
            key={idx}
            squareId={idx}
            playerMark={playerMark}
            handleSquareClick={handleSquareClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
