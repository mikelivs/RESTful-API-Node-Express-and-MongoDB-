var mongoose = require('mongoose');

//Generate a Schema
var genreSchema = mongoose.Schema({
	name:{
		type: String,
		required:true
	},

	create_date: {
		type: Date,
		default:Date.now
	}
});

var Genre = module.exports = mongoose.model("Genre", genreSchema);

//Function to GET genres
module.exports.getGenres = function(callback, limit)
{
	Genre.find(callback).limit(limit);
}

//ADD a genre
module.exports.addGenre = function(genre, callback)
{
	Genre.create(genre, callback);
}


//UPDATE a genre
module.exports.updateGenre = function(id, genre, options, callback)
{
	var query = {_id:id};
	var update = {
		name: genre.name //create an new instance

	}
	Genre.findOneAndUpdate(query, update, options, callback); //mongoose function to update
}

//DELETE a genre
module.exports.deleteGenre = function(id, callback)
{
	var query = {_id:id};
	Genre.remove(query, callback);
}

