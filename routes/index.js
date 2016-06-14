var express = require('express')
var router = express.Router()
var Controller = require('../controllers/scrabble')
// var Scrabble = require('../lib/scrabble')

/* GET home page. */
router.get('/', Controller.getIndex)

/* GET chart page */
router.get('/scrabble/chart', Controller.getChart)

/* GET request for a score for a word */
router.get('/scrabble/score/:word', Controller.getScore)

module.exports = router
