const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Channel Routes
// twilio whatsapp channel route
const tw_waRouter = require('./routes/tw-waRouter');

const app = express();

//Middleware
//Implement cors
app.use(cors());
app.options('*', cors());

//set security HTTPS headers
// app.use(helmet());

//cookie parser
app.use(cookieParser());
//Body parsser, reading  data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/channels/tw-wa', tw_waRouter);

//Handling unexpected routes
app.all('*', (req, res, next) => {
	res.status(404).json({
		status: 'fail',
		message: `Can't find ${req.originalUrl} on this server`
	});
});

module.exports = app;
