const TodoItem = require('./../models').TodoItem;

module.exports = {
 create(req, res) {
    return (TodoItem
    .create({
      title: req.body.content,
      todoId: req.params.todoId,
    }))
    .then(todoItem => res.status(201).send(todoItem))
    .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return TodoItem
    .all()
    .then(todoID =>res.status(200).send(todoItem))
    .catch(error => res.status(400).send(error));
  }
};

