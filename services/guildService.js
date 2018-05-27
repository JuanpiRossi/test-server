const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://aiun:9980054a@144.202.60.128:27017/GuildInfo?authSource=admin';

class GuildService{
	
	constructor(req, res){
		this.req = req
		this.res = res
	}

	insert(collection,data, db, callback){
		db.collection(collection).insertOne(data, function(){
			callback()		
		})
	}

	insertMany(collection,data, db, callback){
		db.collection(collection).insertMany(data, function(){
			callback()		
		})
	}

	alive(){
		console.log("Alive!")
		return this.res.status(200).json("Alive!")
	}

	addGuild(){
		console.log("adding guild")
		let self = this;
		let guildData = this.req.body;
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	self.insert('guild',guildData, db, function(){
					  db.close()
			  		return self.res.status(200).json({
						status: 'success'
					})
			  	})
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	getGuild(){
		console.log("getting guild")
		let self = this;
		let query = this.req.body
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	
			  	var cursor = db.collection('Guild').findOne(query,function(err,result){
						if (err){
						return self.res.status(500).json({
							status: 'error',
							error: err
						})}
						let guildData = result;
						db.close()
						return self.res.status(200).json({
							status: 'success',
							data: guildData
						})
				  });
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	updateGuild(){
		console.log("updating guild")
		let self = this;
		let query = this.req.body.query;
		let newData = this.req.body.data;
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
				db.collection("Guild").updateOne(query, newData, function(err, res) {
					if (err){
						return self.res.status(500).json({
							status: 'error',
							error: err
						})}
					db.close();
					return self.res.status(200).json({
						status: 'success'
					})
				  });
				
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	addPlayer()	{
		console.log("adding player")
		let self = this;
		let playerData = this.req.body;
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	self.insert("players",playerData, db, function(){
					  db.close()
			  		return self.res.status(200).json({
						status: 'success'
					})
			  	})
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	addPlayers()	{
		console.log("adding players")
		let self = this;
		let playerList = this.req.body;
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	self.insertMany("players",playerList, db, function(){
					  db.close()
			  		return self.res.status(200).json({
						status: 'success'
					})
			  	})
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	getPlayer()	{
		console.log("getting player")
		let self = this;
		let query = this.req.body
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	
			  	var cursor = db.collection('players').find(query).sort({secuence:-1}).toArray(function(err,result){
						if (err){
						return self.res.status(500).json({
							status: 'error',
							error: err
						})}
						let guildData = result;
						db.close()
						return self.res.status(200).json({
							status: 'success',
							data: guildData[0]
						})
				  });
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	getPlayers()	{
		console.log("getting players")
		let self = this;
		let query = this.req.body
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	var cursor = db.collection('players').find(query).sort({secuence:-1}).toArray(function(err,result){
						if (err){
						return self.res.status(500).json({
							status: 'error',
							error: err
						})}
						let guildData = result;
						db.close()
						return self.res.status(200).json({
							status: 'success',
							data: guildData
						})
				  });
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	getPlayerSorted()	{
		console.log("getting players sorted")
		let self = this;
		let query = this.req.body
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	var cursor = db.collection('players').find().sort({secuence:-1}).toArray(function(err,result){
						if (err){
						return self.res.status(500).json({
							status: 'error',
							error: err
						})}
						let guildData = result;
						db.close()
						return self.res.status(200).json({
							status: 'success',
							data: guildData[0]
						})
				  });
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}
	
	removePlayers()	{
		console.log("removing players")
		let self = this;
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	
			  	var cursor = db.collection('players').remove({},function(err,result){
						if (err){
						return self.res.status(500).json({
							status: 'error',
							error: err
						})}
						let guildData = result;
						db.close()
						return self.res.status(200).json({
							status: 'success',
							data: guildData
						})
				  });
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	removePlayer()	{
		console.log("removing player")
		let self = this;
		let query = this.req.body
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	
			  	var cursor = db.collection('players').remove(query,function(err,result){
						if (err){
						return self.res.status(500).json({
							status: 'error',
							error: err
						})}
						let guildData = result;
						db.close()
						return self.res.status(200).json({
							status: 'success',
							data: guildData
						})
				  });
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	getGuidesReduced(){
		console.log("getting guides reduced")
		let self = this;
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	
			  	var cursor = db.collection('Guides').find({}).project({"name":1,"img":1,"show":1,"id":1}).sort({order:-1}).toArray(function(err,result){
						if (err){
						return self.res.status(500).json({
							status: 'error',
							error: err
						})}
						let guildData = result;
						db.close()
						return self.res.status(200).json({
							status: 'success',
							data: guildData
						})
				  });
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	getGuidesOrderNumer(){
		console.log("getting guides order")
		let self = this;
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	
			  	var cursor = db.collection('Guides').find({}).project({"order":1}).sort({order:-1}).toArray(function(err,result){
						if (err){
						return self.res.status(500).json({
							status: 'error',
							error: err
						})}
						let guildData = result;
						db.close()
						return self.res.status(200).json({
							status: 'success',
							data: guildData[0]
						})
				  });
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	getGuide(){
		console.log("getting guide")
		let self = this;
		let query = this.req.body
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	
			  	var cursor = db.collection('Guides').findOne(query,function(err,result){
						if (err){
						return self.res.status(500).json({
							status: 'error',
							error: err
						})}
						let guildData = result;
						db.close()
						return self.res.status(200).json({
							status: 'success',
							data: guildData
						})
				  });
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	addGuide()	{
		console.log("adding guides")
		let self = this;
		let data = this.req.body;
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	self.insert("Guides",data, db, function(){
					  db.close()
			  		return self.res.status(200).json({
						status: 'success'
					})
			  	})
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

	updateGuide(){
		console.log("updating guide")
		let self = this;
		let data = this.req.body
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	
			  	var cursor = db.collection('Guides').updateOne(data["query"],data["update"],function(err,result){
						if (err){
						return self.res.status(500).json({
							status: 'error',
							error: err
						})}
						let guildData = result;
						db.close()
						return self.res.status(200).json({
							status: 'success',
							data: guildData
						})
				  });
			});
		}
		catch(error){
			console.log(error)
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}
}
module.exports = GuildService
