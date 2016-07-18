'use strict';

var url = require('url');


var Stats = require('./StatsService');


module.exports.statsGET = function statsGET (req, res, next) {
  Stats.statsGET(req.swagger.params, res, next);
};
