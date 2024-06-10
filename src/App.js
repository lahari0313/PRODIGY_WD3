import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tic Tac Toe Game</h1>
      </header>
      <main className="App-main">
        <TicTacToe />
      </main>
      <footer className="App-footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
