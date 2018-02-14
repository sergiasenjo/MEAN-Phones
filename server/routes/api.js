const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://sergi:sergi@ds133558.mlab.com:33558/phones', ['phones'])

// Get All Phones
router.get('/phones', function (req, res, next) {
    db.phones.find(function (err, phones) {
        if (err) {
            res.send(err);
        } else {
            res.json(phones);
        }
    });
});

module.exports = router;