//constant arrays of card suits and values with global scope
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//create a standard deck of 52 cards using class structure
//loops thru suits & values to create cards & pushes them to deck array
class Deck {
    constructor() {
      this.deck = [];
        for (const suit of suits) {
        for (const value of values) {
          this.deck.push({ suit, value });
        }
      }
    }
//shuffle the deck by looping thru each card & creating a randomly generated card & swapping them
    shuffle() {
      for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
      }
    }
  }
//create an instance of the Deck class
const deck = new Deck()
//perform the shuffle function on the deck instance created
deck.shuffle()  

//deal 26 cards to each player by looping thru created deck & pushing 2 cards, 1 each player1 & player2 
const player1 = [];
const player2 = [];
for (let i = 0; i < 26; i++) {
  player1.push(deck.deck[i]);
  player2.push(deck.deck[i + 26]);
}

//create variables for scores
let player1Score = 0;
let player2Score = 0;

//iterate thru the turns
while (player1.length > 0 && player2.length > 0) {
//play the first element in the array
  let player1Card = player1.shift();
  let player2Card = player2.shift();
  
//compare the cards & count to scores
  if (values.indexOf(player1Card.value) > values.indexOf(player2Card.value)) {
    player1Score++;
  } else if (values.indexOf(player1Card.value) < values.indexOf(player2Card.value)) {
    player2Score++;
  }
}

//display the scores and declare the winner
console.log(`Player 1: ${player1Score} points`);
console.log(`Player 2: ${player2Score} points`);
if (player1Score > player2Score) {
  console.log("Player 1 wins!");
} else if (player1Score < player2Score) {
  console.log("Player 2 wins!");
} else {
  console.log("It's a tie!");
}

