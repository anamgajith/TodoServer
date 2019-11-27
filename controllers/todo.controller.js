const Todo = require('../models/todo.model');

exports.getall = (req,res) => {
    Todo.find((err,todos) => {
        if(err){
            return next(err);
        }
        res.send(todos);
    });
}

exports.add = (req,res) => {
    let todo = new Todo({
        task: req.body.task,
        isDone: req.body.isDone
    });
    todo.save((err,todo) => {
        if(err){
            return next(err);
        }
        res.send(todo);
    });
}

exports.delete = (req,res) => {
    Todo.findByIdAndDelete(req.params.id,(err) => {
        if(err){
            return next(err);
        }
        res.send('Deleted Successfully');
    });
}

exports.update = (req,res) => {
    Todo.findByIdAndUpdate(req.params.id,{$set : req.body},(err,todo) => {
        if(err){
            return next(err);
        }
        res.send('Updated');
    });
}