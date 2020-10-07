const axios = require('axios');

exports.get_todos = function(req, res) {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(function (response) {
        res.render('todos/todos', { todos: response.data });
      })
}

exports.get_create_todo = function(req, res) {
    res.render('todos/create');
}

exports.post_create_todo = function(req, res) {
      // format as json to save to databse:
    let newTodo = {
        content: req.body.content,
        type: req.body.type
    }

    // todo save these to a databse
    console.log(newTodo);

    // what next?
    res.redirect('/todos');
}
