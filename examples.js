const nba = require('./index.js');

game = {
  gameId: '0021401082'
}

player = {
  playerId: '201939',
  startSeason: '2009-10'
}

nba.homepage({playerOrTeam: 'Player'}, print);

function print(data){
  console.log(data);
}