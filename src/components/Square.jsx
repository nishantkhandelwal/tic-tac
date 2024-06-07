import { squareStyle } from "../styles/styles";
const Square = ({ playerMark, squareId, handleSquareClick }) => {
  return (
    <div
      className="square"
      style={squareStyle}
      onClick={() => handleSquareClick(squareId)}
    >
      {playerMark}
    </div>
  );
};

export default Square;
