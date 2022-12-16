const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../utils/constants/message');

const inputView = {
  readRockPaperScissors(callback) {
    Console.readLine(GAME_MESSAGE.readRockPaperScissors, (input) => {
      callback(input);
    });
  },

  readMukjjippa(callback) {
    Console.readLine(GAME_MESSAGE.readMukjjippa, (input) => {
      callback(input);
    });
  },

  readGameCommand(callback) {
    Console.readLine(GAME_MESSAGE.readGameCommand, (input) => {
      callback(input);
    });
  }
};

module.exports = inputView;
