require('babel-core/register')({});
require('babel-polyfill');

// The real entry point
var server = require('./server.jsx').default;

// Use provided port or 3000 as default
var PORT = process.env.PORT || 3000;

// Run the server at the specified port
server.listen(PORT, function() {
	console.log('Server listening on: ' + PORT);
});

