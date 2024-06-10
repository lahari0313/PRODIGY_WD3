import React from 'react';
import Cell from './Cell';

function Board({ gameBoard, handleCellClick }) {
    return (
        <div className="board">
            {gameBoard.map((cell, index) => (
                <Cell key={index} value={cell} onClick={() => handleCellClick(index)} />
            ))}
        </div>
    );
}

export default Board;
