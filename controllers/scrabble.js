var Scrabble = require('../lib/scrabble')

var ScrabbleController = {
  getIndex: function (req, res, next) {
    res.render('index', { title: 'Express' })
  }

  getChart: function (req, res) {
    var locals = {}
    var scrabble = new Scrabble()
    locals.points = scrabble.points

    res.render('chart', locals)
  }
}

module.exports = ScrabbleController
