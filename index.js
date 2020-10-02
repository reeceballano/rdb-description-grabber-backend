const express 		= require('express');
const app 			= express();
const puppeteer 	= require('puppeteer');
const searchGoogle 	= require('./searchGoogle');
const cors      	= require('cors');

app.use(express.json());
app.use(cors());

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