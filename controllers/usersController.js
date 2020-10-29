const User = require('../models/user');

exports.get_users = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            console.error(err);
        } else {
            res.render('users/index', { data: users });
        }
    })
}

exports.get_create_user = function (req, res) {
    res.render('users/create')
}

exports.post_create_user = function (req, res) {

    var newUser = new User();

    newUser.email = req.body.email;
    newUser.password = newUser.generateHash(req.body.password);
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.role = req.body.role;

    newUser.save(function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            // saved!
            res.redirect('/users')
        }
    });
}

exports.get_update = function (req, res) {
    User.findOne({ _id: req.query.id }, function (err, user) {
        if (err) {
            // handle error
        } else {
            res.render('users/update', { data: user });
        }
    });
};

exports.post_update = function (req, res) {
    let updateData = {
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         email: req.body.email,
         role: req.body.role
    };

    let user = new User();
    if (req.body.password) {
        updateData.password = user.generateHash(req.body.password);
    }

    User.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/users');
        }
    });
};

exports.get_delete = function (req, res) {
    Animal.findOneAndDelete({ _id: req.query.id }, function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/users');
        }
    });
};