'use strict';

var mongoose = require('mongoose')
  , crypto = require('crypto')
  , mongoTypes = require('mongoose-types');

var uuid = require('uuid');

mongoTypes.loadTypes(mongoose, 'email');
mongoose.connect('mongodb://db:27017/test');

var secret = 'asdfghjkl'

function hash (msg, key) {
  return crypto.createHmac('sha256', key).update(msg).digest('hex');
};

function required(val) { return val && val.length; }

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
  uuid: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    validate: [required, 'Email required'],
    index: { unique: true }
  },
  password: {
    type: String,
    validate: [required, 'Passord required']
  },
  friends: {
    type: []
  },
  picture: {
    type: String
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date,
    'default': Date.now()
  }
});


UserSchema.path('email').validate(function (v, fn) {
  User.count({email: v}, function (err, val) {
    if (err) fn(false);
    fn(val==0);
  });
}, 'Email already exists!'); 

UserSchema.statics.authenticate = function (email, password, fn) {
  this.findOne({email: email}, function (err, user) {
    if (!user) return fn(new Error('cannot find user'));
    if (user.password == hash(password, secret)) return fn(null, user);
    // Otherwise password is invalid
    fn(new Error('invalid password'));
  });
};

UserSchema.statics.retrieve = function (uuid, fn) {
  this.findOne({uuid: uuid}, function (err, user) {
    if (!user) return fn(new Error('cannot find user'));
    return fn(err, user);
  });
};

UserSchema.statics.retrieveAll = function (fn) {
  this.find(function (err, users) {
    if (!users) return fn(new Error('cannot find any users'));
    return fn(err, users);
  });
};

UserSchema.statics.newUser = function (name, email, password, fn) {
  var user = new User();
  user.uuid = uuid.v4();
  user.name = name;
  user.email = email;
  user.password = hash(password, secret);
  user.createdAt = Date.now();

  user.save(function (err) {
      fn(err, user);
  });
};

UserSchema.statics.resetPassword = function(userId, callback) {
  var newPassword = '';
  newPassword = newPassword.randomString(6);
    var cripto = hash(newPassword, secret);
    var data = {} 
      data.password = cripto;
    
    this.update({_id: userId}
      , {$set: data}
      , {multi:false,safe:true}
      , function( error, docs ) {
        if (error) {
          callback(error);
        }
        else {
          callback(null, newPassword);
        }
      });
}

var User = mongoose.model('User', UserSchema);

exports.User = User;