const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`)
  }
  
  printQuestion(round) {
    util.main(round);
  }

  start() {
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
  }
}

module.exports = Game;