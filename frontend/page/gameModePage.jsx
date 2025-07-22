import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRobot, faDiceD20} from '@fortawesome/free-solid-svg-icons';

const GameModePage = () => {
  const [selectedMode, setSelectedMode] = useState('');
  return (
    <div>
      <header>
        <h1>Welcome to Grandma, Samurai and Tiger</h1>
        <h2>Select your game mode to start playing!</h2>
      </header>
      <main>
        <section className="game-mode-selection">
          <p> Game Modes: </p>
          <label>
            <input type="radio" name="gameMode" value="player-vs-computer" checked={selectedMode === 'player-vs-computer'}  onChange={() => setSelectedMode('player-vs-computer')} />Player <FontAwesomeIcon icon={faDiceD20}/> vs. Computer <FontAwesomeIcon icon={faRobot} />
          </label>
          <label>
            <input type="radio" name="gameMode" value="player-vs-player" checked={selectedMode === 'player-vs-player'} onChange={() => setSelectedMode('player-vs-player')} />Player <FontAwesomeIcon icon={faDiceD20}/> vs. Player <FontAwesomeIcon icon={faDiceD20} />
          </label>
        </section>
      </main>
    </div>
  );
}

export default GameModePage;