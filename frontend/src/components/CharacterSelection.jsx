import React from 'react';

const CharacterSelection = ({ onSelectCharacter }) => {
  const characters = [
    { name: 'Grandma', img: '../pics/Oma.svg' },
    { name: 'Tiger', img: '../pics/Tiger.svg' },
    { name: 'Samurai', img: '../pics/samurai.svg' }
  ];
  

  return (
    <div className="character-selection">
      <h2>Choose your character</h2>
      <div className="characters">
        {characters.map((character) => (
          <button key={character.name} onClick={() => onSelectCharacter(character.name)}>
            <img src={character.img} alt={character.name} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelection;
