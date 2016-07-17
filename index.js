const nba = require('./nba-stats.js');

game = {
  gameId: '0021401082'
}

player = {
  playerId: '201939',
  startSeason: '2009-10'
}

nba.boxScoreTraditional(game, (data) => {
  console.log(data);
});