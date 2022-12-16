const { KEY, NUMBER, VALUE } = require('./value');

const GAME_MESSAGE = {
  gameStart: `묵찌빠 게임을 시작합니다! 게임은 ${NUMBER.validGameCount}판 ${NUMBER.validWinCount}선승제로 진행됩니다.`,
  readRockPaperScissors: `${VALUE.scissors}, ${VALUE.rock}, ${VALUE.paper} 중 하나를 입력하세요!\n`,
  readMukjjippa: `${VALUE.muk}, ${VALUE.jji}, ${VALUE.ppa} 중 하나를 입력하세요!\n`,
  readGameCommand: `당신은 비참하게 패배했습니다. 다시 시작할까요? ( ${KEY.restart} : 다시 시작하기, ${KEY.quit} : 게임 끝내기 )\n`,
  transition: `에 `,
  rockPaperScissorsWin: '가위바위보 승리! 당신의 선턴으로 묵찌빠를 실행합니다.',
  rockPaperScissorsDraw: '가위바위보 무승부!',
  rockPaperScissorsDefeat:
    '가위바위보 패배! 상대의 선턴으로 묵찌빠를 실행합니다.',
  mukjjippaWin: '묵찌빠 승리!',
  mukjjippaDefeat: '묵찌빠 패배...',
  nextMovePlayer: '묵찌빠 무승부! 선턴은 당신이 가져갑니다.',
  nextMoveComputer: '묵찌빠 무승부! 선턴은 상대가 가져갑니다.',
  gameResultPlayerWin: '게임 종료! 승리자는 플레이어입니다.',
  gameResultComputerWin: '게임 종료! 승리자는 컴퓨터입니다.',
  gameQuit: '당신은 꼬랑지를 말고 도망가기를 선택했습니다. 게임을 종료합니다...'
};

const ERROR = {
  userInputRockPaperScissorsInvalid: `[ERROR] ${VALUE.scissors}, ${VALUE.rock}, ${VALUE.paper} 중 하나를 정확히 입력해주세요.`,
  userInputMukjjippaInvalid: `[ERROR] ${VALUE.muk}, ${VALUE.jji}, ${VALUE.ppa} 중 하나를 정확히 입력해주세요.`,
  userInputGameCommandInvalid: `[ERROR] ${KEY.restart}키, ${KEY.quit}키 중 하나를 정확히 입력해주세요.`
};

module.exports = { GAME_MESSAGE, ERROR };

0.3;
