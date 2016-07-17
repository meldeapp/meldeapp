'use strict';
  
var models = require('../repository/userdao.js');
var User = models.User;

exports.historyGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offset (Integer)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "reward" : "aeiou",
  "image" : "aeiou",
  "visibility" : "aeiou",
  "author" : "aeiou",
  "created" : "2000-01-23T04:56:07.000+0000",
  "opponents" : [ "" ],
  "latitude" : 1.3579000000000001069366817318950779736042022705078125,
  "completed" : true,
  "longditude" : 1.3579000000000001069366817318950779736042022705078125,
  "tags" : [ "aeiou" ],
  "upated" : "2000-01-23T04:56:07.000+0000",
  "winner" : "",
  "vitnesses" : [ {
    "signed" : "aeiou",
    "user" : {
      "upated" : "2000-01-23T04:56:07.000+0000",
      "created" : "2000-01-23T04:56:07.000+0000",
      "name" : "aeiou",
      "email" : "aeiou",
      "picture" : "aeiou",
      "friends" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ]
    }
  } ],
  "paid" : true,
  "announcement_id" : "aeiou",
  "location" : "aeiou",
  "headline" : "aeiou",
  "announcement" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.meGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "upated" : "2000-01-23T04:56:07.000+0000",
  "created" : "2000-01-23T04:56:07.000+0000",
  "name" : "aeiou",
  "email" : "aeiou",
  "picture" : "aeiou",
  "friends" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.mePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Profile)
  **/
    var examples = {};
  examples['application/json'] = {
  "upated" : "2000-01-23T04:56:07.000+0000",
  "created" : "2000-01-23T04:56:07.000+0000",
  "name" : "aeiou",
  "email" : "aeiou",
  "picture" : "aeiou",
  "friends" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.usersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offset (Integer)
  * limit (Integer)
  * name (String)
  * uuid (UUID)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "upated" : "2000-01-23T04:56:07.000+0000",
  "created" : "2000-01-23T04:56:07.000+0000",
  "name" : "aeiou",
  "email" : "aeiou",
  "picture" : "aeiou",
  "friends" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ]
} ];

  User.retrieveAll(
    function (err, users) {
      res.setHeader('Content-Type', 'application/json');
      if ((users)&&(!err)) {
        res.end(JSON.stringify(users))
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({"code": 404, "message": err.toString() }));
      }
  });
  /*
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }*/
  
}

exports.usersPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Profile)
  **/
    var examples = {};
  examples['application/json'] = {
  "upated" : "2000-01-23T04:56:07.000+0000",
  "created" : "2000-01-23T04:56:07.000+0000",
  "name" : "aeiou",
  "email" : "aeiou",
  "picture" : "aeiou",
  "friends" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ]
  };
  if(Object.keys(examples).length > 0) {
    var name = args.body.value.name;
    var email = args.body.value.email;
    var password = args.body.value.password
    User.newUser(
      name, email, password,
      function (err, user) {
        res.setHeader('Content-Type', 'application/json');
        if ((user)&&(!err)) {
          res.end(JSON.stringify(user))
        } else {
          res.statusCode = 400;
          res.end(JSON.stringify({"code": 400, err}))
        }
      });
  }
  else {
    res.end();
  }
  
}

exports.usersuuidGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  var examples = {};
  examples['application/json'] = {
  "upated" : "2000-01-23T04:56:07.000+0000",
  "created" : "2000-01-23T04:56:07.000+0000",
  "name" : "aeiou",
  "email" : "aeiou",
  "picture" : "aeiou",
  "friends" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ]
  };

  User.retrieve(
    args.uuid.value,
    function (err, user) {
      res.setHeader('Content-Type', 'application/json');
      if ((user)&&(!err)) {
        res.end(JSON.stringify(user))
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({"code": 404, "message": err.toString() }));
      }
  });
}

