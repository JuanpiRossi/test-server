const express = require('express')
const bodyParser = require('body-parser')
const guildService  = require('./services/guildService')
const app = express()
var cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
app.use(cors())

app.get('/api/alive', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.alive()
  } catch(error) {
    console.error(error);
  }
})

app.post('/api/addGuild', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.addGuild()
  } catch(error) {
    console.error(error);
  }
})

app.post('/api/getGuild', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.getGuild()
  } catch(error) {
    console.error(error);
  }
})

app.post('/api/updateGuild', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.updateGuild()
  } catch(error) {
    console.error(error);
  }
})

app.post('/api/addPlayer', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.addPlayer()
  } catch(error) {
    console.error(error);
  }
})

app.post('/api/addPlayers', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.addPlayers()
  } catch(error) {
    console.error(error);
  }
})

app.post('/api/getPlayer', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.getPlayer()
  } catch(error) {
    console.error(error);
  }
})

app.post('/api/getPlayers', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.getPlayers()
  } catch(error) {
    console.error(error);
  }
})

app.get('/api/getPlayerSorted', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.getPlayerSorted()
  } catch(error) {
    console.error(error);
  }
})

app.get('/api/removePlayers/rbnviryuvbiub9uh9febf932fufenfjaebnfq3uif', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.removePlayers()
  } catch(error) {
    console.error(error);
  }
})

app.post('/api/removePlayer/f48y3g48fcg24f823ybfc8792f2b842', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.removePlayer()
  } catch(error) {
    console.error(error);
  }
})

app.get('/api/getGuidesReduced', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.getGuidesReduced()
  } catch(error) {
    console.error(error);
  }
})

app.post('/api/getGuide', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.getGuide()
  } catch(error) {
    console.error(error);
  }
})

app.post('/api/addGuide', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.addGuide()
  } catch(error) {
    console.error(error);
  }
})

app.get('/api/getGuidesOrderNumer', function (req, res) {
  try {
    let guildServiceObj = new guildService(req, res)
    guildServiceObj.getGuidesOrderNumer()
  } catch(error) {
    console.error(error);
  }
})

app.listen(3000, function () {
  try {
    console.log('Guild api listening on port 3000!!')
  } catch(error) {
  console.error(error);
  }
})
