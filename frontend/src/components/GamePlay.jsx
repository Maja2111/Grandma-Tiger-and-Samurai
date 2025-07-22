import React, { useState, useEffect } from 'react';

const GamePlay = ({ player1Figure, player2Figure, isTwoPlayers }) => {
  const [player2Choice, setPlayer2Choice] = useState('');
  const [result, setResult] = useState('');

  const figures = ['Grandma', 'Tiger', 'Samurai'];

  // Zufällige Auswahl für Computer, falls nicht zwei Spieler
  useEffect(() => {
    if (!isTwoPlayers) {
      const randomChoice = figures[Math.floor(Math.random() * figures.length)];
      setPlayer2Choice(randomChoice);
    } else {
      setPlayer2Choice(player2Figure);
    }
  }, [isTwoPlayers, player2Figure]);

  // Spiel-Logik
  const determineWinner = (choice1, choice2) => {
    if (choice1 === choice2) return 'Draw';
    if (
      (choice1 === 'Grandma' && choice2 === 'Samurai') ||
      (choice1 === 'Samurai' && choice2 === 'Tiger') ||
      (choice1 === 'Tiger' && choice2 === 'Grandma')
    ) {
      return 'Player 1 wins';
    }
    return 'Player 2 wins';
  };

  useEffect(() => {
    if (player1Figure && player2Choice) {
      const gameResult = determineWinner(player1Figure, player2Choice);
      setResult(gameResult);
    }
  }, [player1Figure, player2Choice]);

  return (
    <div className="game-play">
      <h2>Game Result</h2>
      <p>Player 1 chose: {player1Figure}</p>
      <p>Player 2 chose: {player2Choice}</p>
      <p>Result: {result}</p>
    </div>
  );
};

export default GamePlay;
