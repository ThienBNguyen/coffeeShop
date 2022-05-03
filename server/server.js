//include dotenv to loads environment variables from a .env file process.env to protect the db authentication
require('dotenv').config();
//using express web framework create api routing api
const express = require('express');
//parse incoming request bodies in a middeware before your handler, available under the req.body** enable to sent body request
const bodyParser = require('body-parser');
// mongoose allow connect to the database create model for database
// const https = require('https');
// const fs = require('fs');
const mongoose = require('mongoose');
// For info routes
const infoRoutes = require('./routers/info-routes');

// For menu routes
const menuRoutes = require('./routers/menu-routes');
//for User routes
const userRoutes = require('./routers/user-routes');
// import HttpError model
const HttpError = require('./models/http-error');
const cors = require('cors');

const app = express();
// set CORS headers avoid CORS error
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
// Connect to database
const dbConnect = `${process.env.MONGODB_CONNECTION_STRING}`;
mongoose
	.connect(dbConnect, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log(`MongoDB has been connected`);
	})
	.catch((err) => {
		console.log(err);
	});

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === 'production') {
	// Step 1:
	app.use(express.static('client/build'));
	// Step 2:
	const path = require('path');

	app.get('*', function(req, res) {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(PORT, () => {
	console.log(`server running on PORT ${PORT}`);
});
