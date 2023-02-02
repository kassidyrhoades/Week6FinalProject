var expect = chai.expect
//checking to see if a new instance of Deck class with shuffle function performed on it will indeed have 52 cards
describe('shuffle', function() {
  it('should return an array of the same length', function() {
    let shuffledDeck = new Deck()
    shuffledDeck.shuffle()
    console.log(shuffledDeck);
    expect(shuffledDeck.deck.length).to.equal(52);
  });
});
