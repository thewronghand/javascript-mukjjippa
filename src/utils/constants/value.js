const VALUE = {
  rock: '바위',
  paper: '보',
  scissors: '가위',
  muk: '묵',
  jji: '찌',
  ppa: '빠',
  rockPaperScissorsWin: '가위바위보 승리',
  rockPaperScissorsDefeat: '가위바위보 패배',
  rockPaperScissorsDraw: '가위바위보 무승부',
  mukjjippaWin: '승리',
  mukjjippaDefeat: '패배',
  playerWin: '플레이어 승리',
  computerWIn: '컴퓨터 승리',
  gameContinue: '게임 속행',
  computer: '컴퓨터 : '
};

const NUMBER = {
  rockMuk: 0,
  paperPpa: 1,
  scissorsJji: 2,
  minRandom: 0,
  maxRandom: 2,
  validWinCount: 2,
  validGameCount: 3
};

const KEY = {
  restart: 'R',
  quit: 'Q'
};

module.exports = { VALUE, NUMBER, KEY };
