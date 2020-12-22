const express 		= require('express');
const app 			= express();
const puppeteer 	= require('puppeteer');
const searchGoogle 	= require('./searchGoogle');
const cors      	= require('cors');
const users         = require('./routes/user');
const posts         = require('./routes/post');
const login         = require('./routes/login');
const upload        = require('./routes/upload');
const helmet        = require('helmet');
const mongoose      = require('mongoose');
const slowDown      = require('express-slow-down');

// CONNECT TO MONGOODB
mongoose.connect('mongodb://localhost:27017/rdb-description-grabber',
    {  
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());
app.use(cors());
app.use(helmet());

// API
app.use('/api', users);
app.use('/api', posts);
app.use('/api', login);
app.use('/api', upload);

// SEARCH
app.get('/search', (req, res) => {
	const searchQuery = req.query.searchquery;
	const num = (req.query.num.length) ? req.query.num : 10;
	
	searchGoogle(searchQuery, num)
	    .then(results => {
	        //Returns a 200 Status OK with Results JSON back to the client.
	        res.status(200);
	        res.json(results);
	    });
});

// Handle production
if (process.env.NODE_ENV === 'production') {
	console.log('prod');
	// Static folder
	app.use(express.static(__dirname + '/public/'));

	// Handle SPA
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
} else {
	console.log('dev');
	// Static folder
	app.use(express.static(__dirname + '/public/'));

	// Handle SPA
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));	
}



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`) );