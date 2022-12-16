const { VALUE, KEY } = require('./constants/value');

const check = {
  rockPaperScissors(playerInput, computerInput) {
    if (playerInput === computerInput) {
      return VALUE.rockPaperScissorsDraw;
    }
    if (rockPaperScissorsWinCheck(playerInput, computerInput)) {
      return VALUE.rockPaperScissorsWin;
    }
    return VALUE.rockPaperScissorsDefeat;
  },

  mukjjippa(input1, input2) {
    const rockPaperScissorsInput1 = convertRockPaperScissorsMukjjippa(input1);
    const rockPaperScissorsInput2 = convertRockPaperScissorsMukjjippa(input2);
    if (input1 === input2) {
      return VALUE.mukjjippaWin;
    }
    if (
      rockPaperScissorsWinCheck(
        rockPaperScissorsInput1,
        rockPaperScissorsInput2
      )
    ) {
      return VALUE.rockPaperScissorsWin;
    }
    return VALUE.rockPaperScissorsDefeat;
  }
};

module.exports = check;

const rockPaperScissorsWinCheck = (input1, input2) => {
  switch (input1) {
    case VALUE.rock:
      return input2 === VALUE.scissors;
    case VALUE.paper:
      return input2 === VALUE.rock;
    case VALUE.scissors:
      return input2 === VALUE.paper;
  }
};

const convertRockPaperScissorsMukjjippa = (input) => {
  switch (input) {
    case VALUE.muk:
      return VALUE.rock;
    case VALUE.jji:
      return VALUE.scissors;
    case VALUE.ppa:
      return VALUE.paper;
  }
};
