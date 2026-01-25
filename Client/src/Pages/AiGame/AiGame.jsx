// AiGame.jsx
import React, { useEffect, useState } from "react";
import "../../Components/square/Square.css";
import "../../Pages/OnlineGame/OnlineGame.css";

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6],
];

const AiGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const human = "circle";
  const ai = "cross";

  const checkWinner = (b) => {
    for (let [a,b1,c] of winPatterns) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
    }
    if (!b.includes(null)) return "Draw";
    return null;
  };

  const minimax = (newBoard, isMaximizing) => {
    const result = checkWinner(newBoard);
    if (result === ai) return 1;
    if (result === human) return -1;
    if (result === "Draw") return 0;

    if (isMaximizing) {
      let best = -Infinity;
      newBoard.forEach((v,i) => {
        if (!v) {
          newBoard[i] = ai;
          best = Math.max(best, minimax(newBoard, false));
          newBoard[i] = null;
        }
      });
      return best;
    } else {
      let best = Infinity;
      newBoard.forEach((v,i) => {
        if (!v) {
          newBoard[i] = human;
          best = Math.min(best, minimax(newBoard, true));
          newBoard[i] = null;
        }
      });
      return best;
    }
  };

  const aiMove = () => {
    let bestScore = -Infinity;
    let move;

    board.forEach((v,i) => {
      if (!v) {
        const newBoard = [...board];
        newBoard[i] = ai;
        const score = minimax(newBoard, false);
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    });

    const updated = [...board];
    updated[move] = ai;
    setBoard(updated);
    setWinner(checkWinner(updated));
  };

  const handleClick = (i) => {
    if (board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = human;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
    } else {
      setTimeout(aiMove, 300);
    }
  };

  return (
    <div className="main-div">
      <h1 className="water-background game-heading">Play with AI</h1>

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

export default AiGame;
