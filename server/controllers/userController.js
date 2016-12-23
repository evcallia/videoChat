console.log("Controller loaded");

var mongoose = require('mongoose');
var User = mongoose.model("User");

function UserController() {
    this.index = function(req, res) {
        User.find({}, function(err, users){
            if(err){console.log(err);}
            return res.json(users);
        })
    };
    this.create = function(req, res) {
        var user = new User(req.body);
        user.save();
        res.json(user);
    };
    this.update = function(req, res) {
        User.update({_id: req.params.id}, req.body, function(err){
            if(err){console.log(err);}
            res.json();
        })
    };
    this.delete = function(req, res) {
        User.remove({_id: req.params.id}, function(err){
            if(err){console.log(err);}
            res.json();
        });
    };
    this.show = function(req, res) {
        User.find({_id: req.params.id}, function(err, user){
            if(err){console.log(err);}
            res.json(user);
        })
    };
}

module.exports = new UserController();
