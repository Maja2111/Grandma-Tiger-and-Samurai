import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRobot, faDiceD20} from '@fortawesome/free-solid-svg-icons';
import CharacterSelection from '../src/components/CharacterSelection.jsx';

const GameModePage = () => {
  const [selectedMode, setSelectedMode] = useState('');
  const [selectedCharacter, setSelectedCharacter]=useState('');
  return (
    <div>
      <header>
        <h1>Welcome to Grandma, Samurai and Tiger</h1>

      </header>
      <main>
          <h2>Select your game mode to start playing!</h2>
        {!selectedMode && (
        <section className="game-mode-selection">
          
          <p> Game Modes: </p>
          <label>
            <input className="radio" type="radio" name="gameMode" value="player-vs-computer" checked={selectedMode === 'player-vs-computer'}  onChange={() => setSelectedMode('player-vs-computer')} />Player <FontAwesomeIcon icon={faDiceD20}/> vs. Computer <FontAwesomeIcon icon={faRobot} />
          </label>
          <label>
            <input className='radio' type="radio" name="gameMode" value="player-vs-player" checked={selectedMode === 'player-vs-player'} onChange={() => setSelectedMode('player-vs-player')} />Player <FontAwesomeIcon icon={faDiceD20}/> vs. Player <FontAwesomeIcon icon={faDiceD20} />
          </label>
        </section>)}

{/* hier kommt das eigentliche Spiel */}

        {selectedMode === 'player-vs-computer' && (
          <section>
              <h2>Player vs Computer</h2>
            <CharacterSelection onSelectCharacter={setSelectedCharacter} />
            {selectedCharacter && <p>You selected: {selectedCharacter}</p>}
            <button onClick={() => setSelectedMode('')}>back</button>
          </section>
        )}

        {selectedMode === 'player-vs-player' && (
          <section>
            <h2>Player vs Player</h2>
           <CharacterSelection onSelectCharacter={setSelectedCharacter} />
            {selectedCharacter && <p>You selected: {selectedCharacter}</p>}
            <button onClick={() => setSelectedMode('')}>back</button> 
            {/* Hier kommt dein Spiel für diesen Modus */}
          </section>
        )}

      </main>
    </div>
  );
}

export default GameModePage;