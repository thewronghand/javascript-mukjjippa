const inputView = require('../view/inputView');
const outputView = require('../view/outputView');
const MukjjippaGame = require('../model/MukjjippaGame');
const validate = require('../utils/validation');
const { VALUE, NUMBER, KEY } = require('../utils/constants/value');
const { ERROR } = require('../utils/constants/message');
const { Console } = require('@woowacourse/mission-utils');

class MukjjippaGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = inputView;
    this.#outputView = outputView;
    const mukjjippaGame = new MukjjippaGame();
    this.#outputView.printStart();
    this.readRockPaperScissors(mukjjippaGame);
  }

  readRockPaperScissors(game) {
    this.#inputView.readRockPaperScissors((input) => {
      this.handleRockPaperScissors(input, game);
    });
  }

  readMukjjippa(game, result) {
    this.#inputView.readMukjjippa((input) => {
      this.handleMukjjippa(input, game, result);
    });
  }

  readGameCommand(game) {
    this.#inputView.readGameCommand((input) => {
      this.handleGameCommand(input, game);
    });
  }

  handleRockPaperScissors(input, game) {
    try {
      validate.rockPaperScissors(input);
      const rockPaperScissorsResultArray = game.playRockPaperScissors(input);
      const [computerInput, rockPaperScissorsResult] =
        rockPaperScissorsResultArray;
      this.#outputView.printComputerMove(computerInput);
      switch (rockPaperScissorsResult) {
        case VALUE.rockPaperScissorsWin:
          this.#outputView.printRockPaperScissorsWin();
          this.readMukjjippa(game, rockPaperScissorsResult);
          break;
        case VALUE.rockPaperScissorsDraw:
          this.#outputView.printRockPaperScissorsDraw();
          this.readRockPaperScissors(game);
          break;
        case VALUE.rockPaperScissorsDefeat:
          this.#outputView.printRockPaperScissorsDefeat();
          this.readMukjjippa(game, rockPaperScissorsResult);
      }
    } catch (error) {
      this.#outputView.printError(ERROR.userInputRockPaperScissorsInvalid);
      this.readRockPaperScissors(game);
    }
  }

  handleMukjjippa(input, game, result) {
    try {
      validate.mukjjippa(input);
      const mukjjippaResultArray = game.playMukjjippa(input, result);
      const [computerInput, mukjjippaResult] = mukjjippaResultArray;
      this.#outputView.printComputerMove(computerInput);
      if (
        mukjjippaResult === VALUE.mukjjippaWin ||
        mukjjippaResult === VALUE.mukjjippaDefeat
      ) {
        this.#outputView.printMukjjippaResult(mukjjippaResult);
        const gameResult = this.handleMukjjippaWinCount(game);
        this.handleGameStatus(gameResult, game);
      }
      if (mukjjippaResult === VALUE.rockPaperScissorsWin) {
        this.#outputView.printNextMovePlayer();
        this.readMukjjippa(game, result);
        return;
      }
      if (mukjjippaResult === VALUE.rockPaperScissorsDefeat) {
        this.#outputView.printNextMoveComputer();
        this.readMukjjippa(game, result);
      }
    } catch (error) {
      this.#outputView.printError(ERROR.userInputMukjjippaInvalid);
      this.readMukjjippa(game, result);
    }
  }

  handleMukjjippaWinCount(game) {
    const playerWin = game.getPlayerWinCount();
    const computerWin = game.getComputerWinCount();
    if (playerWin === NUMBER.validWinCount) {
      return VALUE.playerWin;
    }
    if (computerWin === NUMBER.validWinCount) {
      return VALUE.computerWIn;
    }
    return VALUE.gameContinue;
  }

  handleGameStatus(gameResult, game) {
    switch (gameResult) {
      case VALUE.playerWin:
        this.#outputView.printGameResult(gameResult);
        Console.close();
        break;
      case VALUE.computerWIn:
        this.#outputView.printGameResult(gameResult);
        this.readGameCommand(game);
        break;
      case VALUE.gameContinue:
        this.readRockPaperScissors(game);
    }
  }

  handleGameCommand(input, game) {
    try {
      validate.gameCommand(input);
      switch (input) {
        case KEY.restart:
          game.resetGameStatus();
          this.#outputView.printStart();
          this.readRockPaperScissors(game);
          break;
        case KEY.quit:
          this.#outputView.printGameQuit();
          Console.close();
      }
    } catch (error) {
      this.#outputView.printError(ERROR.userInputGameCommandInvalid);
      this.readGameCommand(game);
    }
  }
}

module.exports = MukjjippaGameController;
