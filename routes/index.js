var express = require('express')
var router = express.Router()
var Controller = require('../controllers/scrabble')

/* GET home page. */
router.get('/', Controller.getIndex)

module.exports = router
