const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const deck = [];

// Create a standard deck of 52 cards
for (let suit of suits) {
  for (let value of values) {
    deck.push({ suit: suit, value: value });
  }
}

// Shuffle the deck
for (let i = deck.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [deck[i], deck[j]] = [deck[j], deck[i]];
}

const player1 = [];
const player2 = [];

// Deal 26 cards to each player
for (let i = 0; i < 26; i++) {
  player1.push(deck.pop());
  player2.push(deck.pop());
}

let player1Score = 0;
let player2Score = 0;

// Iterate through the turns
while (player1.length > 0 && player2.length > 0) {
  let player1Card = player1.shift();
  let player2Card = player2.shift();

  // Compare the played cards
  if (values.indexOf(player1Card.value) > values.indexOf(player2Card.value)) {
    player1Score++;
  } else if (values.indexOf(player1Card.value) < values.indexOf(player2Card.value)) {
    player2Score++;
  }
}

console.log(`Player 1 score: ${player1Score}`);
console.log(`Player 2 score: ${player2Score}`);

// Declare the winner
if (player1Score > player2Score) {
  console.log("Player 1 wins!");
} else if (player1Score < player2Score) {
  console.log("Player 2 wins!");
} else {
  console.log("It's a tie!");
}
