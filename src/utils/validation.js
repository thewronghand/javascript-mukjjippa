const { VALUE, KEY } = require('./constants/value');

const validate = {
  rockPaperScissors(input) {
    if (
      input !== VALUE.rock &&
      input !== VALUE.paper &&
      input !== VALUE.scissors
    ) {
      throw new Error();
    }
  },

  mukjjippa(input) {
    if (input !== VALUE.muk && input !== VALUE.jji && input !== VALUE.ppa) {
      throw new Error();
    }
  },

  gameCommand(input) {
    if (input !== KEY.restart && input !== KEY.quit) {
      throw new Error();
    }
  }
};

module.exports = validate;
