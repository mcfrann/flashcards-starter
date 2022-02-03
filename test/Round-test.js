const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {
    let card1;
    let card2;
    let card3;
    let deck;
    let round;

    beforeEach(function() {
        card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        card2 = new Card(2, 'What data type is 40?', ['boolean', 'integer', 'string'], 'integer');
        card3 = new Card(3, 'How do you check the length of a string or array?', ['.length', '.includes', '.sum'], '.length');
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    })

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    })

    it('should take in deck as argument and store cards in deck', () => {
        expect(round.deck).to.deep.equal([card1, card2, card3]);
        expect(round.deck.length).to.equal(3);
    })

    it('should store and return current card', () => {
        expect(round.currentCard).to.deep.equal(card1);
        expect(round.returnCurrentCard()).to.deep.equal(card1);
    })

    it('should be able to take turns', () => {
        expect(round.takeTurn).to.be.a('function');
    })

    it('should update turns count when each new turn', () => {
        round.takeTurn();
        round.takeTurn();

        expect(round.turns).to.equal(2);
    })

    it('should instantiate turn class when entering a guess', () => {
        round.takeTurn('array');

        expect(round.turn).to.be.an.instanceof(Turn);
    })

    it('should change to next card after each turn', () => {
        round.takeTurn('array');
        
        expect(round.currentCard).to.deep.equal(card2);
        
        round.takeTurn('integer');

        expect(round.currentCard).to.deep.equal(card3)
    })

    it('should evaluate if guess is true or false', () => {
        expect(round.takeTurn('array')).to.equal('correct!');
        expect(round.takeTurn('string')).to.equal('incorrect!');
    })

    it('should add incorrect answers to incorrectGuesses array by id', () => {
        round.takeTurn('string');

        expect(round.incorrectGuesses.length).to.equal(1);
        expect(round.incorrectGuesses).to.deep.equal([1]);
    })

    it('should calculate percentage of correct answers', () => {
        round.takeTurn('array');
        round.takeTurn('boolean');

        expect(round.calculatePercentCorrect()).to.equal(50);
    })

    it('should end game and show percentage correct', () => {
        round.takeTurn('array');
        round.takeTurn('boolean');
        round.takeTurn('.length');
        round.calculatePercentCorrect();

        expect(round.endRound()).to.equal('** Round Over! ** You answered 67% of the questions correctly!');
    })
})