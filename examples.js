const nba = require('./index.js');

game = {
  gameId: '0021401082'
}

player = {
  playerId: '201939',
  graphStartSeason: '2009-10'
}

nba.leadersTiles({stat: 'FG_PCT', playerOrTeam: 'Player'}, print);

function print(data){
  console.log(data);
}