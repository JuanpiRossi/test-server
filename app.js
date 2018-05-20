const express = require('express')
const bodyParser = require('body-parser')
const guildService  = require('./services/guildService')
const app = express()
var cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
app.use(cors())

app.get('/api/alive', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.alive()
})

app.post('/api/addGuild', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.addGuild()
})

app.post('/api/getGuild', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.getGuild()
})

app.post('/api/updateGuild', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.updateGuild()
})

app.post('/api/addPlayer', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.addPlayer()
})

app.post('/api/addPlayers', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.addPlayers()
})

app.post('/api/getPlayer', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.getPlayer()
})

app.post('/api/getPlayers', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.getPlayers()
})

app.get('/api/getPlayerSorted', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.getPlayerSorted()
})

app.get('/api/removePlayers/rbnviryuvbiub9uh9febf932fufenfjaebnfq3uif', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.removePlayers()
})

app.post('/api/removePlayer/f48y3g48fcg24f823ybfc8792f2b842', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.removePlayer()
})

app.get('/api/getGuidesReduced', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.getGuidesReduced()
})

app.post('/api/getGuide', function (req, res) {
  let guildServiceObj = new guildService(req, res)
  guildServiceObj.getGuide()
})

app.listen(3000, function () {
  console.log('Guild api listening on port 3000!!')
})
