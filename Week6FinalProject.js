// Create a standard deck of 52 cards
const deck = [];
const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
for (let suit of suits) {
  for (let value of values) {
    deck.push({ suit: suit, value: value });
  }
}

// Shuffle the deck
function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}
shuffle(deck);

// Deal 26 cards to each player
const player1 = [];
const player2 = [];
for (let i = 0; i < 26; i++) {
  player1.push(deck[i]);
  player2.push(deck[i + 26]);
}

// Create variables to keep track of scores
let player1Score = 0;
let player2Score = 0;

// Iterate through the turns
while (player1.length > 0 && player2.length > 0) {
  // Get the current cards
  let player1Card = player1.shift();
  let player2Card = player2.shift();
  
  // Compare the cards
  if (values.indexOf(player1Card.value) > values.indexOf(player2Card.value)) {
    player1Score++;
  } else if (values.indexOf(player1Card.value) < values.indexOf(player2Card.value)) {
    player2Score++;
  }
}

// Display the scores and declare the winner
console.log(`Player 1: ${player1Score} points`);
console.log(`Player 2: ${player2Score} points`);
if (player1Score > player2Score) {
  console.log("Player 1 wins!");
} else if (player1Score < player2Score) {
  console.log("Player 2 wins!");
} else {
  console.log("It's a tie!");
}

export {shuffle}
