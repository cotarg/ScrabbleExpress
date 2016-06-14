var Scrabble = require('../lib/scrabble')

var ScrabbleController = {
  getIndex: function (req, res, next) {
    res.render('index', { title: 'Express' })
  },

  getChart: function (req, res) {
    var locals = {}
    var scrabble = new Scrabble()
    locals.points = scrabble.points
    locals.title = 'Scrabble Points Chart of Super Cool Points'

    res.render('chart', locals)
  },

  getScore: function (req, res, next) {
    var locals = {}
    var scrabble = new Scrabble()
    locals.word = req.params['word']
    locals.score = scrabble.score(locals.word)

    res.render('score', locals)
  }
}

module.exports = ScrabbleController
