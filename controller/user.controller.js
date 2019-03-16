var User = require("../model/user.model.js");

//what is register ?
exports.register = function(req, res){
    var newUser = new User();
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    newUser.save(function(err, user){
        if(err){
            console.log(err);
            // console.log(err.errors.username.message);
            res.send("error registering user");
        }else {
            console.log(user);
            res.redirect('/signup.html');
        }
    });
};
