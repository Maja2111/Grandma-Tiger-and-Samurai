
/** 
@description
Oma schläg Samurai
Samuari schläg Tiger
Tiger schläg Oma
*/

//Auswahlmöglichkeiten
choices = ['Grandma', 'Tiger', 'Samuari'];

//Logik zur Bestimmung des Gewinners
function determineWinner(player1Choice, player2Choice) {
  if (player1Choice === player2Choice) {
    return 'draw';
  }

  const winningCombinations = {
    'Grandma': 'Samurai',
    'Samurai': 'Tiger',
    'Tiger': 'Grandma',
  };

  return winningCombinations[player1] === player2 ? player1 : player2;
}

/**
 * Plays a game between two players and determines the winner.
 *
 * @param {string} player1 - The name or identifier of the first player.
 * @param {string} player2 - The name or identifier of the second player.
 * @returns {string} The result of the game: either the winner's name followed by "wins!" or "It's a draw!" or "Invalid choice" if an invalid input is provided.
 */

function playGame(player1, player2) {
  const player1Choice = choices[player1];
  const player2Choice = choices[player2];

  if (!player1Choice || !player2Choice) {
    return 'Invalid choice';
  }

  const winner = determineWinner(player1Choice, player2Choice);
  
  if (winner === 'draw') {
    return 'It\'s a draw!';
  } else {
    return `${winner} wins!`;
  }
}