const nba = require('./index.js');

game = {
  gameId: '0021401082'
}

player = {
  playerId: '201939',
  startSeason: '2009-10'
}

nba.commonTeamRoster({teamId: '1610612748'}, print);

function print(data){
  console.log(data);
}