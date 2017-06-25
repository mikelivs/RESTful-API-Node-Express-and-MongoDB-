var mongoose = require('mongoose');

//Generate a Schema
var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required:true
	},
	genre: {
		type: String,
		required:true
	},
	description: {
		type: String
	},
	author: {
		type: String,
		required:true
	},
	image_url: {
		type: String,
		required:true
	},
	create_date: {
		type: Date,
		default:Date.now
	}
});

var Book = module.exports = mongoose.model("books", bookSchema);

//Function to GET genres
module.exports.getBooks = function(callback, limit)
{
	Book.find(callback).limit(limit);
}

//get a single book by ID
module.exports.getBookById = function(id, callback)
{
	Book.findById(id, callback);
}

//add Book
module.exports.addBook = function(book, callback)
{
	Book.create(book, callback);
}

//UPDATE book
module.exports.updateBook = function(id, book, options, callback)
{
	var query = {_id:id};
	var update = {
		//create an new instances
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		image_url: book.image_url

	}
	Book.findOneAndUpdate(query, update, options, callback); //mongoose function to update
}

//DELETE a Book
module.exports.deleteBook = function(id, callback)
{
	var query = {_id:id};
	Genre.remove(query, callback);
}
