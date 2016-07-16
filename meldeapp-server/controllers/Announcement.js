'use strict';

var url = require('url');


var Announcement = require('./AnnouncementService');


module.exports.announcementsGET = function announcementsGET (req, res, next) {
  Announcement.announcementsGET(req.swagger.params, res, next);
};

module.exports.announcementsPOST = function announcementsPOST (req, res, next) {
  Announcement.announcementsPOST(req.swagger.params, res, next);
};
