const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../utils/constants/message');

const inputView = {
  readRockPaperScissors(callback) {
    Console.readLine(GAME_MESSAGE.readRockPaperScissors, () => {
      callback(input);
    });
  },

  readMukjjippa(callback) {
    Console.readLine(GAME_MESSAGE.readMukjjippa, () => {
      callback(input);
    });
  },

  readGameCommand(callback) {
    Console.readLine(GAME_MESSAGE.readGameCommand, () => {
      callback(input);
    });
  }
};

module.exports = inputView;
