const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
    let card1;
    let card2;
    let card3;
    let deck;

    beforeEach(function() {
        card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        card2 = new Card(2, 'What data type is 40?', ['boolean', 'integer', 'string'], 'integer');
        card3 = new Card(3, 'How do you check the length of a string or array?', ['.length', '.includes', '.sum'], '.length');
        deck = new Deck([card1, card2, card3]);
    })

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    })

    it('should take in array of cards as argument and save to array', () => {
        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    })

    it('should count cards in deck', () => {
        expect(deck.countCards()).to.equal(3);
    })
})