//intialize variables 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json()); //intialize body parser
Genre = require("./Models/genre");//add models
Book = require("./Models/book"); //add model

//Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

//get function, handle a request
//app.post,delete... 
// "/" for home page, when someone runs the page runs second argument
app.get('/', function(req, res) 
{
	res.send("Use12 /api/books or /api/genres");
});

//genres uri
app.get('/api/genres', function(req,res)
{
	Genre.getGenres(function(err, genres)
	{
		if(err)
		{
			throw err;
		}
		else
		{
		res.json(genres);
		}
	});
});

//GET all books
app.get('/api/books', function(req,res)
{
	Book.getBooks(function(err, books)
	{
		if(err)
		{
			throw err;
		}
		else{
		res.json(books);
		}
	});
});

//GET a book by ID
app.get('/api/books/:_id', function(req,res)
{
	Book.getBookById(req.params._id, function(err, book)
	{
		if(err)
		{
			throw err;
		}
		else{
		res.json(book);
		}
	});
});

//POST or ADD genre
//should filter input for security
app.post('/api/genres', function(req,res)
{
	var genre = req.body; //body parser, access forum
	Genre.addGenre(genre, function(err, genre)
	{
		if(err)
		{
			throw err;
		}
		else
		{
		res.json(genre);
		}
	});
});

//ADD a book
app.post('/api/books', function(req,res)
{
	var book = req.body; //body parser, access forum
	Book.addBook(book, function(err, book)
	{
		if(err)
		{
			throw err;
		}
		else
		{
		res.json(book);
		}
	});
});
app.listen(27017);
console.log("Runnuning on port 27017"); 


//UPDATE genre name
app.put('/api/genres/:_id', function(req,res)
{
	var id = req.params._id;
	var genre = req.body; //body parser, access forum
	Genre.updateGenre(id, genre,{}, function(err, genre)
	{
		if(err)
		{
			throw err;
		}
		else
		{
		res.json(genre);
		}
	});
});

//UPDATE BookById info
app.put('/api/books/:_id', function(req,res)
{
	var id = req.params._id;
	var book = req.body; //body parser, access forum
	Book.updateBook(id, book,{}, function(err, book)
	{
		if(err)
		{
			throw err;
		}
		else
		{
		res.json(book);
		}
	});
});

//DELETE Book
app.delete('/api/books/:_id', function(req,res)
{
	var id = req.params._id;
	Book.deleteGenre(id, function(err, book)
	{
		if(err)
		{
			throw err;
		}
		else
		{
		res.json(book);
		}
	});
});


//DELETE Genre
app.delete('/api/genres/:_id', function(req,res)
{
	var id = req.params._id;
	Genre.deleteGenre(id, function(err, genre)
	{
		if(err)
		{
			throw err;
		}
		else
		{
		res.json(genre);
		}
	});
});