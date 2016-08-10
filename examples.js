const nba = require('./index.js');

game = {
  gameId: '0021401082'
}

player = {
  playerId: '201939',
  graphStartSeason: '2009-10'
}

// nba.playerProfileV2(player, print);
nba.scoreBoard({gameDate: '03/16/2016'}, print);

function print(data){
  console.log(data);
}