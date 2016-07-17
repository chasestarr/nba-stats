const request = require('request');
const api = 'http://stats.nba.com/stats';

function playByPlay(options, cb){
  if(!options.gameId) return console.log('gameId required');
  let endpoint = '/playbyplay?';
  let gameId = options.gameId;
  let startPeriod = options.startPeriod ? options.startPeriod : 1;
  let endPeriod = options.endPeriod ? options.endPeriod : 4;
  let url = api + endpoint + `gameId=${gameId}&startPeriod=${startPeriod}&endPeriod=${endPeriod}`;

  getJSON(url, (data) => {
    cb(data);
  });
}

function playerProfile(options, cb){
  if(!options.playerId) return console.log('playerId required');
  if(!options.startSeason) return console.log('startSeason required');
  let endpoint = '/playerprofile?';
  let playerId = options.playerId;
  let leagueId = options.leagueId ? options.leagueId : '00';
  let season = options.season ? options.season : '2015-16';
  let seasonType = options.seasonType ? options.seasonType : 'Regular Season';
  let startSeason = options.startSeason;
  let graphEndSeason = options.graphEndSeason ? options.graphEndSeason : '2015-16';
  let graphStat = options.graphStat ? options.graphStat : 'PTS';
  let url = api + endpoint + `playerId=${playerId}&leagueId=${leagueId}&season=${season}&seasonType=${seasonType}&graphstartSeason=${startSeason}&graphEndSeason=${graphEndSeason}&graphStat=${graphStat}`;

  getJSON(url, (data) => {
    cb(data);
  });
}

function getJSON(url, cb){
  request({url: url, json: true}, function (error, response) {
    console.log(url);
    if (!error && response.statusCode == 200) {
      cb(response.body);
    } else {
      return console.error('nba server error:', response.statusCode);
    }
  });
}

module.exports = {
  playByPlay: playByPlay,
  playerProfile: playerProfile
}