import React from 'react';

const GameModeSelection = ({ onSelectMode }) => {
  return (
    <div className="game-mode-selection">
      <h2>Select Game Mode</h2>
      <button onClick={() => onSelectMode('vsComputer')}>Play vs Computer</button>
      <button onClick={() => onSelectMode('twoPlayers')}>Play 2 Players</button>
    </div>
  );
};

export default GameModeSelection;
