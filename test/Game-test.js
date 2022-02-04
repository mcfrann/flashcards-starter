const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Round = require('../src/Round')

describe('Game', () => {
    let game;

    beforeEach(function() {
        game = new Game();
        game.start();
    })

    it ('should be instance of Game', () => {
        expect(game).to.be.an.instanceof(Game);
    })

    it('should be able to start game', () => {
        expect(game.start).to.be.a('function');
    })

    it('should keep track of current round', () => {
        expect(game.currentRound).to.exist;
    })

    it('should create cards', () => {
        expect(game.currentDeck.cards[0]).to.be.an.instanceof(Card);
    })

    it('should put cards in a deck', () => {
        expect(game.currentDeck.cards.length).to.equal(30);
    })

    it('should use deck as argument to instantiate new round', () => {
        expect(game.currentRound).to.be.an.instanceof(Round);
    })
})