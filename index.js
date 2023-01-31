var expect = chai.expect
import {shuffle} from './Week6FinalProject.js'
console.log(shuffle);

describe('shuffle', function() {
  it('should return an array of the same length', function() {
    let deck = [{ suit: 'hearts', value: '2' }, { suit: 'diamonds', value: '3' }, { suit: 'clubs', value: '4' }, { suit: 'spades', value: '5' }];
    let shuffledDeck = deck.shuffle();
    console.log(shuffledDeck);
    expect(shuffledDeck.length).to.equal(deck.length);
  });
});
