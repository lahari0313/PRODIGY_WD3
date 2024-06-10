import React, { useState } from 'react';
import Board from './Board';

const initialGameState = {
  currentPlayer: 'X',
  gameBoard: ['', '', '', '', '', '', '', '', ''],
  gameActive: true
};

function TicTacToe() {
  const [gameState, setGameState] = useState({ ...initialGameState });

  // Function to handle cell click
  const handleCellClick = (index) => {
    if (gameState.gameBoard[index] === '' && gameState.gameActive) {
      const newBoard = [...gameState.gameBoard];
      newBoard[index] = gameState.currentPlayer;
      setGameState({
        ...gameState,
        currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
        gameBoard: newBoard,
        gameActive: !checkWin(newBoard) && newBoard.includes('')
      });
    }
  };

  // Function to check for a winner
  const checkWin = (board) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    return winConditions.some((condition) =>
      condition.every((index) => board[index] !== '' && board[index] === board[condition[0]])
    );
  };

  // Function to reset the game
  const resetGame = () => {
    setGameState({ ...initialGameState });
  };

  // Function to stop the game
  const stopGame = () => {
    setGameState({
      ...gameState,
      gameActive: false
    });
  };

  return (
    <div className="tic-tac-toe">
      <Board gameBoard={gameState.gameBoard} handleCellClick={handleCellClick} />
      <div className="game-controls">
        <button onClick={resetGame}>Restart Game</button>
        <button onClick={stopGame}>Stop Game</button>
      </div>
      {!gameState.gameActive && (
        <div className="game-status">
          {checkWin(gameState.gameBoard) ? `Player ${gameState.currentPlayer === 'X' ? 'O' : 'X'} wins!` : 'It\'s a draw!'}
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
