class Player {
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
}

module.exports = Player;
