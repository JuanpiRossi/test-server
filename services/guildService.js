const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://144.202.60.128:27017:27017/GuildInfo';

class GuildService{
	
	constructor(req, res){
		this.req = req
		this.res = res
	}

	insert(GuildData, db, callback){
		db.collection('Guild').insertOne(GuildData, function(){
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
			  	self.insert(guildData, db, function(){
					  db.close()
			  		return self.res.status(200).json({
						status: 'success'
					})
			  	})
			});
		}
		catch(error){
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
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}
}
module.exports = GuildService
