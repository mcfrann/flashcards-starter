const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound;
    this.currentDeck;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`)
  }
  
  printQuestion(round) {
    util.main(round);
  }

  start() {
    const allCards = prototypeQuestions.map(flashCard => {
      return new Card(flashCard.id, flashCard.question, flashCard.answers, flashCard.correctAnswer)
    })
    const deck = new Deck(allCards);
    const round = new Round(deck);
    this.currentRound = round;
    this.currentDeck = deck;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;