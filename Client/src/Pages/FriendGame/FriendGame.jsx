// Friend.jsx
import React, { useState } from "react";
import "../../Components/square/Square.css";
import "../../Pages/OnlineGame/OnlineGame.css";

const Friend = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("circle");
  const [winner, setWinner] = useState(null);

  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ];

  const checkWinner = (newBoard) => {
    for (let [a,b,c] of winPatterns) {
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    if (!newBoard.includes(null)) return "Draw";
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
    } else {
      setCurrentPlayer(currentPlayer === "circle" ? "cross" : "circle");
    }
  };

  return (
    <div className="main-div">
      <h1 className="water-background game-heading">Play with Friend</h1>

      <div className="square-wrapper">
        {board.map((cell, i) => (
          <div key={i} className="square" onClick={() => handleClick(i)}>
            {cell === "circle" ? "O" : cell === "cross" ? "X" : ""}
          </div>
        ))}
      </div>

      {winner && (
        <h3 className="finished-state">
          {winner === "Draw" ? "It's a Draw" : `${winner} won the game`}
        </h3>
      )}
    </div>
  );
};

export default Friend;
