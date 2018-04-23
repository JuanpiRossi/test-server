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

app.listen(3000, function () {
  console.log('Guild api listening on port 3000!!')
})