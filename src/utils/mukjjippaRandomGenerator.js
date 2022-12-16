const { Random } = require('@woowacourse/mission-utils');
const { NUMBER, VALUE } = require('../utils/constants/value');

const mukjjippaRandomGenerator = {
  generateRockPaperScissors() {
    const randomNumber = Random.pickNumberInRange(
      NUMBER.minRandom,
      NUMBER.maxRandom
    );
    switch (randomNumber) {
      case NUMBER.rockMuk:
        return VALUE.rock;
      case NUMBER.paperPpa:
        return VALUE.paper;
      case NUMBER.scissorsJji:
        return VALUE.scissors;
    }
  },

  generateMukjjippa() {
    const randomNumber = Random.pickNumberInRange(
      NUMBER.minRandom,
      NUMBER.maxRandom
    );
    switch (randomNumber) {
      case NUMBER.rockMuk:
        return VALUE.muk;
      case NUMBER.paperPpa:
        return VALUE.ppa;
      case NUMBER.scissorsJji:
        return VALUE.jji;
    }
  }
};

module.exports = mukjjippaRandomGenerator;
