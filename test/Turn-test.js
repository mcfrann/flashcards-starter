const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', () => {
    let card;
    let turn1;
    let turn2;

    beforeEach(function() {
        card = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        turn1 = new Turn('array', card);
        turn2 = new Turn('string', card);
    })

    it('should be a function', () => {
        expect(Turn).to.be.a('function')
    })

    it('should take guess and Card instance as arguments', () => {
        expect(turn1.guess).to.equal('array');
    })

    it('should return guess', () => {
        expect(turn1.returnGuess()).to.equal('array');
    })

    it('should return the card', () => {
        expect(turn1.returnCard()).to.deep.equal( { id: 1, question: 'What type of object is closest to a list?', answers: [ 'array', 'string', 'boolean' ], correctAnswer: 'array' });
    })

    it('should check guess to see if it matches correct answer on card', () => {
        expect(turn1.evaluateGuess()).to.equal(true);
        expect(turn2.evaluateGuess()).to.equal(false);
    })

    it('should return feedback based on an incorrect/correct guess', () => {
        expect(turn1.giveFeedback()).to.equal('correct!');
        expect(turn2.giveFeedback()).to.equal('incorrect!');
    })
})