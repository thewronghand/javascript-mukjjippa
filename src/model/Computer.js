const mukjjippaRandomGenerator = require('../utils/mukjjippaRandomGenerator');

class Computer {
  #winCount;

  constructor() {
    this.#winCount = 0;
  }

  getWinCount() {
    return this.#winCount;
  }

  addWinCount() {
    this.#winCount = this.#winCount + 1;
  }

  resetWinCount() {
    this.#winCount = 0;
  }

  generateRockPaperScissors() {
    return mukjjippaRandomGenerator.generateRockPaperScissors();
  }

  generateMukjjippa() {
    return mukjjippaRandomGenerator.generateMukjjippa();
  }
}

module.exports = Computer;
