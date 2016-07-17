const nba = require('./nba-stats.js');

options = {
  gameId: '0021401082'
}

player = {
  playerId: '201939',
  startSeason: '2009-10'
}

// nba.playByPlay(options, (data) => {
//   const rowSet = data.resultSets[0].rowSet;
//   console.log(rowSet);
// });

nba.playerProfile(player, (data) => {
  console.log(data);
});