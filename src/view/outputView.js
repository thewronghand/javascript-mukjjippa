const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../utils/constants/message');
const { VALUE } = require('../utils/constants/value');

const outputView = {
  printStart() {
    Console.print(GAME_MESSAGE.gameStart);
  },

  printError(error) {
    Console.print(error);
  },

  printComputerMove(move) {
    Console.print(VALUE.computer + move);
  },

  printRockPaperScissorsWin() {
    Console.print(GAME_MESSAGE.rockPaperScissorsWin);
  },

  printRockPaperScissorsDraw() {
    Console.print(GAME_MESSAGE.rockPaperScissorsDraw);
  },

  printRockPaperScissorsDefeat() {
    Console.print(GAME_MESSAGE.rockPaperScissorsDefeat);
  },

  printMukjjippaResult(result) {
    if (result === VALUE.mukjjippaWin) {
      Console.print(GAME_MESSAGE.mukjjippaWin);
    }
    if (result === VALUE.mukjjippaDefeat) {
      Console.print(GAME_MESSAGE.mukjjippaDefeat);
    }
  },

  printNextMovePlayer() {
    Console.print(GAME_MESSAGE.nextMovePlayer);
  },

  printNextMoveComputer() {
    Console.print(GAME_MESSAGE.nextMoveComputer);
  },

  printGameResult(gameResult) {
    if (gameResult === VALUE.playerWin) {
      Console.print(GAME_MESSAGE.gameResultPlayerWin);
    }
    if (gameResult === VALUE.computerWIn) {
      Console.print(GAME_MESSAGE.gameResultComputerWin);
    }
  },

  printGameQuit() {
    Console.print(GAME_MESSAGE.gameQuit);
  }
};

module.exports = outputView;
