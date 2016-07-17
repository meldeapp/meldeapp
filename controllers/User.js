'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.historyGET = function historyGET (req, res, next) {
  User.historyGET(req.swagger.params, res, next);
};

module.exports.meGET = function meGET (req, res, next) {
  User.meGET(req.swagger.params, res, next);
};

module.exports.mePUT = function mePUT (req, res, next) {
  User.mePUT(req.swagger.params, res, next);
};

module.exports.usersGET = function usersGET (req, res, next) {
  User.usersGET(req.swagger.params, res, next);
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  User.usersPOST(req.swagger.params, res, next);
};

module.exports.usersuuidGET = function usersuuidGET (req, res, next) {
  User.usersuuidGET(req.swagger.params, res, next);
};

module.exports.loginPOST = function loginPOST (req, res, next) {
  User.loginPOST(req.swagger.params, res, next);
};
