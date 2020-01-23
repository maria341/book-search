const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Book
        .fin(req.query)
        .sort({date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req,res) {
        db.Book
        .finById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Book
        .finOneAndUpdate({ _id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catcher(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }

};