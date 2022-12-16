const Player = require('../model/Player');
const Computer = require('../model/Computer');
const check = require('../utils/checker');
const { VALUE, NUMBER } = require('../utils/constants/value');

class MukjjippaGame {
  #player;
  #computer;
  #gameWin;

  constructor() {
    this.#player = new Player();
    this.#computer = new Computer();
  }

  getPlayerWinCount() {
    return this.#player.getWinCount();
  }

  getComputerWinCount() {
    return this.#computer.getWinCount();
  }

  playRockPaperScissors(playerInput) {
    const computerInput = this.#computer.generateRockPaperScissors();
    const result = check.rockPaperScissors(playerInput, computerInput);
    return [computerInput, result];
  }

  playMukjjippa(playerInput, rockPaperScissorsResult) {
    const computerInput = this.#computer.generateMukjjippa();
    if (rockPaperScissorsResult === VALUE.rockPaperScissorsWin) {
      const playerResult = check.mukjjippa(playerInput, computerInput);
      this.setMukjjippaWinCount(this.#player, playerResult);
      return [computerInput, playerResult];
    }
    const computerResult = check.mukjjippa(computerInput, playerInput);
    this.setMukjjippaWinCount(this.#computer, computerResult);
    if (computerResult === VALUE.mukjjippaWin) {
      return [computerInput, VALUE.mukjjippaDefeat];
    }
    if (computerResult === VALUE.rockPaperScissorsWin) {
      return [computerInput, VALUE.rockPaperScissorsDefeat];
    }
    if (computerResult === VALUE.rockPaperScissorsDefeat) {
      return [computerInput, VALUE.rockPaperScissorsWin];
    }
  }

  setMukjjippaWinCount(user, mukjjippaResult) {
    if (user instanceof Player && mukjjippaResult === VALUE.mukjjippaWin) {
      this.#player.addWinCount();
    }
    if (user instanceof Computer && mukjjippaResult === VALUE.mukjjippaWin) {
      this.#computer.addWinCount();
    }
  }

  setGameWin() {
    const playerWinCount = this.getPlayerWinCount();
    const computerWinCount = this.getComputerWinCount();
    if (playerWinCount === NUMBER.validWinCount) {
      this.#gameWin = true;
      return;
    }
    if (computerWinCount === NUMBER.validWinCount) {
      this.#gameWin = false;
    }
  }

  resetGameStatus() {
    this.#computer.resetWinCount();
    this.#computer.resetWinCount();
  }
}

module.exports = MukjjippaGame;
