const Animal = require('../models/animal');

exports.get_animals = function (req, res) {
    Animal.find({}, function (err, animals) {
        if (err) {
            console.error(err);
        } else {
            res.render('animals/index', { data: animals });
        }
    })

}

exports.get_create_animal = function (req, res) {
    res.render('animals/create')
}

exports.post_create_animal = function (req, res) {

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

exports.get_update = function (req, res) {
    Animal.findOne({ _id: req.query.id }, function (err, animal) {
        if (err) {
            // handle error
        } else {
            console.log(animal);
            res.render('animals/update', { data: animal });
        }
    });
};

exports.post_update = function (req, res) {
    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    const updateData = {
        enabled: enabled,
        nickName: req.body.nickName,
        species: req.body.species,
    };

    Animal.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/animals');
        }
    });
};

exports.get_delete = function(req, res) {
    Animal.findOneAndDelete({_id: req.query.id}, function(err) {
      if (err) {
        // handle error
        console.log(err);
      } else {
        res.redirect('/animals');
      }
    });
  };