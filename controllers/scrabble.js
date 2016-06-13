var Scrabble = require('../lib/scrabble')

var ScrabbleController = {
  getIndex: function (req, res, next) {
    res.render('index', { title: 'Express' })
  }

  getChart: function (req, res) {
    var locals = {}
    var scrabble = new Scrabble()
    locals.points = scrabble.points
    locals.title = "Scrabble Points Chart of Super Cool Points"

    res.render('chart', locals)
  }
}

module.exports = ScrabbleController
