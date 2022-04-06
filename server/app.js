//include dotenv to loads environment variables from a .env file process.env to protect the db authentication
require('dotenv').config();
//using express web framework create api routing api
const express = require('express');
//parse incoming request bodies in a middeware before your handler, available under the req.body** enable to sent body request
const bodyParser = require('body-parser');
// mongoose allow connect to the database create model for database
const mongoose = require('mongoose');

// For info routes
const infoRoutes = require('./routers/info-routes');

// For menu routes
const menuRoutes = require('./routers/menu-routes');
//for User routes
const userRoutes = require('./routers/user-routes');
// import HttpError model
const HttpError = require('./models/http-error');

const app = express();

// For bodyParser
app.use(bodyParser.json());

// set CORS headers avoid CORS error
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

	next();
});

// use routes
app.use('/info', infoRoutes);
app.use('/menu', menuRoutes);
app.use('/user', userRoutes);
// Handle unsupported routes erro
app.use((req, res, next) => {
	const error = new HttpError('Could not find this route', 404);
	throw error;
});

// handling error
app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error);
	}
	res.status(error.code || 500);
	res.json({ message: error.message || 'an unknown error occurred!' });
});
// Listen to our 5000 port
let port = process.env.PORT;
if (port == null || port == '') {
	port = port;
}
// Connect to database
// Get username and password from .env file
const dbPass = process.env.dbPass;
const dbName = process.env.dbName;
const dbConnect = `mongodb+srv://${dbName}:${dbPass}@cluster0.yrynw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
	.connect(dbConnect, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => {
		app.listen(port, function(res) {
			console.log('server running on port 5000');
		});
	})
	.catch((err) => {
		console.log(err);
	});
