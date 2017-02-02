var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're in activities");
  console.log("Wreck.body", req.body);
  knex('activity')
    .insert({
      name: req.body.actName,
      time: req.body.timeOfAct
    })   //this closes insert
    .returning('id')
    .then(function(ans) {
      res.send(ans);
    })
    .finally(function() {
    });
  


});

module.exports = router;
