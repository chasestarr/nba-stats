const request = require('request');
const api = 'http://stats.nba.com/stats';
const DEFAULT_SEASON = '2015-16';

function boxScore(options, cb){
  if(!options.gameId) return console.log('gameId required');
  let endpoint = '/boxscoreadvancedv2?';
  let gameId = options.gameId;
  let startPeriod = options.startPeriod ? options.startPeriod : 1;
  let endPeriod = options.endPeriod ? options.endPeriod : 4;
  let startRange = options.startRange ? options.startRange : 0;
  let endRange = options.endRange ? options.endRange : 0;
  let rangeType = options.rangeType ? options.rangeType : 0;
  let url = api + endpoint + `gameId=${gameId}&startPeriod=${startPeriod}&endPeriod=${endPeriod}&startRange=${startRange}&endRange=${endRange}&rangeType=${rangeType}`;

  getData(url, (data) => {
    cb(data);
  });
}

function boxScoreSummary(options, cb){
  if(!options.gameId) return console.log('gameId required');
  let endpoint = '/boxscoresummaryv2?';
  let gameId = options.gameId;
  let url = api + endpoint + `gameId=${gameId}`;

  getData(url, (data) => {
    cb(data);
  });
}

function boxScorePlayerTrack(options, cb){
  if(!options.gameId) return console.log('gameId required');
  let endpoint = '/boxscoreplayertrackv2?';
  let gameId = options.gameId;
  let url = api + endpoint + `gameId=${gameId}`;

  getData(url, (data) => {
    cb(data);
  });
}

function boxScoreUsage(options, cb){
  if(!options.gameId) return console.log('gameId required');
  let endpoint = '/boxscoreusagev2?';
  let gameId = options.gameId;
  let startPeriod = options.startPeriod ? options.startPeriod : 1;
  let endPeriod = options.endPeriod ? options.endPeriod : 4;
  let startRange = options.startRange ? options.startRange : 0;
  let endRange = options.endRange ? options.endRange : 0;
  let rangeType = options.rangeType ? options.rangeType : 0;
  let url = api + endpoint + `gameId=${gameId}&startPeriod=${startPeriod}&endPeriod=${endPeriod}&startRange=${startRange}&endRange=${endRange}&rangeType=${rangeType}`;

  getData(url, (data) => {
    cb(data);
  });
}

function boxScoreFourFactors(options, cb){
  if(!options.gameId) return console.log('gameId required');
  let endpoint = '/boxscorefourfactorsv2?';
  let gameId = options.gameId;
  let startPeriod = options.startPeriod ? options.startPeriod : 1;
  let endPeriod = options.endPeriod ? options.endPeriod : 4;
  let startRange = options.startRange ? options.startRange : 0;
  let endRange = options.endRange ? options.endRange : 0;
  let rangeType = options.rangeType ? options.rangeType : 0;
  let url = api + endpoint + `gameId=${gameId}&startPeriod=${startPeriod}&endPeriod=${endPeriod}&startRange=${startRange}&endRange=${endRange}&rangeType=${rangeType}`;

  getData(url, (data) => {
    cb(data);
  });
}

function boxScoreMisc(options, cb){
  if(!options.gameId) return console.log('gameId required');
  let endpoint = '/boxscoremiscv2?';
  let gameId = options.gameId;
  let startPeriod = options.startPeriod ? options.startPeriod : 1;
  let endPeriod = options.endPeriod ? options.endPeriod : 4;
  let startRange = options.startRange ? options.startRange : 0;
  let endRange = options.endRange ? options.endRange : 0;
  let rangeType = options.rangeType ? options.rangeType : 0;
  let url = api + endpoint + `gameId=${gameId}&startPeriod=${startPeriod}&endPeriod=${endPeriod}&startRange=${startRange}&endRange=${endRange}&rangeType=${rangeType}`;

  getData(url, (data) => {
    cb(data);
  });
}

function boxScoreScoring(options, cb){
  if(!options.gameId) return console.log('gameId required');
  let endpoint = '/boxscorescoringv2?';
  let gameId = options.gameId;
  let startPeriod = options.startPeriod ? options.startPeriod : 1;
  let endPeriod = options.endPeriod ? options.endPeriod : 4;
  let startRange = options.startRange ? options.startRange : 0;
  let endRange = options.endRange ? options.endRange : 0;
  let rangeType = options.rangeType ? options.rangeType : 0;
  let url = api + endpoint + `gameId=${gameId}&startPeriod=${startPeriod}&endPeriod=${endPeriod}&startRange=${startRange}&endRange=${endRange}&rangeType=${rangeType}`;

  getData(url, (data) => {
    cb(data);
  });
}

function boxScoreTraditional(options, cb){
  if(!options.gameId) return console.log('gameId required');
  let endpoint = '/boxscoretraditionalv2?';
  let gameId = options.gameId;
  let startPeriod = options.startPeriod ? options.startPeriod : 1;
  let endPeriod = options.endPeriod ? options.endPeriod : 4;
  let startRange = options.startRange ? options.startRange : 0;
  let endRange = options.endRange ? options.endRange : 0;
  let rangeType = options.rangeType ? options.rangeType : 0;
  let url = api + endpoint + `gameId=${gameId}&startPeriod=${startPeriod}&endPeriod=${endPeriod}&startRange=${startRange}&endRange=${endRange}&rangeType=${rangeType}`;

  getData(url, (data) => {
    cb(data);
  });
}

function playByPlay(options, cb){
  if(!options.gameId) return console.log('gameId required');
  let endpoint = '/playbyplay?';
  let gameId = options.gameId;
  let startPeriod = options.startPeriod ? options.startPeriod : 1;
  let endPeriod = options.endPeriod ? options.endPeriod : 4;
  let url = api + endpoint + `gameId=${gameId}&startPeriod=${startPeriod}&endPeriod=${endPeriod}`;

  getData(url, (data) => {
    cb(data);
  });
}

function commonTeamYears(options, cb){
  let endpoint = '/commonTeamYears?';
  let leagueId = options.leagueId ? options.leagueId : '00';
  let url = api + endpoint + `leagueId=${leagueId}`;

  getData(url, (data) => {
    cb(data);
  });
}

function commonAllPlayers(options, cb){
  if(!options.season) console.log('using default season: ' + DEFAULT_SEASON);
  let endpoint = '/commonAllPlayers?';
  let leagueId = options.leagueId ? options.leagueId : '00';
  let season = options.season ? options.season : DEFAULT_SEASON;
  let isOnlyCurrentSeason = options.isOnlyCurrentSeason ? options.isOnlyCurrentSeason : 1;
  let url = api + endpoint + `leagueId=${leagueId}&season=${season}&isOnlyCurrentSeason=${isOnlyCurrentSeason}`;

  getData(url, (data) => {
    cb(data);
  });
}

function commonPlayerInfo(options, cb){
  if(!options.playerId) return console.log('playerId required');
  let endpoint = '/commonPlayerInfo?';
  let playerId = options.playerId;
  let url = api + endpoint + `playerId=${playerId}`;

  getData(url, (data) => {
    cb(data);
  });
}

function commonPlayoffSeries(options, cb){
  if(!options.season) console.log('using default season: ' + DEFAULT_SEASON);
  let endpoint = '/commonPlayoffSeries?';
  let leagueId = options.leagueId ? options.leagueId : '00';
  let season = options.season ? options.season : DEFAULT_SEASON;
  let url = api + endpoint + `leagueId=${leagueId}&season=${season}`;

  getData(url, (data) => {
    cb(data);
  });
}

function commonTeamRoster(options, cb){
  if(!options.teamId) return console.log('teamId required');
  if(!options.season) console.log('using default season: ' + DEFAULT_SEASON);
  let endpoint = '/commonTeamRoster?';
  let season = options.season ? options.season : DEFAULT_SEASON;
  let teamId = options.teamId;
  let url = api + endpoint + `season=${season}&teamId=${teamId}`;

  getData(url, (data) => {
    cb(data);
  });
}

function playerProfile(options, cb){
  if(!options.playerId) return console.log('playerId required');
  if(!options.startSeason) return console.log('startSeason required');
  let endpoint = '/playerprofile?';
  let playerId = options.playerId;
  let leagueId = options.leagueId ? options.leagueId : '00';
  let season = options.season ? options.season : DEFAULT_SEASON;
  let seasonType = options.seasonType ? options.seasonType : 'Regular Season';
  let startSeason = options.startSeason;
  let graphEndSeason = options.graphEndSeason ? options.graphEndSeason : DEFAULT_SEASON;
  let graphStat = options.graphStat ? options.graphStat : 'PTS';
  let url = api + endpoint + `playerId=${playerId}&leagueId=${leagueId}&season=${season}&seasonType=${seasonType}&graphstartSeason=${startSeason}&graphEndSeason=${graphEndSeason}&graphStat=${graphStat}`;

  getData(url, (data) => {
    cb(data);
  });
}

function getData(url, cb){
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
  playerProfile: playerProfile,
  boxScoreSummary: boxScoreSummary,
  boxScoreUsage: boxScoreUsage,
  boxScore: boxScore,
  boxScoreFourFactors: boxScoreFourFactors,
  boxScoreMisc: boxScoreMisc,
  boxScorePlayerTrack: boxScorePlayerTrack,
  boxScoreScoring: boxScoreScoring,
  boxScoreTraditional: boxScoreTraditional,
  commonTeamYears: commonTeamYears,
  commonAllPlayers: commonAllPlayers,
  commonPlayerInfo: commonPlayerInfo,
  commonPlayoffSeries: commonPlayoffSeries,
  commonTeamRoster: commonTeamRoster
}