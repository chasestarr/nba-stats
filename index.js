const request = require('request');
const cheerio = require('cheerio');
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

function homepage(options, cb){
  if(!options.playerOrTeam) return console.log('playerOrTeam required');
  if(!options.season) console.log('using default season: ' + DEFAULT_SEASON);
  let endpoint = '/homepagev2?';
  let gameScope = options.gameScope ? options.gameScope : 'Season';
  let statType = options.statType ? options.statType : 'Traditional';
  let leagueId = options.leagueId ? options.leagueId : '00';
  let season = options.season ? options.season : DEFAULT_SEASON;
  let seasonType = options.seasonType ? options.seasonType : 'Regular Season';
  let playerOrTeam = options.playerOrTeam;
  let playerScope = options.playerScope ? options.playerScope : 'All Players';
  let url = api + endpoint + `gameScope=${gameScope}&statType=${statType}&leagueId=${leagueId}&season=${season}&seasonType=${seasonType}&playerorteam=${playerOrTeam}&playerScope=${playerScope}`;

  getData(url, (data) => {
    cb(data);
  });
}

function leadersTiles(options, cb){
  if(!options.stat) return console.log('stat required');
  if(!options.playerOrTeam) return console.log('playerOrTeam required');
  if(!options.season) console.log('using default season: ' + DEFAULT_SEASON);
  let endpoint = '/leaderstiles?';
  let stat = options.stat;
  let leagueId = options.leagueId ? options.leagueId : '00';
  let season = options.season ? options.season : DEFAULT_SEASON;
  let seasonType = options.seasonType ? options.seasonType : 'Regular Season';
  let playerOrTeam = options.playerOrTeam;
  let gameScope = options.gameScope ? options.gameScope : 'Season';
  let playerScope = options.playerScope ? options.playerScope : 'All Players';
  let url = api + endpoint + `gameScope=${gameScope}&stat=${stat}&leagueId=${leagueId}&season=${season}&seasonType=${seasonType}&playerorteam=${playerOrTeam}&playerScope=${playerScope}`;

  getData(url, (data) => {
    cb(data);
  });
}

function playerProfile(options, cb){
  if(!options.playerId) return console.log('playerId required');
  if(!options.graphStartSeason) return console.log('graphStartSeason required');
  let endpoint = '/playerprofile?';
  let playerId = options.playerId;
  let leagueId = options.leagueId ? options.leagueId : '00';
  let season = options.season ? options.season : DEFAULT_SEASON;
  let seasonType = options.seasonType ? options.seasonType : 'Regular Season';
  let graphStartSeason = options.graphStartSeason;
  let graphEndSeason = options.graphEndSeason ? options.graphEndSeason : DEFAULT_SEASON;
  let graphStat = options.graphStat ? options.graphStat : 'PTS';
  let url = api + endpoint + `playerId=${playerId}&leagueId=${leagueId}&season=${season}&seasonType=${seasonType}&graphstartSeason=${graphStartSeason}&graphEndSeason=${graphEndSeason}&graphStat=${graphStat}`;

  getData(url, (data) => {
    cb(data);
  });
}

function playerProfileV2(options, cb){
  if(!options.playerId) return console.log('playerId required');
  let endpoint = '/playerprofilev2?';
  let playerId = options.playerId;
  let perMode = options.perMode ? options.permode : 'Totals';
  let url = api + endpoint + `playerId=${playerId}&perMode=${perMode}`;

  getData(url, (data) => {
    cb(data);
  });
}

function leagueDashPlayerBioStats(options, cb){
  let endpoint = '/leaguedashplayerbiostats?';
  let perMode = options.perMode ? options.perMode : 'Totals';
  let leagueId = options.leagueId ? options.leagueId : '00';
  let season = options.season ? options.season : DEFAULT_SEASON;
  let seasonType = options.seasonType ? options.seasonType : 'Regular Season';
  let teamId = options.teamId ? options.teamId : '';
  let playerPosition = options.playerPosition ? options.playerPosition : '';
  let lastNGames = options.lastNGames ? options.lastNGames : '';
  let opponentTeamId = options.opponentTeamId ? options.opponentTeamId : '';
  let url = api + endpoint + `perMode=${perMode}&leagueId=${leagueId}&season=${season}&seasonType=${seasonType}&teamId=${teamId}&playerPosition=${playerPosition}&lastNGames=${lastNGames}&opponentTeamId=${opponentTeamId}`;

  getData(url, (data) => {
    cb(data);
  });
}

function leagueDashPlayerPtShot(options, cb){
  let endpoint = '/leaguedashplayerptshot?';
  let perMode = options.perMode ? options.perMode : 'Totals';
  let leagueId = options.leagueId ? options.leagueId : '00';
  let season = options.season ? options.season : DEFAULT_SEASON;
  let seasonType = options.seasonType ? options.seasonType : 'Regular Season';
  let url = api + endpoint + `perMode=${perMode}&leagueId=${leagueId}&season=${season}&seasonType=${seasonType}`;

  getData(url, (data) => {
    cb(data);
  });
}

function playerGameLog(options, cb){
  if(!options.playerId) return console.log('playerId required');
  let endpoint = '/playergamelog?';
  let playerId = options.playerId;
  let season = options.season ? options.season : DEFAULT_SEASON;
  let seasonType = options.seasonType ? options.seasonType : 'Regular Season';
  let url = api + endpoint + `playerId=${playerId}&season=${season}&seasonType=${seasonType}`;

  getData(url, (data) => {
    cb(data);
  });
}

function scoreBoard(options, cb){
  if(!options.gameDate) return console.log('gameDate required');
  let gameDate = options.gameDate.split('/');
  let url = `http://scores.nbcsports.msnbc.com/nba/scoreboard.asp?day=${gameDate[2]}${gameDate[0]}${gameDate[1]}`
  request(url, function(error, response, body){
    console.log(url);
    let $ = cheerio.load(body);
    let games = $('.shsTable.shsLinescore');
    let output = [];

    games.each(function(i, item){
      let isFinal = $(item).find('.shsTableTtlRow').children().first().text();
      let awayTeam = $(item).find('.shsNamD').find('a').first().text();
      let homeTeam = $(item).find('.shsNamD').find('a').last().text();
      let scoreArray = [];
      $(item).find('.shsTotD').each(function(i, num){
        scoreArray.push($(num).text());
      });
      let awayScore = scoreArray.slice(5, 10);
      let homeScore = scoreArray.slice(10, 15);
      output.push({
        isFinal: isFinal,
        awayTeam: awayTeam,
        homeTeam: homeTeam,
        awayScore: awayScore,
        homeScore: homeScore
      });
    });

    cb(output);
  })
}

function getData(url, cb){
  let options = {
    url: url,
    headers: {
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
      "referer": "http://stats.nba.com/scores/",
    }
  }
  request({url: options, json: true}, function (error, response) {
    console.log(url);
    if (!error && response.statusCode == 200) {
      cb(response.body);
    } else {
      return console.error('nba server error:', response.statusCode);
    }
  });
}

function queryString(params){
  let query = '';
  for(let element in params){
    query += element + '=' + params[element] + '&';
  }
  return query;
}

module.exports = {
  playByPlay: playByPlay,
  playerProfile: playerProfile,
  playerProfileV2: playerProfileV2,
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
  commonTeamRoster: commonTeamRoster,
  homepage: homepage,
  leadersTiles: leadersTiles,
  leagueDashPlayerBioStats: leagueDashPlayerBioStats,
  leagueDashPlayerPtShot: leagueDashPlayerPtShot,
  playerGameLog: playerGameLog,
  scoreBoard: scoreBoard
}