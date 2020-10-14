const Animal = require('../models/animal');

exports.get_animals = function (req, res) {
    Animal.find({}, function(err, animals) {
        if (err) {
            console.error(err);
        } else {
            res.render('animals/index', {data: animals});
        }
    })

}

exports.get_create_animal = function(req,res) {
    res.render('animals/create')
}

exports.post_create_animal = function(req,res) {
    
    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    let newAnimal = new Animal({
        species: req.body.species,
        nickName: req.body.nickName,
        enabled: enabled,
    });

    newAnimal.save(function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            // saved!
            res.redirect('/animals')
        }
    });
}